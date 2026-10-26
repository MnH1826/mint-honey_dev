// Vercel serverless function: GET /api/jobs
// Reads the published vacancies from the public Odoo jobs page and returns them as JSON.
// No Odoo API key is needed: only information Odoo already shows publicly is used.

const ODOO_BASE_URL = process.env.ODOO_BASE_URL || "https://mintandhoney.odoo.com";

const decodeEntities = (text) =>
  text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));

const toText = (html = "") =>
  decodeEntities(html.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();

const titleCase = (text) =>
  text.toLowerCase().replace(/\b([a-z])/g, (letter) => letter.toUpperCase());

const firstMatch = (html, pattern) => {
  const match = html.match(pattern);
  return match ? toText(match[1]) : "";
};

export const parseOdooJobs = (html, baseUrl = ODOO_BASE_URL) => {
  const jobs = [];
  const seen = new Set();
  const cardPattern = /<a\b[^>]*href="(\/jobs\/[^"/?#]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = cardPattern.exec(html)) !== null) {
    const [, path, body] = match;
    if (seen.has(path) || !/<h3\b/i.test(body)) continue;

    const title = firstMatch(body, /<h3\b[^>]*>([\s\S]*?)<\/h3>/i);
    if (!title) continue;
    seen.add(path);

    const city = firstMatch(body, /itemprop="addressLocality"[^>]*>([\s\S]*?)<\/span>/i);
    const country = firstMatch(body, /itemprop="addressCountry"[^>]*>([\s\S]*?)<\/span>/i);

    jobs.push({
      title,
      summary: firstMatch(body, /class="[^"]*oe_empty[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<div\s+class="o_job_infos/i),
      location: [city && titleCase(city), country].filter(Boolean).join(", "),
      department: firstMatch(body, /fa-sitemap[^>]*><\/i>\s*<span[^>]*>([\s\S]*?)<\/span>/i),
      employmentType: firstMatch(body, /fa-suitcase[^>]*><\/i>\s*<span[^>]*>([\s\S]*?)<\/span>/i) || undefined,
      odooUrl: `${baseUrl}${path}`,
    });
  }

  return jobs;
};

export default async function handler(req, res) {
  try {
    const response = await fetch(`${ODOO_BASE_URL}/jobs`, {
      headers: { "User-Agent": "MintAndHoneyWebsite/1.0", Accept: "text/html" },
    });
    if (!response.ok) throw new Error(`Odoo responded with ${response.status}`);

    const jobs = parseOdooJobs(await response.text());

    // Cache at Vercel's edge for 10 minutes; serve a stale copy for up to a day while refreshing.
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=86400");
    res.status(200).json({ jobs, source: `${ODOO_BASE_URL}/jobs`, fetchedAt: new Date().toISOString() });
  } catch (error) {
    res.setHeader("Cache-Control", "no-store");
    res.status(502).json({ jobs: [], error: "Could not load vacancies from Odoo" });
  }
}
