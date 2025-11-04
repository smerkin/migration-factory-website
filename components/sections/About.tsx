'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Target, Award, TrendingUp, Zap, Shield } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.2 });

  const values = [
    {
      icon: Users,
      title: 'Senior-Only Team',
      description: 'Deep experience in ERP, data and M&A projects',
    },
    {
      icon: Target,
      title: 'Boutique Focus',
      description: 'No large overhead — we personally execute every project',
    },
    {
      icon: Zap,
      title: 'Specialized Expertise',
      description: 'Decades of combined experience in data migration',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: Award },
    { value: '50+', label: 'Enterprise Clients', icon: Users },
    { value: '99.9%', label: 'Success Rate', icon: TrendingUp },
  ];

  return (
    <section id="about" className="section relative bg-graphite-900/20">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="mb-6 gradient-text">About Migration Factory</h2>
              <p className="text-xl text-graphite-400 max-w-3xl mx-auto">
                A boutique team with deep expertise in data migration
              </p>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 text-lg text-graphite-300 leading-relaxed"
            >
              <p>
                We are a <strong className="text-white">small, senior-only team</strong> with deep experience in ERP, data and M&A projects.
              </p>
              
              <p>
                Our <strong className="text-white">boutique nature</strong> means no large overhead — we personally execute every project. 
                This allows us to deliver focused, high-quality data migration services without 
                the complexity and cost of large consulting firms.
              </p>
              
              <p>
                Our team brings <strong className="text-white">decades of combined experience</strong> in ERP implementations, data 
                migration, and M&A IT integration. We understand the critical role data plays 
                in successful transformations and focus exclusively on delivering reliable, 
                predictable migration outcomes.
              </p>
            </motion.div>

            {/* Right Column - Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="card group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-graphite-800/50 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                        <p className="text-graphite-400">{value.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="card text-center hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-graphite-800/50 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" style={{ color: 'var(--primary)' }} />
                    </div>
                  </div>
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-graphite-400 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
