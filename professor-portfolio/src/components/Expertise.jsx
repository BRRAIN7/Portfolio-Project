import React from 'react';
import { Brain, Rocket, Network, TrendingUp, Building, Cpu, Wifi, Award } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
  const expertiseAreas = [
    {
      icon: <Brain size={32} color="var(--accent-coral)" />,
      title: "Design Thinking & Innovation",
      description: "Fostering creative problem-solving methodologies that prioritize human needs and iterative prototyping."
    },
    {
      icon: <Rocket size={32} color="var(--accent-blue)" />,
      title: "Entrepreneurship Development",
      description: "Cultivating an entrepreneurial mindset in students and guiding them from ideation to venture creation."
    },
    {
      icon: <Network size={32} color="var(--accent-cyan)" />,
      title: "Innovation Ecosystem Building",
      description: "Establishing robust networks of stakeholders to support continuous innovation and regional economic growth."
    },
    {
      icon: <TrendingUp size={32} color="var(--accent-sage)" />,
      title: "Startup Mentorship & Incubation",
      description: "Providing strategic guidance and resources to early-stage startups to accelerate their path to market."
    },
    {
      icon: <Building size={32} color="var(--accent-purple)" />,
      title: "Academia–Industry Collaboration",
      description: "Bridging the gap between theoretical research and practical industry applications through strategic partnerships."
    },
    {
      icon: <Cpu size={32} color="var(--text-primary)" />,
      title: "AI Integration in Education",
      description: "Leveraging emerging artificial intelligence tools to enhance innovation education and design methodologies."
    },
    {
      icon: <Wifi size={32} color="var(--accent-coral)" />,
      title: "Computer Networks",
      description: "Deep expertise in emerging technologies and network infrastructure serving as the foundation for modern innovation."
    },
    {
      icon: <Award size={32} color="var(--accent-blue)" />,
      title: "Innovation Leadership",
      description: "Guiding higher education institutions towards future-ready pedagogical frameworks and strategic growth."
    }
  ];

  return (
    <section id="expertise" className="expertise">
      <div className="container">
        <div className="expertise-header reveal">
          <span className="subtitle">Core Methodologies</span>
          <h2 className="section-title text-left">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <div key={index} className={`expertise-card elegant-border reveal reveal-delay-${(index % 4) + 1}`}>
              <div className="card-icon">
                {area.icon}
              </div>
              <h3 className="card-title">{area.title}</h3>
              <p className="card-desc">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
