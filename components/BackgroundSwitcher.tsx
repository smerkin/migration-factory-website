'use client';

import { useState } from 'react';
import { Palette } from 'lucide-react';

const variants = [
  { key: 'grayOrange', name: 'Серый + Оранжевый', description: 'Профессиональный, видимый' },
  { key: 'blueOrange', name: 'Синий + Оранжевый', description: 'Технологичный, современный' },
  { key: 'warmOrange', name: 'Теплый оранжевый', description: 'Брендовый, выразительный' },
  { key: 'monochrome', name: 'Монохромный', description: 'Минималистичный, элегантный' },
  { key: 'purpleOrange', name: 'Фиолетовый + Оранжевый', description: 'Креативный, уникальный' },
] as const;

export default function BackgroundSwitcher({ 
  currentVariant, 
  onVariantChange 
}: { 
  currentVariant: string;
  onVariantChange: (variant: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-graphite-900/90 backdrop-blur-lg border border-graphite-800 text-graphite-300 hover:text-white hover:border-orange-500 transition-all duration-200 shadow-lg"
        title="Переключить фон"
      >
        <Palette className="w-5 h-5" style={{ color: 'var(--primary)' }} />
        <span className="text-sm font-medium">Фон</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-64 bg-graphite-900/95 backdrop-blur-lg border border-graphite-800 rounded-lg shadow-xl p-4 space-y-2">
          <div className="text-xs font-semibold text-graphite-400 mb-3 uppercase tracking-wide">
            Варианты фона
          </div>
          {variants.map((variant) => (
            <button
              key={variant.key}
              onClick={() => {
                onVariantChange(variant.key);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                currentVariant === variant.key
                  ? 'bg-orange-500/20 border border-orange-500/50 text-white'
                  : 'text-graphite-300 hover:bg-graphite-800/50 hover:text-white border border-transparent'
              }`}
            >
              <div className="font-medium">{variant.name}</div>
              <div className="text-xs text-graphite-400 mt-0.5">{variant.description}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

