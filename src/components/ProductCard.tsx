import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-500"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1 block">
              {product.brand}
            </span>
            <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors">
              {product.name}
            </h3>
          </div>
          <span className="text-lg font-bold text-white/90">
            Rs. {product.price}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40 uppercase tracking-widest font-medium">
            {product.category}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-10 h-10 rounded-full bg-white text-dark flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
