import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const imgEl = el.querySelector('.about-img-box')
    const contentEl = el.querySelector('.about-content')

    if (imgEl) {
      gsap.fromTo(imgEl,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
            trigger: el, start: 'top 75%'
          }
        }
      )
    }

    if (contentEl) {
      gsap.fromTo(contentEl,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
            trigger: el, start: 'top 75%'
          }
        }
      )
    }
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <div className="heading-section">
          <h2>About Me</h2>
          <span>Introduction</span>
        </div>

        <div className="about-grid">
          
          <div className="about-img-box">
            <div className="glow-purple" style={{ top: '-10%', left: '-10%' }}></div>
            <img
              src="/img/about.png"
              alt="About Durlov"
              style={{
                width: '100%',
                borderRadius: '1rem',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid var(--glass-border)',
                display: 'block'
              }}
            />
          </div>

          <div className="about-content">
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
              lineHeight: 1.8
            }}>
              I am a Full-Stack Software Developer & Creative Entrepreneur based in Assam. With a strong foundation in modern web and mobile technologies, I specialize in building end-to-end applications that drive business value. From conceptualizing hyper-local delivery apps like Suvega Now to developing privacy-first web utilities, I manage the complete product lifecycle including architecture, deployment, and SEO optimization.
            </p>

            <div className="glass-panel about-info-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <FaUser style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', wordBreak: 'break-word' }}>Durlov Phukon</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <FaPhone style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', wordBreak: 'break-word' }}>+91 6002017913</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <FaEnvelope style={{ color: 'var(--accent-blue)', fontSize: '1.2rem', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-mono)', wordBreak: 'break-all' }}>phukondurlov45@gmail.com</span>
              </div>
            </div>

            <div className="glass-panel about-info-panel">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-purple)' }}>Education & Certifications</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                <li>Bachelor's Degree (Geography Honors) – Nazira College (2020)</li>
              </ul>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--accent-purple)' }}>Professional Experience</h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--text-secondary)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Freelance Full-Stack Developer (Current)</li>
                <li>Software Developer (1 year formal experience)</li>
              </ul>
            </div>

            <div>
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
      </div>
    </section>
  )
}
