import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Lock, CheckCircle, ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/products";

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [step, setStep] = useState<"details" | "payment" | "success">("details");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
      clearCart();
    }, 2000);
  };

  if (items.length === 0 && step !== "success") {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="mb-4 font-display text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mb-8 text-muted-foreground">
          Add some products to your cart before checking out.
        </p>
        <Button variant="mint" asChild>
          <Link to="/shop">Browse Products</Link>
        </Button>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-mint-light">
          <CheckCircle className="h-10 w-10 text-mint" />
        </div>
        <h1 className="mb-4 font-display text-3xl font-bold">Payment Successful!</h1>
        <p className="mb-2 text-lg text-muted-foreground">
          Thank you for your order. A confirmation email has been sent.
        </p>
        <p className="mb-8 text-sm text-muted-foreground">
          Order #MH-{Math.random().toString(36).substring(2, 8).toUpperCase()}
        </p>
        <div className="mb-8 rounded-lg bg-honey-light px-6 py-4 text-sm">
          <strong>Demo Mode:</strong> This is a simulated order. No real payment was processed.
        </div>
        <Button variant="mint" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Notice */}
      <div className="bg-honey-light px-4 py-3">
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm text-honey-dark">
          <AlertTriangle className="h-4 w-4" />
          <span>
            <strong>Demo Mode:</strong> This is a mock checkout. No real payments are processed.
            Use card: 4242 4242 4242 4242
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <Link
          to="/shop"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-mint"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div>
            <h1 className="mb-6 font-display text-3xl font-bold text-foreground">Checkout</h1>

            {/* Step Indicator */}
            <div className="mb-8 flex items-center gap-4">
              <div className={`flex items-center gap-2 ${step === "details" ? "text-mint" : "text-muted-foreground"}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${step === "details" ? "bg-mint text-primary-foreground" : "bg-muted"}`}>
                  1
                </div>
                <span className="text-sm font-medium">Details</span>
              </div>
              <div className="h-px flex-1 bg-border" />
              <div className={`flex items-center gap-2 ${step === "payment" ? "text-mint" : "text-muted-foreground"}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${step === "payment" ? "bg-mint text-primary-foreground" : "bg-muted"}`}>
                  2
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
            </div>

            {step === "details" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep("payment");
                }}
                className="space-y-6"
              >
                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="mb-4 font-display text-lg font-semibold">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="+27 11 123 4567" required />
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-6">
                  <h2 className="mb-4 font-display text-lg font-semibold">Delivery Address</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address *</Label>
                      <Input id="address" placeholder="123 Main Street" required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" placeholder="Johannesburg" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="province">Province *</Label>
                        <Input id="province" placeholder="Gauteng" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Postal Code *</Label>
                      <Input id="postalCode" placeholder="2000" required />
                    </div>
                  </div>
                </div>

                <Button variant="mint" size="lg" className="w-full">
                  Continue to Payment
                </Button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePayment} className="space-y-6">
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="font-display text-lg font-semibold">Payment Details</h2>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Lock className="h-4 w-4" />
                      Secure
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="4242 4242 4242 4242"
                          required
                          className="pr-12"
                        />
                        <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date *</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC *</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nameOnCard">Name on Card *</Label>
                      <Input id="nameOnCard" placeholder="John Doe" required />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => setStep("details")}
                  >
                    Back
                  </Button>
                  <Button
                    variant="mint"
                    size="lg"
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Pay ${formatPrice(getCartTotal())}`}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-lg font-semibold">Order Summary</h2>
              
              <div className="mb-4 space-y-4">
                {items.map(item => (
                  <div
                    key={`${item.product.id}-${item.selectedSize.size}`}
                    className="flex gap-4"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-medium leading-tight">
                        {item.product.shortName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.selectedSize.size} × {item.quantity}
                      </div>
                    </div>
                    <div className="font-medium">
                      {formatPrice(item.selectedSize.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(getCartTotal())}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-mint">Free</span>
                </div>
                <div className="flex justify-between border-t border-border pt-2 text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-mint">{formatPrice(getCartTotal())}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
