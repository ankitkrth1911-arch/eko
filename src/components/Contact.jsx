import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('bad response');
      setSent('ok');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setSent('error');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="cta">
          {sent === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        {sent === 'ok' && <p className="form-note ok">Thanks — message received.</p>}
        {sent === 'error' && <p className="form-note error">Something went wrong. Try again.</p>}
      </form>
    </section>
  );
}
