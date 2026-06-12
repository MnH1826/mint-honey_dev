import { useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft, Check, Minus, Plus, ShoppingCart,
  Truck, Shield, Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, formatPrice, PricingOption } from "@/lib/products";
import { useCart } from "@/context/CartContext";
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
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<PricingOption | null>(
    product?.pricing[0] || null
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = useCallback(() => {
    if (selectedSize) addToCart(product!, selectedSize, quantity);
  }, [selectedSize, quantity, product, addToCart]);

  const decrement = useCallback(() => setQuantity((q) => Math.max(1, q - 1)), []);
  const increment = useCallback(() => setQuantity((q) => q + 1), []);

  if (!product) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="mb-4 font-display text-2xl font-bold">Product Not Found</h1>
        <p className="mb-8 text-muted-foreground">
          The product you're looking for doesn't exist.
        </p>
        <Button variant="mint" asChild>
          <Link to="/shop">Back to Shop</Link>
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
            to="/shop"
            className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-mint"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">{product.shortName}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product Image — object-contain so portrait bags display properly */}
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

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="mb-3 font-display font-semibold">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.pricing.map((option) => (
                  <button
                    key={option.size}
                    onClick={() => setSelectedSize(option)}
                    aria-pressed={selectedSize?.size === option.size}
                    className={cn(
                      "flex flex-col items-center rounded-lg border-2 px-5 py-3 transition-all",
                      selectedSize?.size === option.size
                        ? "border-mint bg-mint-light"
                        : "border-border hover:border-mint/50"
                    )}
                  >
                    <span className="text-sm font-medium">{option.size}</span>
                    <span className="text-lg font-semibold text-mint">
                      {formatPrice(option.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="mb-3 font-display font-semibold">Quantity</h3>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrement}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span
                  className="w-12 text-center text-xl font-medium"
                  aria-live="polite"
                >
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={increment}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Price + Add to Cart */}
            <div className="mb-8 flex items-center gap-4">
              <div className="text-3xl font-bold text-foreground">
                {selectedSize && formatPrice(selectedSize.price * quantity)}
              </div>
              <Button
                variant="mint"
                size="xl"
                className="flex-1"
                onClick={handleAddToCart}
                disabled={!selectedSize}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;