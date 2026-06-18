import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Truck, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/lib/products";
import { cn } from "@/lib/utils";

const featureCards = [
  { icon: Truck,  title: "Fast Delivery",    sub: "Nationwide"  },
  { icon: Shield, title: "Quality Assured",  sub: "Certified"   },
  { icon: Leaf,   title: "Non-GMO Fortified", sub: "Nutritious" },
];

const badgeColour = (badge: string) => {
  if (badge === "Halaal")        return "bg-green-100 text-green-800 border-green-200";
  if (badge === "Non-GMO")       return "bg-mint-light text-mint-dark border-mint/30";
  if (badge === "Not for Resale") return "bg-amber-100 text-amber-800 border-amber-200";
  if (badge === "NGO Supply")    return "bg-blue-100 text-blue-800 border-blue-200";
  return "bg-muted text-muted-foreground border-border";
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="mb-4 font-display text-2xl font-bold">Product Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Button variant="mint" asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm" aria-label="Breadcrumb">
          <Link
            to="/products"
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-mint"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.shortName}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-muted p-8 min-h-[360px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-auto max-h-[460px] w-auto max-w-full object-contain drop-shadow-xl"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <span className="mb-2 text-sm font-medium uppercase tracking-wider text-honey">
              {product.category === "soya"     ? "Soya Mince"   :
               product.category === "flour"    ? "Flour & Meal"  :
               product.category === "cereal"   ? "Cereal"        :
               product.category === "porridge" ? "Porridge"      :
               product.category}
            </span>

            <h1 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              {product.name}
            </h1>

            {/* Badges */}
            {product.badges && product.badges.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {product.badges.map((badge) => (
                  <span
                    key={badge}
                    className={cn(
                      "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                      badgeColour(badge)
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <p className="mb-6 text-base text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="mb-6 grid gap-2 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* ❌ REMOVED: Size Selection and Price - Replaced with Bulk info */}
            <div className="mb-6 rounded-xl border border-border bg-mint-light p-6">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                Bulk Orders Only
              </h3>
              <p className="text-sm text-muted-foreground">
                This product is available for bulk and institutional orders.
                Please visit our <Link to="/bulk-orders" className="text-mint hover:underline">Bulk Orders page</Link> to request a quote.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.pricing.map((option) => (
                  <span
                    key={option.size}
                    className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground border border-border"
                  >
                    {option.size}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-3">
              {featureCards.map(({ icon: Icon, title, sub }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-mint-light">
                    <Icon className="h-5 w-5 text-mint" />
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">{title}</div>
                    <div className="text-muted-foreground">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-3 font-display text-lg font-semibold">Ingredients</h3>
            <p className="text-muted-foreground">{product.ingredients}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-3 font-display text-lg font-semibold">Intended Use</h3>
            <p className="text-muted-foreground">{product.intendedUse}</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-3 font-display text-lg font-semibold">Packaging Options</h3>
            <p className="text-muted-foreground">
              Available in {product.pricing.map((p) => p.size).join(", ")} packages
            </p>
            <Button variant="mint" size="sm" className="mt-4" asChild>
              <Link to="/bulk-orders">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;