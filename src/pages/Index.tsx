import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Shield,
  Leaf,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { Newsletter } from "@/components/Newsletter";
import { AsFeaturedOn } from "@/components/AsFeaturedOn";
import { LinkedInFeed } from "@/components/LinkedInFeed";
import { useEffect, useState, useRef, useCallback, memo } from "react";
import { Hero } from "@/components/Hero";

// Image imports
import teamPhoto from "@/assets/ceo_co_hr_coo.webp";
import facilityInside from "@/assets/facility-aerial.jpg";
import Reception from "@/assets/reception.webp";

// Trusted partners logos
import atlantisLogo from "@/assets/atlantis.webp";
import dtiLogo from "@/assets/DTI-LOGO-1.webp";
import sadccLogo from "@/assets/sadcc_logo_800_450shar-50brig-20_c1.webp";
import sedaLogo from "@/assets/seda-logo.webp";
import sedfaLogo from "@/assets/SEDFA-LOGO.webp";
import WCdeptlogo from "@/assets/WC_dept_logo.webp";
import NEF_FUNDING_Logo from "@/assets/NEF_FUNDING_Logo.webp";
import AgriFood_logo from "@/assets/AgriFood_logo.webp";
import cput_logo from "@/assets/cput_logo.webp";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TrustedPartner {
  name: string;
  logo: string;
}

interface StatItem {
  value: string;
  label: string;
  icon: React.ElementType;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const trustedPartners: TrustedPartner[] = [
  { name: "ASEZ", logo: atlantisLogo },
  { name: "DTI", logo: dtiLogo },
  { name: "SADCC", logo: sadccLogo },
  { name: "SEDA", logo: sedaLogo },
  { name: "SEDFA", logo: sedfaLogo },
  { name: "WC Dept", logo: WCdeptlogo },
  { name: "NEF Funding", logo: NEF_FUNDING_Logo },
  { name: "AgriFood", logo: AgriFood_logo },
  { name: "CPUT", logo: cput_logo },
];

const stats: StatItem[] = [
  { value: "98K+", label: "Kids Fed Every Week Day", icon: Heart },
  { value: "217+", label: "Partner Schools", icon: Users },
  { value: "30+", label: "Years Experience", icon: Award },
  { value: "6", label: "SDGs Supported", icon: TrendingUp },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Mint & Honey has been instrumental in our school feeding program. The quality and nutritional value of their products is exceptional.",
    author: "Sarah Moloi",
    role: "Program Director, Ubuntu Feeding Initiative",
  },
  {
    quote:
      "Their commitment to child nutrition aligns perfectly with our organization's mission. A trusted partner in combating malnutrition.",
    author: "Dr. James Ndlovu",
    role: "Health Officer, Community Health Network",
  },
  {
    quote:
      "Affordable, nutritious, and consistently high quality. Mint & Honey products have become a staple in our community kitchens.",
    author: "Thembi Zulu",
    role: "Volunteer Coordinator, Hope Kitchen",
  },
];

// ─── AnimatedCounter ───────────────────────────────────────────────────────────

const AnimatedCounter = memo(({ target }: { target: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState<number>(0);
  const numericValue = parseInt(target.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, numericValue]);

  const display = target.includes("K")
    ? `${count}K+`
    : target.includes("+")
    ? `${count}+`
    : count.toString();

  return (
    <div ref={ref} className="font-display text-3xl font-bold text-foreground md:text-4xl">
      {display}
    </div>
  );
});

AnimatedCounter.displayName = "AnimatedCounter";

