import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer style={{
      padding: 'clamp(2.5rem, 5vw, 4rem) 0 2rem 0',
      borderTop: '1px solid var(--glass-border)',
      background: 'var(--bg-surface)',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: '1.5rem'
        }}>
          Follow Us
        </h2>

        <div className="footer-social-links">
          <a
            href="https://github.com/DRLVP"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{ fontSize: '1.75rem', color: 'var(--accent-purple)', transition: 'all 0.3s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
          >
            <FaGithub />
          </a>

          <a
            href="https://x.com/drlovphukn"
            target="_blank"
            rel="noreferrer"
            aria-label="X Profile"
            style={{ fontSize: '1.75rem', color: 'var(--accent-purple)', transition: 'all 0.3s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/durlov-phukon/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            style={{ fontSize: '1.75rem', color: 'var(--accent-purple)', transition: 'all 0.3s' }}
            onMouseOver={e => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={e => e.currentTarget.style.transform = 'none'}
          >
            <FaLinkedin />
          </a>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
          color: 'var(--text-secondary)'
        }}>
          <p>copyright 2026 by &copy; DRLOV | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
