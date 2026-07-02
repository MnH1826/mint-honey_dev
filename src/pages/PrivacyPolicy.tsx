import { useEffect } from "react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Mint & Honey";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Privacy Policy for Mint & Honey - Learn how we collect, use, and protect your personal information in compliance with POPIA."
      );
    }
  }, []);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="bg-beige py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-mint-light">
            <Shield className="h-6 w-6 text-mint-dark" />
          </div>
          <h1 className="mb-3 font-display text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-ZA", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="prose prose-lg max-w-none space-y-10 text-foreground">
            <div>
              <p className="text-lg text-muted-foreground">
                Mint &amp; Honey (Pty) Ltd ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or purchase our products, in compliance with the Protection of Personal Information Act, 2013 (POPIA).
              </p>
            </div>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">1. Information We Collect</h2>
              <p className="mb-3 text-muted-foreground">We may collect the following types of information:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, billing and shipping address.</li>
                <li><strong className="text-foreground">Order Information:</strong> Products purchased, quantities, payment details (processed securely by third-party providers).</li>
                <li><strong className="text-foreground">Business Information:</strong> Company name, VAT number, and contact details for bulk orders.</li>
                <li><strong className="text-foreground">Technical Information:</strong> IP address, browser type, device information, and pages visited.</li>
                <li><strong className="text-foreground">Communication Data:</strong> Messages sent through contact forms or newsletter subscriptions.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">2. How We Use Your Information</h2>
              <p className="mb-3 text-muted-foreground">We use the information we collect to:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Process and fulfil your orders and bulk order enquiries.</li>
                <li>Communicate with you about your orders, products, and services.</li>
                <li>Send newsletters and marketing communications (only with your consent).</li>
                <li>Improve our website, products, and customer experience.</li>
                <li>Comply with legal obligations and prevent fraudulent activities.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">3. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us remember your preferences, analyse site traffic, and personalise content. You can control or disable cookies through your browser settings, although doing so may affect site functionality.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include SSL encryption, secure servers, and limited access to personal data on a need-to-know basis. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">5. POPIA Compliance</h2>
              <p className="mb-3 text-muted-foreground">
                As a South African company, we comply with the Protection of Personal Information Act, 2013 (POPIA). This means we:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Collect personal information lawfully and for specific, defined purposes.</li>
                <li>Process information only with your consent or where legally permitted.</li>
                <li>Keep your information accurate, complete, and up to date.</li>
                <li>Retain your data only for as long as necessary.</li>
                <li>Do not share your personal information with third parties without consent, except where required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">6. Your Rights</h2>
              <p className="mb-3 text-muted-foreground">Under POPIA, you have the right to:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Access the personal information we hold about you.{" "}
                  <a 
                    href="/docs/Form%2002%20-%20Request%20for%20Access%20to%20Record%20(003).pdf" 
                    className="text-mint hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here
                  </a>
                  <a> to complete the Request for Access to Record form (Form 02), and Submit to <a href="mailto:info@mintandhoney.co.za"  className="transition-colors hover:text-mint" > info@mintandhoney.co.za </a>.</a>
                </li>
                <li>Request correction or deletion of inaccurate or outdated information.</li>
                <li>Object to the processing of your personal information.</li>
                <li>Withdraw your consent at any time.</li>
                <li>Lodge a complaint with the Information Regulator of South Africa.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">7. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may share data with trusted third parties (such as payment processors, delivery partners, and email service providers) strictly to fulfil our services. These parties are contractually obligated to protect your information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">9. Contact Information</h2>
              <p className="mb-4 text-muted-foreground">
                If you have any questions, requests, or concerns about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="rounded-xl bg-beige p-6">
                <p className="mb-3 font-semibold text-foreground">Mint &amp; Honey (Pty) Ltd</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                    <span>30 Charles Matthews Street, Atlantis Industrial, Western Cape, South Africa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-mint" />
                    <a href="tel:+27218790592" className="hover:text-mint">+27 21 879 0592</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-mint" />
                    <a href="mailto:info@mintandhoney.co.za" className="hover:text-mint">info@mintandhoney.co.za</a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;