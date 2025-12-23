import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

// Extender el tipo Document para incluir startViewTransition
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => {
      ready: Promise<void>;
      finished: Promise<void>;
      updateCallbackDone: Promise<void>;
      skipTransition: () => void;
    };
  }
}

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    
    // Verificar soporte de View Transitions API
    if (document.startViewTransition) {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const transition = document.startViewTransition(() => {
        toggleTheme();
      });

      transition.ready.then(() => {
        // Crear la animación circular desde el punto del click
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];

        // Aplicar la animación usando CSS custom properties
        document.documentElement.style.setProperty('--x', `${x}px`);
        document.documentElement.style.setProperty('--y', `${y}px`);
        document.documentElement.style.setProperty('--radius', `${endRadius}px`);
      });
    } else {
      // Fallback: transición simple de fade
      document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
      toggleTheme();
      setTimeout(() => {
        document.documentElement.style.transition = '';
      }, 300);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="relative p-2 rounded-full focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 transition-transform hover:scale-110 active:scale-95"
      aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
      aria-pressed={isDark}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark
              ? 'rotate-90 scale-0 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
          strokeWidth={1.5}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
          strokeWidth={1.5}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

