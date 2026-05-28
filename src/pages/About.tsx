import { memo } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Heart, Shield, Globe, ArrowRight, Factory, Wheat, FlaskConical, Truck, CheckCircle2, TrendingUp, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Image imports
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import companyBanner from "@/assets/company-banner.webp";
import productDisplay from "@/assets/facility_outdoor_3.webp";
import teamBanner from "@/assets/team-banner.jpg";
import facilityAerial from "@/assets/facility-aerial.jpg";
import facility from "@/assets/facility_outside_location.webp";
import boardroomMeeting from "@/assets/boardroom-meeting.jpg";
import reception from "@/assets/reception.webp";
import facility_outdoor from "@/assets/facility_outdoor.webp";
import facility_outside_location from "@/assets/facility_outside_location.webp";
import productLineup from "@/assets/product-lineup.jpg";
import MnH_products from "@/assets/MnH_products.webp";
import reganPaulusCeo from "@/assets/regan_paulus_ceo.webp";
import leadershipTeamImage from "@/assets/ceo_co_hr_coo.webp";

// Leadership team data
const leadershipTeam = [
  { name: "Regan Paulus", role: "Founder & CEO", description: "Born in Swartland and raised in Atlantis. Resilient, ambitious, community-focused, and committed to impact beyond profit.", icon: Briefcase, quote: "We are not just building a business, we are building a solution to hunger." },
  { name: "Isabella Nedouvhada", role: "Compliance Officer", description: "Ensures regulatory compliance and quality standards.", icon: Shield },
  { name: "Storme Paulus", role: "Shareholder/Director & HR Officer", description: "Dedicated to building a people-centric culture and empowering the workforce.", icon: Users },
  { name: "Fulufhelo Nedouvhada", role: "Shareholder/Director & COO", description: "Oversees operations and ensures manufacturing excellence.", icon: Factory },
];

// Static data outside component
const values = [
  { icon: Heart, title: "Nutrition First", description: "Every product we create is designed with nutritional impact as the primary goal, helping combat malnutrition and hidden hunger." },
  { icon: Users, title: "Community Focus", description: "We work closely with communities, schools, and organizations to understand and meet their specific nutritional needs." },
  { icon: Shield, title: "Quality Standards", description: "Our manufacturing processes meet rigorous food safety standards, ensuring every product is safe and nutritious." },
  { icon: Globe, title: "Sustainable Impact", description: "We're committed to creating lasting positive change through sustainable business practices and community partnerships." },
];

const facilityHighlights = [
  { icon: Factory, title: "Integrated Processing", description: "Grain to nutrition processing facility with milling, extrusion, blending, and packing using advanced extrusion technology with vitamin & mineral fortification processes." },
  { icon: Wheat, title: "Grain Silos", description: "Dedicated maize and soya storage silos for consistent supply, sourcing from local farmers and regional agricultural suppliers." },
  { icon: FlaskConical, title: "Quality Lab", description: "On-site quality control laboratory ensuring product excellence and HACCP/ISO standards." },
  { icon: Truck, title: "Export-Ready", description: "Dedicated loading, dispatch logistics zones, and export infrastructure for expansion into African export markets." },
];

const timeline = [
  { year: "2009", event: "Mint & Honey founded with a mission to combat malnutrition" },
  { year: "2012", event: "First partnership with school feeding programs" },
  { year: "2015", event: "Expanded to serve NGOs and community kitchens" },
  { year: "2018", event: "Launched Super Cereal Plus (CSB+) product line" },
  { year: "2021", event: "Reached 500,000 meals served milestone" },
  { year: "2024", event: "Expanded nationwide distribution network" },
  { year: "2025", event: "Atlantis agro-processing facility taking shape — turning grey landscapes into green opportunities" },
];

const galleryImages = [
  { src: facility, alt: "Facility exterior" },
  { src: boardroomMeeting, alt: "Boardroom meeting" },
  { src: reception, alt: "The Reception Area" },
  { src: facility_outdoor, alt: "Mint & Honey facility outdoor" },
];

const clients = [
  { name: "Mary's Meals", desc: "Global humanitarian organisation providing school meals to children in need.", url: "https://www.marysmeals.org/" },
  { name: "Gift of the Givers", desc: "Africa's largest disaster response NGO, providing humanitarian relief.", url: "https://giftofthegivers.org/" },
  { name: "Government Programmes", desc: "African government feeding schemes and health departments across the continent.", url: null },
  { name: "Food Manufacturers", desc: "Local food manufacturers using our corn & soya products as ingredients.", url: null },
  { name: "ECD Centres", desc: "Early Childhood Development centres providing nutrition to young children.", url: null },
  { name: "Schools & Institutions", desc: "Educational institutions running feeding programmes for learners.", url: null },
];

const qualityItems = [
  "Non-GMO Certified Products",
  "HACCP Certified Manufacturing",
  "ISO 22000 Food Safety Management",
  "Chemical-Free Natural Production",
  "On-Site Quality Control Laboratory",
  "Traceable Supply Chain",
  "Advanced Extrusion Technology",
  "Vitamin & Mineral Fortification",
];

