import React from 'react';
import { socialLinks } from '../portfolio';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaBriefcase,
  FaGlobe,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

const Icon = ({ icon }: { icon: IconType }) => (
  <span style={{ display: 'flex' }}>
    {React.createElement(icon as React.ComponentType<{ style?: React.CSSProperties }>, { style: { fontSize: '1.3rem' } })}
  </span>
);


const btnStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42px',
  height: '42px',
  borderRadius: '50%',
  margin: '0 4px',
  color: '#ffffff',
  transition: 'transform 0.2s, opacity 0.2s',
  textDecoration: 'none',
};

const SocialLink = ({
  href,
  label,
  bg,
  children,
}: {
  href: string;
  label: string;
  bg: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{ ...btnStyle, background: bg }}
    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
  >
    {children}
  </a>
);

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg" style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
      {socialLinks.linkedin && (
        <SocialLink href={socialLinks.linkedin} label="LinkedIn" bg="#0077b5">
          <Icon icon={FaLinkedin} />
        </SocialLink>
      )}
      {socialLinks.upwork && (
        <SocialLink href={socialLinks.upwork} label="Upwork" bg="#6fda44">
          <Icon icon={FaBriefcase} />
        </SocialLink>
      )}
      {socialLinks.github && (
        <SocialLink href={socialLinks.github} label="GitHub" bg="#333333">
          <Icon icon={FaGithub} />
        </SocialLink>
      )}
      {socialLinks.twitter && (
        <SocialLink href={socialLinks.twitter} label="Twitter / X" bg="#1da1f2">
          <Icon icon={FaTwitter} />
        </SocialLink>
      )}
      {socialLinks.instagram && (
        <SocialLink href={socialLinks.instagram} label="Instagram" bg="linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)">
          <Icon icon={FaInstagram} />
        </SocialLink>
      )}
      {socialLinks.facebook && (
        <SocialLink href={socialLinks.facebook} label="Facebook" bg="#1877f2">
          <Icon icon={FaFacebookSquare} />
        </SocialLink>
      )}
      {socialLinks.youtube && (
        <SocialLink href={socialLinks.youtube} label="YouTube" bg="#ff0000">
          <Icon icon={FaYoutube} />
        </SocialLink>
      )}
      {socialLinks.tiktok && (
        <SocialLink href={socialLinks.tiktok} label="TikTok" bg="#010101">
          <Icon icon={FaTiktok} />
        </SocialLink>
      )}
      {socialLinks.url && (
        <SocialLink href={socialLinks.url} label="Website" bg="#008751">
          <Icon icon={FaGlobe} />
        </SocialLink>
      )}
    </div>
  );
};

export default SocialLinks;
