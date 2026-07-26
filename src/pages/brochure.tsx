import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PAGES = [
  { src: "/brochure/panel-1.jpg", w: 900, h: 2368 },
  { src: "/brochure/panel-2.jpg", w: 900, h: 2368 },
  { src: "/brochure/panel-3.jpg", w: 900, h: 2368 },
  { src: "/brochure/panel-4.jpg", w: 900, h: 2365 },
  { src: "/brochure/page-5.jpg", w: 1600, h: 1148 },
];

export default function Brochure() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.title = "Mint & Honey | Brochure";
    
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.top = "0";
    document.body.style.left = "0";
    document.documentElement.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.height = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent((prev) => {
      if (index < 0 || index >= PAGES.length) return prev;
      return index;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [current, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 50) goTo(current - 1);
    else if (dx < -50) goTo(current + 1);
    touchStartX.current = null;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventScroll = (e: TouchEvent) => {
      if (container.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", preventScroll, { passive: false });
    return () => {
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  const getPageStyles = (page: typeof PAGES[0]) => {
    const aspectRatio = page.w / page.h;
    const isLandscape = aspectRatio > 1;

    if (isLandscape) {
      return {
        width: isMobile ? "min(95vw, 1000px)" : "min(85vw, 1000px)",
        height: "auto",
        maxWidth: isMobile ? "min(98vw, 1100px)" : "min(92vw, 1100px)",
        maxHeight: isMobile ? "min(75vh, 700px)" : "min(75vh, 700px)",
      };
    } else {
      return {
        width: "auto",
        height: isMobile ? "min(92vh, 850px)" : "min(78vh, 850px)",
        maxWidth: isMobile ? "min(95vw, 800px)" : "min(85vw, 800px)",
        maxHeight: isMobile ? "min(95vh, 900px)" : "min(85vh, 900px)",
      };
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        height: "100dvh",
        width: "100dvw",
        background:
          "radial-gradient(ellipse at top, rgba(127,184,74,0.08), transparent 60%), #14261a",
        zIndex: 99999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        overscrollBehavior: "none",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Brand mark */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 flex justify-center pt-2 sm:pt-3 md:pt-5 z-10">
        <span className="text-[8px] sm:text-[11px] md:text-[13px] tracking-[1.5px] sm:tracking-[3px] uppercase font-semibold text-[#f2efe4] opacity-40">
          Mint &amp; Honey
        </span>
      </div>

      {/* Pages stage */}
      <div className="relative w-full h-full flex items-center justify-center px-1 sm:px-3 md:px-6">
        {PAGES.map((page, i) => {
          const isActive = i === current;
          const isPrev = i === current - 1;
          const isNext = i === current + 1;
          const styles = getPageStyles(page);

          let transform = "translate(-50%, -50%) scale(0.95)";
          let opacity = 0;
          let zIndex = 0;
          let pointerEvents: "auto" | "none" = "none";

          if (isActive) {
            transform = "translate(-50%, -50%) scale(1)";
            opacity = 1;
            zIndex = 20;
            pointerEvents = "auto";
          } else if (isPrev) {
            transform = "translate(-50%, -50%) scale(0.85) translateX(-15px)";
            opacity = 0.3;
            zIndex = 10;
          } else if (isNext) {
            transform = "translate(-50%, -50%) scale(0.85) translateX(15px)";
            opacity = 0.3;
            zIndex = 10;
          }

          return (
            <div
              key={page.src}
              className="absolute rounded-lg overflow-hidden transition-all duration-[400ms] ease-out"
              style={{
                aspectRatio: `${page.w} / ${page.h}`,
                width: styles.width,
                height: styles.height,
                maxWidth: styles.maxWidth,
                maxHeight: styles.maxHeight,
                opacity: opacity,
                transform: transform,
                pointerEvents: pointerEvents,
                zIndex: zIndex,
                top: "50%",
                left: "50%",
                boxShadow:
                  isActive
                    ? "0 30px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)"
                    : "0 15px 40px rgba(0,0,0,0.3)",
              }}
            >
              <img
                src={page.src}
                alt={`Mint & Honey brochure page ${i + 1}`}
                className="block w-full h-full rounded-lg"
                style={{
                  objectFit: "contain",
                }}
                loading={isActive || isPrev || isNext ? "eager" : "lazy"}
                draggable={false}
              />
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <button
        aria-label="Previous page"
        onClick={() => goTo(current - 1)}
        disabled={current === 0}
        className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-3 md:left-6 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[#f2efe4] border border-[#f2efe4]/20 bg-[#f2efe4]/10 backdrop-blur-md transition-all hover:bg-[#7fb84a]/35 active:scale-90 disabled:opacity-20 disabled:pointer-events-none z-30"
      >
        <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </button>
      <button
        aria-label="Next page"
        onClick={() => goTo(current + 1)}
        disabled={current === PAGES.length - 1}
        className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-3 md:right-6 w-7 h-7 sm:w-9 sm:h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[#f2efe4] border border-[#f2efe4]/20 bg-[#f2efe4]/10 backdrop-blur-md transition-all hover:bg-[#7fb84a]/35 active:scale-90 disabled:opacity-20 disabled:pointer-events-none z-30"
      >
        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      </button>

      {/* Dots + counter */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-6 left-0 right-0 flex flex-col items-center gap-1 sm:gap-2 z-30">
        <div className="flex gap-1 sm:gap-1.5 md:gap-2">
          {PAGES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to page ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "12px" : "5px",
                height: "5px",
                background:
                  i === current ? "#7fb84a" : "rgba(242,239,228,0.2)",
              }}
            />
          ))}
        </div>
        <div className="text-[8px] sm:text-[10px] md:text-[11px] tracking-[1.5px] text-[#f2efe4] opacity-40">
          {current + 1} / {PAGES.length}
        </div>
      </div>
    </div>
  );
}