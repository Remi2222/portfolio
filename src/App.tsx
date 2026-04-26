import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';


import EliteClickDemo from './demos/EliteClickDemo';
import ChoWorksDemo from './demos/ChoWorksDemo';
import VernaVertDemo from './demos/VernaVertDemo';
import RenaultDemo from './demos/RenaultDemo';
import FastcubeDemo from './demos/FastcubeDemo';
import AmouchDemo from './demos/AmouchDemo';
import TicketsDemo from './demos/TicketsDemo';
import InvoiceDemo from './demos/InvoiceDemo';

import PersonalAnalyticsDemo from './demos/PersonalAnalyticsDemo';

const HomePage = () => {
  return (
    <>
      <Header />
      <Chatbot />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="min-h-screen bg-[#111827]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo/elite-click" element={<EliteClickDemo />} />
          <Route path="/demo/choworks" element={<ChoWorksDemo />} />
          <Route path="/demo/verna-vert" element={<VernaVertDemo />} />
          <Route path="/demo/renault" element={<RenaultDemo />} />
          <Route path="/demo/fastcube" element={<FastcubeDemo />} />
          <Route path="/demo/amouch" element={<AmouchDemo />} />
          <Route path="/demo/tickets" element={<TicketsDemo />} />
          <Route path="/demo/invoice" element={<InvoiceDemo />} />
          <Route path="/demo/personal-analytics" element={<PersonalAnalyticsDemo />} />
        </Routes>
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
