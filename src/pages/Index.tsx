import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Leaf, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import heroImage from "@/assets/hero-image.jpg";
import impactImage from "@/assets/impact-children.jpg";
import communityImage from "@/assets/community-kitchen.jpg";

const stats = [
  { value: "500K+", label: "Meals Provided", icon: Heart },
  { value: "120+", label: "Partner Schools", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "6", label: "SDGs Supported", icon: TrendingUp }
];

const values = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All products meet strict food safety and quality standards with proper certifications."
  },
  {
    icon: Leaf,
    title: "Nutrition First",
    description: "Fortified with essential vitamins and minerals to combat malnutrition and hidden hunger."
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Supporting food security initiatives and feeding programs across South Africa."
  }
];

const testimonials = [
  {
    quote: "Mint & Honey has been instrumental in our school feeding program. The quality and nutritional value of their products is exceptional.",
    author: "Sarah Moloi",
    role: "Program Director, Ubuntu Feeding Initiative"
  },
  {
    quote: "Their commitment to child nutrition aligns perfectly with our organization's mission. A trusted partner in combating malnutrition.",
    author: "Dr. James Ndlovu",
    role: "Health Officer, Community Health Network"
  },
  {
    quote: "Affordable, nutritious, and consistently high quality. Mint & Honey products have become a staple in our community kitchens.",
    author: "Thembi Zulu",
    role: "Volunteer Coordinator, Hope Kitchen"
  }
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Nutritious food products"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container relative mx-auto flex min-h-[90vh] items-center px-4 py-20">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-mint-light px-4 py-1.5 text-sm font-medium text-mint-dark">
              <Leaf className="h-4 w-4" />
              Nourishing Communities Since 2009
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Nutritious Food Solutions for{" "}
              <span className="text-gradient-mint">Healthier Communities</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Fortified, affordable food products supporting food security across South Africa. 
              From schools to feeding schemes, we're committed to combating malnutrition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="mint" size="xl" asChild>
                <Link to="/shop">
                  Shop Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="mint-outline" size="xl" asChild>
                <Link to="/bulk-orders">Bulk & Institutional Orders</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-mint-light">
                    <stat.icon className="h-6 w-6 text-mint" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-honey">
              Our Products
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Featured Nutritious Products
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Discover our range of fortified cereals, porridges, and grain-based products 
              designed to combat malnutrition and support community health.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="mint-outline" size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Nutrition Matters */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-honey">
                Why Nutrition Matters
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Combating Hidden Hunger in South Africa
              </h2>
              <p className="mb-6 text-muted-foreground">
                Hidden hunger—micronutrient deficiency—affects millions of South Africans, 
                particularly children. Our fortified products are specifically designed to 
                address this critical health challenge.
              </p>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4 rounded-lg bg-background p-4 shadow-soft">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-mint-light">
                      <value.icon className="h-6 w-6 text-mint" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src={impactImage}
                alt="Children enjoying nutritious meals"
                className="rounded-2xl shadow-elevated"
              />
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-honey p-6 shadow-card">
                <div className="font-display text-3xl font-bold text-secondary-foreground">27%</div>
                <div className="text-sm text-secondary-foreground/80">
                  of SA children<br />experience stunting
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & SDG Alignment */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src={communityImage}
                alt="Community kitchen volunteers"
                className="rounded-2xl shadow-elevated"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-honey">
                Our Mission
              </span>
              <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                Aligned with UN Sustainable Development Goals
              </h2>
              <p className="mb-6 text-muted-foreground">
                We're committed to contributing to global food security through our work 
                in South Africa. Our operations directly support multiple UN SDGs.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 font-display text-lg font-semibold text-mint">SDG 2</div>
                  <div className="text-sm text-muted-foreground">Zero Hunger</div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 font-display text-lg font-semibold text-mint">SDG 3</div>
                  <div className="text-sm text-muted-foreground">Good Health & Well-being</div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 font-display text-lg font-semibold text-mint">SDG 4</div>
                  <div className="text-sm text-muted-foreground">Quality Education</div>
                </div>
                <div className="rounded-lg border border-border bg-card p-4">
                  <div className="mb-2 font-display text-lg font-semibold text-mint">SDG 12</div>
                  <div className="text-sm text-muted-foreground">Responsible Consumption</div>
                </div>
              </div>
              
              <Button variant="mint" className="mt-8" asChild>
                <Link to="/impact">
                  Learn About Our Impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-honey">
              Testimonials
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Trusted by Communities & Organizations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-xl bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="mb-4 text-4xl text-mint">"</div>
                <p className="mb-6 italic text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <p className="mb-8 text-center text-sm uppercase tracking-wider text-muted-foreground">
            Trusted by leading organizations across South Africa
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {["Partner NGO 1", "School District", "Health Ministry", "Food Bank SA", "Community Foundation"].map(
              (partner, index) => (
                <div
                  key={index}
                  className="flex h-12 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground"
                >
                  {partner}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mint py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Make a Difference?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/90">
            Whether you're purchasing for your household, school, or large-scale feeding program, 
            we're here to support your nutrition needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="honey" size="xl" asChild>
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground text-secondary-foreground hover:bg-primary-foreground hover:text-mint"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
