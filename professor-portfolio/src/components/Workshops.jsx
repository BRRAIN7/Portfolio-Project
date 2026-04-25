import React from 'react';
import { Users, Briefcase, Presentation } from 'lucide-react';
import './Workshops.css';

const Workshops = () => {
  const workshops = [
    {
      title: "Building Startup Ecosystems",
      type: "Institutional Training",
      icon: <Briefcase size={28} />,
      duration: "2-Day Intensive",
      description: "Equipping university leadership and faculty with frameworks to establish thriving innovation and incubation centers."
    },
    {
      title: "Design Thinking in Engineering",
      type: "Academic Seminar",
      icon: <Users size={28} />,
      duration: "10-Week Module",
      description: "Bridging the gap between deeply technical disciplines and human-centered design through cross-functional team exercises."
    },
    {
      title: "The Entrepreneurial Mindset",
      type: "Student Bootcamp",
      icon: <Presentation size={28} />,
      duration: "1-Day Bootcamp",
      description: "A hands-on, high-energy session teaching the art of identifying market gaps and rapid prototyping for early-stage ventures."
    }
  ];

  return (
    <section id="workshops" className="workshops">
      <div className="container">
        <div className="workshops-header reveal">
          <span className="subtitle">Training & Pedagogy</span>
          <h2 className="section-title text-left">
            Workshops & <span className="text-gradient">Seminars</span>
          </h2>
        </div>

        <div className="workshops-grid">
          {workshops.map((workshop, index) => (
            <div key={index} className={`workshop-card elegant-border reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="workshop-card-inner">
                <div className="workshop-top">
                  <div className="workshop-icon">{workshop.icon}</div>
                  <span className="workshop-type">{workshop.type}</span>
                </div>
                <h3 className="workshop-title">{workshop.title}</h3>
                <span className="workshop-duration">{workshop.duration}</span>
                <p className="workshop-desc">{workshop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
