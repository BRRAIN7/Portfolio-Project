import React from 'react';
import { Star, Trophy, Medal } from 'lucide-react';
import './Recognition.css';

const Recognition = () => {
  const awards = [
    {
      title: "Innovation Officer / EPIC Leadership",
      organization: "Ministry of Education / Innovation Council",
      year: "2024",
      icon: <Trophy size={24} />
    },
    {
      title: "Keynote Speaker: Fostering Innovation Ecosystems",
      organization: "Institutional Innovation Ecosystems",
      year: "2023",
      icon: <Star size={24} />
    },
    {
      title: "Faculty Development Program Leadership",
      organization: "National Education Forums",
      year: "2022",
      icon: <Medal size={24} />
    }
  ];

  return (
    <section id="recognition" className="recognition">
      <div className="container">
        <div className="recognition-header reveal">
          <span className="subtitle">Media & Awards</span>
          <h2 className="section-title text-center">
            Industry <span className="text-gradient">Recognition</span>
          </h2>
        </div>

        <div className="recognition-grid">
          {awards.map((award, index) => (
            <div key={index} className={`award-card elegant-border reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="award-icon">{award.icon}</div>
              <h3 className="award-title">{award.title}</h3>
              <p className="award-org">{award.organization}</p>
              <span className="award-year">{award.year}</span>
            </div>
          ))}
        </div>
        
        {/* Fake Media Logos Area */}
        <div className="media-coverage reveal reveal-delay-3">
          <p className="media-label">Featured In</p>
          <div className="media-logos">
            <div className="media-logo-placeholder">Ministry of Education</div>
            <div className="media-logo-placeholder">Innovation Council</div>
            <div className="media-logo-placeholder">AICTE</div>
            <div className="media-logo-placeholder">UGC</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
