
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import SpotlightCursor from './components/SpotlightCursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <InteractiveBackground />
      <SpotlightCursor />
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Experience /> */}
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
