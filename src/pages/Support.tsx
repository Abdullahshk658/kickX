import { motion } from "motion/react";
import { ShieldCheck, Truck, RotateCcw, Mail, MessageSquare, Phone } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
          Customer Care
        </span>
        <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter leading-[0.9] text-gradient">
          SUPPORT
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 bg-white/5 rounded-3xl border border-white/10 text-center"
        >
          <ShieldCheck className="text-gold mx-auto mb-8" size={48} />
          <h3 className="text-2xl font-serif font-bold mb-4 uppercase tracking-tight">Authenticity</h3>
          <p className="text-white/40 text-sm font-light leading-relaxed">
            Every product sold on AuraKicks is guaranteed 100% authentic. Our team of expert authenticators 
            inspects every item before it reaches your doorstep.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-12 bg-white/5 rounded-3xl border border-white/10 text-center"
        >
          <Truck className="text-gold mx-auto mb-8" size={48} />
          <h3 className="text-2xl font-serif font-bold mb-4 uppercase tracking-tight">Shipping</h3>
          <p className="text-white/40 text-sm font-light leading-relaxed">
            We offer premium express shipping worldwide. Orders are typically processed within 24-48 hours 
            and delivered within 3-7 business days.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-12 bg-white/5 rounded-3xl border border-white/10 text-center"
        >
          <RotateCcw className="text-gold mx-auto mb-8" size={48} />
          <h3 className="text-2xl font-serif font-bold mb-4 uppercase tracking-tight">Returns</h3>
          <p className="text-white/40 text-sm font-light leading-relaxed">
            Not satisfied? We offer a 30-day return policy for all unworn items in their original packaging. 
            Contact our support team to initiate a return.
          </p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center uppercase tracking-tighter">GET IN TOUCH</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Email Us</h4>
                <p className="font-medium">support@aurakicks.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Call Us</h4>
                <p className="font-medium">+1 (888) AURA-KKS</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white/40 mb-1">Live Chat</h4>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors" />
            <textarea placeholder="Your Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors resize-none"></textarea>
            <button className="w-full bg-white text-dark py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
