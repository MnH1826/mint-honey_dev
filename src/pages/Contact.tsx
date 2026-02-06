import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 11 123 4567", "+27 11 123 4568"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@mintandhoney.co.za", "sales@mintandhoney.co.za"]
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Industrial Road", "Johannesburg, 2001", "South Africa"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 8am - 5pm", "Saturday: 9am - 1pm", "Sunday: Closed"]
  }
];

const Contact = () => {
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

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+27 11 123 4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <select
                  id="subject"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="general">General Inquiry</option>
                  <option value="products">Product Information</option>
                  <option value="bulk">Bulk Orders</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button variant="mint" size="lg" className="w-full">
                Send Message
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-mint-light">
                    <info.icon className="h-6 w-6 text-mint" />
                  </div>
                  <h3 className="mb-2 font-display font-semibold text-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114669.25354979087!2d27.91640565!3d-26.1715046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1696000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mint & Honey Location"
              />
            </div>

            {/* Quick Contact CTA */}
            <div className="rounded-xl bg-honey-light p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                Need Immediate Assistance?
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Our team is available during business hours to help with urgent inquiries.
              </p>
              <Button variant="honey">
                <Phone className="mr-2 h-4 w-4" />
                Call Now: +27 11 123 4567
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
