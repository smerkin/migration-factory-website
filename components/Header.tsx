'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const servicesItems = [
    { label: 'ERP & CRM Data Migration', href: '#services' },
    { label: 'Post-M&A & Carve-out Data Migration', href: '#services' },
    { label: 'Database & Cloud Data Migration', href: '#services' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-graphite-950/95 backdrop-blur-lg border-b border-graphite-800/50 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 z-10 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" 
                   style={{ background: 'var(--primary)' }} />
              <div className="text-xl md:text-2xl font-bold gradient-text relative z-10">
                Migration Factory
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4">
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50">
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-64 bg-graphite-900 border border-graphite-800 rounded-lg shadow-xl py-2 z-50"
                  >
                    {servicesItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-graphite-300 hover:bg-graphite-800 hover:text-white transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/technology" className="text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50 whitespace-nowrap">
              Tool
            </Link>
            <Link href="/partners" className="text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50 whitespace-nowrap">
              Partners
            </Link>
            <Link href="/case-studies" className="text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50 whitespace-nowrap">
              Case Studies
            </Link>
            <Link href="#about" className="text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50 whitespace-nowrap">
              About
            </Link>
            <Link href="/insights" className="text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50 whitespace-nowrap">
              Insights
            </Link>
            <Link href="/careers" className="text-graphite-300 hover:text-white transition-colors duration-200 font-medium text-sm px-2 py-1.5 rounded hover:bg-graphite-800/50 whitespace-nowrap">
              Careers
            </Link>
            <Link 
              href="#contact" 
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 btn-primary text-xs shadow-lg hover:shadow-xl whitespace-nowrap ml-2"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-graphite-300 hover:text-white transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-graphite-800 bg-graphite-950/95 backdrop-blur-md"
            >
              <nav className="px-6 py-4 space-y-4">
                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 pl-4 space-y-2"
                      >
                        {servicesItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-2 text-graphite-400 hover:text-white transition-colors duration-200"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/technology"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Migration Acceleration Tool
                </Link>
                <Link
                  href="/partners"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  For Consulting Partners
                </Link>
                <Link
                  href="/case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Case Studies / Results
                </Link>
                <Link
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  About / Team
                </Link>
                <Link
                  href="/insights"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Insights / Blog
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-graphite-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Careers
                </Link>
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg font-semibold text-center transition-all duration-200 btn-primary mt-4"
                >
                  Contact Book a Call
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