const productFeatures = [
  "Non-GMO Certified Products",
  "Fortified with Vitamins & Minerals",
  "Chemical-Free Natural Production",
  "High Protein Soya Products",
  "Cost-Effective for Feeding Programs",
];

const impactStats = [
  { value: "500K+", label: "Children Fed", icon: Heart },
  { value: "120+", label: "Partner Schools", icon: GraduationCap },
  { value: "30+", label: "Community Partners", icon: Users },
  { value: "6", label: "Countries Served", icon: Globe },
];

// Shared animation variants
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const fadeLeft = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

const About = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative bg-foreground py-16 md:py-24">
        <div className="absolute inset-0">
          <img src={companyBanner} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-25" loading="eager" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="wp-badge mb-6 bg-primary-foreground/10 text-primary-foreground/80">About Us</span>
              <h1 className="mb-6 font-display text-primary-foreground">
                Non-GMO Grain Processing,{" "}
                <span className="text-gradient-honey">Enriching Lives</span>
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/70">
                Mint &amp; Honey is a Proudly South African agro-processing and food manufacturing company
                specialising in non-GMO fortified cereals, maize products, and soya-based nutrition 
                products for food manufacturers, NGOs, and government feeding programs across Africa.
              </p>
              <p className="mb-6 text-primary-foreground/60">
                <strong className="text-primary-foreground/80">From Grey to Green</strong> — We are not just building a business, we are building a solution to hunger.
              </p>
              <div className="flex items-center gap-4">
                <img src={proudlySALogo} alt="Proudly South African Member" className="h-16 w-auto object-contain" loading="lazy" />
                <span className="text-sm text-primary-foreground/60">Proudly South African Member</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="wp-image aspect-video">
              <img src={MnH_products} alt="Mint & Honey product range" loading="eager" decoding="async" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Section - Saving Lives */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="wp-image max-w-sm mx-auto lg:mx-0">
              <img 
                src={reganPaulusCeo} 
                alt="Regan Paulus - Founder & CEO of Mint & Honey" 
                className="rounded-2xl shadow-elevated w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="wp-badge mb-6 bg-mint-light text-mint-dark">CEO Message</span>
              <h2 className="mb-6 font-display text-foreground">Saving Lives, Enriching Futures</h2>
              <blockquote className="mb-6 border-l-4 border-mint pl-6 italic text-muted-foreground">
                "Our key objective is to contribute to the saving of children's lives and the prevention 
                of stunting and wasting so that children globally will have the best chance of growing 
                up to lead productive lives and achieve their God-given purpose."
              </blockquote>
              <p className="text-muted-foreground">
                — <strong>Regan Paulus</strong>, Founder & CEO, Mint & Honey
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {impactStats.map((stat, i) => (
                  <div key={i} className="rounded-lg bg-mint-light p-4 text-center">
                    <stat.icon className="mx-auto mb-2 h-6 w-6 text-mint" />
                    <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section with Image */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center">
            <span className="wp-badge mb-6 bg-honey-light text-honey-dark">Leadership</span>
            <h2 className="mb-4 font-display text-foreground">Meet Our Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              A team of resilient, ambitious, and community-focused leaders committed to impact beyond profit.
            </p>
          </motion.div>

          {/* Leadership Team Photo - Constrained size */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 overflow-hidden rounded-2xl shadow-elevated max-w-4xl mx-auto"
          >
            <img 
              src={leadershipTeamImage} 
              alt="Mint & Honey Leadership Team - CEO, COO, and HR executives" 
              className="w-full h-auto max-h-[400px] object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          {/* Leadership Team Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-mint-light">
                  <member.icon className="h-7 w-7 text-mint" />
                </div>
                <h3 className="mb-1 font-display text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-mint">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
                {member.quote && (
                  <p className="mt-4 text-xs italic text-muted-foreground border-l-2 border-mint pl-3">"{member.quote}"</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="bg-background py-4">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="aspect-video overflow-hidden"
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atlantis Facility */}
      <section className="relative bg-foreground py-12 md:py-20">
        <div className="absolute inset-0">
          <img src={facilityAerial} alt="" aria-hidden="true" className="h-full w-full object-cover opacity-20" loading="lazy" decoding="async" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="wp-badge mb-6 bg-mint/20 text-mint">Major Milestone</span>
              <h2 className="mb-6 font-display text-primary-foreground">Our Atlantis Facility — From Grey to Green</h2>
              <p className="mb-10 text-lg text-primary-foreground/80">
                The Mint &amp; Honey Agro-Processing Facility in Atlantis Industrial, Western Cape
                represents our commitment to strengthening food security, supporting local
                agriculture, creating sustainable employment, and turning grey landscapes into green opportunities.
              </p>
            </motion.div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm transition-all hover:bg-primary-foreground/15"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/20">
                  <item.icon className="h-6 w-6 text-mint" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-primary-foreground">{item.title}</h3>
                <p className="text-xs text-primary-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 rounded-xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm">
            <p className="text-sm text-primary-foreground/90">
              <strong>Designed for Impact:</strong> Producing fortified nutrition products for food manufacturers,
              feeding programs, ECD initiatives, humanitarian support, and export markets across Africa.
              <br />
              <span className="mt-2 block text-xs">🌾 Sourcing maize and soya from local farmers and regional agricultural suppliers</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
              <span className="wp-badge mb-6 bg-mint-light text-mint-dark">Our Purpose</span>
              <h2 className="mb-6 font-display text-foreground section-divider">Our Mission</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
                To fight malnutrition, improve food security, support vulnerable communities, 
                strengthen local economies, and uplift communities through nutrition — becoming 
                a leading global producer of fortified nutrition.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 font-display text-mint">Our Vision</h3>
                <p className="leading-relaxed text-sm text-muted-foreground">
                  To become a leading global producer of fortified nutrition while supporting communities, 
                  strengthening local economies, and expanding across Africa.
                </p>
              </motion.div>
              <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 font-display text-honey">Our Promise</h3>
                <p className="leading-relaxed text-sm text-muted-foreground">
                  We deliver quality, non-GMO fortified products that make a real difference — from
                  our Atlantis facility to communities across Africa. Sustainable quality for
                  the wellbeing of future generations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
            <span className="wp-badge mb-4 bg-honey-light text-honey-dark">Our Values</span>
            <h2 className="mb-4 font-display text-foreground section-divider">What Drives Us</h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              These core values guide everything we do, from product development to community partnerships.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint-light">
                  <value.icon className="h-6 w-6 text-mint" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-foreground">{value.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="relative bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="wp-image">
              <img src={productLineup} alt="Mint & Honey complete product range" className="w-full" loading="lazy" decoding="async" />
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="wp-badge mb-4 bg-honey-light text-honey-dark">Our Products</span>
              <h2 className="mb-4 font-display text-2xl text-foreground">Quality Products, Real Impact</h2>
              <p className="mb-6 text-base text-muted-foreground">
                Our product range includes Vuma Instant Porridge, Bamba Maize Meal for Kids,
                Gogo's Maize Meal, savory flavored meal products, and Super Cereal Plus (CSB++) —
                all fortified with essential vitamins and minerals using advanced extrusion technology.
              </p>
              <div className="space-y-2">
                {productFeatures.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-mint" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="mint" className="mt-6" size="default" asChild>
                <Link to="/shop">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients & Partners */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
            <span className="wp-badge mb-4 bg-mint-light text-mint-dark">Partners</span>
            <h2 className="mb-4 font-display text-foreground">Our Clients &amp; Partners</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We serve a diverse range of organisations committed to nutrition and food security.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {client.url ? (
                  <a href={client.url} target="_blank" rel="noopener noreferrer" className="block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-mint hover:shadow-card">
                    <h3 className="mb-2 font-display text-base font-semibold text-foreground">{client.name}</h3>
                    <p className="text-xs text-muted-foreground">{client.desc}</p>
                  </a>
                ) : (
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <h3 className="mb-2 font-display text-base font-semibold text-foreground">{client.name}</h3>
                    <p className="text-xs text-muted-foreground">{client.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-12 text-center">
            <span className="wp-badge mb-4 bg-mint-light text-mint-dark">Our Story</span>
            <h2 className="font-display text-2xl text-foreground">Our Journey</h2>
          </motion.div>
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l-2 border-mint pl-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-[38px] flex h-5 w-5 items-center justify-center rounded-full bg-mint shadow-mint">
                    <div className="h-2 w-2 rounded-full bg-background" />
                  </div>
                  <div className="font-display text-base font-bold text-honey">{item.year}</div>
                  <div className="mt-1 text-sm text-foreground">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="wp-badge mb-4 bg-mint-light text-mint-dark">Quality</span>
              <h2 className="mb-4 font-display text-xl text-foreground">
                Manufacturing Excellence &amp; Quality Standards
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Our Atlantis agro-processing facility adheres to the highest food safety
                and quality standards. We produce high-quality, organic, chemical-free
                products using advanced extrusion technology and vitamin & mineral fortification processes,
                sourcing maize and soya from local farmers and regional agricultural suppliers.
              </p>
              <ul className="space-y-3">
                {qualityItems.slice(0, 6).map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Award className="h-4 w-4 flex-shrink-0 text-mint" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <div className="wp-image aspect-video">
                <img src={facility_outside_location} alt="Mint & Honey facility outside location" loading="lazy" decoding="async" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="wp-image aspect-square">
                  <img src={productDisplay} alt="Mint & Honey product display" loading="lazy" decoding="async" />
                </div>
                <div className="wp-image aspect-square">
                  <img src={teamBanner} alt="Team with company banner" loading="lazy" decoding="async" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-honey py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="mb-3 font-display text-2xl text-secondary-foreground">Partner With Us</h2>
            <p className="mx-auto mb-6 max-w-2xl text-base text-secondary-foreground/80">
              Whether you're a food manufacturer needing non-GMO ingredients, an NGO running
              feeding programmes, or a government department — we'd love to discuss how we can
              support your nutritional needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="mint" size="default" asChild>
                <Link to="/contact">Get In Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="mint-outline" size="default" asChild>
                <Link to="/bulk-orders">Bulk Orders</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;