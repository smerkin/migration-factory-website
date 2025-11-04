'use client';

import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackgroundSwitcher from '@/components/BackgroundSwitcher';

// Dynamic imports for all animation types
const TechGridBackground = dynamic(
  () => import('@/components/backgrounds/TechGridBackground'),
  { ssr: false }
);

const NetworkGraphBackground = dynamic(
  () => import('@/components/backgrounds/NetworkGraphBackground'),
  { ssr: false }
);

const DataStreamsBackground = dynamic(
  () => import('@/components/backgrounds/DataStreamsBackground'),
  { ssr: false }
);

const CircuitBoardBackground = dynamic(
  () => import('@/components/backgrounds/CircuitBoardBackground'),
  { ssr: false }
);

const MatrixCodeBackground = dynamic(
  () => import('@/components/backgrounds/MatrixCodeBackground'),
  { ssr: false }
);

export default function Home() {
  const [animationType, setAnimationType] = useState<'techGrid' | 'networkGraph' | 'dataStreams' | 'circuitBoard' | 'matrixCode'>('networkGraph');
  const [backgroundVariant, setBackgroundVariant] = useState<'grayOrange' | 'blueOrange' | 'warmOrange' | 'monochrome' | 'purpleOrange'>('grayOrange');

  const renderBackground = () => {
    switch (animationType) {
      case 'techGrid':
        return <TechGridBackground variant={backgroundVariant} />;
      case 'networkGraph':
        return <NetworkGraphBackground />;
      case 'dataStreams':
        return <DataStreamsBackground />;
      case 'circuitBoard':
        return <CircuitBoardBackground />;
      case 'matrixCode':
        return <MatrixCodeBackground />;
      default:
        return <TechGridBackground variant={backgroundVariant} />;
    }
  };

  return (
    <main className="relative min-h-screen">
      {/* Animated Background */}
      <Suspense fallback={null}>
        {renderBackground()}
      </Suspense>

      {/* Background Switcher */}
      <BackgroundSwitcher 
        currentAnimation={animationType} 
        onAnimationChange={(animation) => setAnimationType(animation as any)}
      />

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
