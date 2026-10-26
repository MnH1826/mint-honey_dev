import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  ExternalLink,
  ArrowRight,
  Factory,
  HeartHandshake,
  ShieldCheck,
  Sprout,
  FileText,
  Search,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-banner.jpg";
import { fallbackJobOpenings, fetchJobOpenings, ODOO_CAREERS_URL } from "@/lib/careers";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const reasons = [
  {
    icon: HeartHandshake,
    title: "Work With Purpose",
    description:
      "Everything we make helps fight malnutrition, from school feeding programmes to community kitchens across Africa.",
  },
  {
    icon: Factory,
    title: "Modern Facility",
    description:
      "Join the team at our fortified food extrusion facility in the Atlantis Special Economic Zone, Cape Town.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Quality First",
    description:
      "We hold ourselves to strict food safety and quality standards, and we invest in the people who uphold them.",
  },
  {
    icon: Sprout,
    title: "Grow With Us",
    description:
      "We are a growing, Proudly South African manufacturer, with room for people who want to build their careers alongside us.",
  },
];

const steps = [
  { icon: Search, title: "Find a role", description: "Browse our open positions below." },
  { icon: FileText, title: "Apply online", description: "Submit your details and CV through our careers portal." },
  { icon: MessageSquare, title: "Interview", description: "Shortlisted candidates are contacted by our HR team." },
  { icon: CheckCircle2, title: "Join the team", description: "Successful candidates receive an offer and onboarding." },
];

const Careers = () => {
  const { data: liveJobs, isLoading } = useQuery({
    queryKey: ["job-openings"],
    queryFn: fetchJobOpenings,
    staleTime: 1000 * 60 * 10,
    retry: 1,
  });
  const jobOpenings = liveJobs ?? (isLoading ? [] : fallbackJobOpenings);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-mint py-12 md:py-20">
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Build a Career That Feeds Communities
            </h1>
            <p className="mb-6 text-base text-primary-foreground/90 md:text-lg">
              Join the Mint &amp; Honey team and help us produce the fortified, nutritious food that
              reaches schools, families and communities across Africa.
            </p>
            <Button asChild size="lg" variant="honey">
              <a href="#open-positions">
                View Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-honey">
                Why Mint &amp; Honey
              </span>
              <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
                More Than a Job
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {reasons.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                    <Icon className="mb-3 h-6 w-6 text-mint" aria-hidden="true" />
                    <h3 className="mb-1 font-display text-base font-semibold text-foreground">{title}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src={teamImage}
                alt="The Mint & Honey team"
                loading="lazy"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-positions" className="scroll-mt-24 bg-beige py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-honey">
              Vacancies
            </span>
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">Open Positions</h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Applications are handled through our secure careers portal. Select a role to read the full
              description and apply.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-10" role="status" aria-label="Loading vacancies">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-mint border-t-transparent" />
            </div>
          ) : jobOpenings.length > 0 ? (
            <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
              {jobOpenings.map((job, index) => (
                <motion.article
                  key={job.odooUrl}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <h3 className="mb-3 font-display text-lg font-semibold text-foreground">{job.title}</h3>
                  <ul className="mb-4 space-y-1.5 text-xs text-muted-foreground md:text-sm">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                      {job.location}
                    </li>
                    <li className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                      {job.department}
                    </li>
                    {job.employmentType && (
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 shrink-0 text-mint" aria-hidden="true" />
                        {job.employmentType}
                      </li>
                    )}
                  </ul>
                  <p className="mb-6 flex-1 text-sm text-muted-foreground">
                    {job.summary || "View the full role description and requirements on our careers portal."}
                  </p>
                  <Button asChild variant="mint" className="w-full">
                    <a href={job.odooUrl} target="_blank" rel="noopener noreferrer">
                      View &amp; Apply <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
                    </a>
                  </Button>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="mx-auto max-w-xl text-center text-muted-foreground">
              There are no open positions right now. Please check back soon.
            </p>
          )}

          <div className="mt-10 text-center">
            <Button asChild variant="mint-outline" size="lg">
              <a href={ODOO_CAREERS_URL} target="_blank" rel="noopener noreferrer">
                See All Vacancies on Our Careers Portal
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center font-display text-2xl font-bold text-foreground md:text-3xl">
            How Our Hiring Process Works
          </h2>
          <ol className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, description }, index) => (
              <motion.li
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint/10">
                  <Icon className="h-6 w-6 text-mint" aria-hidden="true" />
                </div>
                <div className="mb-1 text-xs font-medium uppercase tracking-wider text-honey">Step {index + 1}</div>
                <h3 className="mb-1 font-display text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </motion.li>
            ))}
          </ol>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
            Can&apos;t see a role that fits? We&apos;d still like to hear from you.{" "}
            <Link to="/contact" className="font-medium text-mint underline-offset-4 hover:underline">
              Get in touch
            </Link>{" "}
            and tell us how you could contribute.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Careers;
