import React, { useState } from 'react';
import { Col, Badge } from 'reactstrap';
import Fade from './Fade';
import { ProjectType } from '../types/sections';

const FeaturedProjectCard = ({ name, desc, link, images, downloadLink, technologies }: ProjectType) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images && images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const bullets = desc
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const shortDesc = bullets[0] || '';
  const highlights = bullets.slice(1).filter((l) => l.startsWith('•') || l.includes(':') || l.includes('·')).slice(0, 3);

  return (
    <Col lg="12" className="mb-5">
      <Fade bottom duration={1800}>
        {/* FEATURED LABEL */}
        <div className="featured-label-row">
          <span className="featured-star">★</span>
          <span className="featured-label-text">FEATURED PROJECT</span>
          <span className="featured-label-line" />
        </div>

        <div className="featured-card-shell">
          {/* LEFT — Branding + Info */}
          <div className="featured-left">
            <div className="featured-brand">
              <span className="featured-app-icon">🏠</span>
              <div>
                <h2 className="featured-title">{name}</h2>
                <p className="featured-tagline">Nigeria&apos;s Trusted Property Platform</p>
              </div>
            </div>

            <p className="featured-short-desc">{shortDesc}</p>

            {highlights.length > 0 && (
              <ul className="featured-highlights">
                {highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            {technologies && technologies.length > 0 && (
              <div className="featured-tech-row">
                {technologies.map((tech, i) => (
                  <span key={i} className="featured-tech-badge">{tech}</span>
                ))}
              </div>
            )}

            <div className="featured-cta-row">
              {downloadLink && (
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-download-btn"
                >
                  <i className="fa fa-android" style={{ marginRight: '8px', fontSize: '1.1rem' }} />
                  Download APK
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-live-btn"
                >
                  <i className="fa fa-globe" style={{ marginRight: '8px' }} />
                  Visit Website
                </a>
              )}
            </div>

            <div className="featured-stats-row">
              <div className="featured-stat">
                <span className="featured-stat-num">2+</span>
                <span className="featured-stat-label">Platforms</span>
              </div>
              <div className="featured-stat">
                <span className="featured-stat-num">10+</span>
                <span className="featured-stat-label">Features</span>
              </div>
              <div className="featured-stat">
                <span className="featured-stat-num">100%</span>
                <span className="featured-stat-label">Full-Stack</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Phone mockup */}
          <div className="featured-right">
            <div className="phone-mockup-wrap">
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  {images && images.length > 0 && (
                    <img
                      src={images[currentImageIndex]}
                      alt={`${name} screenshot ${currentImageIndex + 1}`}
                      className="phone-screen-img"
                      style={{
                        objectPosition: images[currentImageIndex].endsWith('.svg') ? 'center' : 'top center',
                      }}
                    />
                  )}
                </div>
                <div className="phone-home-bar" />
              </div>

              {/* Floating badges */}
              <div className="phone-badge phone-badge-escrow">
                🔒 Escrow Protected
              </div>
              <div className="phone-badge phone-badge-kyc">
                ✅ KYC Verified
              </div>

              {/* Dot nav */}
              {images && images.length > 1 && (
                <div className="phone-dots">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      className={`phone-dot ${i === currentImageIndex ? 'phone-dot--active' : ''}`}
                      onClick={() => setCurrentImageIndex(i)}
                      aria-label={`Screenshot ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Prev / Next arrows */}
              {images && images.length > 1 && (
                <>
                  <button className="phone-nav phone-nav--prev" onClick={prevImage} aria-label="Previous">‹</button>
                  <button className="phone-nav phone-nav--next" onClick={nextImage} aria-label="Next">›</button>
                </>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </Col>
  );
};

export default FeaturedProjectCard;
