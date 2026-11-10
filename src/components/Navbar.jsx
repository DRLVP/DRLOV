import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on window resize if resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [menuOpen])

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            DRLOV <span>PHUKON.</span>
          </a>

          {/* Desktop Menu */}
          <nav aria-label="Main Navigation">
            <ul className="nav-desktop">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="nav-desktop-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="nav-toggle-btn"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`nav-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`nav-mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="nav-mobile-link"
            onClick={closeMenu}
          >
            <span>{item.name}</span>
            <span className="arrow">→</span>
          </a>
        ))}
      </nav>
    </>
  )
}
