import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation with scroll to top
  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-border bg-beige">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2 hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white overflow-hidden">
                <img 
                  src="/logo_icon.png" 
                  alt="Mint & Honey Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <span className="font-display text-xl font-semibold">Mint & Honey</span>
            </button>
            <p className="text-sm text-muted-foreground">
              Nutritious, fortified food products supporting food security and community health across South Africa.
            </p>
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
                  "Super Cereal Plus", 
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
                <span>+27 21 879 0592</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-mint" />
                <span>info@mintandhoney.co.za</span>
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