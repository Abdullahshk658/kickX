import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const COLLECTIONS = [
  {
    id: "summer-26",
    name: "Summer '26 Drop",
    description: "Lightweight fabrics and vibrant colorways for the heat.",
    image: "https://picsum.photos/seed/summer/1200/800",
    category: "Seasonal"
  },
  {
    id: "techwear-v1",
    name: "Techwear V1",
    description: "Functional aesthetics and weather-resistant materials.",
    image: "https://picsum.photos/seed/tech/1200/800",
    category: "Style"
  },
  {
    id: "retro-revival",
    name: "Retro Revival",
    description: "Classic silhouettes reimagined for the modern era.",
    image: "https://picsum.photos/seed/retro/1200/800",
    category: "Heritage"
  }
];

export default function Collections() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
          Curated Series
        </span>
        <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-[0.9] text-gradient">
          COLLECTIONS
        </h1>
      </div>

      <div className="space-y-32">
        {COLLECTIONS.map((collection, index) => (
          <motion.div 
            key={collection.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
          >
            <div className="w-full lg:w-3/5 aspect-[16/9] rounded-3xl overflow-hidden relative group">
              <img 
                src={collection.image} 
                alt={collection.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/0 transition-colors duration-500" />
            </div>

            <div className="w-full lg:w-2/5 space-y-8">
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold block">
                {collection.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter">
                {collection.name}
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed">
                {collection.description}
              </p>
              <Link 
                to="/shop"
                className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold hover:text-gold transition-colors"
              >
                Explore Collection
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
