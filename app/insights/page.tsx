'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
import { ArrowRight, Calendar } from 'lucide-react';

const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

export default function InsightsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogPosts = [
    {
      title: 'Why data migration becomes the critical risk in ERP projects — and how to de-risk it',
      excerpt: 'Data migration is often the most underestimated risk in ERP implementations. Learn how to identify, assess, and mitigate migration risks before they derail your go-live.',
      readTime: '5 min read',
      category: 'ERP Migration',
    },
    {
      title: 'Data migration in M&A: aligning IT integration with deal milestones',
      excerpt: 'M&A deals have tight timelines and complex data integration requirements. Discover how to align your data migration strategy with deal milestones and TSA constraints.',
      readTime: '6 min read',
      category: 'M&A Integration',
    },
    {
      title: 'How automation and AI are transforming data migrations',
      excerpt: 'Automation and AI are revolutionizing data migration. Explore how metadata-based mapping, automated validation, and AI-powered data quality tools are reducing risk and accelerating timelines.',
      readTime: '7 min read',
      category: 'Technology',
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
                Insights &{' '}
                <span className="gradient-text glow-effect">Blog</span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-graphite-300 mb-12 max-w-4xl mx-auto text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              Thought leadership on data migration, ERP implementations, and M&A IT integration
            </motion.p>
          </div>
        </section>

        <section className="section relative bg-graphite-900/30">
          <div className="container-custom" ref={ref}>
            <div className="max-w-4xl mx-auto space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-graphite-800" style={{ color: 'var(--primary)' }}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-graphite-500">
                      <Calendar className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-opacity-90 transition-all duration-300">
                    {post.title}
                  </h2>
                  <p className="text-graphite-400 leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="inline-flex items-center text-sm font-semibold" style={{ color: 'var(--primary)' }}>
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto mt-16 text-center card"
            >
              <p className="text-lg text-graphite-400 mb-4">
                <em>More insights coming soon. Follow us on LinkedIn for updates.</em>
              </p>
              <p className="text-graphite-500 text-sm">
                Short, 500-800 word posts on data migration best practices, shared on LinkedIn.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

