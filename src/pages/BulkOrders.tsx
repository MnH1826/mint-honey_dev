import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Package, Users, FileText, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { products } from "@/lib/products";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const benefits = [
  "Competitive pricing for large orders",
  "Customizable packaging options",
  "Dedicated account management",
  "Priority delivery scheduling",
  "Nutritional documentation provided",
  "Quality certificates included"
];

const BulkOrders = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(formRef.current);
      
      const productsSelect = formRef.current.querySelector("#products") as HTMLSelectElement;
      const selectedProducts = Array.from(productsSelect.selectedOptions)
        .map(opt => opt.text)
        .join(", ");
      
      const data = {
        name: formData.get("name") as string,
        organization: formData.get("organization") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        type: formData.get("type") as string,
        products: selectedProducts || "Not specified",
        quantity: formData.get("quantity") as string || "Not specified",
        message: formData.get("message") as string || "",
        date: new Date().toLocaleDateString("en-ZA", { 
          year: "numeric", 
          month: "long", 
          day: "numeric" 
        }),
        time: new Date().toLocaleTimeString("en-ZA", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_BULK_TEAM_TEMPLATE,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitted(true);
        formRef.current.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Email error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Bulk & Institutional Orders
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Partner with us to provide nutritious food solutions for your organization, 
            school, or feeding program. We offer competitive pricing and reliable supply.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info Section */}
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-foreground md:text-3xl">
              Why Choose Mint & Honey for Bulk Orders?
            </h2>
            
            <div className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-mint" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-semibold">Minimum Order Quantities</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Schools & NGOs</span>
                  <span className="font-medium">100kg per product</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Feeding Schemes</span>
                  <span className="font-medium">250kg per product</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Institutional Buyers</span>
                  <span className="font-medium">500kg per product</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 font-display text-lg font-semibold">Our Product Range</h3>
              <div className="space-y-2">
                {products.map(product => (
                  <div key={product.id} className="flex justify-between border-b border-border py-2 last:border-0">
                    <span className="text-sm">{product.shortName}</span>
                    <span className="text-sm text-muted-foreground">{product.weight || "Various sizes"}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Contact us for current pricing and custom quotes on large orders.
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-mint-light p-6">
              <div className="flex items-start gap-4">
                <FileText className="h-8 w-8 flex-shrink-0 text-mint" />
                <div>
                  <h4 className="mb-2 font-display font-semibold">Product Specifications</h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Download detailed nutritional information, ingredient lists, 
                    and packaging specifications for all our products.
                  </p>
                  <Button 
                    onClick={() => navigate("/coming-soon")}
                    className="bg-mint hover:bg-mint-dark text-white shadow-sm hover:shadow transition-colors gap-2"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Product Specs (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
              Request a Bulk Quote
            </h2>
            <p className="mb-6 text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mint-light">
                  <CheckCircle className="h-8 w-8 text-mint" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">Enquiry Sent!</h3>
                <p className="text-muted-foreground">Our bulk sales team will contact you within 24 hours.</p>
                <Button variant="mint" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Contact Name *</Label>
                    <Input id="name" name="name" placeholder="Your full name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input id="organization" name="organization" placeholder="Company or organization" required />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+27 21 879 0592" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Organization Type *</Label>
                  <select
                    id="type"
                    name="type"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    required
                  >
                    <option value="">Select type...</option>
                    <option value="School / Educational Institution">School / Educational Institution</option>
                    <option value="NGO / Non-profit">NGO / Non-profit</option>
                    <option value="Feeding Scheme">Feeding Scheme</option>
                    <option value="Healthcare Facility">Healthcare Facility</option>
                    <option value="Government Department">Government Department</option>
                    <option value="Private Business">Private Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="products">Products of Interest</Label>
                  <select
                    id="products"
                    name="products"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    multiple
                  >
                    {products.map(product => (
                      <option key={product.id} value={product.id}>
                        {product.shortName}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-muted-foreground">Hold Ctrl/Cmd to select multiple</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Estimated Monthly Quantity</Label>
                  <Input id="quantity" name="quantity" placeholder="e.g., 500kg per month" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements, delivery location, timeline, etc."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-mint hover:bg-mint-dark text-white gap-2" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 rounded-2xl bg-honey-light p-8 text-center md:p-12">
          <Phone className="mx-auto mb-4 h-12 w-12 text-honey" />
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground">
            Prefer to Talk Directly?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Our bulk sales team is available Monday to Friday, 8am - 5pm SAST.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => window.location.href = "tel:+27218790592"}
              className="bg-honey hover:bg-honey-dark text-white"
            >
              Call +27 21 879 0592
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              variant="outline"
              className="border-honey text-honey hover:bg-honey-light"
            >
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrders;