'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-graphite-300">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">1. Information We Collect</h2>
            <p>
              [Placeholder: Describe what information you collect from users, including personal information, 
              contact details, and any data gathered through forms or cookies.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">2. How We Use Your Information</h2>
            <p>
              [Placeholder: Explain how you use the collected information, such as for communication, 
              service improvement, or marketing purposes.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">3. Data Protection</h2>
            <p>
              [Placeholder: Detail your security measures and how you protect user data.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">4. Your Rights</h2>
            <p>
              [Placeholder: Outline user rights regarding their data, including access, deletion, 
              and modification rights.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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
