import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../constants";
import { Product } from "../types";
import { motion } from "motion/react";

export default function Home({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-dark">
      <Hero />
      
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[0.9]">
              FEATURED <br /> RELEASES
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs uppercase tracking-widest font-medium leading-relaxed">
            A hand-picked collection of the season's most anticipated drops and timeless classics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-colors duration-500">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-gold font-bold text-xl">01</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">AUTHENTICITY</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Every item is meticulously inspected by our team of experts to ensure 100% authenticity.
            </p>
          </div>
          <div className="text-center p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-colors duration-500">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-gold font-bold text-xl">02</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">GLOBAL REACH</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              We ship to over 150 countries worldwide with premium, tracked delivery services.
            </p>
          </div>
          <div className="text-center p-8 border border-white/5 rounded-3xl hover:bg-white/5 transition-colors duration-500">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-gold font-bold text-xl">03</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">CURATED STYLE</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Our collection is hand-picked to bring you the best of global street culture.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
