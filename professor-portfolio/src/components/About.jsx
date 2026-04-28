import React from 'react';
import { Target, Lightbulb, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about dark-section">
      <div className="container">
        <div className="about-grid">

          <div className="about-content">
            <span className="subtitle reveal">The Educator</span>
            <h2 className="section-title text-left reveal">
              Pioneering <span className="text-gradient">Innovation</span> <br />
              in Education.
            </h2>

            <div className="about-text-wrapper reveal reveal-delay-1">
              <p className="about-text">
                With over 25+ years of experience in innovation-led academia, entrepreneurship development, and academia-industry collaboration, Dr. Bhavna Ambudkar is at the forefront of educational transformation—including curriculum leadership such as introducing Innovation & Entrepreneurship for final-year electronics & telecommunication students at Savitribai Phule Pune University.
              </p>
              <p className="about-text">
                Her teaching philosophy is deeply centered on human-centered innovation, experimentation, and cultivating an entrepreneurial mindset. By bridging the gap between emerging technologies and design thinking, she empowers students to become creators of solutions rather than mere consumers of information.
              </p>
            </div>
          </div>

          <div className="about-image-wrapper reveal reveal-delay-2">
            <div className="about-image" style={{ backgroundImage: "url('/bhavna_real.png')", backgroundPosition: "30% center" }}></div>
          </div>

        </div>

        <div className="about-pillars">
          <div className="pillar-item reveal reveal-delay-1">
            <div className="pillar-icon">
              <Lightbulb size={24} />
            </div>
            <h4 className="pillar-title">Design Thinking</h4>
            <p className="pillar-desc">Teaching the core principles of empathizing, ideating, and iterating to solve systemic issues.</p>
          </div>

          <div className="pillar-item reveal reveal-delay-2">
            <div className="pillar-icon">
              <Target size={24} />
            </div>
            <h4 className="pillar-title">Innovation Strategy</h4>
            <p className="pillar-desc">Establishing robust ecosystems that foster continuous academic and corporate innovation.</p>
          </div>

          <div className="pillar-item reveal reveal-delay-3">
            <div className="pillar-icon">
              <Users size={24} />
            </div>
            <h4 className="pillar-title">Startup Mentorship</h4>
            <p className="pillar-desc">Guiding early-stage founders through product-market fit using deep user research.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
