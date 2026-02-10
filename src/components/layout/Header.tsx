import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

// Import the logo
import logo from "@/assets/logo.png";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/bulk-orders", label: "Bulk Orders" },
  { path: "/about", label: "About" },
  { path: "/impact", label: "Our Impact" },
  { path: "/contact", label: "Contact" }
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  // Function to handle navigation with scroll to top
  const handleNavClick = (path: string) => {
    // Only scroll if we're already on the same route
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Navigate to the new page
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo - Increased size */}
          <Link 
            to="/" 
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center justify-center">
              <img 
                src={logo} 
                alt="Mint & Honey Logo" 
                className="h-14 w-auto object-contain md:h-16"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map(link => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-mint-light text-mint-dark"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-honey text-xs font-medium text-secondary-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="border-t border-border py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-mint-light text-mint-dark"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};