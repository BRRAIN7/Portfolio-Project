import React from 'react';
import { 
  Landmark, 
  Mic, 
  Star, 
  GraduationCap, 
  Users, 
  Building2, 
  Gavel, 
  Network, 
  BookOpen, 
  CalendarDays,
  Cpu
} from 'lucide-react';
import './Highlights.css';

const Highlights = () => {
  const highlightsList = [
    {
      title: "District Skills Committee Member",
      organization: "Government of Maharashtra, Pune",
      icon: <Landmark size={24} />,
    },
    {
      title: "Keynote Speaker",
      organization: "2021 International Conference (12 Universities) · Southern Brazilian Journal of Chemistry",
      icon: <Mic size={24} />,
    },
    {
      title: "Speaker at National Conclave",
      organization: "ESC–STPI START-UP INITIATIVE 'Building the Next Unicorn', inaugurated by Shri Ashwini Vaishnaw",
      icon: <Star size={24} />,
    },
    {
      title: "Board of Studies Member",
      organization: "Pillai College of Engineering",
      icon: <GraduationCap size={24} />,
    },
    {
      title: "Nominated Mentor",
      organization: "Ministry of Education’s Innovation Council (to five higher education institutes)",
      icon: <Users size={24} />,
    },
    {
      title: "IIC Advisory Member",
      organization: "SNDT’s Maniben College, Bandra, Mumbai",
      icon: <Building2 size={24} />,
    },
    {
      title: "IIC Advisory Member",
      organization: "Rajarambapu Institute of Technology, Sakharale, Kolhapur",
      icon: <Building2 size={24} />,
    },
    {
      title: "Jury at National Conclave",
      organization: "ESC–STPI START-UP INITIATIVE, 30 November 2022",
      icon: <Gavel size={24} />,
    },
    {
      title: "Jury at Maharashtra Conclave",
      organization: "Maharashtra State Innovation Society, GoM",
      icon: <Gavel size={24} />,
    },
    {
      title: "Ecosystem Networking (Incubators)",
      organization: "Associating with incubators at National and International level",
      icon: <Network size={24} />,
    },
    {
      title: "Ecosystem Networking (Agencies)",
      organization: "Associating with govt/non-govt agencies in entrepreneurship and incubation",
      icon: <Network size={24} />,
    },
    {
      title: "Curriculum Innovation",
      organization: "Introduced Innovation & Entrepreneurship to final year E&TC, Savitribai Phule Pune University",
      icon: <BookOpen size={24} />,
    },
    {
      title: "Invited Participant",
      organization: "Startup Mahakumbh in March 2024 and April 2025",
      icon: <CalendarDays size={24} />,
    },
    {
      title: "Completed Industry Consultancy (₹10 Lakhs)",
      organization: "B.R. Power, Haryana - 'Integrated IoT Solution for Real-Time Tracking of Airport GSE'",
      icon: <Cpu size={24} />,
    }
  ];

  return (
    <section id="highlights" className="highlights">
      <div className="container">
        <div className="highlights-header reveal">
          <span className="subtitle">Key Achievements</span>
          <h2 className="section-title text-center">
            Professional <span className="text-gradient">Highlights</span>
          </h2>
        </div>

        <div className="highlights-grid">
          {highlightsList.map((item, index) => (
            <div key={index} className={`highlight-card elegant-border reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="highlight-icon">{item.icon}</div>
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-org">{item.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
