import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [status, setStatus] = useState('Checking API…');

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((data) => setStatus(`API status: ${data.status}`))
      .catch(() => setStatus('API unreachable'));
  }, []);

  return (
    <div className="page">
      <Header status={status} />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
