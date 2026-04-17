import { useEffect } from "react";
import { FileText } from "lucide-react";

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Mint & Honey";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Terms & Conditions for Mint & Honey - Read the terms governing the use of our website, products, and services."
      );
    }
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-beige py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-light">
            <FileText className="h-6 w-6 text-mint-dark" />
          </div>
          <h1 className="mb-3 font-display text-foreground">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-10 text-foreground">
            <p className="text-lg text-muted-foreground">
              Welcome to Mint &amp; Honey. These Terms and Conditions ("Terms") govern your use of our website and the purchase of our products. By accessing our site or placing an order, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By using this website, you confirm that you are at least 18 years old (or have parental consent) and accept these Terms in full. If you do not agree to any part of these Terms, you must not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">2. Products and Pricing</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>All product descriptions, images, and specifications are provided for guidance only and may vary slightly from the actual product.</li>
                <li>Prices are listed in South African Rand (ZAR) and are inclusive of VAT where applicable.</li>
                <li>We reserve the right to change prices at any time without prior notice. Prices confirmed at the time of order will be honoured.</li>
                <li>Bulk order pricing is subject to a separate quotation and agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">3. Orders and Payments</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>By placing an order, you make an offer to purchase products subject to these Terms.</li>
                <li>We reserve the right to accept or decline any order at our discretion.</li>
                <li>Payment must be made in full at the time of order via approved payment methods.</li>
                <li>For bulk and wholesale orders, payment terms will be agreed in writing.</li>
                <li>You are responsible for providing accurate billing and shipping information.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">4. Shipping and Delivery</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>We deliver throughout South Africa and arrange exports to selected African countries.</li>
                <li>Estimated delivery times are provided in good faith but are not guaranteed.</li>
                <li>Risk in the products passes to you upon delivery.</li>
                <li>Shipping fees are calculated based on order weight, destination, and product type.</li>
                <li>Any delivery delays caused by force majeure events are beyond our control.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">5. Returns and Refunds</h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Due to the nature of food products, returns are only accepted for items that are damaged, defective, or incorrectly supplied.</li>
                <li>Claims must be reported within 48 hours of delivery, supported by photographic evidence.</li>
                <li>Approved refunds will be processed to the original payment method within 14 working days.</li>
                <li>Bulk order returns are subject to the terms of the specific supply agreement.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including logos, text, images, graphics, and product packaging, is the property of Mint &amp; Honey (Pty) Ltd or its licensors. You may not reproduce, distribute, or use any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">7. Limitation of Liability</h2>
              <p className="mb-3 text-muted-foreground">
                To the fullest extent permitted by law, Mint &amp; Honey shall not be liable for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Any indirect, incidental, or consequential damages arising from the use of our website or products.</li>
                <li>Loss of profits, revenue, data, or business opportunities.</li>
                <li>Any damages exceeding the value of the products purchased.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Nothing in these Terms excludes liability for death, personal injury, or fraud where it would be unlawful to do so.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">8. User Conduct</h2>
              <p className="text-muted-foreground">
                You agree not to use this website for any unlawful purpose, transmit harmful content, attempt unauthorised access, or interfere with the operation of the site in any way.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">9. Privacy</h2>
              <p className="text-muted-foreground">
                Your use of our website is also governed by our Privacy Policy, which describes how we collect, use, and safeguard your personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes shall be resolved through the courts of South Africa, with venue in Cape Town, Western Cape.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">11. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. The latest version will always be available on this page. Continued use of the website constitutes acceptance of any updated Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:info@mintandhoney.co.za" className="font-semibold text-mint hover:text-mint-dark">
                  info@mintandhoney.co.za
                </a>{" "}
                or call{" "}
                <a href="tel:+27218790592" className="font-semibold text-mint hover:text-mint-dark">
                  +27 21 879 0592
                </a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
