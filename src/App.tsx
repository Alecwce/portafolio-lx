
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
        <Marquee 
          items={['ReactJS', 'TypeScript', 'NextJS', 'Tailwind', 'ThreeJS', 'WebGL']} 
          variant="primary"
          rotate={-1}
        />
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center font-mono text-gray-400">Loading Section...</div>}>
          <About />
          <Portfolio />
          <Marquee 
            items={['LET\'S TALK', 'LET\'S COLLABORATE', 'SAY HELLO', 'WANNA BE STARTING SOMETHING']} 
            variant="dark"
            rotate={0}
          />
          <Footer time={time} />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
