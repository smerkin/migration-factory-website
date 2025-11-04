'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sparkles } from 'lucide-react';
import { themes, animations, setTheme, setAnimation, getStoredTheme, getStoredAnimation, ThemeVariant, AnimationVariant } from '@/lib/themeConfig';

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('purple');
  const [currentAnimation, setCurrentAnimation] = useState<AnimationVariant>('techGrid');

  useEffect(() => {
    const storedTheme = getStoredTheme();
    const storedAnimation = getStoredAnimation();
    setCurrentTheme(storedTheme);
    setCurrentAnimation(storedAnimation);
    setTheme(storedTheme);
  }, []);

  const handleThemeChange = (theme: ThemeVariant) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };

  const handleAnimationChange = (animation: AnimationVariant) => {
    setAnimation(animation);
    setCurrentAnimation(animation);
    // Reload page to apply new animation
    window.location.reload();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 rounded-full shadow-lg glow-effect"
        style={{ backgroundColor: 'var(--primary)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 card p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Palette className="w-5 h-5" style={{ color: 'var(--primary)' }} />
              Customize Theme
            </h3>

            {/* Color Themes */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-graphite-400">
                Color Palette
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(themes).map(([key, theme]) => (
                  <button
                    key={key}
                    onClick={() => handleThemeChange(key as ThemeVariant)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      currentTheme === key
                        ? 'border-opacity-100 shadow-lg'
                        : 'border-graphite-700 hover:border-graphite-600'
                    }`}
                    style={{
                      borderColor: currentTheme === key ? theme.primary : undefined,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <span className="font-semibold text-sm">{theme.name}</span>
                    </div>
                    <p className="text-xs text-graphite-400">{theme.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Styles */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-graphite-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Background Animation
              </h4>
              <div className="space-y-2">
                {Object.entries(animations).map(([key, anim]) => (
                  <button
                    key={key}
                    onClick={() => handleAnimationChange(key as AnimationVariant)}
                    className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                      currentAnimation === key
                        ? 'border-opacity-100 shadow-lg'
                        : 'border-graphite-700 hover:border-graphite-600'
                    }`}
                    style={{
                      borderColor: currentAnimation === key ? 'var(--primary)' : undefined,
                    }}
                  >
                    <div className="font-semibold text-sm mb-1">{anim.name}</div>
                    <p className="text-xs text-graphite-400">{anim.description}</p>
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-graphite-500 mt-4 text-center">
              Changes are saved automatically
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
