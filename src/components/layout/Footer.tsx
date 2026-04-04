import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

// Import the logo and Proudly SA badge
import logo from "@/assets/logo.png";
import proudlySALogo from "@/assets/proudly-sa-logo.png";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-beige">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNavClick("/")}
              className="flex items-center hover:opacity-80"
            >
              <img 
                src={logo} 
                alt="Mint & Honey Logo" 
                className="h-14 w-auto object-contain md:h-16"
              />
            </button>
            <p className="text-sm text-muted-foreground">
              Manufacturer of non-GMO fortified cereals, corn & soya products for food manufacturers, NGOs, and feeding programs across Africa.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/MintAndHoneySA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mint & Honey on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-muted-foreground transition-colors hover:bg-mint-light hover:text-mint"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/mintandhoney_sa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mint & Honey on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-muted-foreground transition-colors hover:bg-mint-light hover:text-mint"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/mint-and-honey"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Mint & Honey on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-muted-foreground transition-colors hover:bg-mint-light hover:text-mint"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            {/* Proudly South African Badge */}
            <div className="pt-2">
              <img
                src={proudlySALogo}
                alt="Proudly South African Member"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["/shop", "/bulk-orders", "/about", "/impact"].map((path, index) => {
                const labels = ["Shop Products", "Bulk Orders", "About Us", "Our Impact"];
                return (
                  <li key={path}>
                    <button
                      onClick={() => handleNavClick(path)}
                      className="text-muted-foreground transition-colors hover:text-mint"
                    >
                      {labels[index]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-sm">
              {[
                "/shop/super-cereal-plus",
                "/shop/vuma-instant-porridge", 
                "/shop/fortified-maize-meal",
                "/shop/soy-flour"
              ].map((path, index) => {
                const labels = [
                  "Super Cereal Plus (CSB+)", 
                  "Vuma Instant Porridge",
                  "Fortified Maize Meal", 
                  "Soy Flour"
                ];
                return (
                  <li key={path}>
                    <button
                      onClick={() => handleNavClick(path)}
                      className="text-muted-foreground transition-colors hover:text-mint"
                    >
                      {labels[index]}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                <span>30 Charles Matthews Street, Atlantis Industrial, Western Cape, South Africa</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-mint" />
                <a href="tel:+27218790592" className="transition-colors hover:text-mint">+27 21 879 0592</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-mint" />
                <a href="mailto:info@mintandhoney.co.za" className="transition-colors hover:text-mint">info@mintandhoney.co.za</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Mint & Honey (Pty) Ltd. All rights reserved.</p>
          <p>
            Website Crafted by{" "}
            <a
              href="https://dynamicgenholdings.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-medium text-foreground transition-all duration-300 hover:text-mint after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-honey after:transition-all after:duration-300 hover:after:w-full"
            >
              DynamicGen Holdings
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
