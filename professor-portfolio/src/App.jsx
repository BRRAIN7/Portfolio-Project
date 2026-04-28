import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Expertise from './components/Expertise';
import EcosystemMap from './components/EcosystemMap';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Publications from './components/Publications';
import Workshops from './components/Workshops';
import Recognition from './components/Recognition';
import Certifications from './components/Certifications';
import Highlights from './components/Highlights';
import Administrative from './components/Administrative';

function App() {

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Administrative />
        <Expertise />
        <Publications />
        <Highlights />
        <Impact />
        <Workshops />
        <EcosystemMap />
        <Certifications />
        <Recognition />
        <Contact />
      </main>

      <footer className="reveal" style={{ textAlign: 'center', padding: '4rem 2rem', borderTop: '1px solid var(--bg-surface-border)', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Dr. Bhavna Ambudkar. All rights reserved.</p>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;
