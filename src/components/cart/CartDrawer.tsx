import { memo } from "react";
import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

export const CartDrawer = memo(() => {
  const { items, removeFromCart, updateQuantity, getCartTotal, isCartOpen, setIsCartOpen } = useCart();
  const total = getCartTotal();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingBag className="h-5 w-5 text-mint" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium">Your cart is empty</p>
              <p className="text-sm text-muted-foreground">
                Add some nutritious products to get started
              </p>
            </div>
            <Button variant="mint" onClick={() => setIsCartOpen(false)} asChild>
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => {
                  const itemKey = `${item.product.id}-${item.selectedSize.size}`;
                  const itemTotal = formatPrice(item.selectedSize.price * item.quantity);
                  return (
                    <div key={itemKey} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="flex flex-1 flex-col min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="font-medium leading-tight truncate">
                              {item.product.shortName}
                            </h4>
                            <p className="text-sm text-muted-foreground">{item.selectedSize.size}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 flex-shrink-0 text-muted-foreground hover:text-destructive"
                            onClick={() => removeFromCart(item.product.id, item.selectedSize.size)}
                            aria-label={`Remove ${item.product.shortName} from cart`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.selectedSize.size, item.quantity - 1)}
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium" aria-live="polite">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.product.id, item.selectedSize.size, item.quantity + 1)}
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-semibold text-mint">{itemTotal}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between text-lg">
                <span className="font-medium">Total</span>
                <span className="font-display text-xl font-semibold text-mint">
                  {formatPrice(total)}
                </span>
              </div>
              <Button variant="mint" size="lg" className="w-full" onClick={() => setIsCartOpen(false)} asChild>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button variant="ghost" className="mt-2 w-full" onClick={() => setIsCartOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
});

CartDrawer.displayName = "CartDrawer";