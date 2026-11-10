import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { gsap } from 'gsap'
import Hero3D from './Hero3D'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo('.hero-subtitle-small',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    )
      .fromTo('.hero-title',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.4"
      )
      .fromTo('.hero-subtitle-large',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo('.hero-btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo('.social-icon',
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      )
  }, [])

  return (
    <section id="home" ref={containerRef} className="hero-section">
      {/* Background Glows */}
      <div className="glow-purple" style={{ top: '20%', right: '10%' }}></div>
      <div className="glow-blue" style={{ bottom: '10%', left: '10%' }}></div>

      <div className="container hero-container">

        {/* Social Icons */}
        <div className="hero-socials">
          <a
            href="https://github.com/DRLVP"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent-purple)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/durlov-phukon/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent-purple)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/drlovphukn"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter) Profile"
            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'all 0.3s' }}
            onMouseOver={e => e.currentTarget.style.color = 'var(--accent-purple)'}
            onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            <FaXTwitter />
          </a>
        </div>

        {/* Text Content */}
        <div className="hero-content">
          <span className="hero-subtitle-small" style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-blue)',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            marginBottom: '0.75rem',
            letterSpacing: '0.1em'
          }}>Hello, I am</span>

          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(to right, #ffffff, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            wordBreak: 'break-word'
          }}>
            DURLOV PHUKON <br />
            <span style={{ fontSize: 'clamp(1.3rem, 4vw, 2.5rem)', color: 'var(--text-secondary)', fontWeight: 500 }}>
              (DRLOVE)
            </span>
          </h1>

          <h2 className="hero-subtitle-large" style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.05rem, 3vw, 1.8rem)',
            color: 'var(--text-secondary)',
            fontWeight: 500,
            marginBottom: '0.5rem',
            lineHeight: 1.4
          }}>
            Full-Stack Software Developer | Creative Entrepreneur<span className="typewriter-cursor"></span>
          </h2>

          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            color: 'var(--accent-blue)',
            marginBottom: '1.75rem'
          }}>📍 Lakwa, Sivasagar, Assam</p>

          <div className="hero-btn">
            <a
              href="https://drive.google.com/file/d/1S8ztQVaOrxZFD3ev4E3fkVkVzozTn4bU/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Download CV
            </a>
          </div>
        </div>

      </div>

      <Hero3D />
    </section>
  )
}
