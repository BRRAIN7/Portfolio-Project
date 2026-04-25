import React from 'react';
import { BookOpen, FileText, Award } from 'lucide-react';
import './Publications.css';

const Publications = () => {
  const items = [
    {
      type: "Research Paper",
      icon: <FileText size={24} />,
      title: "Optimization of Handover Delay During Authentication",
      publisher: "Research in Next Generation Networks and Mobility Management",
      year: "2019",
      description: "Research focused on reducing authentication delays and improving seamless mobility performance in next generation communication networks."
    },
    {
      type: "Patent",
      icon: <Award size={24} />,
      title: "Method and System for Reducing Delay for Authentication During Handover in Next Generation Networks",
      publisher: "Innovation Contribution / Patent",
      year: "2021",
      description: "Patent contribution addressing optimization of authentication handover mechanisms in next generation communication systems."
    },
    {
      type: "Thought Leadership",
      icon: <BookOpen size={24} />,
      title: "The Role of Education in Fostering Entrepreneurship and Innovation",
      publisher: "Innovation and Entrepreneurship Research",
      year: "2023",
      description: "Research contribution exploring how education can foster entrepreneurial thinking, innovation ecosystems and student-driven innovation."
    }
  ];

  return (
    <section id="publications" className="publications">
      <div className="container">
        <div className="publications-header reveal">
          <span className="subtitle">Thought Leadership</span>
          <h2 className="section-title text-left">
            Research & <span className="text-gradient">Publications</span>
          </h2>
          <div className="research-metrics" style={{ display: 'flex', gap: '2rem', marginTop: '1rem', color: 'var(--text-secondary)' }}>
            <span><strong>21+</strong> Publications</span>
            <span><strong>75+</strong> Citations</span>
            <span><strong>1+</strong> Patent Contribution</span>
          </div>
        </div>

        <div className="publications-grid">
          {items.map((item, index) => (
            <div key={index} className={`pub-card elegant-border reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="pub-icon-wrapper">
                {item.icon}
              </div>
              <div className="pub-content">
                <span className="pub-type">{item.type}</span>
                <h3 className="pub-title">{item.title}</h3>
                <div className="pub-meta">
                  <span className="pub-publisher">{item.publisher}</span>
                  <span className="pub-year">{item.year}</span>
                </div>
                <p className="pub-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
