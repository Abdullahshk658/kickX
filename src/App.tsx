import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Collections from "./pages/Collections";
import Support from "./pages/Support";
import Legal from "./pages/Legal";
import { Product, CartItem } from "./types";
import { motion, AnimatePresence } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

  useEffect(() => {
    const savedCart = localStorage.getItem("aura_cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("aura_cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddToCart = (product: Product, size?: string, color?: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => 
        item.id === product.id && 
        item.selectedSize === size && 
        item.selectedColor === color
      );
      
      if (existingItem) {
        return prevCart.map((item) => 
          (item.id === product.id && item.selectedSize === size && item.selectedColor === color)
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      return [...prevCart, { 
        ...product, 
        quantity: 1, 
        selectedSize: size || product.sizes?.[0], 
        selectedColor: color || product.colors?.[0] 
      }];
    });
    showToast(`${product.name} added to bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => 
      prevCart.map((item) => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast("Item removed from bag", "info");
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-white selection:bg-gold selection:text-dark">
        <Navbar cartCount={cartCount} />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
            <Route path="/support" element={<Support />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                onUpdateQuantity={handleUpdateQuantity} 
                onRemoveItem={handleRemoveItem} 
              />
            } />
          </Routes>
        </AnimatePresence>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 50, x: "-50%" }}
              className={`fixed bottom-8 left-1/2 z-[100] px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl border ${
                toast.type === 'success' ? 'bg-white text-dark border-white' : 'bg-gold text-white border-gold'
              }`}
            >
              {toast.message}
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="py-24 px-6 md:px-12 border-t border-white/10 bg-dark">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="md:col-span-2">
              <h2 className="text-4xl font-serif font-bold tracking-tighter mb-8">
                STEP &<span className="text-gold">SCENT</span>
              </h2>
              <p className="text-white/40 text-sm max-w-sm mb-12 font-light leading-relaxed">
                Your premier destination for high-end sneakers and curated streetwear. 
                Bringing global street culture to your doorstep with premium quality and seamless service.
              </p>
              
              <div className="mb-12">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 text-white/60">Join the Inner Circle</h4>
                <form className="flex max-w-sm" onSubmit={(e) => { e.preventDefault(); showToast("Subscribed to newsletter!"); }}>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="flex-1 bg-white/5 border border-white/10 border-r-0 rounded-l-full px-6 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                    required
                  />
                  <button className="bg-white text-dark px-6 py-3 rounded-r-full font-bold text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300">
                    Join
                  </button>
                </form>
              </div>

              <div className="flex gap-6 text-white/60 text-xs uppercase tracking-widest font-bold">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Twitter</a>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Discord</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Shop</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li><Link to="/shop?category=Sneakers" className="hover:text-white transition-colors">Sneakers</Link></li>
                <li><Link to="/shop?category=Apparel" className="hover:text-white transition-colors">Apparel</Link></li>
                <li><Link to="/shop?category=Accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-white/60">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-white/40">
                <li><Link to="/support" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Authenticity</Link></li>
                <li><Link to="/support" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 text-sm uppercase tracking-[0.2em] font-bold text-white/20">
            <p>© 2026 AuraKicks. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
