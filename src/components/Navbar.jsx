import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      padding: '20px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(10, 10, 12, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'
    }}>
      <a href="#home" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'white'
      }}>
        DRLOV <span style={{ color: 'var(--accent-purple)' }}>PHUKON.</span>
      </a>

      {/* Desktop Menu */}
      <ul style={{
        display: 'flex',
        gap: '2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.9rem',
        letterSpacing: '0.05em',
      }} className="nav-menu">
        {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              color: 'var(--text-secondary)',
              transition: 'color 0.3s'
            }} onMouseOver={(e) => e.target.style.color = 'var(--accent-blue)'}
               onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