// ─── Page ──────────────────────────────────────────────────────────────────────

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* Stats Banner */}
      <section className="bg-mint py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary-foreground/70" />
                <AnimatedCounter target={stat.value} />
                <div className="mt-1 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Who We Are */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="wp-badge mb-6 bg-mint-light text-mint-dark">
                Who We Are
              </span>
              <h2 className="mb-6 font-display text-foreground">
                Manufacturer of High-Quality Cereals &amp; Processed Grains
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Mint &amp; Honey is a Proudly South African food manufacturing
                company specialising in non-GMO fortified cereals, corn &amp;
                soya products as ingredients for food manufacturers, NGOs, and
                government feeding programs.
              </p>
              <p className="mb-8 text-muted-foreground">
                What makes us unique is our focus on manufacturing non-GMO
                cereals and corn &amp; soya products as ingredients, serving
                clients from humanitarian organisations to local food
                manufacturers across Africa.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "FSSC 22000 Certified" },
                  { icon: Leaf, label: "Non-GMO Products" },
                  { icon: Award, label: "Quality Assured" },
                  { icon: Heart, label: "Community Impact" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg bg-muted p-3"
                  >
                    <item.icon className="h-5 w-5 flex-shrink-0 text-mint" />
                    <span className="text-sm font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="mint" className="mt-8" size="lg" asChild>
                <Link to="/about">
                  Learn Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="wp-image aspect-[4/3]">
                <img
                  src={Reception}
                  alt="Mint & Honey office reception with company branding"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-honey p-5 shadow-card"
              >
                <div className="font-display text-3xl font-bold text-secondary-foreground">
                  30+
                </div>
                <div className="text-sm font-medium text-secondary-foreground/80">
                  Years of
                  <br />
                  Experience
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atlantis Facility */}
      <section className="relative bg-foreground py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src={facilityInside}
            alt="Aerial view of Mint & Honey Atlantis agro-processing facility"
            className="h-full w-full object-cover opacity-20"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="wp-badge mb-6 bg-mint/20 text-mint">
                Major Milestone
              </span>
              <h2 className="mb-6 font-display text-primary-foreground">
                Our Atlantis Facility is Taking Shape
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/70">
                The Mint &amp; Honey Agro-Processing Facility in Atlantis
                Industrial, Western Cape represents our commitment to
                strengthening food security, supporting local agriculture, and
                creating sustainable employment.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Farm to food approach",
                  "Maize & soya storage silos",
                  "Milling, Extrusion & blending",
                  "Quality control laboratory",
                  "Export-ready infrastructure",
                  "Dedicated dispatch logistics",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-primary-foreground/80"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-mint" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="mint" className="mt-8" size="lg" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="wp-image aspect-video"
            >
              <img
                src={facilityInside}
                alt="Mint & Honey Atlantis facility aerial view"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="wp-badge mb-4 bg-mint-light text-mint-dark">
              Testimonials
            </span>
            <h2 className="mb-4 font-display text-foreground">
              Trusted by Communities &amp; Organizations
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-card"
              >
                <div className="mb-4 font-display text-5xl leading-none text-mint/30">
                  "
                </div>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-light font-display text-sm font-bold text-mint-dark">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-border bg-muted py-16">
        <div className="container mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            Trusted by leading organizations across Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {[
              { name: "Mary's Meals", url: "https://www.marysmeals.org/" },
              { name: "Gift of the Givers", url: "https://giftofthegivers.org/" },
              { name: "Government Feeding Schemes", url: null },
              { name: "Food Manufacturers", url: null },
              { name: "ECD Centres", url: null },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 items-center rounded-xl border border-border bg-background px-8 text-sm font-semibold text-foreground transition-all hover:border-mint hover:shadow-soft"
                  >
                    {partner.name}
                  </a>
                ) : (
                  <div className="flex h-14 items-center rounded-xl border border-border bg-background px-8 text-sm font-semibold text-foreground">
                    {partner.name}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted Partners — Infinite Marquee */}
      <section className="overflow-hidden bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <span className="wp-badge mb-4 bg-mint-light text-mint-dark">
              Trusted Partners
            </span>
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Trusted by Leading Companies & Organizations
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              We are proud to work with these respected organizations and partners
            </p>
          </motion.div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div className="motion-safe:animate-scroll-right flex gap-8 py-4 [will-change:transform]">
            {[...trustedPartners, ...trustedPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group w-32 flex-shrink-0 md:w-40"
              >
                <div className="flex items-center justify-center rounded-xl bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 md:max-h-14"
                    loading="lazy"
                  />
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="wp-image aspect-[4/3]"
            >
              <img
                src={teamPhoto}
                alt="The Mint & Honey team at company headquarters"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="wp-badge mb-6 bg-honey-light text-honey-dark">
                Our Team
              </span>
              <h2 className="mb-6 font-display text-foreground">
                A Team Dedicated to Enriching Lives
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Our diverse and passionate team brings together expertise in food
                science, manufacturing, nutrition, and community development to
                deliver products that make a real difference.
              </p>
              <p className="mb-8 text-muted-foreground">
                From our Atlantis facility to communities across Africa, we're
                committed to sustainable quality for the wellbeing of future
                generations.
              </p>
              <Button variant="mint-outline" size="lg" asChild>
                <Link to="/about">
                  Meet the Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mint py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="mb-4 font-display text-primary-foreground">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80">
            Whether you're a food manufacturer, NGO, government department, or
            running feeding programs — we'd love to discuss how our non-GMO
            fortified products can support your nutritional needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="honey" size="xl" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button
              variant="honey"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white"
              asChild
            >
              <Link to="/bulk-orders">Bulk Orders</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* As Featured On */}
      <AsFeaturedOn />

      {/* LinkedIn Feed */}
      <LinkedInFeed />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Index;