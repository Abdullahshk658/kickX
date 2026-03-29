import { ShoppingBag, Search, User, Menu, X, LogIn, UserPlus, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tighter">
            AURA<span className="text-gold">KICKS</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest font-medium text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
            <Link to="/collections" className="hover:text-white transition-colors">Collections</Link>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-gold transition-colors"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsUserOpen(true)}
            className="hover:text-gold transition-colors"
          >
            <User size={20} />
          </button>
          <Link to="/cart" className="relative hover:text-gold transition-colors">
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-gold text-dark text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden hover:text-gold transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <form onSubmit={handleSearch} className="w-full max-w-3xl">
              <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-6 block text-center">
                Search AuraKicks
              </span>
              <input 
                autoFocus
                type="text" 
                placeholder="Type your search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-white/10 py-8 text-4xl md:text-6xl font-serif font-bold text-white placeholder:text-white/10 focus:outline-none focus:border-gold transition-colors text-center"
              />
              <p className="mt-8 text-white/20 text-xs uppercase tracking-widest font-medium text-center">
                Press Enter to search the catalogue
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 z-[110] bg-dark flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-serif font-bold tracking-tighter">
                AURA<span className="text-gold">KICKS</span>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col gap-8 text-5xl font-serif font-bold tracking-tighter">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">HOME</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">SHOP</Link>
              <Link to="/collections" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">COLLECTIONS</Link>
              <Link to="/support" onClick={() => setIsMenuOpen(false)} className="hover:text-gold transition-colors">SUPPORT</Link>
            </div>

            <div className="mt-auto flex gap-8 text-xs uppercase tracking-[0.3em] font-bold text-white/40">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://discord.com" target="_blank" rel="noreferrer">Discord</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isUserOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsUserOpen(false)}
              className="fixed inset-0 z-[100] bg-dark/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              className="fixed top-0 right-0 z-[101] h-screen w-full max-w-sm bg-dark border-l border-white/10 p-12 flex flex-col"
            >
              <button 
                onClick={() => setIsUserOpen(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold mb-2">MY ACCOUNT</h2>
                <p className="text-white/40 text-xs uppercase tracking-widest font-medium">Welcome to AuraKicks</p>
              </div>

              <div className="space-y-4 flex-1">
                <button className="w-full flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <LogIn className="text-gold group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Sign In</span>
                </button>
                <button className="w-full flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                  <UserPlus className="text-gold group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Create Account</span>
                </button>
                <div className="h-[1px] bg-white/10 my-8" />
                <button className="w-full flex items-center gap-4 p-6 text-white/40 hover:text-white transition-colors group">
                  <Settings size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Preferences</span>
                </button>
                <button className="w-full flex items-center gap-4 p-6 text-white/40 hover:text-white transition-colors group">
                  <LogOut size={20} />
                  <span className="font-bold text-sm uppercase tracking-widest">Sign Out</span>
                </button>
              </div>

              <div className="mt-auto pt-12 border-t border-white/10">
                <p className="text-[10px] text-white/20 uppercase tracking-widest font-bold text-center">
                  Join AuraKicks Rewards for exclusive early access and free shipping.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
