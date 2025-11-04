'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { Briefcase, MapPin, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

export default function CareersPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    'Competitive salary and benefits',
    'Remote work flexibility',
    'Professional development opportunities',
    'Work on cutting-edge data migration projects',
    'Collaborative, senior-only team environment',
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
                Grow Your Career.{' '}
                <span className="gradient-text glow-effect">Make a Difference.</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-graphite-300 mb-12 max-w-4xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              At Migration Factory, we challenge, champion, and celebrate our people. Our colleagues' commitment 
              to innovation and passion for making a difference allow us to consistently deliver award-winning 
              strategies for our growing portfolio.
            </motion.p>
          </div>
        </section>

        <section className="section relative bg-graphite-900/30" ref={ref}>
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="mb-6 gradient-text">Join Our Team</h2>
                <p className="text-xl text-graphite-300">
                  Join our team and experience a globally recognized, inclusive, and diverse workplace. 
                  Explore our open positions for strategists, engineers, designers, developers, and more 
                  throughout the U.S., Latin America, India, Europe, and other opportunities worldwide.
                </p>
              </div>

              <div className="card mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Briefcase className="w-8 h-8 glow-effect" style={{ color: 'var(--primary)' }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Open Positions</h3>
                    <p className="text-graphite-400">
                      We're looking for experienced data migration specialists, ERP consultants, and M&A IT integration experts.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-graphite-800 border border-graphite-700">
                    <h4 className="font-semibold text-lg mb-2">Senior Data Migration Consultant</h4>
                    <div className="flex items-center gap-4 text-sm text-graphite-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Remote / Hybrid
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Full-time
                      </span>
                    </div>
                    <p className="text-graphite-300 mb-4">
                      We're seeking an experienced data migration consultant with deep expertise in ERP and CRM systems. 
                      Experience with SAP, Microsoft Dynamics, Oracle, or Salesforce required.
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center text-sm font-semibold"
                      style={{ color: 'var(--primary)' }}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  <div className="p-4 rounded-lg bg-graphite-800 border border-graphite-700">
                    <h4 className="font-semibold text-lg mb-2">M&A IT Integration Specialist</h4>
                    <div className="flex items-center gap-4 text-sm text-graphite-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        Remote / Hybrid
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        Full-time
                      </span>
                    </div>
                    <p className="text-graphite-300 mb-4">
                      Join our M&A integration team to help clients consolidate systems after mergers and acquisitions. 
                      Experience with post-M&A data migration and carve-out projects required.
                    </p>
                    <Link
                      href="#contact"
                      className="inline-flex items-center text-sm font-semibold"
                      style={{ color: 'var(--primary)' }}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-graphite-300">
                      <span className="mr-3 mt-1" style={{ color: 'var(--primary)' }}>•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 text-center"
              >
                <Link href="#contact" className="btn-primary inline-flex items-center">
                  Apply Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

