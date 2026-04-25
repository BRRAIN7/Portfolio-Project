import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const articles = [
    {
      category: "Design Thinking",
      title: "Why Design Thinking Matters in Engineering Education",
      readTime: "6 min read",
      date: "Oct 12, 2025",
      excerpt: "Exploring how integrating human-centered design into deep technical curricula prepares engineers to build solutions with genuine societal impact."
    },
    {
      category: "Innovation Ecosystems",
      title: "Building Innovation Ecosystems in Higher Education",
      readTime: "8 min read",
      date: "Sep 28, 2025",
      excerpt: "A blueprint for universities to transform traditional academic structures into dynamic hubs of startup incubation and industry collaboration."
    },
    {
      category: "Entrepreneurship",
      title: "Entrepreneurship as a Mindset, Not a Course",
      readTime: "5 min read",
      date: "Aug 15, 2025",
      excerpt: "Why the true value of entrepreneurial education lies not just in venture creation, but in cultivating resilience and adaptability in students."
    },
    {
      category: "Future Skills",
      title: "Future Skills for Student Innovators",
      readTime: "4 min read",
      date: "Jul 02, 2025",
      excerpt: "Identifying and nurturing the core competencies required for the next generation of leaders to navigate ambiguous problem spaces."
    },
    {
      category: "AI Integration",
      title: "Human-Centered Innovation in the AI Era",
      readTime: "7 min read",
      date: "Jun 18, 2025",
      excerpt: "Balancing the rapid advancement of artificial intelligence with fundamentally human-centric design philosophies."
    },
    {
      category: "Industry Collaboration",
      title: "Academia-Industry Collaboration as Innovation Catalyst",
      readTime: "5 min read",
      date: "May 04, 2025",
      excerpt: "How blurring the lines between university research labs and corporate R&D can accelerate the path to market for deep tech."
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="blog-header reveal">
          <div className="header-left">
            <span className="subtitle">Articles & Essays</span>
            <h2 className="section-title text-left">
              Thought <span className="text-gradient">Leadership</span>
            </h2>
          </div>
          <div className="header-right">
            <a href="#" className="btn btn-outline">View All Articles</a>
          </div>
        </div>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <article key={index} className={`blog-card elegant-border reveal reveal-delay-${(index % 3) + 1}`}>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-time">
                    <Clock size={14} />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="blog-title">{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                
                <div className="blog-footer">
                  <span className="blog-date">{article.date}</span>
                  <a href="#" className="read-more">
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
