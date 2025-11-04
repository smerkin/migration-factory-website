'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronDown, Zap, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { icon: Zap, text: 'Faster migrations with our proprietary Acceleration Tool' },
    { icon: Shield, text: 'Focused on ERP & CRM data — master and transactional' },
    { icon: TrendingUp, text: 'White-label delivery for consulting partners' },
    { icon: CheckCircle2, text: 'End-to-end data-migration methodology and QA' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-20 container-custom text-center">
        {/* Main Slogan - We can do IT */}
        <motion.div
          initial={mounted ? { opacity: 0, scale: 0.9, y: 20 } : { opacity: 1, scale: 1, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none tracking-tight">
            <span className="text-white">We can</span>{' '}
            <span className="text-white">do</span>{' '}
            <span 
              className="glow-effect"
              style={{ 
                color: 'var(--primary)',
                textShadow: `0 0 40px var(--primary-glow)`
              }}
            >
              IT
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-balance leading-tight font-semibold text-graphite-300">
            Tool-driven data migrations for{' '}
            <span className="gradient-text glow-effect">ERP, CRM & M&A</span>
            <br />
            <span className="text-graphite-400 text-2xl md:text-3xl lg:text-4xl">
              — fast, predictable, audit-ready.
            </span>
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-graphite-300 mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          We are a boutique team specializing only in data migration. We help consulting firms and mid-market companies deliver ERP and M&A programmes on time and within budget.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-graphite-900/30 border border-graphite-800/50 backdrop-blur-sm hover:border-opacity-100 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-graphite-800/50 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" style={{ color: 'var(--primary)' }} />
                </div>
                <p className="text-graphite-300 text-sm md:text-base leading-relaxed">{feature.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <button
            onClick={scrollToContact}
            className="btn-primary"
          >
            Book a 30-minute consultation
          </button>
          <a
            href="/technology"
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 hover:scale-105 active:scale-95"
            style={{ 
              borderColor: 'var(--primary)',
              color: 'var(--primary)',
              background: 'transparent'
            }}
          >
            Learn About Our Tool
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-graphite-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--primary)' }} />
            <span>100% On-Time Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--primary)' }} />
            <span>Enterprise Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--primary)' }} />
            <span>White-Label Ready</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 text-graphite-500" />
        </motion.div>
      </div>

      {/* Enhanced Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-graphite-950/60 to-graphite-950 pointer-events-none" />
    </section>
  );
}
