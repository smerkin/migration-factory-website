'use client';

import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-graphite-950 text-graphite-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-block mb-8 text-sm font-semibold hover:underline"
          style={{ color: 'var(--primary)' }}
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
          Cookie Policy
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-graphite-300">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">1. What Are Cookies</h2>
            <p>
              [Placeholder: Explain what cookies are and how they work.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">2. How We Use Cookies</h2>
            <p>
              [Placeholder: Detail the types of cookies you use and their purposes, including:
              essential cookies, analytics cookies, preference cookies, etc.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">3. Third-Party Cookies</h2>
            <p>
              [Placeholder: List any third-party services that use cookies on your site.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">4. Managing Cookies</h2>
            <p>
              [Placeholder: Explain how users can control or disable cookies through their browser settings.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
              <br />
              <a href="mailto:privacy@migrationfactory.com" className="hover:underline" style={{ color: 'var(--primary)' }}>
                privacy@migrationfactory.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
