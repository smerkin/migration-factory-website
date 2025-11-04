'use client';

import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

// Error fallback component
function ErrorFallback({ error }: { error: Error }) {
  return (
    <div style={{ padding: '20px', background: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ color: '#ff4444' }}>Ошибка при загрузке страницы</h1>
      <pre style={{ background: '#2a2a2a', padding: '10px', borderRadius: '5px', overflow: 'auto' }}>
        {error.message}
        {'\n'}
        {error.stack}
      </pre>
    </div>
  );
}

// Dynamically import components with error handling
const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false, loading: () => <div style={{ position: 'fixed', inset: 0, zIndex: 0 }} /> }
);

const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div style={{ height: '64px', background: '#0a0a0a' }} />,
});

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <p style={{ color: '#fff' }}>Загрузка Hero...</p>
  </div>,
});

const About = dynamic(() => import('@/components/sections/About'));
const Services = dynamic(() => import('@/components/sections/Services'));
const Contact = dynamic(() => import('@/components/sections/Contact'));
const Footer = dynamic(() => import('@/components/sections/Footer'));

export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="relative min-h-screen">
        {/* Animated Background */}
        <TechGridBackground />

        {/* Header */}
        <Header />

        {/* Content */}
        <div className="relative z-20 pt-16">
          <Hero />
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
      </main>
    </ErrorBoundary>
  );
}
