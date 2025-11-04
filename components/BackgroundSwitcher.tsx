'use client';

import { useState } from 'react';
import { Settings } from 'lucide-react';

const animationTypes = [
  { 
    key: 'techGrid', 
    name: 'Tech Grid', 
    description: '3D точки в пространстве',
    icon: '⚡'
  },
  { 
    key: 'networkGraph', 
    name: 'Network Graph', 
    description: 'Сеть с соединениями',
    icon: '🌐'
  },
  { 
    key: 'dataStreams', 
    name: 'Data Streams', 
    description: 'Потоки данных',
    icon: '📊'
  },
  { 
    key: 'circuitBoard', 
    name: 'Circuit Board', 
    description: 'Печатная плата',
    icon: '🔌'
  },
  { 
    key: 'matrixCode', 
    name: 'Matrix Code', 
    description: 'Матричный код',
    icon: '💾'
  },
] as const;

export default function BackgroundSwitcher({ 
  currentAnimation, 
  onAnimationChange 
}: { 
  currentAnimation: string;
  onAnimationChange: (animation: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-lg bg-graphite-900/90 backdrop-blur-lg border border-graphite-800 text-graphite-300 hover:text-white hover:border-orange-500 transition-all duration-200 shadow-lg"
        title="Переключить анимацию"
      >
        <Settings className="w-5 h-5" style={{ color: 'var(--primary)' }} />
        <span className="text-sm font-medium">Анимация</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-72 bg-graphite-900/95 backdrop-blur-lg border border-graphite-800 rounded-lg shadow-xl p-4 space-y-2">
          <div className="text-xs font-semibold text-graphite-400 mb-3 uppercase tracking-wide">
            Варианты анимации
          </div>
          {animationTypes.map((animation) => (
            <button
              key={animation.key}
              onClick={() => {
                onAnimationChange(animation.key);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm transition-all duration-200 flex items-center gap-3 ${
                currentAnimation === animation.key
                  ? 'bg-orange-500/20 border border-orange-500/50 text-white'
                  : 'text-graphite-300 hover:bg-graphite-800/50 hover:text-white border border-transparent'
              }`}
            >
              <span className="text-xl">{animation.icon}</span>
              <div className="flex-1">
                <div className="font-medium">{animation.name}</div>
                <div className="text-xs text-graphite-400 mt-0.5">{animation.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

