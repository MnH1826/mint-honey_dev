import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

import logo from "@/assets/logo.png";
import proudlySALogo from "@/assets/proudly-sa-logo.png";
import halaalLogo from "@/assets/halaal_ht_2076.webp";

const footerProducts = [
  { path: "/shop/vuma-instant-porridge",  label: "Vuma Instant Porridge"      },
  { path: "/shop/corn-soya-blend",        label: "Super Cereal (CSB++)"        },
  { path: "/shop/maize-meal",             label: "Fortified Maize Meal"        },
  { path: "/shop/soya-flour",             label: "Enzyme Active Soya Flour"    },
  { path: "/shop/soya-mince-chicken",     label: "Soya Mince — Chicken"        },
  { path: "/shop/soya-mince-beef",        label: "Soya Mince — Beef"           },
  { path: "/shop/soya-mince-oxtail",      label: "Soya Mince — Oxtail"         },
];

const quickLinks = [
  { path: "/shop",             label: "Shop Products"      },
  { path: "/bulk-orders",      label: "Bulk Orders"        },
  { path: "/about",            label: "About Us"           },
  { path: "/impact",           label: "Our Impact"         },
  { path: "/privacy-policy",   label: "Privacy Policy"     },
  { path: "/terms-conditions", label: "Terms & Conditions" },
];

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
              Manufacturer of non-GMO fortified cereals, corn & soya products
              for food manufacturers, NGOs, and feeding programmes across Africa.
            </p>

            {/* Social */}
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

            {/* Certification logos */}
            <div className="flex items-center gap-4 pt-2">
              <img
                src={proudlySALogo}
                alt="Proudly South African Member"
                className="h-16 w-auto object-contain"
              />
              <img
                src={halaalLogo}
                alt="Halaal Certified — HT 2076"
                className="h-24 w-auto object-contain"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <button
                    onClick={() => handleNavClick(path)}
                    className="text-left text-muted-foreground transition-colors hover:text-mint"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Our Products</h4>
            <ul className="space-y-2 text-sm">
              {footerProducts.map(({ path, label }) => (
                <li key={path}>
                  <button
                    onClick={() => handleNavClick(path)}
                    className="text-left text-muted-foreground transition-colors hover:text-mint"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                <span>
                  30 Charles Matthews Street, Atlantis Industrial,
                  Western Cape, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-mint" />
                <a
                  href="tel:+27218790592"
                  className="transition-colors hover:text-mint"
                >
                  +27 21 879 0592
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-mint" />
                <a
                  href="mailto:info@mintandhoney.co.za"
                  className="transition-colors hover:text-mint"
                >
                  info@mintandhoney.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <p>
            Copyright © {new Date().getFullYear()}, Mint And Honey (Pty) Ltd.
            All rights reserved.
          </p>
          <p>
            Website crafted by{" "}
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