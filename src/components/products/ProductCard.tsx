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
  const lowestPrice = Math.min(...product.pricing.map(p => p.price));

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
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-3 right-3 h-10 w-10 translate-y-2 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          onClick={handleQuickAdd}
        >
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1 text-xs font-medium uppercase tracking-wider text-honey">
          {product.category}
        </span>
        <h3 className="mb-2 font-display text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-mint">
          {product.shortName}
        </h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">From</span>
          <span className="font-display text-lg font-semibold text-mint">
            {formatPrice(lowestPrice)}
          </span>
        </div>
      </div>
    </Link>
  );
};
