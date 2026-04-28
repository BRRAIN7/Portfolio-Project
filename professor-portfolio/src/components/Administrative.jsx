import React, { useState } from 'react';
import { Briefcase, ShieldCheck, Flag, Users, ChevronRight } from 'lucide-react';
import './Administrative.css';

const Administrative = () => {
  const [activeTab, setActiveTab] = useState('leadership');

  const categories = [
    { id: 'leadership', label: 'Strategic Leadership', icon: <Briefcase size={20} /> },
    { id: 'quality', label: 'Quality & Accreditation', icon: <ShieldCheck size={20} /> },
    { id: 'initiatives', label: 'Initiative Coordination', icon: <Flag size={20} /> },
    { id: 'operations', label: 'Committees & Operations', icon: <Users size={20} /> }
  ];

  const rolesData = {
    leadership: [
      { title: "Innovation Officer", duration: "Jan 29, 2025 - Present" },
      { title: "Chief Mentor", duration: "Aug 2023 - Present" },
      { title: "President, Institution’s Innovation Council", duration: "Jun 2023 - Present" },
      { title: "Dean, Entrepreneurship Development – Startup & Innovation Cell", duration: "2015 - 2023" },
      { title: "Dean, Alumni Relations", duration: "2015 - 2023" },
      { title: "Head, Department of Electronics & Telecommunication Engineering", duration: "2021 - Sep 2022" },
      { title: "Dean, International Relations", duration: "2015 - 2016" },
      { title: "Head, Department of Electronics Engineering", duration: "2005 - 2014" }
    ],
    quality: [
      { title: "NAAC Coordinator", duration: "2015 - 2016" },
      { title: "IQAC Coordinator", duration: "2012 - 2019" },
      { title: "AICTE Compliance Report & Mandatory Disclosure", duration: "2005 - 2008" },
      { title: "LIC Report & Presentation Preparation", duration: "2006 - 2007" },
      { title: "College Ranking & Platforms Coordinator", duration: "2015 - 2018" },
      { title: "Formats & Filing System Standardization", duration: "2007 - 2008" }
    ],
    initiatives: [
      { title: "MAKER LAB Incharge", duration: "Dec 27, 2024 - Present" },
      { title: "Incharge, Entrepreneurship Promotion and Innovation Cell", duration: "May 2023 - Present" },
      { title: "Global Youth Employability Initiative (Barclays & Art of Living)", duration: "2015 - 2018" },
      { title: "Language Laboratory Coordinator", duration: "2013 - 2016" },
      { title: "Coordinator of Mission10X", duration: "2008 - 2012" },
      { title: "Coordinator of AARAMBH", duration: "2010 - 2012" }
    ],
    operations: [
      { title: "Women’s Grievances / Internal Complaints Committee Member", duration: "2012 - 2021" },
      { title: "Introducing Psychological Topics Coordinator", duration: "2015 - 2016" },
      { title: "College Awards Coordinator", duration: "2015 - 2017" },
      { title: "Additional Courses & Intake Variation Coordinator", duration: "2007 - 2008" },
      { title: "Result Analysis Committee Member", duration: "2006 - 2007" },
      { title: "Anti-ragging Committee Member", duration: "2006 - 2007" },
      { title: "Cultural Event Coordinator", duration: "1998 - 2006" }
    ]
  };

  return (
    <section id="administrative" className="admin-profiles">
      <div className="container">
        <div className="admin-header reveal">
          <span className="subtitle">Leadership & Service</span>
          <h2 className="section-title text-left">
            Administrative <span className="text-gradient">Profiles</span>
          </h2>
        </div>

        <div className="admin-tabs-container reveal reveal-delay-1">
          <div className="admin-tabs-nav">
            {categories.map(category => (
              <button
                key={category.id}
                className={`admin-tab-btn ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          <div className="admin-tabs-content elegant-border">
            <div className="roles-grid">
              {rolesData[activeTab].map((role, index) => (
                <div key={index} className="role-card">
                  <div className="role-icon">
                    <ChevronRight size={18} />
                  </div>
                  <div className="role-details">
                    <h3 className="role-title">{role.title}</h3>
                    <span className="role-duration">{role.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Administrative;
