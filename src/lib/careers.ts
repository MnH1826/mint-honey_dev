// Careers configuration.
// Applications are handled in Odoo Recruitment (mintandhoney.odoo.com).
// When HR publishes or closes a vacancy in Odoo, update the list below to match.

export const ODOO_CAREERS_URL = "https://mintandhoney.odoo.com/jobs";

export interface JobOpening {
  title: string;
  summary: string;
  location: string;
  department: string;
  employmentType?: string;
  odooUrl: string;
}

export const jobOpenings: JobOpening[] = [
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
