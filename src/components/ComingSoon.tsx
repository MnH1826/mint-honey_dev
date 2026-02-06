import { Leaf, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-mint">
              <img 
                src="/logo_icon.png" 
                alt="Mint & Honey Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
          </div>

          {/* Header */}
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            <span className="text-gradient-mint">Something Amazing</span>
            <br />
            <span className="text-gradient-honey">Is Coming Soon!</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            We're working hard to bring you an incredible online experience. 
            Our nutritious food products will be available for purchase very soon.
          </p>

          {/* Countdown/Status */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2 rounded-full bg-mint-light px-4 py-2">
              <Clock className="h-5 w-5 text-mint" />
              <span className="font-medium text-mint-dark">Launching Soon</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-honey-light px-4 py-2">
              <Leaf className="h-5 w-5 text-honey" />
              <span className="font-medium text-honey-dark">Nutritious Food Solutions</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-12 rounded-2xl bg-white p-8 shadow-card">
            <h2 className="mb-4 font-display text-2xl font-semibold text-foreground">
              What We're Building
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mint-light">
                  <Leaf className="h-6 w-6 text-mint" />
                </div>
                <h3 className="font-display text-lg font-semibold">Nutritious Products</h3>
                <p className="text-sm text-muted-foreground">
                  Fortified cereals, porridges, and grain-based products for healthier communities.
                </p>
              </div>

              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-honey-light">
                  <svg className="h-6 w-6 text-honey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">Easy Online Shopping</h3>
                <p className="text-sm text-muted-foreground">
                  Shop our nutritious food products online with secure checkout and delivery.
                </p>
              </div>

              <div className="space-y-3">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-beige">
                  <svg className="h-6 w-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold">Community Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting food security and nutrition programs across South Africa.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-12 rounded-2xl bg-gradient-hero p-8">
            <h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
              Get In Touch
            </h2>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft">
                  <Mail className="h-5 w-5 text-mint" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:info@mintandhoney.co.za" className="font-medium text-foreground hover:text-mint">
                    info@mintandhoney.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-soft">
                  <Phone className="h-5 w-5 text-honey" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+27218790592" className="font-medium text-foreground hover:text-honey">
                    +27 21 879 0592
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Be the first to know when we launch!
            </h3>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-mint hover:bg-mint-dark">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe for Updates
              </Button>
              <Button size="lg" variant="outline" className="border-mint text-mint hover:bg-mint-light">
                View Our Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};