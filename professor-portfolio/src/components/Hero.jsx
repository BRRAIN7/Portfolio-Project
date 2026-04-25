import React from 'react';
import { ArrowRight } from 'lucide-react';
import DesignCanvas from './DesignCanvas';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <DesignCanvas />
      <div className="container hero-interactive-container">
        <div className="hero-grid">
          <div className="hero-content">
            <span className="subtitle reveal">Intrapreneurial Academician</span>

            <h1 className="hero-title reveal reveal-delay-1">
              Designing the future of <br />
              <em>human-centered</em> <br />
              innovation.
            </h1>

            <p className="hero-desc reveal reveal-delay-2">
              Dr. Bhavna Ambudkar is a Design Thinking Educator, Innovation Leader, and Startup Mentor empowering the next generation of creative leaders to solve complex systemic challenges.
            </p>

            <div className="hero-cta reveal reveal-delay-3">
              <a href="#initiatives" className="btn btn-primary">
                View Case Studies <ArrowRight size={20} />
              </a>
              <a href="#about" className="btn btn-outline">
                Read Academic Profile
              </a>
            </div>
          </div>

          <div className="hero-image-container reveal reveal-delay-2">
            <div className="hero-image-wrapper">
              <div className="hero-image" style={{ backgroundImage: "url('/bhavna_real.png')", backgroundPosition: "35% center" }}></div>
            </div>
            {/* Elegant overlay card */}
            <div className="hero-floating-card soft-shadow">
              <span className="card-stat">25+</span>
              <span className="card-label">Years of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
