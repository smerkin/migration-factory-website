'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    message: '',
    erpMigration: false,
    mnaIntegration: false,
    consultingPartnership: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        message: '',
        erpMigration: false,
        mnaIntegration: false,
        consultingPartnership: false,
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-graphite-900/50 border border-graphite-800 text-graphite-300 mb-6 backdrop-blur-sm">
              <MessageSquare className="w-4 h-4 mr-2" style={{ color: 'var(--primary)' }} />
              Contact Us
            </div>
            <h2 className="mb-6 gradient-text">Book a 30-Minute Consultation</h2>
            <p className="text-xl text-graphite-400 max-w-2xl mx-auto leading-relaxed">
              Discuss your migration needs with our experts. We'll help you understand how our tool-driven approach can accelerate your project.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="card text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <CheckCircle2
                  className="w-20 h-20 mx-auto mb-6 glow-effect"
                  style={{ color: 'var(--primary)' }}
                />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
              <p className="text-graphite-400 text-lg">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="card space-y-6 relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{ background: 'var(--primary)' }} />
              <div className="relative z-10">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-graphite-300"
                >
                  Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-graphite-500"
                  />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-graphite-800 border border-graphite-700 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-300 text-graphite-100"
                    style={{ borderColor: 'var(--primary)', borderWidth: '0px' }}
                    onFocus={(e) => (e.target.style.borderWidth = '2px')}
                    onBlur={(e) => (e.target.style.borderWidth = '0px')}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2 text-graphite-300"
                >
                  Company
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-4 pr-4 py-4 bg-graphite-800 border border-graphite-700 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-300 text-graphite-100"
                    style={{ borderColor: 'var(--primary)', borderWidth: '0px' }}
                    onFocus={(e) => (e.target.style.borderWidth = '2px')}
                    onBlur={(e) => (e.target.style.borderWidth = '0px')}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium mb-2 text-graphite-300"
                >
                  Role
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full pl-4 pr-4 py-4 bg-graphite-800 border border-graphite-700 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-300 text-graphite-100"
                    style={{ borderColor: 'var(--primary)', borderWidth: '0px' }}
                    onFocus={(e) => (e.target.style.borderWidth = '2px')}
                    onBlur={(e) => (e.target.style.borderWidth = '0px')}
                    placeholder="Your Role"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-graphite-300"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-graphite-500"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-graphite-800 border border-graphite-700 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-300 text-graphite-100"
                    style={{ borderColor: 'var(--primary)', borderWidth: '0px' }}
                    onFocus={(e) => (e.target.style.borderWidth = '2px')}
                    onBlur={(e) => (e.target.style.borderWidth = '0px')}
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-graphite-300"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-6 w-5 h-5 text-graphite-500"
                  />
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-12 pr-4 py-4 bg-graphite-800 border border-graphite-700 rounded-xl focus:outline-none focus:border-opacity-100 transition-all duration-300 text-graphite-100 resize-none"
                    style={{ borderColor: 'var(--primary)', borderWidth: '0px' }}
                    onFocus={(e) => (e.target.style.borderWidth = '2px')}
                    onBlur={(e) => (e.target.style.borderWidth = '0px')}
                    placeholder="Brief description of migration need"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-graphite-300 mb-2">I'm interested in:</p>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="erpMigration"
                    checked={formData.erpMigration}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-graphite-700 bg-graphite-800"
                    style={{ accentColor: 'var(--primary)' }}
                  />
                  <span className="text-graphite-300">ERP migration</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="mnaIntegration"
                    checked={formData.mnaIntegration}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-graphite-700 bg-graphite-800"
                    style={{ accentColor: 'var(--primary)' }}
                  />
                  <span className="text-graphite-300">M&A integration</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consultingPartnership"
                    checked={formData.consultingPartnership}
                    onChange={handleChange}
                    className="w-5 h-5 rounded border-graphite-700 bg-graphite-800"
                    style={{ accentColor: 'var(--primary)' }}
                  />
                  <span className="text-graphite-300">Consulting partnership</span>
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Schedule a call'
                )}
              </motion.button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
