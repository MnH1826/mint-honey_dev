import { Link } from "react-router-dom";
import { Award, Users, Heart, Shield, Globe, ArrowRight, Factory, Wheat, FlaskConical, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-kitchen.jpg";
import impactImage from "@/assets/impact-children.jpg";
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import companyBanner from "@/assets/company-banner.jpeg";
import productDisplay from "@/assets/product-display.jpeg";

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
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-honey">
                About Us
              </span>
              <h1 className="mb-6 font-display text-4xl font-bold text-foreground md:text-5xl">
                Non-GMO Grain Processing, Enriching Lives
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Mint & Honey is a Proudly South African food manufacturing company 
                specialising in non-GMO fortified cereals, corn & soya products as 
                ingredients for food manufacturers, NGOs, and government feeding programs.
              </p>
              <p className="mb-6 text-muted-foreground">
                What makes us unique is our focus on manufacturing non-GMO shoe cereals 
                and corn & soya products as ingredients, serving clients from humanitarian 
                organisations to local food manufacturers across Africa.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={proudlySALogo}
                  alt="Proudly South African Member"
                  className="h-16 w-auto object-contain"
                />
                <span className="text-sm text-muted-foreground">Proudly South African Member</span>
              </div>
            </div>
            <div className="relative">
              <img
                src={companyBanner}
                alt="Mint & Honey company banner - Manufacturer of High-Quality Cereals & Processed Grains"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Atlantis Facility Announcement */}
      <section className="bg-mint py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-1.5 text-sm font-medium text-primary-foreground">
              🚀 Major Milestone
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Our Atlantis Facility is Taking Shape
            </h2>
            <p className="mb-10 text-lg text-primary-foreground/90">
              The Mint & Honey Agro-Processing Facility in Atlantis Industrial, Western Cape 
              represents our commitment to strengthening food security, supporting local 
              agriculture, and creating sustainable employment opportunities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((item, index) => (
              <div key={index} className="rounded-xl bg-primary-foreground/10 p-6 backdrop-blur">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-foreground/20">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-primary-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-primary-foreground/90">
              <strong>Designed for Impact:</strong> Producing fortified nutrition products for food manufacturers, 
              feeding programs, ECD initiatives, humanitarian support, and export markets across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="mb-12 text-xl text-muted-foreground">
              To manufacture high-quality, non-GMO fortified food products that combat 
              malnutrition and hidden hunger—serving food manufacturers, humanitarian 
              organisations, government feeding schemes, and health departments across Africa.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 text-left">
                <h3 className="mb-3 font-display text-xl font-semibold text-mint">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be Africa's leading manufacturer of non-GMO fortified grain products, 
                  serving every government feeding scheme and health department while 
                  empowering local food manufacturers with quality ingredients.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-left">
                <h3 className="mb-3 font-display text-xl font-semibold text-honey">Our Promise</h3>
                <p className="text-muted-foreground">
                  We deliver quality, non-GMO fortified products that make a real difference—from 
                  our Atlantis facility to communities across Africa. Sustainable quality for 
                  the wellbeing of future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients & Partners */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Clients & Partners
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We serve a diverse range of organisations committed to nutrition and food security.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a href="https://www.marysmeals.org/" target="_blank" rel="noopener noreferrer" 
               className="rounded-xl border border-border bg-background p-6 transition-all hover:border-mint hover:shadow-card">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Mary's Meals</h3>
              <p className="text-sm text-muted-foreground">Global humanitarian organisation providing school meals to children in need.</p>
            </a>
            <a href="https://giftofthegivers.org/" target="_blank" rel="noopener noreferrer"
               className="rounded-xl border border-border bg-background p-6 transition-all hover:border-mint hover:shadow-card">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Gift of the Givers</h3>
              <p className="text-sm text-muted-foreground">Africa's largest disaster response NGO, providing humanitarian relief.</p>
            </a>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Government Programmes</h3>
              <p className="text-sm text-muted-foreground">African government feeding schemes and health departments across the continent.</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Food Manufacturers</h3>
              <p className="text-sm text-muted-foreground">Local food manufacturers using our corn & soya products as ingredients.</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">ECD Centres</h3>
              <p className="text-sm text-muted-foreground">Early Childhood Development centres providing nutrition to young children.</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">Schools & Institutions</h3>
              <p className="text-sm text-muted-foreground">Educational institutions running feeding programmes for learners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              These core values guide everything we do, from product development to 
              community partnerships.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="rounded-xl bg-card p-6 shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-mint-light">
                  <value.icon className="h-6 w-6 text-mint" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Journey
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative border-l-2 border-mint pl-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-mint">
                    <div className="h-2 w-2 rounded-full bg-background" />
                  </div>
                  <div className="text-sm font-medium text-honey">{item.year}</div>
                  <div className="mt-1 text-foreground">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Manufacturing Excellence & Quality Standards
              </h2>
              <p className="mb-6 text-muted-foreground">
                Our Atlantis agro-processing facility adheres to the highest food safety 
                and quality standards. We produce high-quality, organic, chemical-free 
                products using only the finest ingredients.
              </p>
              <ul className="space-y-3">
                {[
                  "Non-GMO Certified Products",
                  "HACCP Certified Manufacturing",
                  "ISO 22000 Food Safety Management",
                  "Chemical-Free Natural Production",
                  "On-Site Quality Control Laboratory",
                  "Traceable Supply Chain"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <Award className="h-5 w-5 flex-shrink-0 text-mint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={productDisplay}
                alt="Mint & Honey product range - Vuma, Bamba, Gogo's Maize Meal, Nyama Choma Soya Mince"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-honey py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
            Partner With Us
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-secondary-foreground/80">
            Whether you're a food manufacturer needing non-GMO ingredients, an NGO running 
            feeding programmes, or a government department—we'd love to discuss how we can 
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
        </div>
      </section>
    </div>
  );
};

export default About;
