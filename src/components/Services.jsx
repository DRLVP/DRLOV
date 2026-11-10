import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCode, FaServer, FaPaintBrush, FaAndroid } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: FaCode, title: 'Web Development' },
  { icon: FaServer, title: 'Backend Development' },
  { icon: FaPaintBrush, title: 'UI/UX Design' },
  { icon: FaAndroid, title: 'Web App Development' }
]

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(el.querySelectorAll('.service-card'),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: {
          trigger: el, start: 'top 75%'
        }
      }
    )
  }, [])

  return (
    <section id="services" ref={sectionRef}>
      <div className="container">
        <div className="heading-section">
          <h2>Services</h2>
          <span>Our Services</span>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card service-card-item glass-panel"
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))'
                  e.currentTarget.style.borderColor = 'var(--accent-purple)'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'var(--glass-bg)'
                  e.currentTarget.style.borderColor = 'var(--glass-border)'
                }}
              >
                <Icon style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', color: 'var(--accent-purple)' }} />
                <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', fontWeight: 600 }}>{service.title}</h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-blue)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}>Learn More</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
