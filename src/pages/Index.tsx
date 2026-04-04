import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Leaf, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import heroImage from "@/assets/hero-image.jpg";
import impactImage from "@/assets/impact-children.jpg";
import communityImage from "@/assets/community-kitchen.jpg";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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

// Animated Counter Component with Framer Motion
const AnimatedCounter = ({ target }: { target: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    const numericValue = parseInt(target.replace(/[^0-9]/g, '')) || 0;
    const duration = 3000;
    const startTime = Date.now();
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * numericValue);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(numericValue);
      }
    };
    
    requestAnimationFrame(updateCounter);
  }, [isInView, target]);
  
  const formatNumber = (num: number, original: string) => {
    if (original.includes('K')) {
      return `${num}K+`;
    } else if (original.includes('+')) {
      return `${num}+`;
    }
    return num.toString();
  };
  
  return (
    <div ref={ref} className="font-display text-2xl font-bold text-foreground">
      {formatNumber(count, target)}
    </div>
  );
};

// Animated Stat Item Component - SIMPLIFIED
const AnimatedStatItem = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="flex items-center gap-3"
    >
      <motion.div 
        initial={{ rotate: -90, scale: 0 }}
        animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -90, scale: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: "easeOut" }}
        className="flex h-12 w-12 items-center justify-center rounded-lg bg-mint-light"
      >
        <stat.icon className="h-6 w-6 text-mint" />
      </motion.div>
      <div>
        <AnimatedCounter target={stat.value} />
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
          className="text-sm text-muted-foreground"
        >
          {stat.label}
        </motion.div>
      </div>
    </motion.div>
  );
};

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
            className="h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container relative mx-auto flex min-h-[90vh] items-center px-4 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-mint-light px-4 py-1.5 text-sm font-medium text-mint-dark"
            >
              <Leaf className="h-4 w-4" />
              Nourishing Communities Since 2009
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Non-GMO Fortified Cereals &{" "}
              <span className="text-gradient-mint">Grain Products for Africa</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 text-lg text-muted-foreground md:text-xl"
            >
              We manufacture non-GMO fortified cereals, corn & soya products as ingredients 
              for food manufacturers, NGOs, school feeding schemes, and government nutrition 
              programs across Africa. Enriching lives from our Atlantis facility.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="mint" size="xl" asChild>
                <Link to="/shop">
                  Shop Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="mint-outline" size="xl" asChild>
                <Link to="/bulk-orders">Bulk & Institutional Orders</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((stat, index) => (
                <AnimatedStatItem key={index} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
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
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button variant="mint-outline" size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Nutrition Matters */}
      <section className="bg-beige py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4 rounded-lg bg-background p-4 shadow-soft"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-mint-light">
                      <value.icon className="h-6 w-6 text-mint" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.img
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                src={impactImage}
                alt="Children enjoying nutritious meals"
                className="rounded-2xl shadow-elevated"
              />
              <motion.div 
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-honey p-6 shadow-card"
              >
                <div className="font-display text-3xl font-bold text-secondary-foreground">27%</div>
                <div className="text-sm text-secondary-foreground/80">
                  of SA children<br />experience stunting
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & SDG Alignment */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src={communityImage}
                alt="Community kitchen volunteers"
                className="rounded-2xl shadow-elevated"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
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
                {[
                  { number: "SDG 2", title: "Zero Hunger", color: "mint" },
                  { number: "SDG 3", title: "Good Health & Well-being", color: "mint" },
                  { number: "SDG 4", title: "Quality Education", color: "mint" },
                  { number: "SDG 12", title: "Responsible Consumption", color: "mint" }
                ].map((sdg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <div className="mb-2 font-display text-lg font-semibold text-mint">{sdg.number}</div>
                    <div className="text-sm text-muted-foreground">{sdg.title}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button variant="mint" className="mt-8" asChild>
                  <Link to="/impact">
                    Learn About Our Impact
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-honey">
              Testimonials
            </span>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Trusted by Communities & Organizations
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl bg-background p-6 shadow-card"
              >
                <div className="mb-4 text-4xl text-mint">"</div>
                <p className="mb-6 italic text-muted-foreground">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-sm uppercase tracking-wider text-muted-foreground"
          >
            Trusted by leading organizations across South Africa
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {[
              { name: "Mary's Meals", url: "https://www.marysmeals.org/" },
              { name: "Gift of the Givers", url: "https://giftofthegivers.org/" },
              { name: "Government Feeding Schemes", url: null },
              { name: "Food Manufacturers", url: null },
              { name: "ECD Centres", url: null }
            ].map(
              (partner, index) => (
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
                      className="flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground transition-all hover:border-mint hover:shadow-soft"
                    >
                      {partner.name}
                    </a>
                  ) : (
                    <div className="flex h-12 items-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground">
                      {partner.name}
                    </div>
                  )}
                </motion.div>
              )
            )}
          </motion.div>
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
        </motion.div>
      </section>
    </div>
  );
};

export default Index;