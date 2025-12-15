import React from 'react';

const CONTRIBUTORS = [
    {
      id: 1,
      name: "Gaurav Yadav",
      role: "Leader & Architect",
      desc: "System vision and AI-proctoring architecture.",
      img: "https://i.pravatar.cc/300?img=1",
      isLeader: true
    },
    {
      id: 2,
      name: "Dr. Rahul Mehta",
      role: "Mentor",
      desc: "Academic and system guidance.",
      img: "https://i.pravatar.cc/300?img=5",
      isLeader: false
    },
    // Slider members
    { id: 3, name: "Aman", role: "Ops", desc: "Operations", img: "https://i.pravatar.cc/150?img=2", inSlider: true },
    { id: 4, name: "Neha", role: "Backend", desc: "APIs", img: "https://i.pravatar.cc/150?img=3", inSlider: true },
    { id: 5, name: "Riya", role: "Frontend", desc: "UI/UX", img: "https://i.pravatar.cc/150?img=4", inSlider: true },
    { id: 6, name: "Kunal", role: "QA", desc: "Testing", img: "https://i.pravatar.cc/150?img=6", inSlider: true },
    { id: 7, name: "Sneha", role: "Analyst", desc: "Insights", img: "https://i.pravatar.cc/150?img=7", inSlider: true },
];

const ContributorsSection = ({ openModal }) => {
    const topContributors = CONTRIBUTORS.filter(c => !c.inSlider);
    const sliderContributors = CONTRIBUTORS.filter(c => c.inSlider);

    return (
        <section id="team">
            <h2>Contributors</h2>
            <div className="contributors-top mt-5">
                {topContributors.map(c => (
                    <div 
                        key={c.id} 
                        className={`contributor-card contributor ${c.isLeader ? 'leader-card' : ''}`}
                        onClick={() => openModal(c)}
                    >
                        <img src={c.img} alt={c.name} />
                        <h4>{c.isLeader ? 'Leader' : 'Mentor'}</h4> 
                        {/* Note: Original code uses 'Leader'/'Mentor' for top two */}
                    </div>
                ))}
            </div>

            <div className="contributors-slider">
                <div className="slider-track mt-5">
                    {sliderContributors.map(c => (
                        <div 
                            key={c.id} 
                            className="contributor-card contributor"
                            onClick={() => openModal(c)}
                        >
                            <img src={c.img} alt={c.name} />
                            <h5>{c.role}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContributorsSection;