import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Award, Users, Heart, Shield, Globe, ArrowRight, Factory, Wheat, FlaskConical, Truck, CheckCircle2, TrendingUp, Briefcase, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Image imports
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import companyBanner from "@/assets/company-banner.webp";
import productDisplay from "@/assets/facility_outdoor_3.webp";
import teamBanner from "@/assets/team-banner.jpg";
import facility from "@/assets/facility_outside_location.webp";
import boardroomMeeting from "@/assets/boardroom-meeting.jpg";
import reception from "@/assets/reception.webp";
import facility_outdoor from "@/assets/facility_outdoor.webp";
import facility_outside_location from "@/assets/facility_outside_location.webp";
import MnH_products from "@/assets/mnh_vuma_and_soya.jpeg";
import reganPaulusCeo from "@/assets/regan_paulus_ceo.webp";
import leadershipTeamImage from "@/assets/ceo_co_hr_coo.webp";
// ── Facility slideshow images ────────────────────────────────
import prod1 from "@/assets/prod_1.webp";
import prod2 from "@/assets/prod_2.webp";
import prod3 from "@/assets/prod_3.webp";
import prod4 from "@/assets/prod_4.webp";
import prod5 from "@/assets/prod_5.webp";
import prod6 from "@/assets/prod_6.webp";
import prod7 from "@/assets/prod_7.webp";
import outside1 from "@/assets/outside_1.webp";
import outside2 from "@/assets/outside_2.webp";
import outside3 from "@/assets/outside_3.webp";
import outside4 from "@/assets/outside_4.webp";
import outside5 from "@/assets/outside_5.webp";
import outside6 from "@/assets/outside_6.webp";
import outside7 from "@/assets/outside_7.webp";
import outside8 from "@/assets/outside_8.webp";
import djiLatest from "@/assets/DJI_20260506155948_0139_D.webp";

// ── Product images for collage ────────────────────────────────
import pVuma from "@/assets/mnh_vuma_instant_porrige.webp";
import pCornSoya from "@/assets/mnh_corn_soya.webp";
import pMaizeMeal from "@/assets/mnh_maize_meal.webp";
import pSoyaFlour from "@/assets/mnh_soya_flour.webp";
import pMinceBeef from "@/assets/mnh_soya_mince_beef.webp";
import pMinceChicken from "@/assets/mnh_soya_mince_chicken.webp";
import pMinceOxtail from "@/assets/mnh_soya_mince_ox_tail.webp";

// Shared animation variants - MUST be defined before any component that uses them
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const fadeLeft = { hidden: { opacity: 0, x: -30 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } };
const fadeRight = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.7 } } };

// Leadership team data
const leadershipTeam = [
  { 
    name: "Regan Paulus", 
    role: "Founder & CEO", 
    description: "Born in Swartland and raised in Atlantis. Resilient, ambitious, community-focused, and committed to impact beyond profit.", 
    icon: Briefcase, 
    quote: "We are not just building a business, we are building a solution to hunger." 
  },
  { 
    name: "Isabella Nedouvhada", 
    role: "Compliance Officer", 
    description: "Ensures regulatory compliance and quality standards.", 
    icon: Shield 
  },
  { 
    name: "Storme Paulus", 
    role: "Shareholder/Director & HR Officer", 
    description: "Dedicated to building a people-centric culture and empowering the workforce.", 
    icon: Users 
  },
  { 
    name: "Fulufhelo Nedouvhada", 
    role: "Chief Operations Officer", 
    description: "Fulufhelo is an accomplished executive with extensive experience spanning heavy-duty steel and FMCG manufacturing, finance, and large-scale supply chain logistics. As Chief Operations Officer at Mint and Honey, she drives strategic operational excellence, spearheading facility expansions while optimizing resource utilization, yield, and waste reduction. Throughout her career, Fulufhelo has excelled at turning complex engineering challenges into streamlined, scalable systems and building high-performing teams. Her leadership is backed by advanced qualifications in metallurgy, business management, and engineering management, bringing a powerful blend of technical expertise and strategic vision to the organization.", 
    icon: Factory 
  },
];

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
  { year: "2018", event: "Mint & Honey founded with a mission to combat malnutrition" },
  { year: "2019", event: "First partnership with school feeding programs" },
  { year: "2020", event: "Expanded to serve NGOs and community kitchens" },
  { year: "2021", event: "Launched Super Cereal Plus (CSB+) product line" },
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
  { value: "217+", label: "Partner Schools", icon: GraduationCap },
  { value: "30+", label: "Years of Experience", icon: Users },
];

