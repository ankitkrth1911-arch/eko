import React from 'react';

const services = [
  {
    title: 'Design',
    text: 'Calm, considered visual design with a warm, neutral palette.',
  },
  {
    title: 'Build',
    text: 'A React frontend bundled with webpack and served by Fastify.',
  },
  {
    title: 'Ship',
    text: 'One build command produces a production-ready static bundle.',
  },
];

export default function Services() {
  return (
    <section id="services" className="features">
      <h2>Services</h2>
      <div className="card-grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
