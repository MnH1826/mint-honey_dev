import { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

interface LayoutProps {
  children: React.ReactNode;
}

// Page titles configuration
const pageTitles: Record<string, string> = {
  '/': 'Mint & Honey | Non-GMO Fortified Food Manufacturer | South Africa',
  '/products': 'Products | Mint & Honey - Fortified Cereals & Nutrition Products', 
  '/bulk-orders': 'Bulk Orders | Mint & Honey - Institutional & Wholesale Pricing',
  '/about': 'About Us | Mint & Honey - Our Story & Mission',
  '/impact': 'Our Impact | Mint & Honey - Fighting Malnutrition in Africa',
  '/contact': 'Contact | Mint & Honey - Get In Touch',
  '/privacy-policy': 'Privacy Policy | Mint & Honey',
  '/terms-conditions': 'Terms & Conditions | Mint & Honey',
};

// ─── Google Analytics ────────────────────────────────────────

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // REPLACE WITH YOUR ID

// Google Analytics Script Component
const GoogleAnalytics = memo(() => {
  useEffect(() => {
    // Load the GA script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize GA
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID);

    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);

  return null;
});
GoogleAnalytics.displayName = "GoogleAnalytics";

// ─── Existing Components ────────────────────────────────────

const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
});
ScrollToTop.displayName = "ScrollToTop";

const PageTitleUpdater = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = pageTitles[pathname] || pageTitles['/'];
    document.title = title;
  }, [pathname]);

  return null;
});
PageTitleUpdater.displayName = "PageTitleUpdater";

// ─── TypeScript Declaration ─────────────────────────────────

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// ─── Layout ──────────────────────────────────────────────────

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <GoogleAnalytics />
      <ScrollToTop />
      <PageTitleUpdater />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
});

Layout.displayName = "Layout";