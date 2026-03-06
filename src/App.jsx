import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Terminal from './components/Terminal';
import Background from './components/Background';

function App() {
  return (
    <div className="app-container">
      <Background />

      <nav className="navbar fade-in-up">
        <div className="logo text-gradient">TITO TAMARO.</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#capabilities" className="nav-link">Capabilities</a>
          <a href="#terminal" className="nav-link">Terminal</a>
        </div>
      </nav>

      <main className="main-content">
        <Hero />
        <Capabilities />
        <Terminal />
      </main>

      <footer className="footer fade-in-up delay-500">
        <p>© {new Date().getFullYear()} Antigravity Systems. Building the future.</p>
      </footer>
    </div>
  );
}

export default App;
