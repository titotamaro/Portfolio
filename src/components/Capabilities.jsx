import React, { useEffect, useRef } from 'react';
import './Capabilities.css';

const capabilitiesList = [
    {
        title: "Project & Product Management",
        description: "Driving cross-functional teams of up to 25 members to deliver complex solutions across automotive and government sectors. Proven track record in Project Planning, Risk Management, and Stakeholder Communication.",
        icon: "📊",
        color: "var(--accent-purple)",
        delay: "delay-100"
    },
    {
        title: "Agile & SAFe Methodologies",
        description: "Certified SAFe Product Manager bridging business needs and engineering delivery through SAFe, Agile, Scrum, and Waterfall frameworks.",
        icon: "🔄",
        color: "var(--accent-cyan)",
        delay: "delay-200"
    },
    {
        title: "AI Integration & Data Analytics",
        description: "Spearheaded RAG and generative AI (GPT-4) model deployment via Azure & LangChain. Experienced in PowerBI and Python data workflows.",
        icon: "🧠",
        color: "var(--accent-blue)",
        delay: "delay-300"
    },
    {
        title: "Stakeholder Management",
        description: "Primary liaison balancing strategic business goals, changing constraints, and technical feasibility for multinational client engagements.",
        icon: "🤝",
        color: "var(--text-secondary)",
        delay: "delay-400"
    }
];

const Capabilities = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll('.capability-card');
        cards.forEach((card) => observer.observe(card));

        return () => cards.forEach((card) => observer.unobserve(card));
    }, []);

    return (
        <section id="capabilities" className="capabilities-section" ref={sectionRef}>
            <div className="section-header fade-in-up">
                <h2 className="section-title">
                    Core <span className="text-gradient">Capabilities</span>
                </h2>
                <p className="section-subtitle">
                    Leveraging modern stacks to engineer solutions that scale.
                </p>
            </div>

            <div className="capabilities-grid">
                {capabilitiesList.map((item, index) => (
                    <div
                        key={index}
                        className={`capability-card glass-panel ${item.delay}`}
                    >
                        <div className="card-icon" style={{ textShadow: `0 0 20px ${item.color}` }}>
                            {item.icon}
                        </div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-description">{item.description}</p>
                        <div className="card-hover-border" style={{ background: item.color }}></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Capabilities;
