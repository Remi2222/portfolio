import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

// Import demo pages
import EliteClickDemo from './demos/EliteClickDemo.tsx';
import ChoWorksDemo from './demos/ChoWorksDemo.tsx';
import VernaVertDemo from './demos/VernaVertDemo.tsx';
import RenaultDemo from './demos/RenaultDemo.tsx';
import FastcubeDemo from './demos/FastcubeDemo.tsx';
import AmouchDemo from './demos/AmouchDemo.tsx';
import TicketsDemo from './demos/TicketsDemo.tsx';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo/elite-click" element={<EliteClickDemo />} />
          <Route path="/demo/choworks" element={<ChoWorksDemo />} />
          <Route path="/demo/verna-vert" element={<VernaVertDemo />} />
          <Route path="/demo/renault" element={<RenaultDemo />} />
          <Route path="/demo/fastcube" element={<FastcubeDemo />} />
          <Route path="/demo/amouch" element={<AmouchDemo />} />
          <Route path="/demo/tickets" element={<TicketsDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
