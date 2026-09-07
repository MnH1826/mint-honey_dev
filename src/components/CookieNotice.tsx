import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      // Show the notice after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Store that user declined (so we don't show again in same session)
    localStorage.setItem("cookiesAccepted", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint-light mt-1">
              <Cookie className="h-5 w-5 text-mint" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                We use cookies to enhance your experience.
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                By continuing to visit this site you agree to our use of cookies.{" "}
                <Link to="/privacy-policy" className="text-mint hover:underline font-medium">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="flex-1 md:flex-none text-muted-foreground hover:text-foreground"
            >
              Decline
            </Button>
            <Button
              variant="mint"
              size="sm"
              onClick={acceptCookies}
              className="flex-1 md:flex-none"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};