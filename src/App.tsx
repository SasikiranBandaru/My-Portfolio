import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Volunteering from './components/Volunteering';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Volunteering />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;