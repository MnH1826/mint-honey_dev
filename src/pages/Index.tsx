import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Leaf, Users, Award, TrendingUp, CheckCircle2, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import productLineup from "@/assets/product-lineup.jpg";
import teamPhoto from "@/assets/ceo_co_hr_coo.webp";
import facilityInside from "@/assets/facility-aerial.jpg";
import Reception from "@/assets/reception.webp";
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import ceoImage from "@/assets/ceo_co_hr_coo.webp";
import mnHImage from "@/assets/MnH_1.webp";
import facilityImage from "@/assets/facility_outdoor_2.webp";
import hrImage from "@/assets/Hr_ceo_coo.webp";
import storedImage from "@/assets/stored.webp";
import { useEffect, useState, useRef, useCallback, memo } from "react";
import { motion, useInView } from "framer-motion";
import facility_outside_location from "@/assets/facility_outside_location.webp";
import { Newsletter } from "@/components/Newsletter";
import { AsFeaturedOn } from "@/components/AsFeaturedOn";
import { LinkedInFeed } from "@/components/LinkedInFeed";

// Additional hero images
import prod3 from "@/assets/prod_3.webp";
import outside1 from "@/assets/outside_1.webp";
import djiLatest from "@/assets/DJI_20260506155948_0139_D.webp";
import facility_outdoor_3 from "@/assets/facility_outdoor_3.webp";

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

const trustedPartners = [
  { name: "ASEZ", logo: atlantisLogo },
  { name: "DTI", logo: dtiLogo },
  { name: "SADCC", logo: sadccLogo },
  { name: "SEDA", logo: sedaLogo },
  { name: "SEDFA", logo: sedfaLogo },
  { name: "WC Dept", logo: WCdeptlogo },
  { name: "NEF Funding", logo: NEF_FUNDING_Logo },
  { name: "AgriFood", logo: AgriFood_logo },
  { name: "CPUT", logo: cput_logo }
];

const stats = [
  { value: "98K+", label: "Kids Fed Every Week Day", icon: Heart },
  { value: "217+", label: "Partner Schools", icon: Users },
  { value: "30+", label: "Years Experience", icon: Award },
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

// Expanded hero slides with 10 images
const heroSlides = [
  {
    image: ceoImage,
    title: "Leadership in Nutrition",
    subtitle: "Meet the team behind Mint & Honey",
    alt: "Mint & Honey CEO and leadership team"
  },
  {
    image: mnHImage,
    title: "Quality Fortified Products",
    subtitle: "Non-GMO fortified grain products for Africa",
    alt: "Mint & Honey nutritious products display"
  },
  {
    image: facilityImage,
    title: "State-of-the-Art Facility",
    subtitle: "Modern manufacturing in Atlantis Industrial",
    alt: "Mint & Honey outdoor facility"
  },
  {
    image: hrImage,
    title: "Dedicated Team",
    subtitle: "Committed to fighting malnutrition across Africa",
    alt: "Mint & Honey HR, CEO, and COO team"
  },
  {
    image: storedImage,
    title: "Bulk Storage & Distribution",
    subtitle: "Ready to serve communities across South Africa",
    alt: "Mint & Honey stored products warehouse"
  },
  {
    image: facility_outside_location,
    title: "Strategic Location",
    subtitle: "Mint & Honey facility in Atlantis Industrial",
    alt: "Mint & Honey facility outside location"
  },
  {
    image: prod3,
    title: "Full-Scale Production",
    subtitle: "State-of-the-art manufacturing floor",
    alt: "Mint & Honey full-scale production floor"
  },
  {
    image: outside1,
    title: "Aerial Excellence",
    subtitle: "Bird's eye view of our Atlantis campus",
    alt: "Aerial view of Mint & Honey Atlantis facility"
  },
  {
    image: djiLatest,
    title: "Growing Footprint",
    subtitle: "Expanding our impact across Africa",
    alt: "Mint & Honey facility expansion aerial view"
  },
  {
    image: facility_outdoor_3,
    title: "Industrial Strength",
    subtitle: "Purpose-built for African nutrition needs",
    alt: "Mint & Honey industrial facility exterior"
  }
];

// Animated Counter Component
const AnimatedCounter = memo(({ target }: { target: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);
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

  const display = target.includes("K") ? `${count}K+` : target.includes("+") ? `${count}+` : count.toString();

  return (
    <div ref={ref} className="font-display text-3xl font-bold text-foreground md:text-4xl">
      {display}
    </div>
  );
});
AnimatedCounter.displayName = "AnimatedCounter";

// Hero Slideshow Component
const HeroSlideshow = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseAndResume = useCallback(() => {
    setIsAutoPlaying(false);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  useEffect(() => {
    return () => { if (resumeRef.current) clearTimeout(resumeRef.current); };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    pauseAndResume();
  }, [pauseAndResume]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    pauseAndResume();
  }, [pauseAndResume]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    pauseAndResume();
  }, [pauseAndResume]);

  return (
    <section className="relative min-h-[100vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        </div>
      ))}

      <div className="container relative z-20 mx-auto flex min-h-[100vh] flex-col items-center justify-center px-4 py-32 text-center">
        <div className="max-w-4xl">
          <motion.div key={currentSlide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="wp-badge mb-6 border border-white/20 bg-white/10 text-white/90 backdrop-blur-sm">
              <Leaf className="h-4 w-4" />
              Proudly South African · Enriching Lives Since 2018..
            </span>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
              {heroSlides[currentSlide].subtitle}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="mint" size="xl" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <Link to="/shop">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-black hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
              <Link to="/bulk-orders">Bulk &amp; Institutional Orders</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            {["Non-GMO Certified", "HACCP Certified", "Chemical Free", "Proudly South African"].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-300 hover:bg-black/70 hover:scale-110 md:left-8 md:p-4" aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-300 hover:bg-black/70 hover:scale-110 md:right-8 md:p-4" aria-label="Next slide">
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Play/Pause Button */}
      <button onClick={() => setIsAutoPlaying((p) => !p)} className="absolute bottom-24 right-4 z-20 rounded-full bg-black/50 p-2 text-white transition-all duration-300 hover:bg-black/70 md:bottom-32 md:right-8 md:p-2.5" aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}>
        {isAutoPlaying ? <Pause className="h-4 w-4 md:h-5 md:w-5" /> : <Play className="h-4 w-4 md:h-5 md:w-5" />}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-mint" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
});
HeroSlideshow.displayName = "HeroSlideshow";

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <div className="flex flex-col">
      {/* Hero Slideshow Section - Now with 10 slides */}
      <HeroSlideshow />

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
                <div className="font-display text-3xl font-bold text-secondary-foreground">30+</div>
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

      {/* Trusted by leading companies - Infinite Scrolling Marquee */}
      <section className="bg-background py-16 md:py-24 overflow-hidden">
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

        {/* Infinite Scrolling Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          
          <div className="flex animate-scroll-right gap-8 py-4">
            {[...trustedPartners, ...trustedPartners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex-shrink-0 w-32 md:w-40"
              >
                <div className="flex items-center justify-center rounded-xl bg-white p-4 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
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
              className="border-primary-foreground/30 text-black-foreground hover:bg-primary-foreground/10 hover:text-white"
              asChild
            >
              <Link to="/bulk-orders">Bulk Orders</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* As Featured On - ASEZ Green Energy */}
      <AsFeaturedOn />

      {/* LinkedIn Feed Section */}
      <LinkedInFeed />

      {/* Newsletter Signup */}
      <Newsletter />
    </div>
  );
};

export default Index;