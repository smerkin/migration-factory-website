'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { CheckCircle, Clock, TrendingUp, Database } from 'lucide-react';

const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

export default function CaseStudiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Placeholder case studies - replace with real ones when available
  const caseStudies = [
    {
      title: 'Mid-Market Manufacturing ERP Migration',
      clientProfile: 'Mid-market manufacturer, 500 employees, North America',
      challenge: 'Migrate legacy ERP system to SAP S/4HANA within 6-month timeline. Risk of go-live failure due to data quality issues and complex master data requirements.',
      solution: 'Used our Acceleration Tool for automated mapping and validation. Standardised approach for master data (customers, vendors, products) and transactional data. Multiple dry-runs with automated validation reports.',
      results: [
        { icon: Clock, metric: '40%', description: 'Time saved vs traditional approach' },
        { icon: CheckCircle, metric: '100%', description: 'On-time go-live' },
        { icon: TrendingUp, metric: '50%', description: 'Fewer defects at go-live' },
        { icon: Database, metric: '2M+', description: 'Records migrated successfully' },
      ],
      testimonial: 'The acceleration tool and methodology made our migration predictable and on-time. The automated validation caught issues we would have missed.',
      keyTakeaways: [
        'Standardised approach enabled faster delivery',
        'Automated validation prevented costly go-live issues',
        'Multiple dry-runs built confidence in the data quality',
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
                Case Studies &{' '}
                <span className="gradient-text glow-effect">Results</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-graphite-300 mb-12 max-w-4xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Real results from our data migration projects
            </motion.p>
          </div>
        </section>

        <section className="section relative bg-graphite-900/30">
          <div className="container-custom" ref={ref}>
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="max-w-5xl mx-auto mb-16"
              >
                <div className="card space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 gradient-text">{study.title}</h2>
                    <div className="text-graphite-400 mb-6">
                      <p className="font-semibold text-graphite-300 mb-2">Client Profile:</p>
                      <p>{study.clientProfile}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-graphite-200">Challenge</h3>
                    <p className="text-graphite-400 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-graphite-200">Solution</h3>
                    <p className="text-graphite-400 leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-6 text-graphite-200">Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {study.results.map((result, idx) => {
                        const Icon = result.icon;
                        return (
                          <div key={idx} className="text-center p-4 rounded-xl bg-graphite-800">
                            <Icon
                              className="w-8 h-8 mx-auto mb-3 glow-effect"
                              style={{ color: 'var(--primary)' }}
                            />
                            <div className="text-3xl font-bold gradient-text mb-2">{result.metric}</div>
                            <div className="text-sm text-graphite-400">{result.description}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-graphite-800 border-l-4" style={{ borderColor: 'var(--primary)' }}>
                    <p className="text-graphite-300 italic leading-relaxed">"{study.testimonial}"</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 text-graphite-200">Key Take-aways</h3>
                    <ul className="space-y-2">
                      {study.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="text-graphite-400 leading-relaxed flex items-start">
                          <span className="mr-3 mt-1" style={{ color: 'var(--primary)' }}>•</span>
                          {takeaway}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto text-center card"
            >
              <p className="text-lg text-graphite-400 mb-4">
                <em>Note: Additional case studies coming soon. The above represents a typical project outcome.</em>
              </p>
              <p className="text-graphite-500 text-sm">
                Real case studies with client testimonials will be added as projects complete.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

