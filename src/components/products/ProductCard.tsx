import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, formatPrice } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { addToCart } = useCart();
  const lowestPrice = Math.min(...product.pricing.map((p) => p.price));

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.pricing[0], 1);
  };

  return (
    <Link
      to={`/shop/${product.id}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover-lift",
        className
      )}
    >
      {/* Image container — fixed height, object-contain so portrait bags aren't cropped */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-muted p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
          loading="lazy"
          decoding="async"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Quick-add cart button */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-3 right-3 h-10 w-10 translate-y-2 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.shortName} to cart`}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>

        {/* Badges — top-left */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide leading-tight",
                  badge === "Halaal"
                    ? "bg-green-100 text-green-800"
                    : badge === "Non-GMO"
                    ? "bg-mint-light text-mint-dark"
                    : badge === "Not for Resale"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1 text-xs font-medium uppercase tracking-wider text-honey">
          {product.category === "soya"    ? "Soya Mince"   :
           product.category === "flour"   ? "Flour & Meal"  :
           product.category === "cereal"  ? "Cereal"        :
           product.category === "porridge"? "Porridge"      :
           product.category}
        </span>

        <h3 className="mb-2 font-display text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-mint">
          {product.shortName}
        </h3>

        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Weight & price row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground">From</span>
            <span className="font-display text-lg font-semibold text-mint">
              {formatPrice(lowestPrice)}
            </span>
          </div>
          {product.weight && (
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {product.weight}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};