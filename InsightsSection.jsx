import React, { useState } from 'react';

const InsightsSection = () => {
    const [isIntegrityOpen, setIntegrityOpen] = useState(false);

    return (
        <section id="insights" className="mt-5">
            <h2>Insights</h2>
            <div className="row g-3 mt-4 align-items-stretch">
                {/* CONTACT */}
                <div className="col-md-4">
                    <div className="graph-card text-center h-100 insight-card">
                        <i className="fa-solid fa-headset insight-icon fs-1 mb-3" style={{ color: 'var(--accent)' }}></i>
                        <h5 className="fw-bold mt-2">Contact Admin</h5>
                        <div className="contact-item mb-2">
                            <i className="fa-solid fa-envelope me-2"></i>admin@proctoredsys.com
                        </div>
                        <div className="contact-item">
                            <i className="fa-solid fa-phone me-2"></i>+91 98765 43210
                        </div>
                    </div>
                </div>

                {/* INTEGRITY */}
                <div className="col-md-4">
                    <div className="graph-card h-100 insight-card">
                        <i className="fa-solid fa-shield insight-icon fs-1 mb-3" style={{ color: 'var(--accent)' }}></i>
                        <h5 className="fw-bold">Integrity Monitoring</h5>
                        <p className="small opacity-75 mb-2">
                            Real-time AI-based surveillance to ensure fair participation.
                        </p>
                        <button 
                            className="learn-more-btn w-100" 
                            onClick={() => setIntegrityOpen(!isIntegrityOpen)}
                        >
                            View Detection Layers
                        </button>
                        <div className={`roll-section mt-2 ${isIntegrityOpen ? 'open' : ''}`}>
                            <ul className="integrity-list mt-2">
                                <li><i className="fa-solid fa-eye"></i> Eye & gaze tracking</li>
                                <li><i className="fa-solid fa-user-group"></i> Multiple faces detected</li>
                                <li><i className="fa-solid fa-laptop-code"></i> VM & screen abuse</li>
                                <li><i className="fa-solid fa-chart-line"></i> Confidence score impact</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* QUICK STATS */}
                <div className="col-md-4">
                    <div className="graph-card h-100 insight-card text-center">
                        <i className="fa-solid fa-chart-pie insight-icon fs-1 mb-3" style={{ color: 'var(--accent)' }}></i>
                        <h5 className="fw-bold">Live Insights</h5>
                        <div className="stats-box d-flex justify-content-between mt-3 px-3">
                            <div>
                                <span className="stat-value d-block fw-bold fs-4">98%</span>
                                <span className="stat-label small">Fair Exams</span>
                            </div>
                            <div>
                                <span className="stat-value d-block fw-bold fs-4">1.8s</span>
                                <span className="stat-label small">Response</span>
                            </div>
                            <div>
                                <span className="stat-value d-block fw-bold fs-4">24×7</span>
                                <span className="stat-label small">Monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InsightsSection;