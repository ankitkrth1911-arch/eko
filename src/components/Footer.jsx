import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Calm &amp; Beige. Built with React, Fastify &amp; webpack.</p>
    </footer>
  );
}
