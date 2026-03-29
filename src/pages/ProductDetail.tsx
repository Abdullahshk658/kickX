import { useParams, Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { Product } from "../types";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ProductDetail({ onAddToCart }: { onAddToCart: (p: Product, size?: string, color?: string) => void }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes?.[0] || "");
      setSelectedColor(product.colors?.[0] || "");
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6">PRODUCT NOT FOUND</h2>
        <Link to="/shop" className="text-gold hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    // Optional: show a success message or redirect to cart
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
      >
        <ArrowLeft size={16} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10">
            <img 
              src={activeImage} 
              alt={product.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[product.image].map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(img)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-gold' : 'border-transparent opacity-50 hover:opacity-100'}`}
              >
                <img src={img} alt={`View ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-8">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-2 block">
              {product.brand}
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter mb-4">
              {product.name}
            </h1>
            <span className="text-3xl font-bold text-white/90">
              Rs. {product.price}
            </span>
          </div>

          <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
            {product.description}
          </p>

          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-white/40">Select Size</h4>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-xl border text-sm font-bold transition-all ${selectedSize === size ? 'bg-white text-dark border-white' : 'border-white/10 text-white/60 hover:border-white/30'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && product.colors.length > 0 && (
            <div className="mb-12">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4 text-white/40">Select Color</h4>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded-xl border text-sm font-bold transition-all ${selectedColor === color ? 'bg-gold text-white border-gold' : 'border-white/10 text-white/60 hover:border-white/30'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button 
            onClick={handleAddToCart}
            className="w-full bg-white text-dark py-6 rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gold hover:text-white transition-all duration-300 mb-12"
          >
            <ShoppingBag size={20} />
            Add to Bag
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="text-gold" size={24} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-tight">
                Authenticity <br /> Guaranteed
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <Truck className="text-gold" size={24} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-tight">
                Express <br /> Shipping
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-3">
              <RotateCcw className="text-gold" size={24} />
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/40 leading-tight">
                30-Day <br /> Returns
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
