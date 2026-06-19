import { Link } from "react-router-dom";
import { Heart, Users, School, Home, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import impactImage from "@/assets/impact-children.webp";
import communityImage from "@/assets/community-kitchen.jpg";
import { motion } from "framer-motion";

const stats = [
  { value: "98K+", label: "Kids Fed Every Week Day", description: "Children receiving nutritious meals every day" },
  { value: "120+", label: "Partner Schools", description: "Educational institutions supported" },
  { value: "30+", label: "Years Experience", description: "Decades of community impact" },
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

// Animation variants
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const Impact = () => {
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
              Creating Lasting Impact Through Nutrition
            </h1>
            <p className="text-base text-primary-foreground/90 md:text-lg">
              Every product we create, every partnership we form, and every community we 
              serve brings us closer to a South Africa free from hunger and malnutrition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="mb-1 font-display text-3xl font-bold text-mint md:text-4xl">
                  {stat.value}
                </div>
                <div className="mb-1 font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground md:text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Nutrition Focus */}
      <section className="bg-beige py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-honey">
                Our Focus
              </span>
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                Putting Child Nutrition First
              </h2>
              <p className="mb-4 text-sm text-muted-foreground md:text-base">
                In South Africa, 27% of children under 5 experience stunting due to 
                malnutrition. This affects their physical and cognitive development, 
                limiting their potential for life.
              </p>
              <p className="mb-6 text-sm text-muted-foreground md:text-base">
                Our fortified products are specifically designed to address the nutritional 
                gaps that lead to hidden hunger—deficiencies in essential vitamins and 
                minerals that aren't immediately visible but have lasting effects.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-background p-4 shadow-soft">
                  <div className="mb-1 font-display text-xl font-bold text-mint md:text-2xl">27%</div>
                  <div className="text-xs text-muted-foreground md:text-sm">of children experience stunting</div>
                </div>
                <div className="rounded-lg bg-background p-4 shadow-soft">
                  <div className="mb-1 font-display text-xl font-bold text-honey md:text-2xl">1 in 4</div>
                  <div className="text-xs text-muted-foreground md:text-sm">children face food insecurity</div>
                </div>
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
                src={impactImage}
                alt="Children enjoying nutritious meals"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              Our Initiatives
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              Through strategic partnerships and targeted programs, we're making 
              nutrition accessible to those who need it most.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-mint-light">
                  <initiative.icon className="h-5 w-5 text-mint" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {initiative.title}
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">{initiative.description}</p>
                <div className="rounded-lg bg-honey-light px-3 py-2 text-xs font-medium text-honey-dark md:text-sm">
                  {initiative.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="relative overflow-hidden bg-gradient-hero py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <img
                src={communityImage}
                alt="Community kitchen volunteers"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                Stories from Our Communities
              </h2>
              <blockquote className="mb-4 border-l-4 border-mint pl-5 text-base italic text-muted-foreground md:text-lg">
                "Since Mint & Honey products became part of our feeding program, we've seen 
                remarkable improvements in the children's energy levels and focus. The 
                fortified cereals have made a real difference."
              </blockquote>
              <p className="font-medium text-foreground">— Community Kitchen Coordinator, Atlantis</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
              UN Sustainable Development Goals
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
              Our work directly contributes to achieving these global goals, 
              creating a more sustainable and equitable future.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sdgs.map((sdg, index) => (
              <motion.div
                key={sdg.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-mint font-display text-base font-bold text-primary-foreground">
                  {sdg.number}
                </div>
                <div>
                  <div className="font-medium text-foreground">{sdg.title}</div>
                  <div className="text-xs text-muted-foreground">{sdg.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-honey py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="mb-3 font-display text-2xl font-bold text-secondary-foreground md:text-3xl">
              Join Us in Making a Difference
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-secondary-foreground/80 md:text-base">
              Whether you're an organization looking to partner or an individual wanting to 
              support our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="default" asChild>
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="default"
                className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-honey"
                asChild
              >
                <Link to="/bulk-orders">Become a Partner</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;