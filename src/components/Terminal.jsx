import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const systemCommands = {
    about: "I am Tito Tamaro, a results-oriented Project & Product Manager with over 5 years of experience delivering complex technical solutions in multinational environments.",
    education: "B.S. in Materials Science and Engineering, Institut Teknologi Bandung (ITB) (2010-2015) | Purwadhika Digital Technology School (Data Analysis, Visualization, Machine Learning)",
    skills: "SAFe, Agile-Scrum, Waterfall, Azure, Jira, Python, PowerBI, Data Analytics, MS Office Suite.",
    experience: "Berlian Sistem Informasi (Nov 2023 - Present) | Xtremax (Jan 2021 - Nov 2023) | Excel Metal Industry | NS Bluescope Indonesia",
    contact: "Email: tito.tamaro2@gmail.com | LinkedIn: /in/titotamaro | Phone: (+62) 81-320-977-863",
    clear: "CLEAR",
    help: "Available commands: about, education, skills, experience, contact, clear, help"
};

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'system', text: 'Initializing Tito Tamaro Profile...' },
        { type: 'system', text: 'System ready. Type "help" to see available commands.' }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        const newHistory = [...history, { type: 'user', text: `> ${input}` }];

        if (cmd === 'clear') {
            setHistory([]);
        } else if (systemCommands[cmd]) {
            newHistory.push({ type: 'system', text: systemCommands[cmd] });
            setHistory(newHistory);
        } else {
            newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for a list of commands.` });
            setHistory(newHistory);
        }

        setInput('');
    };

    return (
        <section id="terminal" className="terminal-section fade-in-up">
            <div className="section-header">
                <h2 className="section-title">
                    Interactive <span className="text-gradient">Console</span>
                </h2>
                <p className="section-subtitle">Interface directly with the system to learn more.</p>
            </div>

            <div className="terminal-container glass-panel">
                <div className="terminal-header">
                    <div className="window-controls">
                        <span className="control close"></span>
                        <span className="control minimize"></span>
                        <span className="control expand"></span>
                    </div>
                    <div className="terminal-title">guest@tito-tamaro:~</div>
                </div>

                <div className="terminal-body">
                    {history.map((line, i) => (
                        <div key={i} className={`terminal-line ${line.type}`}>
                            {line.text}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                <form className="terminal-input-form" onSubmit={handleCommand}>
                    <span className="prompt">~ guest$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="terminal-input"
                        autoComplete="off"
                        spellCheck="false"
                    />
                    <span className="blinking-cursor"></span>
                </form>
            </div>
        </section>
    );
};

export default Terminal;
