'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { Users, Handshake, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

export default function PartnersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sections = [
    {
      icon: Users,
      title: 'Who We Work With',
      items: [
        'ERP & CRM implementation partners',
        'M&A IT integration boutiques',
        'Mid-sized consulting firms',
      ],
    },
    {
      icon: Handshake,
      title: 'How We Work Together',
      items: [
        'White-label delivery',
        'Joint solution design (you handle data stream, partner handles processes and applications)',
        'Fixed-price or T&M subcontract models',
      ],
    },
    {
      icon: Award,
      title: 'What You Get',
      items: [
        'A reliable migration-stream without needing to build internal high-cost team',
        'Ability to offer more predictable delivery to your clients',
        'Access to our methodology and tool as a partner asset',
      ],
    },
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
                For{' '}
                <span className="gradient-text glow-effect">Consulting Partners</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-graphite-300 mb-12 max-w-4xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Partner with us to deliver reliable, predictable data migration services to your clients
            </motion.p>
          </div>
        </section>

        <section className="section relative bg-graphite-900/30">
          <div className="container-custom" ref={ref}>
            <div className="space-y-16">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-4 rounded-2xl bg-graphite-800">
                        <Icon
                          className="w-8 h-8 glow-effect"
                          style={{ color: 'var(--primary)' }}
                        />
                      </div>
                      <h2 className="text-3xl font-bold gradient-text">{section.title}</h2>
                    </div>
                    <ul className="space-y-4 ml-16">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-lg text-graphite-300 leading-relaxed flex items-start">
                          <span className="mr-3 mt-1" style={{ color: 'var(--primary)' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 text-center max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Get a partner deck
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                  Schedule a partner call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

