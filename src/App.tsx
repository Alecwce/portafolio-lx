
import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import { useTime } from './hooks/useTime';
import { useTheme } from './hooks/useTheme';

const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Footer = lazy(() => import('./components/Footer'));

const App: React.FC = () => {
  const time = useTime();
  const { theme } = useTheme();

  // Aplicar tema al root para View Transitions
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <div className="overflow-hidden">
          <Marquee 
            items={['ReactJS', 'TypeScript', 'NextJS', 'Tailwind', 'ThreeJS', 'WebGL']} 
            variant="primary"
            rotate={-1}
          />
        </div>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-gray-400">Loading Section...</div>}>
          <About />
          <Portfolio />
          <div className="overflow-hidden">
            <Marquee 
              items={['HABLEMOS', 'COLABOREMOS', 'DI HOLA', 'EMPECEMOS ALGO']} 
              variant="dark"
              rotate={0}
            />
          </div>
          <Footer time={time} />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
