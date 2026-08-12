import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCode } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const skillsList = [
  { name: 'HTML', icon: 'HTML5.svg' },
  { name: 'CSS', icon: 'CSS3.svg' },
  { name: 'JavaScript', icon: 'JavaScript.svg' },
  { name: 'TypeScript', icon: 'TypeScript.svg' },
  { name: 'React', icon: 'React.svg' },
  { name: 'NextJS', icon: 'Next.js.svg' },
  { name: 'MongoDB', icon: 'MongoDB.svg' },
  { name: 'ExpressJs', icon: 'Express.svg' },
  { name: 'NodeJs', icon: 'Node.js.svg' },
  { name: 'Tailwind CSS', icon: 'Tailwind CSS.svg' },
  { name: 'Bootstrap', icon: 'Bootstrap.svg' },
  { name: 'Git', icon: 'Git.svg' },
  { name: 'GitHub', icon: 'GitHub.svg' },
  { name: 'Appwrite', icon: 'Appwrite.svg' },
  { name: 'Figma', icon: 'Figma.svg' },
  { name: 'npm', icon: 'NPM.svg' },
  { name: 'Postman', icon: 'Postman.svg' },
  { name: 'Redux', icon: 'Redux.svg' },
  { name: 'shadcn-ui', icon: 'shadcn-ui-seeklogo.svg' },
  { name: 'vs-code', icon: 'Visual Studio Code (VS Code).svg' },
  { name: 'Vercel', icon: 'Vercel.svg' },
  { name: 'React Native', icon: 'React.svg' },
  { name: 'Expo', icon: null },
  { name: 'Docker', icon: null },
  { name: 'Nginx', icon: null },
  { name: 'Render', icon: null },
  { name: 'Railway', icon: null },
  { name: 'Netlify', icon: null },
  { name: 'SEO & Metadata', icon: null },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    gsap.fromTo(el.querySelectorAll('.skill-card'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.7)', scrollTrigger: {
        trigger: el, start: 'top 80%'
      }}
    )
  }, [])

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="heading-section">
          <h2>Skills</h2>
          <span>My Toolkit</span>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card glass-panel" style={{
              width: '120px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'
              e.currentTarget.style.borderColor = 'var(--accent-purple)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(168, 85, 247, 0.2)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.borderColor = 'var(--glass-border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
            >
              {skill.icon ? (
                <img src={`/img/${skill.icon}`} alt={skill.name} style={{ width: '50px', height: '50px', objectFit: 'contain', marginBottom: '0.8rem' }} />
              ) : (
                <FaCode style={{ fontSize: '3rem', color: 'var(--accent-purple)', marginBottom: '0.8rem' }} />
              )}
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textAlign: 'center' }}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
