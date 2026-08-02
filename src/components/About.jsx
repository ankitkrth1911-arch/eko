import React from 'react';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <h2>About</h2>
        <p>
          This site is built to feel unhurried. Every choice — the cream
          background, the rounded cards, the tan accent — is there to keep
          things easy on the eyes so your content stays the focus.
        </p>
        <p>
          Swap this copy for your own story. The layout underneath is a
          plain React component, so editing it is just editing text.
        </p>
      </div>
      <div className="about-stats">
        <div className="stat">
          <span className="stat-num">10+</span>
          <span className="stat-label">Years of calm design</span>
        </div>
        <div className="stat">
          <span className="stat-num">200+</span>
          <span className="stat-label">Projects shipped</span>
        </div>
        <div className="stat">
          <span className="stat-num">98%</span>
          <span className="stat-label">Happy clients</span>
        </div>
      </div>
    </section>
  );
}
