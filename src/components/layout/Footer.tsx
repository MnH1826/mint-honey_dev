import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-beige">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">Mint & Honey</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Nutritious, fortified food products supporting food security and community health across South Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground transition-colors hover:text-mint">
                  Shop Products
                </Link>
              </li>
              <li>
                <Link to="/bulk-orders" className="text-muted-foreground transition-colors hover:text-mint">
                  Bulk Orders
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-mint">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-muted-foreground transition-colors hover:text-mint">
                  Our Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop/super-cereal-plus" className="text-muted-foreground transition-colors hover:text-mint">
                  Super Cereal Plus
                </Link>
              </li>
              <li>
                <Link to="/shop/vuma-instant-porridge" className="text-muted-foreground transition-colors hover:text-mint">
                  Vuma Instant Porridge
                </Link>
              </li>
              <li>
                <Link to="/shop/fortified-maize-meal" className="text-muted-foreground transition-colors hover:text-mint">
                  Fortified Maize Meal
                </Link>
              </li>
              <li>
                <Link to="/shop/soy-flour" className="text-muted-foreground transition-colors hover:text-mint">
                  Soy Flour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                <span>123 Industrial Road, Johannesburg, South Africa</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-mint" />
                <span>+27 11 123 4567</span>
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
