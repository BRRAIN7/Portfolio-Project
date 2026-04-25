import React, { useEffect, useRef, useState } from 'react';
import './Impact.css';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const metrics = [
    { value: 25, suffix: '+', label: 'Years Experience' },
    { value: 30, suffix: '+', label: 'Startups Mentored' },
    { value: 5000, suffix: '+', label: 'Students Guided' },
    { value: 50, suffix: '+', label: 'Workshops Conducted' },
    { value: 15, suffix: '+', label: 'Industry Collaborations' },
    { value: 21, suffix: '+', label: 'Publications' }
  ];

  return (
    <section id="impact" className="impact" ref={sectionRef}>
      <div className="container">
        <div className="impact-header reveal">
          <span className="subtitle">Measurable Impact</span>
          <h2 className="section-title text-left">
            Empowering ecosystems <br />
            through <em>design leadership</em>.
          </h2>
        </div>

        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <div key={index} className={`metric-card elegant-border reveal reveal-delay-${(index % 4) + 1}`}>
              <div className="metric-number">
                <Counter end={metric.value} isVisible={isVisible} />
                <span className="metric-suffix">{metric.suffix}</span>
              </div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple count-up animation component
const Counter = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, isVisible]);

  return <span>{count}</span>;
};

export default Impact;
