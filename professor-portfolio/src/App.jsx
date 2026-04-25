import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Expertise from './components/Expertise';
import FeaturedInitiatives from './components/FeaturedInitiatives';
import EcosystemMap from './components/EcosystemMap';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Publications from './components/Publications';
import Workshops from './components/Workshops';
import Recognition from './components/Recognition';
import Blog from './components/Blog';

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
        <Expertise />
        <Publications />
        <Impact />
        <FeaturedInitiatives />
        <Workshops />
        <EcosystemMap />
        <Recognition />
        <Blog />
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