// ── Facility Slideshow data ───────────────────────────────────
const facilitySlides = [
  { src: outside1, tag: "The Facility", headline: "Atlantis Agro-Processing Facility", body: "Strategically located in Atlantis Industrial, Western Cape — purpose-built for large-scale grain processing and fortified nutrition manufacturing." },
  { src: outside2, tag: "Infrastructure", headline: "Built for Community, Designed for Scale", body: "A multi-bay complex housing milling, extrusion, blending, packing lines, and a dedicated quality control laboratory, all under one roof." },
  { src: outside3, tag: "Infrastructure", headline: "Export-Ready Loading & Dispatch Zones", body: "Dedicated logistics zones and covered dispatch canopies enable efficient domestic and export shipments across Africa." },
  { src: outside4, tag: "The Facility", headline: "Proudly South African, Built in Atlantis", body: "Rooted in the Atlantis community — creating sustainable employment, supporting local farmers, and strengthening the Western Cape's agro-processing sector." },
  { src: outside5, tag: "The Facility", headline: "A Growing Industrial Presence", body: "The Mint & Honey campus sits within Atlantis Industrial, Western Cape — strategically positioned for local sourcing and distribution across southern Africa." },
  { src: outside6, tag: "The Facility", headline: "Street-Level View — Atlantis Industrial", body: "Our facility borders a key industrial route, enabling seamless access for supplier deliveries and outbound distribution of finished nutrition products." },
  { src: prod3, tag: "Inside the Factory", headline: "Full-Scale Production Floor", body: "Our expansive factory floor houses integrated milling, blending, and extrusion lines — all purpose-designed for high-volume fortified nutrition production." },
  { src: prod1, tag: "Inside the Factory", headline: "Advanced Grain Processing Machinery", body: "State-of-the-art extrusion and processing equipment converts non-GMO maize and soya into fortified nutrition products for feeding programmes across Africa." },
  { src: prod2, tag: "Inside the Factory", headline: "Multi-Hopper Extrusion Line", body: "Our parallel extrusion line enables simultaneous processing of multiple grain blends, delivering consistent output and precise vitamin & mineral fortification." },
  { src: prod4, tag: "Inside the Factory", headline: "Milling & Separation Equipment", body: "Industrial-grade milling and separation machinery ensures every batch of maize and soya is cleaned, graded, and prepared to the highest food safety standards." },
  { src: prod5, tag: "Inside the Factory", headline: "Conveyor & Blending Systems", body: "Automated conveyor systems connect each processing stage — reducing handling, minimising contamination risk, and maintaining HACCP compliance throughout." },
  { src: prod6, tag: "Inside the Factory", headline: "Fortification & Packaging Preparation", body: "The fortification stage is where vitamins and minerals are precisely added to every batch, ensuring each product meets international nutritional standards." },
  { src: prod7, tag: "Inside the Factory", headline: "Operational & Forklift-Ready", body: "With forklift access, wide aisles, and organised storage, our facility is designed for safe, efficient movement of raw materials and finished goods." },
  { src: outside7, tag: "Expansion", headline: "Silo Foundations — Breaking Ground", body: "Earthworks underway for our dedicated maize and soya storage silos, unlocking consistent raw material supply and significantly greater production capacity." },
  { src: outside8, tag: "Expansion", headline: "From Grey to Green — Phase by Phase", body: "Active construction next to our existing facility as we expand infrastructure to serve food manufacturers, NGOs, and government programmes at continental scale." },
  { src: djiLatest, tag: "Expansion", headline: "Growing Footprint, Bigger Impact", body: "Our most recent aerial view shows the expanding Atlantis campus — more space, more capacity, more nutritious meals reaching communities across Africa." },
  { src: MnH_products, tag: "Our Products", headline: "Nutritious Products. Real Impact.", body: "Vuma Instant Porridge · Bamba Maize Meal · Gogo's Maize Meal · Nyama Choma Soya Mince · Super Cereal Plus — fortified, non-GMO, and ready for Africa." },
];

