import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Mint & Honey";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Terms & Conditions for Mint & Honey - Read the terms governing enquiries, quotations, and supply agreements."
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
              Welcome to the Mint &amp; Honey (Pty) Ltd website ("Website"). These Terms and Conditions ("Terms") govern your access to and use of our Website, as well as any enquiries, quotations and supply arrangements initiated through it. By accessing or using this Website, you agree to be bound by these Terms. If you do not agree with these Terms, please discontinue use of the Website immediately.
            </p>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using this Website, you confirm that you are at least 18 years of age and have the legal capacity to enter into binding agreements. If you are accessing this Website on behalf of an organisation, you warrant that you are authorised to bind that organisation to these Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">2. Website Information Disclaimer</h2>
              <p className="text-muted-foreground">
                The information contained on this Website is provided for general informational purposes only. While Mint &amp; Honey makes every reasonable effort to ensure that information is accurate and current, we make no warranties or representations regarding the completeness, accuracy or suitability of any information, product descriptions, specifications or images.
              </p>
              <p className="mt-3 text-muted-foreground">
                Product photographs, packaging, colours and specifications are illustrative only and may differ slightly from the actual products supplied.
              </p>
              <p className="mt-3 text-muted-foreground">
                Nothing on this Website constitutes an offer capable of acceptance. All information is subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">3. Products, Pricing and Quotations</h2>
              <p className="text-muted-foreground">
                Prices are not displayed on this Website. Pricing is provided only through formal written quotations issued by Mint &amp; Honey.
              </p>
              <p className="mt-3 text-muted-foreground">
                Unless otherwise stated, quotations:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>are valid for fourteen (14) calendar days from the date of issue;</li>
                <li>are quoted in South African Rand (ZAR);</li>
                <li>include VAT where applicable; and</li>
                <li>are subject to product availability and manufacturing capacity.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Mint &amp; Honey reserves the right to revise quoted prices prior to acceptance where there are material increases in raw material costs, transport costs, exchange rates, government levies or other factors beyond our reasonable control.
              </p>
              <p className="mt-3 text-muted-foreground">
                All products are supplied subject to stock availability, production capacity and applicable regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">4. Enquiries and Orders</h2>
              <p className="text-muted-foreground">
                Submitting an enquiry through this Website does not constitute a binding order.
              </p>
              <p className="mt-3 text-muted-foreground">
                A binding agreement is formed only when:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Mint &amp; Honey issues a written quotation;</li>
                <li>the quotation is accepted in writing by the customer within its validity period; and</li>
                <li>where applicable, a purchase order or supply agreement has been received and accepted by Mint &amp; Honey.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Mint &amp; Honey reserves the right to decline any enquiry or order, subject to applicable law.
              </p>
              <p className="mt-3 text-muted-foreground">
                Customers are responsible for ensuring that all delivery, billing and organisational information provided is complete and accurate.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">5. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment terms will be specified in the applicable quotation or supply agreement.
              </p>
              <p className="mt-3 text-muted-foreground">
                Unless otherwise agreed in writing, payments may require:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>a deposit prior to production;</li>
                <li>payment before dispatch; or</li>
                <li>approved credit terms.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Failure to make payment when due may result in suspension of deliveries, cancellation of outstanding orders and the charging of interest on overdue amounts at the maximum rate permitted by applicable law.
              </p>
              <p className="mt-3 text-muted-foreground">
                Ownership of supplied goods shall remain vested in Mint &amp; Honey until full payment has been received, notwithstanding delivery of the goods.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">6. Shipping and Delivery</h2>
              <p className="text-muted-foreground">
                Mint &amp; Honey delivers throughout South Africa and exports selected products to approved international markets.
              </p>
              <p className="mt-3 text-muted-foreground">
                Delivery dates are estimates only and are provided in good faith. Mint &amp; Honey shall not be liable for delays caused by circumstances beyond its reasonable control, including but not limited to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>transport disruptions;</li>
                <li>strikes;</li>
                <li>civil unrest;</li>
                <li>natural disasters;</li>
                <li>pandemics;</li>
                <li>electricity supply interruptions;</li>
                <li>governmental actions;</li>
                <li>port delays; or</li>
                <li>supply chain disruptions.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Risk in the goods passes to the customer upon delivery to the agreed delivery location.
              </p>
              <p className="mt-3 text-muted-foreground">
                Shipping and logistics charges will be specified in the quotation.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">7. Inspection, Storage and Returns</h2>
              <p className="text-muted-foreground">
                Customers must inspect all goods immediately upon delivery.
              </p>
              <p className="mt-3 text-muted-foreground">
                Visible shortages or damage should be noted upon delivery and reported to Mint &amp; Honey without delay.
              </p>
              <p className="mt-3 text-muted-foreground">
                Due to the perishable nature of food products, returns are accepted only where products are:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>damaged;</li>
                <li>defective;</li>
                <li>contaminated before delivery; or</li>
                <li>incorrectly supplied.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                All claims must:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>be submitted in writing within five (5) business days of delivery;</li>
                <li>include photographs and supporting documentation; and</li>
                <li>clearly identify the affected batch or invoice.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Approved claims will be resolved, subject to applicable law, through replacement, repair, credit or refund, as determined by Mint &amp; Honey.
              </p>
              <p className="mt-3 text-muted-foreground">
                Mint &amp; Honey accepts no responsibility for deterioration, contamination or loss of product quality resulting from improper storage, handling, transportation or use after delivery.
              </p>
              <p className="mt-3 text-muted-foreground">
                Customers are responsible for complying with all storage instructions, expiry dates and handling requirements supplied with the products.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">8. Product Information and Allergens</h2>
              <p className="text-muted-foreground">
                Customers are responsible for reviewing all product specifications before purchase or distribution.
              </p>
              <p className="mt-3 text-muted-foreground">
                Certain products may contain allergens, including but not limited to soy, gluten or other ingredients. Customers should ensure products are suitable for their intended use and comply with all applicable food safety requirements.
              </p>
              <p className="mt-3 text-muted-foreground">
                Nutritional information is provided in good faith but should not be regarded as medical or dietary advice.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">9. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this Website, including text, graphics, logos, photographs, product images, packaging designs, trademarks and other intellectual property, is owned by or licensed to Mint &amp; Honey (Pty) Ltd.
              </p>
              <p className="mt-3 text-muted-foreground">
                No content may be copied, reproduced, modified, distributed or used without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">10. User Conduct</h2>
              <p className="text-muted-foreground">
                You agree not to:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>use this Website for unlawful purposes;</li>
                <li>upload malicious software or harmful code;</li>
                <li>attempt unauthorised access to any systems;</li>
                <li>interfere with the operation or security of the Website;</li>
                <li>misuse the Website in any manner that could damage Mint &amp; Honey or other users.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">11. Confidentiality</h2>
              <p className="text-muted-foreground">
                Any quotations, pricing schedules, technical specifications or commercial information supplied by Mint &amp; Honey remain confidential unless already publicly available and may not be disclosed to third parties without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">12. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by South African law, Mint &amp; Honey shall not be liable for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>indirect, consequential or incidental damages;</li>
                <li>loss of profits, revenue, business opportunities or goodwill;</li>
                <li>interruption of business;</li>
                <li>loss of data; or</li>
                <li>claims arising from misuse, improper storage or improper handling of products.</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Where liability cannot lawfully be excluded, Mint &amp; Honey's maximum liability shall not exceed the value of the products supplied under the relevant order.
              </p>
              <p className="mt-3 text-muted-foreground">
                Nothing in these Terms excludes liability where such exclusion would be unlawful under applicable legislation, including the Consumer Protection Act.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">13. Indemnity</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Mint &amp; Honey, its directors, employees, officers and agents against any claims, losses, liabilities, damages, costs or expenses arising from:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>your breach of these Terms;</li>
                <li>your misuse of the Website;</li>
                <li>your negligent handling or use of our products; or</li>
                <li>your violation of any applicable law.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">14. Privacy</h2>
              <p className="text-muted-foreground">
                Your use of this Website is governed by our{" "}
                <Link to="/privacy-policy" className="text-mint hover:underline">
                  Privacy Policy
                </Link>.
              </p>
              <p className="mt-3 text-muted-foreground">
                By submitting personal information through this Website, you consent to the collection, processing and storage of such information in accordance with the Protection of Personal Information Act, 2013 (POPIA), our Privacy Policy and applicable South African law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">15. Electronic Communications</h2>
              <p className="text-muted-foreground">
                You agree that communications transmitted electronically, including quotations, purchase orders, invoices, acceptances and notices, satisfy any legal requirement that such communications be in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">16. Force Majeure</h2>
              <p className="text-muted-foreground">
                Mint &amp; Honey shall not be liable for any failure or delay in performing its obligations where such failure results from events beyond its reasonable control, including but not limited to natural disasters, epidemics, pandemics, labour disputes, civil unrest, governmental restrictions, cyber incidents, transport interruptions, utility failures or shortages of raw materials.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">17. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and interpreted in accordance with the laws of the Republic of South Africa.
              </p>
              <p className="mt-3 text-muted-foreground">
                The parties consent to the jurisdiction of the competent courts of the Republic of South Africa, with venue in Cape Town, Western Cape, unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">18. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">19. Waiver</h2>
              <p className="text-muted-foreground">
                Any failure by Mint &amp; Honey to enforce any provision of these Terms shall not constitute a waiver of that provision or of any other rights available to Mint &amp; Honey.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">20. Entire Agreement</h2>
              <p className="text-muted-foreground">
                These Terms, together with any accepted quotation, purchase order and written supply agreement, constitute the entire agreement relating to Website enquiries unless expressly agreed otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">21. Changes to These Terms</h2>
              <p className="text-muted-foreground">
                Mint &amp; Honey reserves the right to amend these Terms at any time.
              </p>
              <p className="mt-3 text-muted-foreground">
                The latest version will always be published on this Website together with the revised "Last Updated" date.
              </p>
              <p className="mt-3 text-muted-foreground">
                Continued use of the Website following publication of amended Terms constitutes acceptance of those amendments.
              </p>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">22. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="mt-4 rounded-xl bg-beige p-6">
                <p className="mb-2 font-semibold text-foreground">Mint &amp; Honey (Pty) Ltd</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    Email:{" "}
                    <a href="mailto:info@mintandhoney.co.za" className="text-mint hover:underline">
                      info@mintandhoney.co.za
                    </a>
                  </li>
                  <li>
                    Telephone:{" "}
                    <a href="tel:+27218790592" className="text-mint hover:underline">
                      +27 21 879 0592
                    </a>
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

export default TermsConditions;