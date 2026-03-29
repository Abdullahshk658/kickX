import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../constants";
import { Product } from "../types";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function Shop({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const q = searchParams.get("q");
    const cat = searchParams.get("category");
    if (q) setSearchQuery(q);
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

  const handleCategoryChange = (cat: string | null) => {
    setSelectedCategory(cat);
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
            Explore Collection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[0.9]">
            THE FULL <br /> CATALOGUE
          </h1>
        </div>
        
        <div className="w-full md:w-80 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={20} />
          <input 
            type="text" 
            placeholder="Search drops..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value) {
                setSearchParams({ q: e.target.value });
              } else {
                setSearchParams({});
              }
            }}
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-12">
        <button 
          onClick={() => handleCategoryChange(null)}
          className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${!selectedCategory ? 'bg-gold text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
        >
          All Drops
        </button>
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${selectedCategory === category ? 'bg-gold text-white' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <h3 className="text-2xl font-serif font-bold mb-4">NO DROPS FOUND</h3>
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium">
            Try adjusting your search or filters to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