const AUTO_INTERVAL = 5500;

// ── FacilitySlideshow component ───────────────────────────────
function FacilitySlideshow() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = facilitySlides.length;

  const go = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setCurrent(((next % total) + total) % total);
  }, [total]);

  const stepNext = useCallback(() => go(current + 1, 1), [current, go]);
  const stepPrev = useCallback(() => go(current - 1, -1), [current, go]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(stepNext, AUTO_INTERVAL);
  }, [stepNext]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const handlePrev = () => { stepPrev(); startTimer(); };
  const handleNext = () => { stepNext(); startTimer(); };
  const handleDot = (i: number) => { go(i, i > current ? 1 : -1); startTimer(); };

  const slide = facilitySlides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] as const } },
    exit: (d: number) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0, transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] as const } }),
  };

  return (
    <section className="relative bg-foreground overflow-hidden" style={{ minHeight: "75vh" }} aria-label="Atlantis Facility slideshow">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
          <img src={slide.src} alt={slide.headline} className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col justify-end" style={{ minHeight: "75vh" }}>
        <div className="container mx-auto px-4 pb-14 pt-28 md:pb-20">
          <AnimatePresence mode="wait">
            <motion.div key={`tag-${current}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <span className="inline-block mb-4 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{ background: "rgba(var(--mint-rgb, 72 199 142) / 0.2)", color: "hsl(var(--mint, 148 72% 53%))", border: "1px solid rgba(var(--mint-rgb, 72 199 142) / 0.4)", backdropFilter: "blur(6px)" }}>
                {slide.tag}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2 key={`h-${current}`} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45, delay: 0.06 }} className="font-display text-white mb-4 leading-tight max-w-3xl" style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
              {slide.headline}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p key={`b-${current}`} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: 0.12 }} className="mb-8 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
              {slide.body}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-3 flex-wrap">
            <button onClick={handlePrev} aria-label="Previous slide" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all hover:border-white hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-[6px]">
              {facilitySlides.map((_, i) => (
                <button key={i} onClick={() => handleDot(i)} aria-label={`Slide ${i + 1}`} className="rounded-full transition-all duration-400" style={{ height: "6px", width: i === current ? "28px" : "6px", background: i === current ? "hsl(var(--mint, 148 72% 53%))" : "rgba(255,255,255,0.30)" }} />
              ))}
            </div>
            <button onClick={handleNext} aria-label="Next slide" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/60 transition-all hover:border-white hover:text-white">
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="ml-auto hidden text-xs tabular-nums sm:block" style={{ color: "rgba(255,255,255,0.35)" }}>
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px]" style={{ background: "rgba(255,255,255,0.08)" }}>
        <motion.div key={current} className="h-full" style={{ background: "hsl(var(--mint, 148 72% 53%))" }} initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: AUTO_INTERVAL / 1000, ease: "linear" }} />
      </div>
    </section>
  );
}

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
              <h1 className="mb-6 font-display text-primary-foreground">Non-GMO Grain Processing, <span className="text-gradient-honey">Enriching Lives</span></h1>
              <p className="mb-6 text-lg text-primary-foreground/70">Mint &amp; Honey is a Proudly South African agro-processing and food manufacturing company specialising in non-GMO fortified cereals, maize products, and soya-based nutrition products for food manufacturers, NGOs, and government feeding programs across Africa.</p>
              <p className="mb-6 text-primary-foreground/60"><strong className="text-primary-foreground/80">From Grey to Green</strong> — We are not just building a business, we are building a solution to hunger.</p>
              <div className="flex items-center gap-4">
                <img src={proudlySALogo} alt="Proudly South African Member" className="h-16 w-auto object-contain" loading="lazy" />
                <span className="text-sm text-primary-foreground/60">Proudly South African Member</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex items-center justify-center">
              <motion.img src={MnH_products} alt="Mint & Honey product range" loading="eager" decoding="async" className="h-auto max-h-[480px] w-auto max-w-full object-contain drop-shadow-2xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="wp-image max-w-sm mx-auto lg:mx-0">
              <img src={reganPaulusCeo} alt="Regan Paulus - Founder & CEO of Mint & Honey" className="rounded-2xl shadow-elevated w-full h-auto object-cover" loading="lazy" />
            </motion.div>
            <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="wp-badge mb-6 bg-mint-light text-mint-dark">CEO Message</span>
              <h2 className="mb-6 font-display text-foreground">Saving Lives, Enriching Futures</h2>
              <blockquote className="mb-6 border-l-4 border-mint pl-6 italic text-muted-foreground">"Our key objective is to contribute to the saving of children's lives and the prevention of stunting and wasting so that children globally will have the best chance of growing up to lead productive lives and achieve their God-given purpose."</blockquote>
              <p className="text-muted-foreground">— <strong>Regan Paulus</strong>, Founder & CEO, Mint & Honey</p>
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

      {/* Leadership Team - Redesigned Compact Cards */}
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 text-center">
            <span className="wp-badge mb-3 bg-honey-light text-honey-dark">Leadership</span>
            <h2 className="mb-2 font-display text-3xl text-foreground">Meet Our Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground">A team of resilient, ambitious, and community-focused leaders committed to impact beyond profit.</p>
          </motion.div>

          {/* Team Photo */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-8 overflow-hidden rounded-2xl shadow-elevated max-w-3xl mx-auto">
            <img src={leadershipTeamImage} alt="Mint & Honey Leadership Team" className="w-full h-auto max-h-[280px] object-cover object-top" loading="lazy" />
          </motion.div>

          {/* Compact Leadership Cards - Full description visible */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {leadershipTeam.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-card to-muted/30 p-4 shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-1"
              >
                {/* Decorative accent bar */}
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-mint to-honey transition-all duration-500 group-hover:w-full" />
                
                {/* Icon with animated background - Smaller */}
                <div className="relative mb-3">
                  <div className="absolute inset-0 rounded-lg bg-mint/10 blur-md transition-all duration-500 group-hover:bg-mint/20" />
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-mint/20 to-mint/5 text-mint transition-all duration-500 group-hover:scale-110">
                    <member.icon className="h-5 w-5" />
                  </div>
                </div>

                {/* Name & Role - Compact */}
                <h3 className="mb-0.5 font-display text-base font-semibold text-foreground truncate">{member.name}</h3>
                <p className="mb-2 text-xs font-semibold text-mint">{member.role}</p>
                
                {/* Description - Full text visible (no truncation) */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                
                {/* Quote (if exists) - Compact */}
                {member.quote && (
                  <div className="mt-2 border-l-2 border-mint pl-2">
                    <p className="text-[11px] italic text-muted-foreground/80">"{member.quote}"</p>
                  </div>
                )}
                
                {/* Hover indicator - Bottom right */}
                <div className="absolute -bottom-8 right-2 opacity-0 transition-all duration-500 group-hover:bottom-2 group-hover:opacity-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/20 text-mint">
                    <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="bg-background py-4">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div key={img.alt} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="aspect-video overflow-hidden">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" decoding="async" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Atlantis Facility Slideshow */}
      <FacilitySlideshow />

      {/* Facility Highlights */}
      <section className="bg-foreground py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facilityHighlights.map((item, i) => (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur-sm transition-all hover:bg-primary-foreground/15">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint/20">
                  <item.icon className="h-6 w-6 text-mint" />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold text-primary-foreground">{item.title}</h3>
                <p className="text-xs text-primary-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 rounded-xl bg-primary-foreground/10 p-5 text-center backdrop-blur-sm">
            <p className="text-sm text-primary-foreground/90"><strong>Designed for Impact:</strong> Producing fortified nutrition products for food manufacturers, feeding programs, ECD initiatives, humanitarian support, and export markets across Africa.<br /><span className="mt-2 block text-xs">🌾 Sourcing maize and soya from local farmers and regional agricultural suppliers</span></p>
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
              <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">To fight malnutrition, improve food security, support vulnerable communities, strengthen local economies, and uplift communities through nutrition — becoming a leading global producer of fortified nutrition.</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 font-display text-mint">Our Vision</h3>
                <p className="leading-relaxed text-sm text-muted-foreground">To become a leading global producer of fortified nutrition while supporting communities, strengthening local economies, and expanding across Africa.</p>
              </motion.div>
              <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 font-display text-honey">Our Promise</h3>
                <p className="leading-relaxed text-sm text-muted-foreground">We deliver quality, non-GMO fortified products that make a real difference — from our Atlantis facility to communities across Africa. Sustainable quality for the wellbeing of future generations.</p>
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
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">These core values guide everything we do, from product development to community partnerships.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div key={value.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-card p-6 shadow-soft transition-all hover:shadow-card">
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
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-4 gap-2">
              <div className="col-span-1 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pMaizeMeal} alt="Maize Meal" className="h-28 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
              <div className="col-span-2 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pSoyaFlour} alt="Soya Flour" className="h-32 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
              <div className="col-span-1 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pCornSoya} alt="Corn Soya CSB++" className="h-28 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
              <div className="col-span-2 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pVuma} alt="Vuma Instant Porridge" className="h-36 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
              <div className="col-span-1 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pMinceChicken} alt="Soya Mince Chicken" className="h-28 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
              <div className="col-span-1 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pMinceBeef} alt="Soya Mince Beef" className="h-28 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
              <div className="col-span-4 group flex items-end justify-center overflow-hidden rounded-xl bg-muted p-2">
                <img src={pMinceOxtail} alt="Soya Mince Oxtail" className="h-24 w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-125" loading="lazy" />
              </div>
            </motion.div>

            <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <span className="wp-badge mb-4 bg-honey-light text-honey-dark">Our Products</span>
              <h2 className="mb-4 font-display text-2xl text-foreground">Quality Products, Real Impact</h2>
              <p className="mb-6 text-base text-muted-foreground">Our product range includes Vuma Instant Porridge, Fortified Maize Meal, Enzyme Active Soya Flour, Super Cereal Plus (CSB++), and three flavours of Soya Mince — all non-GMO, Halaal certified, and fortified with essential vitamins and minerals.</p>
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
            <p className="mx-auto max-w-2xl text-muted-foreground">We serve a diverse range of organisations committed to nutrition and food security.</p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, i) => (
              <motion.div key={client.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
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
                <motion.div key={item.year} variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative mb-8 last:mb-0">
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
              <h2 className="mb-4 font-display text-xl text-foreground">Manufacturing Excellence &amp; Quality Standards</h2>
              <p className="mb-6 text-sm text-muted-foreground">Our Atlantis agro-processing facility adheres to the highest food safety and quality standards. We produce high-quality, organic, chemical-free products using advanced extrusion technology and vitamin & mineral fortification processes, sourcing maize and soya from local farmers and regional agricultural suppliers.</p>
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
            <p className="mx-auto mb-6 max-w-2xl text-base text-secondary-foreground/80">Whether you're a food manufacturer needing non-GMO ingredients, an NGO running feeding programmes, or a government department — we'd love to discuss how we can support your nutritional needs.</p>
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