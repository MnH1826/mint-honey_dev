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

// Separate component so it doesn't cause Layout to re-render
const ScrollToTop = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    // instant on route change — smooth feels laggy on navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
});
ScrollToTop.displayName = "ScrollToTop";

// Update page title on route change
const PageTitleUpdater = memo(() => {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = pageTitles[pathname] || pageTitles['/'];
    document.title = title;
  }, [pathname]);

  return null;
});
PageTitleUpdater.displayName = "PageTitleUpdater";

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <PageTitleUpdater />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
      {/* ❌ REMOVED: CartDrawer */}
    </div>
  );
});

Layout.displayName = "Layout";