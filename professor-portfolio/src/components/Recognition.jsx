import React from 'react';
import {
  Star,
  Mic,
  Building2,
  GraduationCap,
  Users,
  Landmark,
  Gavel,
  Network,
  BookOpen,
  CalendarDays,
  Award,
  Trophy,
  Medal,
} from 'lucide-react';
import './Recognition.css';

const Recognition = () => {
  const awards = [
    {
      title: "Appreciation as IIC President",
      organization: "Ministry of Education’s Innovation Cell",
      year: "2024",
      icon: <Award size={24} />,
    },
    {
      title: "Appreciation as IIC President",
      organization: "Ministry of Education’s Innovation Cell",
      year: "2023",
      icon: <Award size={24} />,
    },
    {
      title: "Appreciation as IIC President & Convenor",
      organization: "Ministry of Education’s Innovation Cell (Highest Ranked Institute)",
      year: "2022",
      icon: <Trophy size={24} />,
    },
    {
      title: "Appreciation as ARIIA Nodal Officer",
      organization: "Institute Management (Band – Excellent in ARIIA 2020)",
      year: "2021",
      icon: <Star size={24} />,
    },
    {
      title: "Appreciation as IIC President & Convenor",
      organization: "Ministry of Education’s Innovation Cell (Highest Ranked Institute)",
      year: "2020",
      icon: <Trophy size={24} />,
    },
    {
      title: "Women’s Day Appreciation",
      organization: "Police Department, Pimpri Chinchwad",
      year: "2016",
      icon: <Users size={24} />,
    },
    {
      title: "Appreciation for Leading towards Practical Engineers",
      organization: "Skyfi Labs",
      year: "2015",
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Special Jury Mention Award",
      organization: "World Education Summit 2014 for the project “Class for Learning”",
      year: "2014",
      icon: <Gavel size={24} />,
    },
    {
      title: "Award as CHAMPION for “Deeper Engagement”",
      organization: "Wipro Technologies, Bangalore",
      year: "2012",
      icon: <Medal size={24} />,
    },
    {
      title: "International Publishing Invitation",
      organization: "International publishing house for “DREAM INDIA WITH ICT IN EDUCATION”",
      year: "2011",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Appreciation for Mission10X Project",
      organization: "DYP Management",
      year: "2011",
      icon: <Building2 size={24} />,
    },
    {
      title: "Selected as Master Trainer for Mission10X",
      organization: "Wipro Technologies, Bangalore",
      year: "2009",
      icon: <Star size={24} />,
    },
    {
      title: "Appreciation for Documentation of NBA",
      organization: "DYP Management",
      year: "2004",
      icon: <Building2 size={24} />,
    },
    {
      title: "Appreciation for Paper Presentation",
      organization: "National Conference by IETE",
      year: "2003",
      icon: <Mic size={24} />,
    },
    {
      title: "Appreciation for Term-work Compilation",
      organization: "University of Pune exams",
      year: "2001",
      icon: <BookOpen size={24} />,
    },
  ];

  return (
    <section id="recognition" className="recognition">
      <div className="container">
        <div className="recognition-header reveal">
          <span className="subtitle">Awards and Distinctions</span>
          <h2 className="section-title text-center">
            Honors & <span className="text-gradient">Appreciations</span>
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
        
        <div className="media-coverage reveal reveal-delay-3">
          <p className="media-label">Associated ecosystem</p>
          <div className="media-logos">
            <div className="media-logo-placeholder">Government of Maharashtra</div>
            <div className="media-logo-placeholder">MoE Innovation Cell</div>
            <div className="media-logo-placeholder">ESC · STPI</div>
            <div className="media-logo-placeholder">Maharashtra State Innovation Society</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
