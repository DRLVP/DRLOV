import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaCode } from 'react-icons/fa'
import { TbSeo } from 'react-icons/tb'

gsap.registerPlugin(ScrollTrigger)

const skillsList = [
  { name: 'HTML', icon: 'HTML5.svg' },
  { name: 'CSS', icon: 'CSS3.svg' },
  { name: 'JavaScript', icon: 'JavaScript.svg' },
  { name: 'TypeScript', icon: 'TypeScript.svg' },
  { name: 'React', icon: 'React.svg' },
  { name: 'NextJS', icon: 'Next.js.svg', invert: true },
  { name: 'MongoDB', icon: 'MongoDB.svg' },
  { name: 'ExpressJs', icon: 'Express.svg', invert: true },
  { name: 'NodeJs', icon: 'Node.js.svg' },
  { name: 'Tailwind CSS', icon: 'Tailwind CSS.svg' },
  { name: 'Bootstrap', icon: 'Bootstrap.svg' },
  { name: 'Git', icon: 'Git.svg' },
  { name: 'GitHub', icon: 'GitHub.svg', invert: true },
  { name: 'Appwrite', icon: 'Appwrite.svg' },
  { name: 'Figma', icon: 'Figma.svg' },
  { name: 'npm', icon: 'NPM.svg' },
  { name: 'Postman', icon: 'Postman.svg' },
  { name: 'Redux', icon: 'Redux.svg' },
  { name: 'shadcn-ui', icon: 'shadcn-ui-seeklogo.svg', invert: true },
  { name: 'vs-code', icon: 'Visual Studio Code (VS Code).svg' },
  { name: 'Vercel', icon: 'Vercel.svg', invert: true },
  { name: 'Vite', icon: 'Vite.js.svg' },
  { name: 'React Native', icon: 'React.svg' },
  { name: 'Expo', icon: 'expo-svgrepo-com.svg' },
  { name: 'Docker', icon: 'docker-svgrepo-com.svg' },
  { name: 'Nginx', icon: 'nginx-logo-svgrepo-com.svg' },
  { name: 'Render', icon: 'render-512px.png', invert: true },
  { name: 'Railway', icon: 'railway-dark-512px.png' },
  { name: 'Netlify', icon: 'netlify-512px.png' },
  { name: 'n8n', icon: 'n8n-color.svg' },
  { name: 'SEO & Metadata', icon: null },
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    gsap.fromTo(el.querySelectorAll('.skill-card'),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: 'back.out(1.7)', scrollTrigger: {
          trigger: el, start: 'top 80%'
        }
      }
    )
  }, [])

  return (
    <section id="skills" ref={sectionRef}>
      <div className="container">
        <div className="heading-section">
          <h2>Skills</h2>
          <span>My Toolkit</span>
        </div>

        <div className="skills-wrapper">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className="skill-card skill-card-item glass-panel"
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
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
                <img
                  src={`/img/${skill.icon}`}
                  alt={skill.name}
                  loading="lazy"
                  style={{
                    filter: skill.invert ? 'invert(1)' : 'none'
                  }}
                />
              ) : skill.name.toLowerCase().includes('seo') ? (
                <TbSeo style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--accent-purple)', marginBottom: '0.6rem' }} />
              ) : (
                <FaCode style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--accent-purple)', marginBottom: '0.6rem' }} />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
