'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-graphite-900 border-t border-graphite-800">
      <div className="container-custom py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Migration Factory
            </h3>
            <p className="text-graphite-400 mb-4 leading-relaxed">
              Tool-driven data migration specialists for ERP, CRM & M&A projects.
            </p>
            <p className="text-sm text-graphite-500">
              Fast, predictable, audit-ready data migrations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Technology', href: '/technology' },
                { label: 'For Partners', href: '/partners' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Insights', href: '/insights' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-graphite-400 hover:text-graphite-100 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-graphite-400 hover:text-graphite-100 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Cookie Policy', href: '/cookies' },
                { label: 'Legal Information', href: '/legal' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-graphite-400 hover:text-graphite-100 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex space-x-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-graphite-800 hover:bg-graphite-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </motion.a>
              <motion.a
                href="mailto:contact@migrationfactory.com"
                className="p-2 rounded-lg bg-graphite-800 hover:bg-graphite-700 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-graphite-800 text-center text-graphite-500">
          <p>
            © {currentYear} Migration Factory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
