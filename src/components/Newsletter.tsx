import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const emailSchema = z
  .string()
  .trim()
  .nonempty({ message: "Please enter your email address" })
  .email({ message: "Please enter a valid email address" })
  .max(255, { message: "Email must be less than 255 characters" });

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setStatus("loading");
    // Placeholder - simulate API call
    setTimeout(() => {
      setStatus("success");
      toast({
        title: "Welcome to the family!",
        description: "You're now subscribed to the Mint & Honey newsletter.",
      });
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-mint via-mint-dark to-mint py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-honey blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-background/95 p-8 shadow-2xl backdrop-blur md:p-12"
          >
            <div className="text-center">
              <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-light">
                <Mail className="h-6 w-6 text-mint-dark" />
              </div>
              <span className="wp-badge mb-4 inline-flex items-center gap-1.5 bg-honey/15 text-honey-dark">
                <Sparkles className="h-3 w-3" />
                Monthly Newsletter
              </span>
              <h2 className="mb-3 font-display text-3xl text-foreground md:text-4xl">
                Join Our Monthly Newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base text-muted-foreground md:text-lg">
                Stay updated with Mint &amp; Honey news, product launches, and community impact stories.
              </p>

              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError(null);
                      }}
                      placeholder="your@email.com"
                      aria-label="Email address"
                      aria-invalid={!!error}
                      disabled={status === "loading" || status === "success"}
                      className="h-12 pl-10"
                      maxLength={255}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "loading" || status === "success"}
                    className="h-12 bg-mint text-primary-foreground hover:bg-mint-dark"
                  >
                    {status === "success" ? (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Subscribed
                      </>
                    ) : status === "loading" ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="mt-2 text-left text-sm font-medium text-destructive" role="alert">
                    {error}
                  </p>
                )}
                {status === "success" && (
                  <p className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-mint-dark">
                    <CheckCircle2 className="h-4 w-4" />
                    Thank you! Check your inbox to confirm your subscription.
                  </p>
                )}
              </form>

              <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" />
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
