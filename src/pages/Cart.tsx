import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Plus, Minus, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CartItem } from "../types";

export default function Cart({ 
  cart, 
  onUpdateQuantity, 
  onRemoveItem 
}: { 
  cart: CartItem[], 
  onUpdateQuantity: (id: string, delta: number) => void,
  onRemoveItem: (id: string) => void
}) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 15000 ? 0 : 500;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      // In a real app, you'd clear the cart here
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 size={48} className="text-white" />
        </motion.div>
        <h2 className="text-4xl font-serif font-bold mb-6 uppercase tracking-tighter">ORDER CONFIRMED</h2>
        <p className="text-white/40 mb-12 max-w-md mx-auto">
          Thank you for your purchase! Your order #AUR-9283 is being processed. 
          You will receive a confirmation email shortly.
        </p>
        <Link 
          to="/shop"
          onClick={() => window.location.reload()} // Simple way to clear cart for demo
          className="bg-white text-dark px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">YOUR BAG IS EMPTY</h2>
        <p className="text-white/40 mb-12 max-w-md mx-auto">
          Looks like you haven't added any exclusive drops to your bag yet. 
          Explore our latest collection and find your next pair.
        </p>
        <Link 
          to="/shop"
          className="bg-white text-dark px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <Link to="/" className="text-white/40 hover:text-white transition-colors">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
          YOUR <span className="text-gold">BAG</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col md:flex-row gap-8 p-6 bg-white/5 rounded-3xl border border-white/10"
            >
              <div className="w-full md:w-40 aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 block">
                      {item.brand}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <div className="flex gap-4 text-xs text-white/40 uppercase tracking-widest font-medium">
                      <span>Size: {item.selectedSize || "N/A"}</span>
                      <span>Color: {item.selectedColor || "N/A"}</span>
                    </div>
                  </div>
                  <span className="text-xl font-bold text-white">
                    Rs. {item.price}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-4 bg-dark/50 p-2 rounded-full border border-white/10">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="text-white/20 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="glass p-8 rounded-3xl sticky top-32">
            <h2 className="text-2xl font-serif font-bold mb-8">ORDER SUMMARY</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>Rs. {subtotal}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `Rs. ${shipping}`}</span>
              </div>
              <div className="h-[1px] bg-white/10 my-4" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-gold">Rs. {total}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-white text-dark py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isCheckingOut ? (
                <>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-4 h-4 border-2 border-dark border-t-transparent rounded-full"
                  />
                  Processing...
                </>
              ) : "Checkout Now"}
            </button>
            <p className="text-[10px] text-white/40 text-center uppercase tracking-widest font-medium">
              Secure payments powered by AuraPay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
