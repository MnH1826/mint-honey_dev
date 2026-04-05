import { Link } from "react-router-dom";
import { Heart, Users, School, Home, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import impactImage from "@/assets/impact-children.jpg";
import communityImage from "@/assets/community-kitchen.jpg";

const stats = [
  { value: "500K+", label: "Meals Provided", description: "Nutritious meals served to communities" },
  { value: "120+", label: "Partner Schools", description: "Educational institutions supported" },
  { value: "50+", label: "NGO Partners", description: "Organizations we collaborate with" },
  { value: "9", label: "Provinces Reached", description: "Nationwide distribution network" }
];

const initiatives = [
  {
    icon: School,
    title: "School Feeding Programs",
    description: "We partner with schools across South Africa to provide nutritious meals that support learning and development. Well-nourished children are better able to focus, learn, and reach their full potential.",
    impact: "Supporting over 120 schools with daily nutritious meals"
  },
  {
    icon: Heart,
    title: "Community Feeding Schemes",
    description: "Our products supply community kitchens and feeding schemes that serve vulnerable populations, including the elderly, unemployed, and homeless individuals in need of nutritional support.",
    impact: "Providing essential nutrition to community kitchens nationwide"
  },
  {
    icon: Home,
    title: "Early Childhood Development",
    description: "We focus on the critical first 1,000 days of a child's life, providing fortified foods that support healthy brain development and physical growth during this crucial window.",
    impact: "Specialized nutrition for ECD centers and crèches"
  },
  {
    icon: Users,
    title: "Institutional Partnerships",
    description: "We work with hospitals, healthcare facilities, and government institutions to ensure patients and beneficiaries receive adequate nutrition during recovery and care.",
    impact: "Trusted supplier to healthcare and government facilities"
  }
];

const sdgs = [
  { number: 2, title: "Zero Hunger", description: "End hunger and ensure access to safe, nutritious food" },
  { number: 3, title: "Good Health", description: "Ensure healthy lives and promote well-being for all" },
  { number: 4, title: "Quality Education", description: "Nutrition supports better learning outcomes" },
  { number: 5, title: "Gender Equality", description: "Empowering women in food production and distribution" },
  { number: 12, title: "Responsible Consumption", description: "Sustainable production practices" },
  { number: 17, title: "Partnerships", description: "Collaborate for sustainable development" }
];

const Impact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-mint py-16 md:py-24">
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
              Creating Lasting Impact Through Nutrition
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Every product we create, every partnership we form, and every community we 
              serve brings us closer to a South Africa free from hunger and malnutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-2 font-display text-4xl font-bold text-mint">
                  {stat.value}
                </div>
                <div className="mb-2 font-medium text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Nutrition Focus */}
      <section className="bg-beige py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-honey">
                Our Focus
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Putting Child Nutrition First
              </h2>
              <p className="mb-6 text-muted-foreground">
                In South Africa, 27% of children under 5 experience stunting due to 
                malnutrition. This affects their physical and cognitive development, 
                limiting their potential for life.
              </p>
              <p className="mb-6 text-muted-foreground">
                Our fortified products are specifically designed to address the nutritional 
                gaps that lead to hidden hunger—deficiencies in essential vitamins and 
                minerals that aren't immediately visible but have lasting effects.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-background p-4 shadow-soft">
                  <div className="mb-1 font-display text-2xl font-bold text-mint">27%</div>
                  <div className="text-sm text-muted-foreground">of children experience stunting</div>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-soft">
                  <div className="mb-1 font-display text-2xl font-bold text-honey">1 in 4</div>
                  <div className="text-sm text-muted-foreground">children face food insecurity</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src={impactImage}
                alt="Children enjoying nutritious meals"
                className="rounded-2xl shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Our Initiatives
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Through strategic partnerships and targeted programs, we're making 
              nutrition accessible to those who need it most.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-card"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-mint-light">
                  <initiative.icon className="h-6 w-6 text-mint" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {initiative.title}
                </h3>
                <p className="mb-4 text-muted-foreground">{initiative.description}</p>
                <div className="rounded-lg bg-honey-light px-4 py-2 text-sm font-medium text-honey-dark">
                  {initiative.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <img
                src={communityImage}
                alt="Community kitchen volunteers"
                className="rounded-2xl shadow-elevated"
              />
            </div>
            <div>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Stories from Our Communities
              </h2>
              <blockquote className="mb-6 border-l-4 border-mint pl-6 text-lg italic text-muted-foreground">
                "Since Mint & Honey products became part of our feeding program, we've seen 
                remarkable improvements in the children's energy levels and focus. The 
                fortified cereals have made a real difference."
              </blockquote>
              <p className="font-medium">— Community Kitchen Coordinator, Atlantis</p>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              UN Sustainable Development Goals
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our work directly contributes to achieving these global goals, 
              creating a more sustainable and equitable future.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sdgs.map(sdg => (
              <div
                key={sdg.number}
                className="flex items-start gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-mint font-display text-xl font-bold text-primary-foreground">
                  {sdg.number}
                </div>
                <div>
                  <div className="font-medium text-foreground">{sdg.title}</div>
                  <div className="text-sm text-muted-foreground">{sdg.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-honey py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-secondary-foreground md:text-4xl">
            Join Us in Making a Difference
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-secondary-foreground/80">
            Whether you're an organization looking to partner or an individual wanting to 
            support our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-honey"
              asChild
            >
              <Link to="/bulk-orders">Become a Partner</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
