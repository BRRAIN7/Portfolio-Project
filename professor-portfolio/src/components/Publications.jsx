import React from 'react';
import { BookOpen, FileText, Award, Cpu } from 'lucide-react';
import './Publications.css';

const Publications = () => {
  const items = [
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Rehabilitation Skates"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "IOT-Based System, Device, and Method for Automating and Customizing Cooking Process Remotely"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Personal Assistant Robot"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Person Learning Recognition using Machine Learning"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Smart Inventory Management System"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Response Analyzer of Sensory Motor Interaction (RASMI)"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Dental Cavity Detection System using Ultrasonic and Infrared sensor"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "A Wearable and Vigilantly Attentive Gadget for Emissions from ICT Appliances"
    },
    {
      type: "Patent / Copyright",
      icon: <Award size={24} />,
      title: "Method and system for reducing delay for authentication during handover in next generation networks"
    },
    {
      type: "Published Book",
      icon: <BookOpen size={24} />,
      title: "Faculty Resource Guide for the subject “Computer Networks”",
      publisher: "Wipro Technologies, Bangalore"
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
            <span><strong>9</strong> Patents / Copyrights</span>
            <span><strong>1</strong> Published Book</span>
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
                {(item.publisher || item.year) && (
                  <div className="pub-meta">
                    {item.publisher && <span className="pub-publisher">{item.publisher}</span>}
                    {item.year && <span className="pub-year">{item.year}</span>}
                  </div>
                )}
                {item.description && <p className="pub-desc">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
