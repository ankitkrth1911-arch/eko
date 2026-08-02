import React from 'react';

const tiles = [1, 2, 3, 4, 5, 6];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {tiles.map((n) => (
          <div className="gallery-tile" key={n}>
            <span>{n}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
