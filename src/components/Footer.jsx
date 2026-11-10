import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer style={{
      padding: '4rem 0 2rem 0',
      borderTop: '1px solid var(--glass-border)',
      background: 'var(--bg-surface)',
      textAlign: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2rem',
          marginBottom: '2rem'
        }}>Follow Us</h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <a href="https://github.com/DRLVP" target="_blank" rel="noreferrer" style={{ fontSize: '1.8rem', color: 'var(--accent-purple)', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.transform = 'translateY(-5px)'} onMouseOut={e => e.target.style.transform = 'none'}><FaGithub /></a>

          <a href="https://x.com/drlovphukn" className="social-icon" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent-purple)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><FaXTwitter /></a>

          <a href="https://www.linkedin.com/in/durlov-phukon/" className="social-icon" target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--accent-purple)'} onMouseOut={e => e.target.style.color = 'var(--text-secondary)'}><FaLinkedin /></a>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '2rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          color: 'var(--text-secondary)'
        }}>
          <p>copyright 2026 by &copy; DRLOV | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
