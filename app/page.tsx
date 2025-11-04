'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

// Only background needs to be dynamic with ssr: false
const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Animated Background */}
      <Suspense fallback={null}>
        <TechGridBackground variant="grayOrange" />
      </Suspense>

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
  );
}
