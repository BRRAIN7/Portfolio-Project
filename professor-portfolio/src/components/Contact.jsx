import React from 'react';
import { Mail, MessageSquare, Share2, Globe } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h2 className="section-title text-left">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="contact-text">
              Interested in speaking engagements, research collaborations, or bringing innovation leadership to your organization? I'm always open to discussing new opportunities and paradigm-shifting ideas.
            </p>

            <div className="contact-methods">
              <a href="mailto:bhavna.ambudkar@sitpune.edu.in" className="contact-method reveal reveal-delay-1">
                <div className="method-icon">
                  <Mail size={24} color="var(--accent-cyan)" />
                </div>
                <div>
                  <span className="method-label">Direct Line</span>
                  <span className="method-value">bhavna.ambudkar@sitpune.edu.in</span>
                </div>
              </a>

              <div className="social-links reveal reveal-delay-2">
                <a href="#" className="social-link"><MessageSquare size={20} /></a>
                <a href="#" className="social-link"><Share2 size={20} /></a>
                <a href="#" className="social-link"><Globe size={20} /></a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass-panel reveal reveal-delay-2">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">Initiate Contact</h3>

              <div className="form-group">
                <input type="text" id="name" placeholder="Name" className="form-control" />
              </div>

              <div className="form-group">
                <input type="email" id="email" placeholder="Email Address" className="form-control" />
              </div>

              <div className="form-group">
                <textarea id="message" rows="1" placeholder="Your Message" className="form-control auto-expand"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
