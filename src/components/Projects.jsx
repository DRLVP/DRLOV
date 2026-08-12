import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Yoga Center Website',
    img: 'yogamantra.png',
    github: 'https://github.com/DRLVP/YogaMantra',
    live: 'https://yogamantras.netlify.app/'
  },
  {
    title: 'Mega blog app',
    img: 'mega-blog.png',
    github: 'https://github.com/DRLVP/suti-blog',
    live: 'https://sutiblog.netlify.app'
  },
  {
    title: 'Todo app',
    img: 'add-todo.png',
    github: 'https://github.com/DRLVP/todo-app',
    live: 'https://addurtodo.netlify.app'
  },
  {
    title: 'Own portfolio',
    img: 'portfolio.png',
    github: 'https://github.com/DRLVP/DRLOV',
    live: 'https://drlov.netlify.app'
  },
  {
    title: 'Suvega Now',
    img: 'work1.jpg',
    github: '#',
    live: 'https://play.google.com/store/apps/details?id=com.suveganow.android&hl=en-IN',
    description: 'A hyper-local grocery delivery application operating in Lakwa. Managed the complete product lifecycle from software architecture to business operations and local launch.'
  },
  {
    title: 'My converter pro',
    img: 'work3.jpg',
    github: '#',
    live: 'https://myconverterpro.site',
    description: 'A comprehensive, privacy-first web utility for file conversions and data sanitization entirely within the browser. Processes data locally for speed and security.'
  }
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    gsap.fromTo(el.querySelectorAll('.project-card'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out', scrollTrigger: {
        trigger: el, start: 'top 75%'
      }}
    )
  }, [])

  return (
    <section id="projects" ref={sectionRef}>
      <div className="container">
        <div className="heading-section">
          <h2>Projects</h2>
          <span>My Work</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel" style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '1rem',
              group: 'project',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.querySelector('.overlay').style.opacity = '1'
              e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector('.overlay').style.opacity = '0'
              e.currentTarget.querySelector('img').style.transform = 'scale(1)'
            }}
            >
              <img src={`/img/${project.img}`} alt={project.title} style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                display: 'block'
              }} />
              
              <div className="overlay" style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(10, 10, 12, 0.90)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'white' }}>{project.title}</h3>
                {project.description && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.4' }}>
                    {project.description}
                  </p>
                )}
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--accent-purple)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}><FaGithub /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }} onMouseOver={e=>e.target.style.color='var(--accent-blue)'} onMouseOut={e=>e.target.style.color='var(--text-secondary)'}><FaExternalLinkAlt /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
