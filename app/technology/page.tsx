'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { Zap, Clock, Shield, TrendingUp } from 'lucide-react';

const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

export default function TechnologyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Clock,
      title: 'Reduces manual mapping and scripting effort',
      description: 'Automated metadata-based mapping eliminates hours of manual work.',
    },
    {
      icon: Zap,
      title: 'Standardises migrations across projects',
      description: 'Reusable transformation rules ensure consistency and reliability.',
    },
    {
      icon: Shield,
      title: 'Provides automated validation and full audit trail',
      description: 'Every load is validated with comprehensive audit trails for compliance.',
    },
    {
      icon: TrendingUp,
      title: 'Better predictability and lower risk',
      description: 'Multiple dry-runs with automated test runs ensure smooth go-lives.',
    },
  ];

  const impact = [
    { metric: '30%', description: 'Reduction in mapping effort' },
    { metric: '50%', description: 'Fewer defects at go-live' },
    { metric: '40%', description: 'Faster project delivery' },
  ];

  return (
    <main className="relative min-h-screen">
      <TechGridBackground />
      <Header />
      <div className="relative z-10 pt-16">
        <section className="section relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container-custom text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="mb-6 text-balance">
                Our{' '}
                <span className="gradient-text glow-effect">Proprietary Acceleration Tool</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-graphite-300 mb-12 max-w-4xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Our proprietary Acceleration Tool is a suite of migration accelerators: metadata-based mapping, 
              reusable transformation rules, automated test runs and reconciliation dashboards.
            </motion.p>
          </div>
        </section>

        <section className="section relative bg-graphite-900/30">
          <div className="container-custom" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="mb-6 gradient-text">How It Helps Clients</h2>
              <p className="text-xl text-graphite-300 max-w-3xl mx-auto">
                Our tool delivers measurable improvements in speed, quality, and predictability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card"
                  >
                    <div className="mb-6 inline-block p-4 rounded-2xl bg-graphite-800">
                      <Icon
                        className="w-12 h-12 glow-effect"
                        style={{ color: 'var(--primary)' }}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <p className="text-graphite-400 leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-16"
            >
              <h2 className="mb-6 gradient-text">Impact Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {impact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="card"
                  >
                    <div className="text-5xl font-bold gradient-text mb-4">{item.metric}</div>
                    <div className="text-graphite-400 text-lg">{item.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="mb-6 gradient-text">Why It Matters</h2>
              <div className="space-y-4 text-lg text-graphite-300 leading-relaxed">
                <p>
                  <strong className="text-white">Time savings:</strong> Automated processes reduce project timelines 
                  and free up your team for strategic work.
                </p>
                <p>
                  <strong className="text-white">Lower risk:</strong> Multiple dry-runs and automated validation 
                  catch issues before go-live, preventing costly failures.
                </p>
                <p>
                  <strong className="text-white">Better predictability:</strong> Standardised methodology and 
                  reusable components ensure consistent, reliable outcomes across projects.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

