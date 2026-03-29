import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Legal() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link to="/" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="mb-16">
        <span className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-4 block">
          Legal Information
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter leading-[0.9] mb-8">
          PRIVACY & TERMS
        </h1>
      </div>

      <div className="space-y-12 text-white/60 font-light leading-relaxed">
        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Privacy Policy</h2>
          <p className="mb-4">
            At AuraKicks, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website.
          </p>
          <p>
            We collect information such as your name, email address, and shipping details only to process your orders and provide a personalized shopping experience. We never sell your data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Terms of Service</h2>
          <p className="mb-4">
            By accessing or using AuraKicks, you agree to be bound by these terms. All content on this site, including images and text, is the property of AuraKicks and protected by copyright laws.
          </p>
          <p>
            We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion. Prices and availability are subject to change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-white mb-6 uppercase tracking-tight">Cookie Policy</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized content. By continuing to use our site, you consent to our use of cookies.
          </p>
        </section>

        <div className="pt-12 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest font-bold text-white/20">
            Last Updated: March 29, 2026
          </p>
        </div>
      </div>
    </div>
  );
}
