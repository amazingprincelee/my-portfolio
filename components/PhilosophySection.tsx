import React from 'react';
import { FaBriefcase, FaFilePdf } from 'react-icons/fa';
import { IconType } from 'react-icons';

const Icon = ({ icon }: { icon: IconType }) => (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    {React.createElement(icon as React.ComponentType<{ style?: React.CSSProperties }>, {
      style: { fontSize: '1rem' },
    })}
  </span>
);

const PhilosophySection = () => {
  return (
    <section style={{
      background: 'linear-gradient(160deg, #060d14 0%, #0d1b2a 55%, #091520 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background decorative large quote mark */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '28rem',
        lineHeight: 1,
        color: 'rgba(255,255,255,0.018)',
        fontFamily: 'Georgia, serif',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-20px',
      }}>
        &ldquo;
      </div>

      <div style={{
        maxWidth: '820px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Top label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0,135,81,0.12)',
          border: '1px solid rgba(0,135,81,0.3)',
          borderRadius: '50px',
          padding: '5px 16px',
          marginBottom: '40px',
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#00c96b',
            boxShadow: '0 0 8px #00c96b',
          }} />
          <span style={{
            color: '#00c96b',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}>
            Engineering Philosophy
          </span>
        </div>

        {/* Opening quote mark */}
        <div style={{
          fontSize: '5rem',
          lineHeight: 0.6,
          color: '#008751',
          fontFamily: 'Georgia, serif',
          marginBottom: '24px',
          opacity: 0.8,
        }}>
          &ldquo;
        </div>

        {/* The Quote */}
        <blockquote style={{
          margin: 0,
          padding: 0,
        }}>
          <p style={{
            color: '#ffffff',
            fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
            fontWeight: 700,
            lineHeight: 1.45,
            letterSpacing: '-0.3px',
            margin: '0 0 8px',
            fontStyle: 'italic',
          }}>
            Those who study the system control the outcome;
            <br />
            those who guess depend on luck.
          </p>
        </blockquote>

        {/* Closing quote mark */}
        <div style={{
          fontSize: '5rem',
          lineHeight: 0.8,
          color: '#008751',
          fontFamily: 'Georgia, serif',
          marginBottom: '36px',
          opacity: 0.8,
        }}>
          &rdquo;
        </div>

        {/* Divider */}
        <div style={{
          width: '60px',
          height: '3px',
          background: 'linear-gradient(to right, #008751, #00c96b)',
          borderRadius: '2px',
          margin: '0 auto 32px',
        }} />

        {/* Supporting statement */}
        <p style={{
          color: '#7a9bb5',
          fontSize: '1rem',
          lineHeight: 1.75,
          maxWidth: '560px',
          margin: '0 auto 48px',
        }}>
          Every system I build starts with deep analysis — architecture before code,
          structure before speed. That&apos;s how I&apos;ve delivered a full ERP from scratch,
          an AI trading platform, and production-grade mobile apps that actually work at scale.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a
            href="https://www.upwork.com/freelancers/~01f5e085fce3ca17bd?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              background: 'linear-gradient(135deg, #008751, #006400)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '14px 28px',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(0,135,81,0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,135,81,0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,135,81,0.4)';
            }}
          >
            <Icon icon={FaBriefcase} />
            Hire Me on Upwork
          </a>

          <a
            href="https://prince-lee-portfolio.vercel.app/Prince_Lee_Nna_CV.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '9px',
              background: 'transparent',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.95rem',
              padding: '13px 28px',
              borderRadius: '50px',
              textDecoration: 'none',
              border: '1.5px solid rgba(255,255,255,0.25)',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <Icon icon={FaFilePdf} />
            See My CV
          </a>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
