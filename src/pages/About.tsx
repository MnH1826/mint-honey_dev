import { Link } from "react-router-dom";
import { Award, Users, Heart, Shield, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-kitchen.jpg";
import impactImage from "@/assets/impact-children.jpg";

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

const timeline = [
  { year: "2009", event: "Mint & Honey founded with a mission to combat malnutrition" },
  { year: "2012", event: "First partnership with school feeding programs" },
  { year: "2015", event: "Expanded to serve NGOs and community kitchens" },
  { year: "2018", event: "Launched Super Cereal Plus (CSB+) product line" },
  { year: "2021", event: "Reached 500,000 meals served milestone" },
  { year: "2024", event: "Expanded nationwide distribution network" }
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
                Nourishing South Africa, One Meal at a Time
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Mint & Honey is a South African food manufacturing company dedicated to 
                combating malnutrition and supporting food security through fortified, 
                affordable food products.
              </p>
              <p className="text-muted-foreground">
                Since 2009, we've been working with schools, NGOs, feeding schemes, and 
                institutions across the country to ensure vulnerable communities have 
                access to nutritious food.
              </p>
            </div>
            <div className="relative">
              <img
                src={communityImage}
                alt="Community kitchen volunteers"
                className="rounded-2xl shadow-elevated"
              />
            </div>
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
              To provide nutritious, fortified food products that combat malnutrition 
              and hidden hunger, particularly among children and vulnerable communities 
              in South Africa, while supporting sustainable food security initiatives.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6 text-left">
                <h3 className="mb-3 font-display text-xl font-semibold text-mint">Our Vision</h3>
                <p className="text-muted-foreground">
                  A South Africa where every child has access to the nutrition they need 
                  to thrive, and where food security is a reality for all communities.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-left">
                <h3 className="mb-3 font-display text-xl font-semibold text-honey">Our Promise</h3>
                <p className="text-muted-foreground">
                  We promise to deliver quality, fortified products that make a real 
                  difference in the health and wellbeing of the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige py-16 md:py-24">
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
              <div key={index} className="rounded-xl bg-background p-6 shadow-soft">
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
      <section className="bg-background py-16 md:py-24">
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
      <section className="bg-mint py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
                Manufacturing Excellence & Quality Standards
              </h2>
              <p className="mb-6 text-primary-foreground/90">
                Our manufacturing facility adheres to the highest food safety and quality 
                standards. We're committed to producing products that are not only nutritious 
                but also safe for consumption.
              </p>
              <ul className="space-y-3">
                {[
                  "HACCP Certified Manufacturing",
                  "ISO 22000 Food Safety Management",
                  "Regular Third-Party Audits",
                  "Strict Quality Control Protocols",
                  "Traceable Supply Chain"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-primary-foreground">
                    <Award className="h-5 w-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={impactImage}
                alt="Children enjoying nutritious meals"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Partner With Us
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Whether you're a school, NGO, feeding scheme, or institution, we'd love to 
            discuss how we can support your nutritional needs.
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
