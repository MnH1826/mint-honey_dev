import { useState, useMemo, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products";

const categories = [
  { id: "all",      label: "All Products" },
  { id: "porridge", label: "Porridge"     },
  { id: "cereal",   label: "Cereals"      },
  { id: "flour",    label: "Flour & Meal" },
  { id: "soya",     label: "Soya Mince"   },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "all" || product.category === selectedCategory;
      return categoryMatch;
    });
  }, [selectedCategory]);

  const hasActiveFilters = selectedCategory !== "all";

  const clearFilters = useCallback(() => {
    setSelectedCategory("all");
    // Scroll to top when clearing filters
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handle category selection with scroll to top
  const handleCategorySelect = useCallback((categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll to top when category changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Also scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Our Products
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse our range of fortified, non-GMO food products — designed for
            feeding programmes, institutions, and food manufacturers.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="lg:flex lg:gap-8">
          {/* Mobile Filter Toggle */}
          <div className="mb-6 lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters((p) => !p)}
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Categories
              </span>
              {hasActiveFilters && (
                <span className="rounded-full bg-mint px-2 py-0.5 text-xs text-white">
                  Active
                </span>
              )}
            </Button>
          </div>

          {/* Sidebar Filters */}
          <aside
            className={cn(
              "mb-8 lg:mb-0 lg:block lg:w-64 lg:flex-shrink-0",
              showFilters ? "block" : "hidden"
            )}
          >
            <div className="sticky top-24 space-y-6 rounded-xl border border-border bg-card p-6">
              <div>
                <h3 className="mb-3 font-display font-semibold text-foreground">
                  Category
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      aria-pressed={selectedCategory === cat.id}
                      className={cn(
                        "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        selectedCategory === cat.id
                          ? "bg-mint-light font-medium text-mint-dark"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button variant="ghost" className="w-full" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-card py-16 text-center">
                <p className="text-muted-foreground">
                  No products match your filters. Try adjusting your selection.
                </p>
                <Button variant="mint" className="mt-4" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}

            <p className="mt-10 text-center text-xs text-muted-foreground">
              * More products currently in R&amp;D phase — check back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductCard component (embedded, without prices)
const ProductCard = ({ product }: { product: any }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover-lift"
    >
      {/* Image container */}
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

        {/* Badges — top-left */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            {product.badges.map((badge: string) => (
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

        <p className="flex-1 text-sm text-muted-foreground line-clamp-2">
          {product.shortDescription}
        </p>

        {/* "Bulk Only" badge */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs font-medium text-mint-dark bg-mint-light px-3 py-1 rounded-full">
            Bulk Orders Only
          </span>
          {product.weight && (
            <span className="text-xs text-muted-foreground">
              {product.weight}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Products;