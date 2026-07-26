import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { lazy, Suspense } from "react";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const BulkOrders = lazy(() => import("./pages/BulkOrders"));
const About = lazy(() => import("./pages/About"));
const Impact = lazy(() => import("./pages/Impact"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const Brochure = lazy(() => import("./pages/brochure"));
const ComingSoon = lazy(() =>
  import("./components/ComingSoon").then((m) => ({ default: m.ComingSoon }))
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-8 h-8 border-4 border-[#4CAF50] border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* ✅ Fullscreen brochure route — NO Layout */}
            <Route path="/brochure" element={<Brochure />} />

            {/* ✅ All other routes wrapped in Layout */}
            <Route
              path="/"
              element={
                <Layout>
                  <Index />
                </Layout>
              }
            />
            <Route
              path="/products"
              element={
                <Layout>
                  <Products />
                </Layout>
              }
            />
            <Route
              path="/products/:id"
              element={
                <Layout>
                  <ProductDetail />
                </Layout>
              }
            />
            <Route
              path="/bulk-orders"
              element={
                <Layout>
                  <BulkOrders />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <About />
                </Layout>
              }
            />
            <Route
              path="/impact"
              element={
                <Layout>
                  <Impact />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/privacy-policy"
              element={
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              }
            />
            <Route
              path="/terms-conditions"
              element={
                <Layout>
                  <TermsConditions />
                </Layout>
              }
            />
            <Route
              path="/coming-soon"
              element={
                <Layout>
                  <ComingSoon />
                </Layout>
              }
            />
            <Route
              path="*"
              element={
                <Layout>
                  <NotFound />
                </Layout>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;