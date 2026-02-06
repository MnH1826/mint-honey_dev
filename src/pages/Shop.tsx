import { useState } from "react";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/products/ProductCard";
import { products, Product } from "@/lib/products";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All Products" },
  { id: "cereal", label: "Cereals" },
  { id: "porridge", label: "Porridge" },
  { id: "flour", label: "Flour" },
  { id: "protein", label: "Protein" }
];

const types = [
  { id: "all", label: "All" },
  { id: "retail", label: "Retail" },
  { id: "bulk", label: "Bulk" }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const typeMatch = selectedType === "all" || product.type === selectedType || product.type === "both";
    return categoryMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
            Shop Our Products
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse our range of fortified, nutritious food products designed for 
            households, feeding programs, and institutional use.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="lg:flex lg:gap-8">
          {/* Mobile Filter Toggle */}
          <div className="mb-6 lg:hidden">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full justify-between"
            >
              <span className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </span>
              <span className="text-muted-foreground">
                {selectedCategory !== "all" || selectedType !== "all" ? "Active" : ""}
              </span>
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
              {/* Category Filter */}
              <div>
                <h3 className="mb-3 font-display font-semibold text-foreground">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        selectedCategory === category.id
                          ? "bg-mint-light font-medium text-mint-dark"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="mb-3 font-display font-semibold text-foreground">Purchase Type</h3>
                <div className="space-y-2">
                  {types.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={cn(
                        "block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        selectedType === type.id
                          ? "bg-honey-light font-medium text-honey-dark"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== "all" || selectedType !== "all") && (
                <Button
                  variant="ghost"
                  className="w-full"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedType("all");
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-border bg-card py-16 text-center">
                <p className="text-muted-foreground">
                  No products match your filters. Try adjusting your selection.
                </p>
                <Button
                  variant="mint"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedType("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
