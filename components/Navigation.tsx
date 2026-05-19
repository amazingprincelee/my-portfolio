import React, { useState, useEffect, useRef } from 'react';
import { greetings, socialLinks } from '../portfolio';
import Headroom from 'headroom.js';
import { Container } from 'reactstrap';
import Link from 'next/link';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaBriefcase,
  FaFilePdf,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const Icon = ({ icon }: { icon: IconType }) => (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    {React.createElement(icon as React.ComponentType<{ style?: React.CSSProperties }>, {
      style: { fontSize: '1.1rem' },
    })}
  </span>
);

const socialItems = [
  { key: 'linkedin',  label: 'LinkedIn',  icon: FaLinkedin,       bg: '#0077b5' },
  { key: 'github',    label: 'GitHub',    icon: FaGithub,         bg: '#333333' },
  { key: 'facebook',  label: 'Facebook',  icon: FaFacebookSquare, bg: '#1877f2' },
  { key: 'instagram', label: 'Instagram', icon: FaInstagram,      bg: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' },
  { key: 'twitter',   label: 'Twitter',   icon: FaTwitter,        bg: '#1da1f2' },
  { key: 'upwork',    label: 'Upwork',    icon: FaBriefcase,      bg: '#6fda44' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Headroom
  useEffect(() => {
    const el = document.getElementById('navbar-main');
    if (el) {
      const headroom = new Headroom(el);
      headroom.init();
    }
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 1040,
            backdropFilter: 'blur(2px)',
          }}
        />
      )}

      <header
        className="header-global"
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1050,
        }}
      >
        <nav
          className="navbar navbar-transparent navbar-light headroom"
          id="navbar-main"
          style={{ zIndex: 1050 }}
        >
          <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'nowrap' }}>

            {/* Brand */}
            <Link href="/" passHref legacyBehavior>
              <a className="navbar-brand mr-lg-5" style={{ textDecoration: 'none' }}>
                <span style={{
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  letterSpacing: '0.3px',
                  whiteSpace: 'nowrap',
                }}>
                  Prince Lee
                </span>
              </a>
            </Link>

            {/* Desktop links */}
            <div className="d-none d-lg-flex align-items-center" style={{ gap: '8px' }}>
              {socialItems.map(({ key, label, icon, bg }) =>
                socialLinks[key] ? (
                  <a
                    key={key}
                    href={socialLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: bg,
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.15)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <Icon icon={icon} />
                  </a>
                ) : null
              )}
              <a
                href="https://prince-lee-portfolio.vercel.app/Prince_Lee_Nna_CV.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#ffffff',
                  color: '#008751',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '7px 16px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  marginLeft: '8px',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <Icon icon={FaFilePdf} />
                See My CV
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="d-lg-none"
              onClick={() => setIsOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1.5px solid rgba(255,255,255,0.4)',
                borderRadius: '8px',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <Icon icon={isOpen ? FaTimes : FaBars} />
            </button>
          </Container>
        </nav>

        {/* Mobile drawer */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1045,
            transform: isOpen ? 'translateY(0)' : 'translateY(-110%)',
            transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
            background: '#ffffff',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '20px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.22)',
            padding: '0 0 24px',
          }}
        >
          {/* Drawer header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '18px 24px 16px',
            borderBottom: '1px solid #f0f0f0',
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#0d1b2a', lineHeight: 1.2 }}>
                Prince Lee Nna
              </div>
              <div style={{ fontSize: '0.75rem', color: '#008751', fontWeight: 600, marginTop: '2px' }}>
                Senior Full-Stack Engineer
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              style={{
                background: '#f4f4f4',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#333',
              }}
            >
              <Icon icon={FaTimes} />
            </button>
          </div>

          {/* CV CTA */}
          <div style={{ padding: '16px 24px 8px' }}>
            <a
              href="https://prince-lee-portfolio.vercel.app/Prince_Lee_Nna_CV.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #008751, #006400)',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '13px 20px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(0,135,81,0.35)',
              }}
            >
              <Icon icon={FaFilePdf} />
              See My CV
            </a>
          </div>

          {/* Social links */}
          <div style={{ padding: '8px 24px 0' }}>
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: '#999', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '12px' }}>
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {socialItems.map(({ key, label, icon, bg }) =>
                socialLinks[key] ? (
                  <a
                    key={key}
                    href={socialLinks[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '11px 14px',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      color: '#1a1a2e',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '34px',
                      height: '34px',
                      borderRadius: '8px',
                      background: bg,
                      color: '#fff',
                      flexShrink: 0,
                    }}>
                      <Icon icon={icon} />
                    </span>
                    {label}
                  </a>
                ) : null
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
