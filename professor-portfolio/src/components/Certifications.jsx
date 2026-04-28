import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Cambridge International Certification",
      organization: "Teachers and Trainers",
      year: "2009",
      icon: <Award size={32} />
    },
    {
      title: "Dale Carnegie Certification",
      organization: "Dale Carnegie",
      year: "2008",
      icon: <CheckCircle size={32} />
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="certifications-header reveal">
          <span className="subtitle">Professional Credentials</span>
          <h2 className="section-title text-center">
            Global <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className={`cert-card elegant-border reveal reveal-delay-${index + 1}`}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.organization}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
