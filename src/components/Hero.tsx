import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="input_file_0.png" 
          alt="Hero Sneaker" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gold text-xs uppercase tracking-[0.4em] font-semibold mb-6 block">
            Imported Top Quality
          </span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 text-gradient">
            PREMIUM <br /> SNEAKERS
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Discover the pinnacle of sneaker culture with our imported top-quality selection. 
            Premium craftsmanship, exclusive designs, delivered to your doorstep.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              to="/shop"
              className="group bg-white text-dark px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-gold hover:text-white transition-all duration-300"
            >
              Shop Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/collections"
              className="px-10 py-5 border border-white/20 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              View Lookbook
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:block">
        <div className="flex items-center gap-4 text-white/40 text-[10px] uppercase tracking-[0.3em] font-semibold rotate-90 origin-left translate-y-full">
          <span>Instagram</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Twitter</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>Discord</span>
        </div>
      </div>
    </section>
  );
}
