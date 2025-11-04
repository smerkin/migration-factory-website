export type ThemeVariant = 'purple' | 'green' | 'orange' | 'lime';
export type AnimationVariant = 'techGrid' | 'particleFlow' | 'energyField';

export interface ThemeConfig {
  name: string;
  class: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  description: string;
}

export const themes: Record<ThemeVariant, ThemeConfig> = {
  purple: {
    name: 'Neon Purple',
    class: 'theme-purple',
    primary: '#7A3FFF',
    primaryLight: '#9B6AFF',
    primaryDark: '#5A1FDF',
    description: 'AI / Futuristic aesthetic',
  },
  green: {
    name: 'Electric Green',
    class: 'theme-green',
    primary: '#00FF9D',
    primaryLight: '#33FFAE',
    primaryDark: '#00CC7D',
    description: 'Data flow / Cyber aesthetic',
  },
  orange: {
    name: 'Amber Orange',
    class: 'theme-orange',
    primary: '#FF8A00',
    primaryLight: '#FFA333',
    primaryDark: '#CC6E00',
    description: 'Enterprise consulting tone',
  },
  lime: {
    name: 'Lime Accent',
    class: 'theme-lime',
    primary: '#C8FF00',
    primaryLight: '#D4FF33',
    primaryDark: '#A0CC00',
    description: 'Clean startup style',
  },
};

export const animations: Record<AnimationVariant, { name: string; description: string }> = {
  techGrid: {
    name: 'Tech Grid',
    description: 'Animated 3D network of data nodes',
  },
  particleFlow: {
    name: 'Particle Flow',
    description: 'Continuous flow of particles through space',
  },
  energyField: {
    name: 'Energy Field',
    description: 'Abstract AI-like waves and glowing circuits',
  },
};

export function setTheme(theme: ThemeVariant) {
  if (typeof window !== 'undefined') {
    // Remove all theme classes
    Object.values(themes).forEach(t => {
      document.body.classList.remove(t.class);
    });
    // Add new theme class
    document.body.classList.add(themes[theme].class);
    // Store preference
    localStorage.setItem('theme', theme);
  }
}

export function getStoredTheme(): ThemeVariant {
  // Always return orange theme
  return 'orange';
}

export function setAnimation(animation: AnimationVariant) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('animation', animation);
  }
}

export function getStoredAnimation(): AnimationVariant {
  // Always return techGrid animation
  return 'techGrid';
}
