import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Leaf, Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import productLineup from "@/assets/product-lineup.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import facilityAerial from "@/assets/facility-aerial.jpg";
import officeReception from "@/assets/office-reception.jpg";
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "500K+", label: "Meals Provided", icon: Heart },
  { value: "120+", label: "Partner Schools", icon: Users },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "6", label: "SDGs Supported", icon: TrendingUp }
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

// Animated Counter Component
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
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericValue));
      if (progress < 1) requestAnimationFrame(updateCounter);
      else setCount(numericValue);
    };
    requestAnimationFrame(updateCounter);
  }, [isInView, target]);
  
  const formatNumber = (num: number, original: string) => {
    if (original.includes('K')) return `${num}K+`;
    if (original.includes('+')) return `${num}+`;
    return num.toString();
  };
  
  return (
    <div ref={ref} className="font-display text-3xl font-bold text-foreground md:text-4xl">
      {formatNumber(count, target)}
    </div>
  );
};

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full-width WordPress-style */}
      <section className="relative min-h-[100vh] bg-foreground">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={productLineup}
            alt="Mint & Honey product range - Vuma, Bamba, Gogo's Maize Meal, Nyama Choma"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40" />
        </div>
        
        <div className="container relative mx-auto flex min-h-[100vh] flex-col items-center justify-center px-4 py-32 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="wp-badge mb-6 border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/90"
            >
              <Leaf className="h-4 w-4" />
              Proudly South African · Enriching Lives Since 2009
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl"
            >
              Non-GMO Fortified{" "}
              <span className="text-gradient-honey">Grain Products</span>
              <br />
              <span className="text-primary-foreground/80">for Africa</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/70 md:text-xl"
            >
              We manufacture high-quality fortified cereals, corn &amp; soya products as 
              ingredients for food manufacturers, NGOs, and government feeding programs 
              across the African continent.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="mint" size="xl" asChild>
                <Link to="/shop">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/bulk-orders">Bulk &amp; Institutional Orders</Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-primary-foreground/50"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                Non-GMO Certified
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                HACCP Certified
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                Chemical Free
              </div>
              <img src={proudlySALogo} alt="Proudly South African" className="h-10 w-auto opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

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

      {/* About / Who We Are - WordPress-style content block */}
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
                Mint &amp; Honey is a Proudly South African food manufacturing company 
                specialising in non-GMO fortified cereals, corn &amp; soya products as 
                ingredients for food manufacturers, NGOs, and government feeding programs.
              </p>
              <p className="mb-8 text-muted-foreground">
                What makes us unique is our focus on manufacturing non-GMO cereals 
                and corn &amp; soya products as ingredients, serving clients from humanitarian 
                organisations to local food manufacturers across Africa.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "HACCP Certified" },
                  { icon: Leaf, label: "Non-GMO Products" },
                  { icon: Award, label: "Quality Assured" },
                  { icon: Heart, label: "Community Impact" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg bg-muted p-3">
                    <item.icon className="h-5 w-5 flex-shrink-0 text-mint" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
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
                  src={officeReception}
                  alt="Mint & Honey office reception with company branding"
                />
              </div>
              {/* Floating card */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 rounded-xl bg-honey p-5 shadow-card"
              >
                <div className="font-display text-3xl font-bold text-secondary-foreground">15+</div>
                <div className="text-sm font-medium text-secondary-foreground/80">Years of<br />Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="wp-badge mb-4 bg-honey-light text-honey-dark">
              Our Products
            </span>
            <h2 className="mb-4 font-display text-foreground section-divider">
              Featured Nutritious Products
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
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
            <Button variant="mint" size="lg" asChild>
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Atlantis Facility - Full-width WordPress block */}
      <section className="relative bg-foreground py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src={facilityAerial}
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
                🚀 Major Milestone
              </span>
              <h2 className="mb-6 font-display text-primary-foreground">
                Our Atlantis Facility is Taking Shape
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/70">
                The Mint &amp; Honey Agro-Processing Facility in Atlantis Industrial, Western Cape 
                represents our commitment to strengthening food security, supporting local 
                agriculture, and creating sustainable employment.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Grain to nutrition processing",
                  "Maize & soya storage silos",
                  "Milling, extrusion & blending",
                  "Quality control laboratory",
                  "Export-ready infrastructure",
                  "Dedicated dispatch logistics"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-primary-foreground/80">
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
                src={facilityAerial}
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
                <div className="mb-4 font-display text-5xl leading-none text-mint/30">"</div>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-light font-display text-sm font-bold text-mint-dark">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners - WordPress-style logo bar */}
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
              { name: "ECD Centres", url: null }
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
                Our diverse and passionate team brings together expertise in food science, 
                manufacturing, nutrition, and community development to deliver products 
                that make a real difference.
              </p>
              <p className="mb-8 text-muted-foreground">
                From our Atlantis facility to communities across Africa, we're committed to 
                sustainable quality for the wellbeing of future generations.
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

      {/* CTA Section - Full-width WordPress block */}
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
            Whether you're a food manufacturer, NGO, government department, or running 
            feeding programs — we'd love to discuss how our non-GMO fortified products 
            can support your nutritional needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="honey" size="xl" asChild>
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/bulk-orders">Bulk Orders</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
