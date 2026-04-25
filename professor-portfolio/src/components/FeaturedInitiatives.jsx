import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeaturedInitiatives.css';

const FeaturedInitiatives = () => {
  const initiatives = [
    {
      id: "01",
      title: "University Maker Labs",
      category: "Infrastructure & Incubation",
      description: "Spearheaded the establishment of state-of-the-art Maker Labs equipped with IoT, 3D printing, and rapid prototyping tools, empowering thousands of students to transform theoretical ideas into tangible innovations.",
      image: "/maker_lab.png"
    },
    {
      id: "02",
      title: "Student Innovation Cells",
      category: "Entrepreneurship",
      description: "Founded active student innovation cells that provide seed funding, mentorship, and structured incubation programs, resulting in over 30 successful student-led startups.",
      image: "/innovation_pitch.png"
    },
    {
      id: "03",
      title: "Corporate Co-Creation",
      category: "Industry Collaboration",
      description: "Forged strategic partnerships with 15+ industry leaders to integrate real-world corporate challenges into the academic curriculum, ensuring students are industry-ready upon graduation.",
      image: "/industry_collab.png"
    }
  ];

  return (
    <section id="initiatives" className="initiatives">
      <div className="container">
        <div className="initiatives-header reveal">
          <span className="subtitle">Case Studies</span>
          <h2 className="section-title text-left">
            Featured <span className="text-gradient">Initiatives</span>
          </h2>
        </div>
        
        <div className="initiatives-list">
          {initiatives.map((item, index) => (
            <div key={index} className={`initiative-card reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="initiative-image-wrapper">
                <div className="initiative-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              </div>
              
              <div className="initiative-content">
                <span className="initiative-category">{item.category}</span>
                <h3 className="initiative-title">{item.title}</h3>
                <p className="initiative-desc">{item.description}</p>
                
                <a href="#projects" className="btn-link">
                  Read Case Study <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiatives;
