import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState, useRef, useCallback, memo } from "react";

// Image imports
import ceoImage from "@/assets/ceo_co_hr_coo.webp";
import mnHImage from "@/assets/MnH_1.webp";
import facilityImage from "@/assets/facility_outdoor_2.webp";
import hrImage from "@/assets/Hr_ceo_coo.webp";
import storedImage from "@/assets/stored.webp";
import facility_outside_location from "@/assets/facility_outside_location.webp";
import mnh_front from "@/assets/mnh_front.webp";
import prod3 from "@/assets/prod_3.webp";
import djiLatest from "@/assets/DJI_20260506155948_0139_D.webp";
import facility_outdoor_3 from "@/assets/facility_outdoor_3.webp";

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroSlides: HeroSlide[] = [
  {
    image: ceoImage,
    title: "Leadership in Nutrition",
    subtitle: "Meet the team behind Mint & Honey",
    alt: "Mint & Honey CEO and leadership team",
  },
  {
    image: mnHImage,
    title: "Quality Fortified Products",
    subtitle: "Pioneers in the Western Cape's Agro-Processing Sector",
    alt: "Mint & Honey nutritious products display",
  },
  {
    image: mnh_front,
    title: "Innovative Solutions",
    subtitle: "Transforming the future of African nutrition",
    alt: "Mint & Honey innovative products",
  },
  {
    image: facilityImage,
    title: "State-of-the-Art Facility",
    subtitle: "Modern manufacturing in Atlantis Industrial",
    alt: "Mint & Honey outdoor facility",
  },
  {
    image: hrImage,
    title: "Dedicated Team",
    subtitle: "Committed to fighting malnutrition across Africa",
    alt: "Mint & Honey HR, CEO, and COO team",
  },
  {
    image: storedImage,
    title: "Bulk Storage & Distribution",
    subtitle: "Ready to serve communities across Africa",
    alt: "Mint & Honey stored products warehouse",
  },
  {
    image: facility_outside_location,
    title: "Strategic Location",
    subtitle: "Located in the Atlantis Special Economic Zone",
    alt: "Mint & Honey facility outside location",
  },
  {
    image: prod3,
    title: "Full-Scale Production",
    subtitle: "State-of-the-art manufacturing floor",
    alt: "Mint & Honey full-scale production floor",
  },
  {
    image: djiLatest,
    title: "Growing Footprint",
    subtitle: "Expanding our impact across Africa",
    alt: "Mint & Honey facility expansion aerial view",
  },
  {
    image: facility_outdoor_3,
    title: "Industrial Strength",
    subtitle: "Purpose-built for African Food Security",
    alt: "Mint & Honey industrial facility exterior",
  },
];

const SLIDE_DURATION_MS = 5000;
const RESUME_DELAY_MS = 10000;

// ─── HeroSlideshow ─────────────────────────────────────────────────────────────

export const Hero = memo(() => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [progressKey, setProgressKey] = useState<number>(0);

  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, []);

  const pauseAndResume = useCallback((): void => {
    setIsAutoPlaying(false);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setIsAutoPlaying(true), RESUME_DELAY_MS);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgressKey((prev) => prev + 1);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroSlides.length;
    const img = new Image();
    img.src = heroSlides[nextIndex].image;
  }, [currentSlide]);

  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgressKey((prev) => prev + 1);
    pauseAndResume();
  }, [pauseAndResume]);

  const prevSlide = useCallback((): void => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgressKey((prev) => prev + 1);
    pauseAndResume();
  }, [pauseAndResume]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === " ") {
        e.preventDefault();
        setIsAutoPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide]);

  const goToSlide = useCallback(
    (index: number): void => {
      setCurrentSlide(index);
      setProgressKey((prev) => prev + 1);
      pauseAndResume();
    },
    [pauseAndResume]
  );

  const toggleAutoPlay = useCallback((): void => {
    if (resumeRef.current) clearTimeout(resumeRef.current);
    setIsAutoPlaying((p) => !p);
  }, []);

  return (
    <section
      className="relative min-h-[100vh] overflow-hidden"
      aria-label="Hero image slideshow"
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {currentSlide + 1} of {heroSlides.length}:{" "}
        {heroSlides[currentSlide].title}
      </div>

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
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wp-badge mb-6 border border-white/20 bg-white/10 text-white/90 backdrop-blur-sm">
              <Leaf className="h-4 w-4" />
              Proudly South African · Enriching Lives Since 2018
            </span>

            <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/80 md:text-xl">
              {heroSlides[currentSlide].subtitle}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="mint"
              size="xl"
              className="shadow-lg transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="xl"
              className="border-white/30 text-black backdrop-blur-sm hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link to="/bulk-orders">Bulk & Institutional Orders</Link>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            {[
              "R368 Compliant",
              "Non-GMO",
              "FSSC 22000",
              "Halaal Certified",
              "Proudly South African",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-mint" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 md:left-8 md:p-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white transition-all duration-300 hover:scale-110 hover:bg-black/70 md:right-8 md:p-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <button
        onClick={toggleAutoPlay}
        className="absolute bottom-24 right-4 z-20 rounded-full bg-black/50 p-2 text-white transition-all duration-300 hover:bg-black/70 md:bottom-32 md:right-8 md:p-2.5"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <Pause className="h-4 w-4 md:h-5 md:w-5" />
        ) : (
          <Play className="h-4 w-4 md:h-5 md:w-5" />
        )}
      </button>

      <div
        className="absolute bottom-[52px] left-1/2 z-20 h-0.5 w-48 -translate-x-1/2 overflow-hidden rounded-full bg-white/20"
        aria-hidden="true"
      >
        <div
          key={progressKey}
          className={`h-full rounded-full bg-mint ${
            isAutoPlaying ? "animate-[progress_5s_linear_forwards]" : "w-0"
          }`}
        />
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slide indicators"
      >
        {heroSlides.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              index === currentSlide
                ? "w-8 bg-mint"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;