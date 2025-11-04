'use client';

import Link from 'next/link';

export default function LegalInformation() {
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
          Legal Information
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-graphite-300">
          <p className="text-lg">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">Company Information</h2>
            <p>
              [Placeholder: Company legal name, registration number, registered address, VAT number if applicable]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">Terms of Service</h2>
            <p>
              [Placeholder: Outline your terms of service, including service scope, user obligations, 
              and limitations of liability.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">Intellectual Property</h2>
            <p>
              [Placeholder: Detail copyright, trademark, and intellectual property rights.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">Disclaimer</h2>
            <p>
              [Placeholder: Legal disclaimers regarding your services, website content, and limitations.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">Governing Law</h2>
            <p>
              [Placeholder: Specify which jurisdiction's laws govern the use of your website and services.]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-graphite-100 mb-4">Contact Information</h2>
            <p>
              For legal inquiries, please contact:
              <br />
              <a href="mailto:legal@migrationfactory.com" className="hover:underline" style={{ color: 'var(--primary)' }}>
                legal@migrationfactory.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
