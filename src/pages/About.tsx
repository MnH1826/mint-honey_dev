import { Link } from "react-router-dom";
import { Award, Users, Heart, Shield, Globe, ArrowRight, Factory, Wheat, FlaskConical, Truck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import companyBanner from "@/assets/company-banner.webp";
import productDisplay from "@/assets/product-display.jpeg";
import teamPhoto from "@/assets/team-photo.jpg";
import boardroomMeeting from "@/assets/boardroom-meeting.jpg";
import qualityLab from "@/assets/quality-lab.jpg";
import facilityAerial from "@/assets/facility-aerial.jpg";
import facility from "@/assets/facility_outside_location.webp";
import teamBanner from "@/assets/team-banner.jpg";
import productLineup from "@/assets/product-lineup.jpg";
import MnH_products from "@/assets/MnH_products.webp";
import reception from "@/assets/reception.webp";
import facility_outdoor from "@/assets/facility_outdoor.webp";
import facility_outside_location from "@/assets/facility_outside_location.webp";

const values = [
  {
    icon: Heart,
    title: "Nutrition First",
    description: "Every product we create is designed with nutritional impact as the primary goal, helping combat malnutrition and hidden hunger."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We work closely with communities, schools, and organizations to understand and meet their specific nutritional needs."
  },
  {
    icon: Shield,
    title: "Quality Standards",
    description: "Our manufacturing processes meet rigorous food safety standards, ensuring every product is safe and nutritious."
  },
  {
    icon: Globe,
    title: "Sustainable Impact",
    description: "We're committed to creating lasting positive change through sustainable business practices and community partnerships."
  }
];

const facilityHighlights = [
  { icon: Factory, title: "Integrated Processing", description: "Grain to nutrition processing facility with milling, extrusion, blending, and packing" },
  { icon: Wheat, title: "Grain Silos", description: "Dedicated maize and soya storage silos for consistent supply" },
  { icon: FlaskConical, title: "Quality Lab", description: "On-site quality control laboratory ensuring product excellence" },
  { icon: Truck, title: "Export-Ready", description: "Dedicated loading, dispatch logistics zones, and export infrastructure" }
];

const timeline = [
  { year: "2009", event: "Mint & Honey founded with a mission to combat malnutrition" },
  { year: "2012", event: "First partnership with school feeding programs" },
  { year: "2015", event: "Expanded to serve NGOs and community kitchens" },
  { year: "2018", event: "Launched Super Cereal Plus (CSB+) product line" },
  { year: "2021", event: "Reached 500,000 meals served milestone" },
  { year: "2024", event: "Expanded nationwide distribution network" },
  { year: "2025", event: "Atlantis agro-processing facility taking shape" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Dark cinematic WordPress-style */}
      <section className="relative bg-foreground py-24 md:py-36">
        <div className="absolute inset-0">
          <img src={companyBanner} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="wp-badge mb-6 bg-primary-foreground/10 text-primary-foreground/80">
                About Us
              </span>
              <h1 className="mb-6 font-display text-primary-foreground">
                Non-GMO Grain Processing,{" "}
                <span className="text-gradient-honey">Enriching Lives</span>
              </h1>
              <p className="mb-6 text-lg text-primary-foreground/70">
                Mint &amp; Honey is a Proudly South African food manufacturing company 
                specialising in non-GMO fortified cereals, corn &amp; soya products as 
                ingredients for food manufacturers, NGOs, and government feeding programs.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={proudlySALogo}
                  alt="Proudly South African Member"
                  className="h-16 w-auto object-contain"
                />
                <span className="text-sm text-primary-foreground/60">Proudly South African Member</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="wp-image aspect-video"
            >
              <img
                src={MnH_products}
                alt="Mint & Honey company banner - Manufacturer of High-Quality Cereals & Processed Grains"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="bg-background py-4">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {[
            { src: facility, alt: "Facility exterior" },
            { src: boardroomMeeting, alt: "Boardroom meeting" },
            { src: reception, alt: "The Reception Area" },
            { src: facility_outdoor, alt: "Mint & Honey logo" },

          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="aspect-video overflow-hidden"
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atlantis Facility Announcement */}
      <section className="relative bg-mint py-20 md:py-32">
        <div className="absolute inset-0">
          <img src={facilityAerial} alt="" className="h-full w-full object-cover opacity-15" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="wp-badge mb-6 bg-primary-foreground/20 text-primary-foreground">
                 Major Milestone
              </span>
              <h2 className="mb-6 font-display text-primary-foreground">
                Our Atlantis Facility is Taking Shape
              </h2>
              <p className="mb-12 text-lg text-primary-foreground/80">
                The Mint &amp; Honey Agro-Processing Facility in Atlantis Industrial, Western Cape 
                represents our commitment to strengthening food security, supporting local 
                agriculture, and creating sustainable employment opportunities.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-primary-foreground/10 p-8 backdrop-blur transition-all hover:bg-primary-foreground/15"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-foreground/20">
                  <item.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 rounded-xl bg-primary-foreground/10 p-6 text-center"
          >
            <p className="text-primary-foreground/90">
              <strong>Designed for Impact:</strong> Producing fortified nutrition products for food manufacturers, 
              feeding programs, ECD initiatives, humanitarian support, and export markets across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="wp-badge mb-6 bg-mint-light text-mint-dark">
                Our Purpose
              </span>
              <h2 className="mb-6 font-display text-foreground section-divider">
                Our Mission
              </h2>
              <p className="mx-auto mt-8 max-w-3xl text-xl text-muted-foreground">
                To manufacture high-quality, non-GMO fortified food products that combat 
                malnutrition and hidden hunger — serving food manufacturers, humanitarian 
                organisations, government feeding schemes, and health departments across Africa.
              </p>
            </motion.div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="mb-4 font-display text-mint">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading manufacturer of non-GMO fortified grain products, 
                  serving every government feeding scheme and health department while 
                  empowering local food manufacturers with quality ingredients.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="mb-4 font-display text-honey">Our Promise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver quality, non-GMO fortified products that make a real difference — from 
                  our Atlantis facility to communities across Africa. Sustainable quality for 
                  the wellbeing of future generations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Full-width image */}
      <section className="relative bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="wp-image"
            >
              <img
                src={productLineup}
                alt="Mint & Honey complete product range"
                className="w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="wp-badge mb-6 bg-honey-light text-honey-dark">
                Our Products
              </span>
              <h2 className="mb-6 font-display text-foreground">
                Quality Products, Real Impact
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Our product range includes Vuma Instant Porridge, Bamba Maize Meal, 
                Gogo's Maize Meal, Nyama Choma Soya Mince, and Super Cereal Plus — 
                all fortified with essential vitamins and minerals.
              </p>
              <div className="space-y-3">
                {[
                  "Non-GMO Certified Products",
                  "Fortified with Vitamins & Minerals",
                  "Chemical-Free Natural Production",
                  "High Protein Soya Products",
                  "Cost-Effective for Feeding Programs"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-mint" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="mint" className="mt-8" size="lg" asChild>
                <Link to="/shop">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Clients & Partners */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="wp-badge mb-4 bg-mint-light text-mint-dark">Partners</span>
            <h2 className="mb-4 font-display text-foreground">
              Our Clients &amp; Partners
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We serve a diverse range of organisations committed to nutrition and food security.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Mary's Meals", desc: "Global humanitarian organisation providing school meals to children in need.", url: "https://www.marysmeals.org/" },
              { name: "Gift of the Givers", desc: "Africa's largest disaster response NGO, providing humanitarian relief.", url: "https://giftofthegivers.org/" },
              { name: "Government Programmes", desc: "African government feeding schemes and health departments across the continent.", url: null },
              { name: "Food Manufacturers", desc: "Local food manufacturers using our corn & soya products as ingredients.", url: null },
              { name: "ECD Centres", desc: "Early Childhood Development centres providing nutrition to young children.", url: null },
              { name: "Schools & Institutions", desc: "Educational institutions running feeding programmes for learners.", url: null },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {client.url ? (
                  <a href={client.url} target="_blank" rel="noopener noreferrer" 
                     className="block rounded-2xl border border-border bg-card p-8 transition-all hover:border-mint hover:shadow-card">
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.desc}</p>
                  </a>
                ) : (
                  <div className="rounded-2xl border border-border bg-card p-8">
                    <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{client.name}</h3>
                    <p className="text-sm text-muted-foreground">{client.desc}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="wp-badge mb-4 bg-honey-light text-honey-dark">Our Values</span>
            <h2 className="mb-4 font-display text-foreground section-divider">
              What Drives Us
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-muted-foreground">
              These core values guide everything we do, from product development to 
              community partnerships.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-card p-8 shadow-soft transition-all hover:shadow-card"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-mint-light">
                  <value.icon className="h-7 w-7 text-mint" />
                </div>
                <h3 className="mb-3 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="wp-badge mb-4 bg-mint-light text-mint-dark">Our Story</span>
            <h2 className="font-display text-foreground">
              Our Journey
            </h2>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <div className="relative border-l-2 border-mint pl-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-10 last:mb-0"
                >
                  <div className="absolute -left-[45px] flex h-6 w-6 items-center justify-center rounded-full bg-mint shadow-mint">
                    <div className="h-2.5 w-2.5 rounded-full bg-background" />
                  </div>
                  <div className="font-display text-lg font-bold text-honey">{item.year}</div>
                  <div className="mt-1 text-foreground">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards with real photos */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="wp-badge mb-6 bg-mint-light text-mint-dark">Quality</span>
              <h2 className="mb-6 font-display text-foreground">
                Manufacturing Excellence &amp; Quality Standards
              </h2>
              <p className="mb-8 text-muted-foreground">
                Our Atlantis agro-processing facility adheres to the highest food safety 
                and quality standards. We produce high-quality, organic, chemical-free 
                products using only the finest ingredients.
              </p>
              <ul className="space-y-4">
                {[
                  "Non-GMO Certified Products",
                  "HACCP Certified Manufacturing",
                  "ISO 22000 Food Safety Management",
                  "Chemical-Free Natural Production",
                  "On-Site Quality Control Laboratory",
                  "Traceable Supply Chain"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 flex-shrink-0 text-mint" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="wp-image aspect-video">
                <img
                  src={facility_outside_location}
                  alt="Mint & Honey facility outside location"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="wp-image aspect-square">
                  <img src={productDisplay} alt="Mint & Honey product display" />
                </div>
                <div className="wp-image aspect-square">
                  <img src={teamBanner} alt="Team with company banner" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-honey py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 font-display text-secondary-foreground">
              Partner With Us
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-secondary-foreground/80">
              Whether you're a food manufacturer needing non-GMO ingredients, an NGO running 
              feeding programmes, or a government department — we'd love to discuss how we can 
              support your nutritional needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="mint" size="lg" asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="mint-outline" size="lg" asChild>
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
