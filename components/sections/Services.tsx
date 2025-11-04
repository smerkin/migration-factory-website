'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Database,
  Bot,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'ERP & CRM Data Migration',
    problem: 'Legacy systems, risk of go-live failure, data quality issues.',
    messages: [
      'From legacy systems to modern ERP/CRM (SAP S/4HANA, Microsoft Dynamics 365, Oracle, NetSuite, Salesforce).',
      'Standardised approach for master data (customers, vendors, products), finance, sales and inventory.',
      'Multiple dry-runs with automated validation reports.',
    ],
    process: ['Discovery', 'Mapping', 'Build & Test', 'Cutover', 'Support'],
  },
  {
    icon: Bot,
    title: 'Post-M&A & Carve-out Data Migration',
    problem: 'Tight deal timeline, multiple systems to consolidate, risk of losing data/integration.',
    messages: [
      'We consolidate ERP/CRM and line-of-business systems after M&A.',
      'Aligned with deal milestones and TSA constraints.',
      'Focused on clean, reconciled financial and customer data.',
    ],
    process: ['Discovery', 'Mapping', 'Build & Test', 'Cutover', 'Support'],
  },
  {
    icon: Sparkles,
    title: 'Database & Cloud Data Migration',
    problem: 'Migration of databases/datastores as part of ERP/CRM or cloud moves.',
    messages: [
      'Database migration and re-platforming with minimal downtime.',
      'Cloud migrations (Azure/AWS/GCP) as part of ERP/CRM programmes.',
    ],
    process: ['Discovery', 'Mapping', 'Build & Test', 'Cutover', 'Support'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px', amount: 0.2 });

  return (
    <section id="services" className="section relative bg-graphite-900/30">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-graphite-900/50 border border-graphite-800 text-graphite-300 mb-6 backdrop-blur-sm">
            <Database className="w-4 h-4 mr-2" style={{ color: 'var(--primary)' }} />
            Our Services
          </div>
          <h2 className="mb-6 gradient-text">Comprehensive Data Migration Solutions</h2>
          <p className="text-xl text-graphite-400 max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade solutions for ERP, CRM, M&A, and cloud data migration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;

  return (
    <div className="card h-full group relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{ background: 'var(--primary)' }} />
      
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-graphite-800/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-graphite-700/50">
          <Icon
            className="w-10 h-10 glow-effect"
            style={{ color: 'var(--primary)' }}
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-opacity-90 transition-all duration-300">
          {service.title}
        </h3>

        {/* Problem Section */}
        <div className="mb-6 p-4 rounded-xl bg-graphite-800/30 border border-graphite-700/50">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
            <p className="text-xs font-semibold uppercase tracking-wider text-graphite-400">Challenge</p>
          </div>
          <p className="text-graphite-300 text-sm leading-relaxed">{service.problem}</p>
        </div>

        {/* Solution Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
            <p className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>Our Solution</p>
          </div>
          <ul className="space-y-3">
            {service.messages.map((message, idx) => (
              <li key={idx} className="text-graphite-400 text-sm leading-relaxed flex items-start gap-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: 'var(--primary)' }} />
                </div>
                <span>{message}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process Section */}
        <div className="mt-8 pt-6 border-t border-graphite-700/50">
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--primary)' }}>
            How We Work
          </p>
          <div className="flex flex-wrap gap-2">
            {service.process.map((step, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className={`px-3 py-1.5 text-xs font-medium rounded-full bg-graphite-800/50 text-graphite-300 border transition-all duration-200 ${
                  idx === 0 || idx === service.process.length - 1 
                    ? 'border-[var(--primary)] border-opacity-50' 
                    : 'border-graphite-700/50 hover:border-opacity-100'
                }`}
              >
                {step}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
