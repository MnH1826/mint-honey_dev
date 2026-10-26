// Careers configuration.
// Applications are handled in Odoo Recruitment (mintandhoney.odoo.com).
// The Careers page loads published vacancies live from /api/jobs (see api/jobs.js).
// The list below is only a fallback, used when the live list cannot be loaded
// (for example during local development, where /api is not available).

export const ODOO_CAREERS_URL = "https://mintandhoney.odoo.com/jobs";

export interface JobOpening {
  title: string;
  summary: string;
  location: string;
  department: string;
  employmentType?: string;
  odooUrl: string;
}

export const fetchJobOpenings = async (): Promise<JobOpening[]> => {
  const response = await fetch("/api/jobs", { headers: { Accept: "application/json" } });
  const contentType = response.headers.get("content-type") ?? "";
  if (!response.ok || !contentType.includes("application/json")) {
    throw new Error(`Could not load vacancies (${response.status})`);
  }
  const data: { jobs?: JobOpening[] } = await response.json();
  if (!Array.isArray(data.jobs)) throw new Error("Unexpected vacancies response");
  return data.jobs;
};

export const fallbackJobOpenings: JobOpening[] = [
  {
    title: "Production Manager",
    summary:
      "Lead our manufacturing teams to hit daily production targets without compromising on safety or quality, while continuously improving our operational processes.",
    location: "Cape Town, South Africa",
    department: "Administration / Operations",
    odooUrl: "https://mintandhoney.odoo.com/jobs/production-manager-3",
  },
  {
    title: "HR Officer",
    summary:
      "Manage the full employee lifecycle, from interviews to payroll, and act as the bridge between management and the production floor to keep our workplace safe, fair and compliant.",
    location: "Cape Town, South Africa",
    department: "Administration / Operations",
    employmentType: "Permanent",
    odooUrl: "https://mintandhoney.odoo.com/jobs/hr-officer-2",
  },
  {
    title: "Code 10 Driver",
    summary:
      "Safely transport goods, ensure delivery accuracy and represent Mint & Honey professionally on the road.",
    location: "Cape Town, South Africa",
    department: "Administration / Operations",
    employmentType: "Permanent",
    odooUrl: "https://mintandhoney.odoo.com/jobs/code-10-driver-5",
  },
];
