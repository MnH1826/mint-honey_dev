import { memo, useCallback, useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  { icon: Phone, title: "Phone", details: ["+27 21 879 0592"] },
  { icon: Mail, title: "Email", details: ["info@mintandhoney.co.za", "reception@mintandhoney.co.za"] },
  { icon: MapPin, title: "Address", details: ["Mint And Honey (Pty) Ltd", "30 Charles Matthews Street, Atlantis Industrial, WC, SA, 7394", "South Africa"] },
  { icon: Clock, title: "Business Hours", details: ["Monday - Friday: 8am - 4pm", "Saturday: Closed", "Sunday: Closed"] },
];

const subjectOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "products", label: "Product Information" },
  { value: "bulk", label: "Bulk Orders" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Customer Support" },
  { value: "other", label: "Other" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic goes here
    setSubmitted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have questions about our products, need a quote, or want to discuss
            a partnership? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
              Send Us a Message
            </h2>
            <p className="mb-6 text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-light">
                  <ArrowRight className="h-8 w-8 text-mint" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                <Button variant="mint" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required autoComplete="given-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required autoComplete="family-name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required autoComplete="email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+27 21 123 4567" autoComplete="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <select
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject...</option>
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} required />
                </div>

                <Button type="submit" variant="mint" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <div key={info.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-mint-light">
                    <info.icon className="h-6 w-6 text-mint" />
                  </div>
                  <h3 className="mb-2 font-display font-semibold text-foreground">{info.title}</h3>
                  {info.details.map((detail) => (
                    <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map — lazy loaded */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392.5395960415705!2d18.487124200989577!3d-33.58860002446017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dccedde87f869bd%3A0xa6fc582a3a52c2c6!2z4oCL4oCL4oCLUmVzb2x1eCBBZnJpY2EgKFB0eSkgTHRk!5e1!3m2!1sen!2sza!4v1770725780273!5m2!1sen!2sza"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mint & Honey Location"
              />
            </div>

            {/* Quick CTA */}
            <div className="rounded-xl bg-honey-light p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                Need Immediate Assistance?
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Our team is available during business hours to help with urgent inquiries.
              </p>
              <Button variant="honey" asChild>
                <a href="tel:+27218790592">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +27 21 879 0592
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;