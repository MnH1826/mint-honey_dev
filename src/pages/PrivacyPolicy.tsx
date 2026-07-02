import { useEffect } from "react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
                Mint &amp; Honey (Pty) Ltd ("Mint &amp; Honey", "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, store and protect your personal information when you visit our website, submit an enquiry, request a quotation, purchase our products or otherwise interact with us.
              </p>
              <p className="mt-4 text-muted-foreground">
                As the <strong>Responsible Party</strong> for the personal information processed through this Website, Mint &amp; Honey complies with the <strong>Protection of Personal Information Act, 2013 (POPIA)</strong> and other applicable South African laws governing the protection of personal information.
              </p>
            </div>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">1. Scope of This Policy</h2>
              <p className="text-muted-foreground">
                This Privacy Policy applies to all personal information collected through:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>our Website;</li>
                <li>contact and enquiry forms;</li>
                <li>email correspondence;</li>
                <li>telephone communications;</li>
                <li>quotations and supply enquiries; and</li>
                <li>any other interactions with Mint &amp; Honey relating to our products and services.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                By using our Website or providing your personal information, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">2. Information We Collect</h2>
              <p className="mb-3 text-muted-foreground">
                Depending on how you interact with us, we may collect the following categories of personal information:
              </p>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Identity Information</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Full name</li>
                <li>Job title (where applicable)</li>
              </ul>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Contact Information</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Physical or delivery address (where provided)</li>
              </ul>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Business Information</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Company or organisation name</li>
                <li>Organisation type</li>
                <li>VAT registration number (where applicable)</li>
                <li>Delivery and billing information</li>
              </ul>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Enquiry and Transaction Information</h3>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Products of interest</li>
                <li>Estimated order quantities</li>
                <li>Delivery requirements</li>
                <li>Purchase enquiries</li>
                <li>Correspondence with us</li>
              </ul>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Technical Information</h3>
              <p className="text-muted-foreground">When you visit our Website, we may automatically collect:</p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages viewed</li>
                <li>Date and time of visits</li>
                <li>Referring website</li>
                <li>General website usage statistics</li>
              </ul>

              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">Marketing Preferences</h3>
              <p className="text-muted-foreground">
                Where applicable, we record your preferences regarding receiving newsletters, promotional material and other marketing communications.
              </p>
              <p className="mt-3 text-muted-foreground">
                We do not knowingly collect personal information from children under the age of 18.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">3. How We Collect Information</h2>
              <p className="text-muted-foreground">
                We collect personal information:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>directly from you when you contact us;</li>
                <li>when you complete forms on our Website;</li>
                <li>when you request quotations;</li>
                <li>through cookies and website analytics;</li>
                <li>through email or telephone communications;</li>
                <li>from publicly available business information where appropriate; and</li>
                <li>where otherwise permitted by law.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Certain information is required to respond to enquiries or provide quotations. Failure to provide required information may prevent us from processing your request.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">4. Lawful Basis for Processing</h2>
              <p className="text-muted-foreground">
                In accordance with POPIA, we process personal information only where there is a lawful basis to do so, including where:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>you have provided your consent;</li>
                <li>processing is necessary to provide quotations or fulfil contractual obligations;</li>
                <li>processing is required by law;</li>
                <li>processing protects your legitimate interests; or</li>
                <li>processing is necessary for Mint &amp; Honey's legitimate business interests, provided your rights are not overridden.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">5. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use personal information to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>respond to enquiries and quotation requests;</li>
                <li>process and manage customer orders;</li>
                <li>communicate regarding products and services;</li>
                <li>deliver products;</li>
                <li>provide customer support;</li>
                <li>improve our Website and services;</li>
                <li>maintain business records;</li>
                <li>comply with legal and regulatory obligations;</li>
                <li>prevent fraud and unlawful activities; and</li>
                <li>send marketing communications where you have consented to receive them.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                You may unsubscribe from marketing communications at any time by following the unsubscribe instructions in our emails or by contacting us directly.
              </p>
              <p className="mt-3 text-muted-foreground">
                We do not use automated decision-making or profiling that produces legal or similarly significant effects.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">6. Cookies and Website Analytics</h2>
              <p className="text-muted-foreground">
                Our Website uses cookies and similar technologies to improve functionality, analyse Website usage and enhance your browsing experience.
              </p>
              <p className="mt-3 text-muted-foreground">
                Cookies may include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Essential cookies required for Website operation;</li>
                <li>Functional cookies that remember preferences;</li>
                <li>Analytics cookies that help us understand Website performance; and</li>
                <li>Marketing cookies (where applicable).</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                We use services such as Google Analytics to collect anonymised usage information about Website visitors.
              </p>
              <p className="mt-3 text-muted-foreground">
                You may manage or disable cookies through your browser settings. Disabling certain cookies may affect Website functionality.
              </p>
              <p className="mt-3 text-muted-foreground">
                Where required by law, we will obtain your consent before placing non-essential cookies on your device.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">7. Sharing Your Information</h2>
              <p className="text-muted-foreground">
                We do not sell your personal information.
              </p>
              <p className="mt-3 text-muted-foreground">
                We may disclose personal information only where necessary to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>website hosting providers;</li>
                <li>cloud service providers;</li>
                <li>website analytics providers;</li>
                <li>email service providers;</li>
                <li>logistics and delivery partners;</li>
                <li>payment service providers (where applicable);</li>
                <li>professional advisers including auditors and legal advisers;</li>
                <li>regulatory authorities; or</li>
                <li>other parties where disclosure is required by law.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                All third-party service providers are required to maintain appropriate safeguards to protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">8. International Transfers</h2>
              <p className="text-muted-foreground">
                Some of our service providers may process personal information outside South Africa.
              </p>
              <p className="mt-3 text-muted-foreground">
                Where personal information is transferred internationally, we will ensure that:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>the recipient provides an adequate level of protection consistent with POPIA;</li>
                <li>appropriate contractual safeguards are in place; or</li>
                <li>the transfer is otherwise permitted under applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">9. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organisational measures to protect personal information against loss, misuse, unauthorised access, disclosure, alteration or destruction.
              </p>
              <p className="mt-3 text-muted-foreground">
                These measures may include:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>secure hosting environments;</li>
                <li>encryption where appropriate;</li>
                <li>access controls;</li>
                <li>password protection;</li>
                <li>regular software updates; and</li>
                <li>restricted access to personal information on a need-to-know basis.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                While we take reasonable precautions, no method of electronic transmission or storage can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">10. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected or to comply with legal, regulatory, accounting or contractual obligations.
              </p>
              <p className="mt-3 text-muted-foreground">
                The retention period may vary depending on the nature of the information and the applicable legal requirements.
              </p>
              <p className="mt-3 text-muted-foreground">
                When personal information is no longer required, it will be securely deleted, destroyed or permanently anonymised.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">11. Data Breach Notification</h2>
              <p className="text-muted-foreground">
                If a security breach compromises your personal information, Mint &amp; Honey will investigate the incident and, where required by POPIA, notify affected individuals and the Information Regulator as soon as reasonably practicable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">12. Your Rights</h2>
              <p className="text-muted-foreground">
                Subject to POPIA, you have the right to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>request access to your personal information;</li>
                <li>request correction of inaccurate information;</li>
                <li>request deletion of information where appropriate;</li>
                <li>object to certain processing activities;</li>
                <li>withdraw consent where processing is based on consent;</li>
                <li>request details regarding how your information has been processed; and</li>
                <li>lodge a complaint with the Information Regulator.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                To exercise your rights, please contact us using the details provided below.
              </p>
              <p className="mt-3 text-muted-foreground">
                Where applicable, requests may require completion of the prescribed POPIA forms.{" "}
                <Link 
                  to="/docs/Form%2002%20-%20Request%20for%20Access%20to%20Record%20(003).pdf"
                  className="text-mint hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Form 02
                </Link>{" "}
                (Request for Access to Record).
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">13. Information Officer</h2>
              <p className="text-muted-foreground">
                The Information Officer responsible for POPIA compliance is:
              </p>
              <div className="mt-3 rounded-xl bg-beige p-6">
                <p className="font-semibold text-foreground">Information Officer: : Vhugala Isabella Nedouvhada</p>
                <p className="text-muted-foreground">Mint &amp; Honey (Pty) Ltd</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:isabella@mintandhoney.co.za" className="text-mint hover:underline">
                    isabella@mintandhoney.co.za
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Telephone:{" "}
                  <a href="tel:+27218790592" className="text-mint hover:underline">
                    +27 21 879 0592
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">14. Information Regulator</h2>
              <p className="text-muted-foreground">
                If you believe your personal information has been processed unlawfully, you may lodge a complaint with:
              </p>
              <div className="mt-3 rounded-xl bg-beige p-6">
                <p className="font-semibold text-foreground">Information Regulator (South Africa)</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:inforeg@justice.gov.za" className="text-mint hover:underline">
                    inforeg@justice.gov.za
                  </a>
                </p>
                <p className="text-muted-foreground">Telephone: 010 023 5207</p>
                <p className="text-muted-foreground">
                  Website:{" "}
                  <a 
                    href="https://www.justice.gov.za/inforeg/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-mint hover:underline"
                  >
                    www.justice.gov.za/inforeg/
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">15. Third-Party Websites</h2>
              <p className="text-muted-foreground">
                Our Website may contain links to third-party websites for your convenience.
              </p>
              <p className="mt-3 text-muted-foreground">
                Mint &amp; Honey is not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies before providing personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">16. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements or Website functionality.
              </p>
              <p className="mt-3 text-muted-foreground">
                The latest version will always be available on this page together with the revised "Last Updated" date.
              </p>
              <p className="mt-3 text-muted-foreground">
                Your continued use of our Website after any updates constitutes acknowledgment of the revised Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">17. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions, requests or concerns regarding this Privacy Policy or the way we process your personal information, please contact us:
              </p>
              <div className="mt-3 rounded-xl bg-beige p-6">
                <p className="font-semibold text-foreground">Mint &amp; Honey (Pty) Ltd</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:info@mintandhoney.co.za" className="text-mint hover:underline">
                    info@mintandhoney.co.za
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Telephone:{" "}
                  <a href="tel:+27218790592" className="text-mint hover:underline">
                    +27 21 879 0592
                  </a>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  <strong>Compliance Officer:</strong> Vhugala Isabella Nedouvhada
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;