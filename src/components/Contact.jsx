import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    gsap.fromTo(el.querySelector('.contact-form'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: {
        trigger: el, start: 'top 80%'
      }}
    )
  }, [])

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className="heading-section">
          <h2>Contact</h2>
          <span>Connect With Us</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Background Glow */}
          <div className="glow-purple" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }}></div>

          <div className="contact-form glass-panel" style={{
            width: '100%',
            maxWidth: '600px',
            padding: '3rem',
            position: 'relative',
            zIndex: 2
          }}>
            <form action="https://formspree.io/f/moqojrva" method="POST" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                autoComplete="off"
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                autoComplete="off"
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
              <textarea 
                name="message" 
                cols="30" 
                rows="6" 
                placeholder="Write your message here..."
                required
                style={{
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid var(--glass-border)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-purple)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              ></textarea>
              
              <button type="submit" className="btn-primary" style={{
                marginTop: '1rem',
                fontFamily: 'var(--font-mono)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
