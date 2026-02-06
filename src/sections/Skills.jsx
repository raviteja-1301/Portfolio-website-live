import Reveal from '../components/Reveal.jsx'
import { useEffect, useRef } from 'react'
import ClusterIcon from '../components/ClusterIcon.jsx'

export default function Skills(){
  const containerRef = useRef(null)
  const timerRef = useRef(null)
  const armedRef = useRef(true)

  useEffect(()=>{
    const container = containerRef.current
    if(!container) return

    const icons = container.querySelectorAll('.icon')
    icons.forEach((el, i)=> el.style.setProperty('--i', i))

    const start = () => {
      container.classList.remove('wave-forward', 'wave-backward')
      void container.offsetWidth
      container.classList.add('wave-forward')
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(()=>{
        container.classList.remove('wave-forward')
      }, 3400)
    }

    const stop = () => {
      clearTimeout(timerRef.current)
      container.classList.remove('wave-forward', 'wave-backward')
    }

    const threshold = 0.35
    const io = new IntersectionObserver((ents)=>{
      ents.forEach(e=>{
        if (e.intersectionRatio >= threshold && armedRef.current){
          armedRef.current = false
          start()
        }
        if (e.intersectionRatio === 0){
          armedRef.current = true
          stop()
        }
      })
    }, { threshold: [0, threshold], rootMargin: '0px 0px -12% 0px' })
    io.observe(container)

    return ()=>{ io.disconnect(); stop() }
  }, [])

  return (
    <section id="skills" className="section container section-bg">
      <h2 className="section-title"><Reveal>Skills</Reveal></h2>
      <div ref={containerRef} className="skill-groups skills-wave">
        <Reveal className="sgroup"><h3>Programming Languages</h3><div className="icons">
          <div className="icon"><i className="devicon-java-plain colored"></i><span>Java</span></div>
          <div className="icon"><i className="devicon-python-plain colored"></i><span>Python</span></div>
          <div className="icon"><i className="devicon-c-plain colored"></i><span>C</span></div>
          <div className="icon"><i className="devicon-javascript-plain colored"></i><span>JavaScript</span></div>
          <div className="icon"><i className="devicon-mysql-plain colored"></i><span>SQL</span></div>
          <div className="icon"><i className="devicon-html5-plain colored"></i><span>HTML</span></div>
          <div className="icon"><i className="devicon-css3-plain colored"></i><span>CSS</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>Frameworks & Web Technologies</h3><div className="icons">
          <div className="icon"><i className="devicon-nodejs-plain colored"></i><span>Node.js</span></div>
          <div className="icon"><i className="devicon-express-original colored"></i><span>Express</span></div>
          <div className="icon"><i className="devicon-react-original colored"></i><span>React</span></div>
          <div className="icon"><i className="devicon-fastapi-plain colored"></i><span>FastAPI</span></div>
          <div className="icon"><i className="devicon-flask-original colored"></i><span>Flask</span></div>
          <div className="icon"><i className="devicon-graphql-plain colored"></i><span>GraphQL</span></div>
          <div className="icon txt">🔗<span>REST APIs</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>Data Tools</h3><div className="icons">
          <div className="icon"><i className="devicon-python-plain colored"></i><span>scikit‑learn</span></div>
          <div className="icon spark"><ClusterIcon /><span>Spark</span></div>
          <div className="icon"><i className="devicon-numpy-original colored"></i><span>Regression</span></div>
          <div className="icon"><i className="devicon-pandas-original colored"></i><span>Clustering</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>Cloud & Development Tools</h3><div className="icons">
          <div className="icon"><i className="devicon-git-plain colored"></i><span>Git</span></div>
          <div className="icon"><i className="devicon-amazonwebservices-original colored"></i><span>AWS</span></div>
          <div className="icon"><i className="devicon-docker-plain colored"></i><span>Docker</span></div>
          <div className="icon"><i className="devicon-mongodb-plain colored"></i><span>MongoDB</span></div>
        </div></Reveal>

        <Reveal className="sgroup"><h3>BI & Visualization</h3><div className="icons">
          <div className="icon txt">📊<span>Tableau</span></div>
          <div className="icon txt">📈<span>Power BI</span></div>
          <div className="icon txt">🧮<span>Excel</span></div>
          <div className="icon txt">🌀<span>Agile (SCRUM)</span></div>
        </div></Reveal>
      </div>
    </section>
  )
}
