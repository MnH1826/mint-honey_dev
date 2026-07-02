import { useEffect } from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

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
          <h1 className="mb-3 font-display text-foreground">
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-ZA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="space-y-10 text-foreground">
            <p className="text-lg text-muted-foreground">
              Welcome to Mint &amp; Honey. These Terms and Conditions ("Terms")
              govern your use of our website and any enquiries, quotations, or
              supply agreements initiated through it. By accessing our site or
              submitting an enquiry, you agree to be bound by these Terms.
            </p>

            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By using this website, you confirm that you are at least 18
                years old and accept these Terms in full. If you do not agree
                to any part of these Terms, please cease use of our website or
                services.
              </p>
            </section>

            {/* 2. Products and Pricing */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                2. Products and Pricing
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  All product descriptions, images, and specifications are
                  provided for guidance only and may vary slightly from the
                  actual product.
                </li>
                <li>
                  Prices are not listed on this website. All pricing is
                  provided via formal quotation following an enquiry and is
                  denominated in South African Rand (ZAR), inclusive of VAT
                  where applicable.
                </li>
                <li>
                  We reserve the right to adjust quoted prices if there are
                  material changes in input costs, logistics, or currency
                  exchange rates before a written supply agreement is finalised.
                </li>
                <li>
                  Bulk and institutional order pricing is subject to a separate
                  written quotation and supply agreement.
                </li>
              </ul>
            </section>

            {/* 3. Enquiries and Orders */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                3. Enquiries and Orders
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Submitting an enquiry via our website does not constitute a
                  binding order. Orders are only confirmed upon receipt of a
                  signed purchase order or written acceptance of our quotation.
                </li>
                <li>
                  We reserve the right to accept or decline any enquiry or
                  order at our discretion.
                </li>
                <li>
                  Payment terms for confirmed orders will be agreed in writing
                  and may include EFT on delivery, partial upfront payment, or
                  credit terms subject to approval.
                </li>
                <li>
                  You are responsible for providing accurate contact, delivery,
                  and organisational information in all correspondence.
                </li>
              </ul>
            </section>

            {/* 4. Shipping and Delivery */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                4. Shipping and Delivery
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  We deliver throughout South Africa and arrange exports to
                  selected African countries. International export requirements
                  will be confirmed as part of the supply agreement.
                </li>
                <li>
                  Estimated delivery times are provided in good faith but are
                  not guaranteed and may be affected by logistics, weather, or
                  other external factors.
                </li>
                <li>
                  Risk in the products passes to the buyer upon delivery to the
                  agreed delivery point.
                </li>
                <li>
                  Shipping and logistics fees will be specified in the
                  quotation and are based on order volume, destination, and
                  product type.
                </li>
                <li>
                  Any delivery delays caused by force majeure events — including
                  natural disasters, strikes, or supply chain disruptions — are
                  beyond our control and do not constitute a breach of contract.
                </li>
              </ul>
            </section>

            {/* 5. Returns and Claims */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                5. Returns and Claims
              </h2>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Due to the nature of food products, returns are only accepted
                  for items that are damaged, defective, or incorrectly
                  supplied.
                </li>
                <li>
                  Claims must be reported in writing within{" "}
                  <strong className="text-foreground">5 business days</strong>{" "}
                  of delivery, supported by photographic evidence and a written
                  description of the issue.
                </li>
                <li>
                  Approved claims will be resolved via replacement, credit
                  note, or refund at our discretion, processed within 14
                  working days of approval.
                </li>
                <li>
                  Returns and claims for bulk or institutional orders are
                  subject to the specific terms of the applicable supply
                  agreement.
                </li>
              </ul>
            </section>

            {/* 6. Intellectual Property */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                All content on this website, including logos, text, images,
                graphics, and product packaging, is the property of Mint &amp;
                Honey (Pty) Ltd or its licensors. You may not reproduce,
                distribute, or use any content without our prior written
                consent.
              </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                7. Limitation of Liability
              </h2>
              <p className="mb-3 text-muted-foreground">
                To the fullest extent permitted by law, Mint &amp; Honey shall
                not be liable for:
              </p>
              <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                <li>
                  Any indirect, incidental, or consequential damages arising
                  from the use of our website or products.
                </li>
                <li>
                  Loss of profits, revenue, data, or business opportunities.
                </li>
                <li>
                  Any damages exceeding the value of the products supplied
                  under the relevant order.
                </li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Nothing in these Terms excludes liability for death, personal
                injury, or fraud where it would be unlawful to do so.
              </p>
            </section>

            {/* 8. User Conduct */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                8. User Conduct
              </h2>
              <p className="text-muted-foreground">
                You agree not to use this website for any unlawful purpose,
                transmit harmful or misleading content, attempt unauthorised
                access to any part of the site or its infrastructure, or
                interfere with the operation of the site in any way.
              </p>
            </section>

            {/* 9. Privacy */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                9. Privacy
              </h2>
              <p className="text-muted-foreground">
                Your use of our website is also governed by our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-mint hover:underline"
                >
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and safeguard your
                personal information in compliance with POPIA.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                10. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These Terms are governed by and construed in accordance with
                the laws of the Republic of South Africa. Any disputes arising
                from these Terms or your use of our website shall be referred
                to the courts of South Africa, with venue in Cape Town, Western
                Cape.
              </p>
            </section>

            {/* 11. Changes to These Terms */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                11. Changes to These Terms
              </h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. The latest version
                will always be available on this page with a revised "Last
                updated" date. Continued use of the website after changes are
                posted constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* 12. Contact Us */}
            <section>
              <h2 className="mb-4 font-display text-2xl text-foreground">
                12. Contact Us
              </h2>
              <p className="text-muted-foreground">
                For questions about these Terms, contact us at{" "}
                <a
                  href="mailto:info@mintandhoney.co.za"
                  className="font-semibold text-mint hover:text-mint-dark"
                >
                  info@mintandhoney.co.za
                </a>{" "}
                or call{" "}
                <a
                  href="tel:+27218790592"
                  className="font-semibold text-mint hover:text-mint-dark"
                >
                  +27 21 879 0592
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;