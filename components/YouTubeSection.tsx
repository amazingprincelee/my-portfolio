import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { YouTubeVideoType } from '../types/sections';
import { youtubeChannel } from '../portfolio';
import { FaYoutube, FaPlay, FaBell } from 'react-icons/fa';
import { IconType } from 'react-icons';

const Icon = ({ icon }: { icon: IconType }) => (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    {React.createElement(icon as React.ComponentType<{ style?: React.CSSProperties }>, {
      style: { fontSize: '1rem' },
    })}
  </span>
);

const PlayIcon = ({ icon }: { icon: IconType }) => (
  <span style={{ display: 'flex', alignItems: 'center' }}>
    {React.createElement(icon as React.ComponentType<{ style?: React.CSSProperties }>, {
      style: { fontSize: '1.6rem' },
    })}
  </span>
);

function formatDate(iso: string) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

interface Props {
  videos: YouTubeVideoType[];
}

const FALLBACK_VIDEOS: YouTubeVideoType[] = Array.from({ length: 6 }, (_, i) => ({
  id: '',
  title: 'Loading video...',
  published: '',
  thumbnail: `https://placehold.co/480x270/0d1b2a/ffffff?text=TechGist+Video+${i + 1}`,
  url: `https://www.youtube.com/${youtubeChannel.handle}/videos`,
}));

const VideoCard = ({ video, index }: { video: YouTubeVideoType; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#0d1b2a',
        boxShadow: hovered
          ? '0 16px 40px rgba(0,0,0,0.5)'
          : '0 4px 16px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', paddingTop: '56.25%', background: '#111' }}>
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease',
          }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: hovered ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.15)',
          transition: 'background 0.25s',
        }} />
        {/* Play button */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: hovered ? '#ff0000' : 'rgba(255,255,255,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: hovered ? '#fff' : '#ff0000',
            transform: hovered ? 'scale(1.12)' : 'scale(1)',
            transition: 'all 0.25s ease',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          }}>
            <PlayIcon icon={FaPlay} />
          </div>
        </div>
        {/* Video number badge */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: '#ff0000',
          color: '#fff',
          fontSize: '0.7rem',
          fontWeight: 700,
          padding: '2px 8px',
          borderRadius: '4px',
          letterSpacing: '0.5px',
        }}>
          #{index + 1}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px 16px' }}>
        <p style={{
          color: '#e8f0fe',
          fontSize: '0.88rem',
          fontWeight: 600,
          lineHeight: 1.45,
          margin: 0,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          minHeight: '2.5rem',
        }}>
          {video.title}
        </p>
        {video.published && (
          <p style={{
            color: '#7a9bb5',
            fontSize: '0.75rem',
            margin: '6px 0 0',
          }}>
            {formatDate(video.published)}
          </p>
        )}
      </div>
    </a>
  );
};

const YouTubeSection = ({ videos }: Props) => {
  const displayVideos = videos.length > 0 ? videos : FALLBACK_VIDEOS;

  return (
    <section style={{
      background: 'linear-gradient(160deg, #060d14 0%, #0d1b2a 50%, #091520 100%)',
      padding: '72px 0',
    }}>
      <Container>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255,0,0,0.12)',
            border: '1px solid rgba(255,0,0,0.25)',
            borderRadius: '50px',
            padding: '6px 18px',
            marginBottom: '20px',
          }}>
            <span style={{ display: 'flex', color: '#ff0000' }}>
              {React.createElement((FaYoutube as React.ComponentType<{ style?: React.CSSProperties }>), { style: { fontSize: '1.1rem' } })}
            </span>
            <span style={{ color: '#ff6060', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              YouTube Channel
            </span>
          </div>

          <h2 style={{
            color: '#ffffff',
            fontSize: '2rem',
            fontWeight: 800,
            margin: '0 0 12px',
            lineHeight: 1.2,
          }}>
            TechGist with Prince Lee
          </h2>
          <p style={{
            color: '#7a9bb5',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto 28px',
            lineHeight: 1.6,
          }}>
            Tech tutorials, development insights, and coding projects — straight from my experience building real products.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://www.youtube.com/${youtubeChannel.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ff0000',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '11px 24px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255,0,0,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,0,0,0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,0,0,0.4)';
              }}
            >
              <Icon icon={FaYoutube} />
              Visit Channel
            </a>
            <a
              href={`https://www.youtube.com/${youtubeChannel.handle}?sub_confirmation=1`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '11px 24px',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.25)',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
            >
              <Icon icon={FaBell} />
              Subscribe
            </a>
          </div>
        </div>

        {/* Video grid */}
        {videos.length === 0 && (
          <p style={{ color: '#7a9bb5', textAlign: 'center', marginBottom: '24px', fontSize: '0.85rem' }}>
            ⚙️ Add your Channel ID to <strong style={{ color: '#a8c8e0' }}>portfolio.ts</strong> to load live videos automatically.
          </p>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
          className="youtube-grid"
        >
          {displayVideos.map((video, i) => (
            <VideoCard key={video.id || i} video={video} index={i} />
          ))}
        </div>

        {/* Footer link */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <a
            href={`https://www.youtube.com/${youtubeChannel.handle}/videos`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#7a9bb5',
              fontSize: '0.85rem',
              textDecoration: 'none',
              borderBottom: '1px solid #7a9bb5',
              paddingBottom: '1px',
            }}
          >
            View all videos →
          </a>
        </div>
      </Container>
    </section>
  );
};

export default YouTubeSection;
