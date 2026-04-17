import { motion } from "framer-motion";
import { Leaf, ExternalLink, Newspaper } from "lucide-react";

export const AsFeaturedOn = () => {
  return (
    <section className="bg-beige py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="wp-badge mb-4 inline-flex items-center gap-1.5 bg-mint-light text-mint-dark">
            <Newspaper className="h-3 w-3" />
            In the News
          </span>
          <h2 className="mb-3 font-display text-3xl text-foreground md:text-4xl">
            As Featured On
          </h2>
          <div className="section-divider mx-auto mb-10" />

          <a
            href="#"
            aria-label="Read about Mint & Honey featured on ASEZ Green Energy promotion"
            className="group mx-auto block max-w-2xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10">
              {/* Subtle green energy accent */}
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-mint-light/40" />

              <div className="relative flex flex-col items-center gap-6 md:flex-row md:gap-8 md:text-left">
                {/* ASEZ Badge */}
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-mint to-mint-dark shadow-lg">
                  <div className="text-center">
                    <div className="font-display text-2xl font-bold leading-none text-primary-foreground">
                      ASEZ
                    </div>
                    <div className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                      Promo
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-mint-light px-3 py-1 text-xs font-semibold text-mint-dark">
                    <Leaf className="h-3 w-3" />
                    Green Energy Initiative
                  </div>
                  <h3 className="mb-2 font-display text-xl text-foreground md:text-2xl">
                    Featured on ASEZ Promo for Green Energy
                  </h3>
                  <p className="text-sm text-muted-foreground md:text-base">
                    Recognised for our commitment to sustainable manufacturing and renewable energy adoption at our Atlantis facility.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-mint transition-colors group-hover:text-mint-dark">
                    Read the feature
                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
