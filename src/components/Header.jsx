import React from 'react';

export default function Header({ status }) {
  return (
    <header className="site-header">
      <span className="brand">Calm &amp; Beige</span>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <span className="status-pill">{status}</span>
    </header>
  );
}
