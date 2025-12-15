import React, { useState, useEffect } from 'react';
import SalesChart from './SalesChart'; 

// Data & Text definitions
const TYPING_TEXT = `APS enables administrators to <span class="highlight">monitor live contests</span>, <span class="highlight">detect suspicious behavior</span>, and take <span class="highlight">immediate action</span> — all from a single centralized dashboard.`;
const HERO_TEXT = "Real-time proctoring that combines performance and integrity to ensure fair, verifiable contests";

const AboutSection = () => {
    const [typedText, setTypedText] = useState('');
    const heroWords = HERO_TEXT.split(" ");
  
    // Typing Effect Logic
    useEffect(() => {
      let i = 0;
      const typeWriter = () => {
        if (i < TYPING_TEXT.length) {
          setTypedText(TYPING_TEXT.slice(0, i + 1));
          i++;
          setTimeout(typeWriter, 30);
        } else {
           setTypedText(TYPING_TEXT);
        }
      };
      typeWriter();
    }, []);

    return (
        <section id="about">
            <h2 className="hero-heading-container">
                <span className="hero-line" style={{ animationDelay: '0s' }}>
                    Real-time Proctoring
                </span>
                <span className="hero-line sub">
                    Where <span className="hero-highlight">Performance</span> meets <span className="hero-highlight">Integrity</span>
                </span>
            </h2>

            <p className="hero-tagline">
                Ensuring <strong>fair</strong>, <strong>verifiable</strong> contests — in real time
            </p>

            <div className="row align-items-start gy-4 mt-4">
                {/* LEFT CONTENT */}
                <div className="col-md-6">
                    <h3 className="fw-bold mb-2" style={{ color: 'var(--accent)' }}>
                        APS — Admin Proctored System
                    </h3>

                    {/* HERO HEADING INNER */}
                    <section className="hero-section">
                        <div className="hero-glow"></div>
                        <h1 className="hero-title">
                            {heroWords.map((word, i) => (
                                <span 
                                    key={i} 
                                    className="hero-word" 
                                    style={{ animationDelay: `${i * 0.08}s` }}
                                >
                                    {word}&nbsp;
                                </span>
                            ))}
                        </h1>
                        <div className="hero-divider"></div>
                    </section>

                    {/* TYPING TEXT */}
                    <p className="animated-text">
                        <span dangerouslySetInnerHTML={{ __html: typedText }}></span>
                        <span className="typing-cursor"></span>
                    </p>

                    {/* WHY APS CARDS */}
                    <h3 className="fw-bold mt-4" style={{ color: 'var(--accent)' }}>WHY APS</h3>
                    {/* ... (Rest of WHY APS cards JSX) ... */}
                    <div className="row g-3 mt-2">
                        <div className="col-sm-6">
                            <div className="why-aps-card">
                                <i className="fa-solid fa-triangle-exclamation"></i>
                                <h6 className="mt-2">Traditional Proctoring</h6>
                                <p className="opacity-75 small">Passive recording and delayed review lead to disputed results.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="why-aps-card">
                                <i className="fa-solid fa-shield-halved"></i>
                                <h6 className="mt-2">APS Advantage</h6>
                                <p className="opacity-75 small">Live monitoring with immediate administrative control.</p>
                            </div>
                        </div>
                    </div>

                    {/* HOW APS WORKS CARDS */}
                    <h4 className="fw-bold mt-4" style={{ color: 'var(--accent)' }}>HOW APS WORKS</h4>
                    {/* ... (Rest of HOW APS WORKS cards JSX) ... */}
                    <div className="row g-3 mt-2">
                        <div className="col-sm-6">
                            <div className="why-aps-card">
                                <h6>Contest Score</h6>
                                <p className="opacity-75 small">Objective performance score from the test platform.</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="why-aps-card">
                                <h6>Confidence Score</h6>
                                <p className="opacity-75 small">Starts at 100% and drops when suspicious activity is detected.</p>
                            </div>
                        </div>
                    </div>

                    <p className="dual-score-summary text-center mt-4">
                        <i className="fa-solid fa-flag me-2"></i>
                        High performance with low integrity is <span className="highlight">automatically flagged for review</span>
                    </p>
                </div>

                {/* RIGHT VIDEO & CHART */}
                <div className="col-md-6 d-flex flex-column gap-4">
                    <div className="text-center">
                        <video 
                          className="about-video w-100" 
                          muted 
                          loop 
                          onMouseEnter={(e) => e.target.play()} 
                          onMouseLeave={(e) => e.target.pause()}
                        >
                          <source src="https://www.w3schools.com/html/mov_bbb.mp4" />
                        </video>
                    </div>
                    <SalesChart />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;