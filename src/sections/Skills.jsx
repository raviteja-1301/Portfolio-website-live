import Reveal from '../components/Reveal.jsx'
import { useEffect, useRef } from 'react'
import {
  Activity,
  Bot,
  Boxes,
  Brain,
  Braces,
  Cable,
  Clock3,
  Database,
  Gauge,
  GitBranch,
  GitMerge,
  KeyRound,
  LineChart,
  Lock,
  Rocket,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
  Wrench,
} from 'lucide-react'
import ClusterIcon from '../components/ClusterIcon.jsx'

const SKILL_GROUPS = [
  {
    title: 'Languages and Scripting',
    items: [
      { label: 'Java', devicon: 'devicon-java-plain' },
      { label: 'Python', devicon: 'devicon-python-plain' },
      { label: 'JavaScript', devicon: 'devicon-javascript-plain' },
      { label: 'TypeScript', devicon: 'devicon-typescript-plain' },
      { label: 'SQL', devicon: 'devicon-mysql-plain' },
      { label: 'C++', devicon: 'devicon-cplusplus-plain' },
      { label: 'Bash', devicon: 'devicon-bash-plain' },
    ],
  },
  {
    title: 'Backend and API Development',
    items: [
      { label: 'FastAPI', devicon: 'devicon-fastapi-plain' },
      { label: 'Flask', devicon: 'devicon-flask-original' },
      { label: 'Node.js', devicon: 'devicon-nodejs-plain' },
      { label: 'REST APIs', icon: Braces },
      { label: 'GraphQL', devicon: 'devicon-graphql-plain' },
      { label: 'gRPC', icon: Cable },
      { label: 'Microservices', icon: Boxes },
    ],
  },
  {
    title: 'Frontend Technologies',
    items: [
      { label: 'React.js', devicon: 'devicon-react-original' },
      { label: 'Redux', devicon: 'devicon-redux-original' },
      { label: 'Next.js', devicon: 'devicon-nextjs-original' },
      { label: 'HTML5', devicon: 'devicon-html5-plain' },
      { label: 'CSS3', devicon: 'devicon-css3-plain' },
      { label: 'Bootstrap', devicon: 'devicon-bootstrap-plain' },
    ],
  },
  {
    title: 'Cloud and Infrastructure',
    items: [
      { label: 'AWS', devicon: 'devicon-amazonwebservices-original' },
      { label: 'Azure', devicon: 'devicon-azure-plain' },
      { label: 'Docker', devicon: 'devicon-docker-plain' },
      { label: 'Kubernetes', devicon: 'devicon-kubernetes-plain' },
      { label: 'Terraform', devicon: 'devicon-terraform-plain' },
    ],
  },
  {
    title: 'Delivery and Platform',
    items: [
      { label: 'Jenkins', devicon: 'devicon-jenkins-line' },
      { label: 'GitHub Actions', devicon: 'devicon-github-original' },
      { label: 'ArgoCD', icon: GitBranch },
      { label: 'GitOps', icon: GitMerge },
      { label: 'CI/CD', icon: Workflow },
    ],
  },
  {
    title: 'Databases and Caching',
    items: [
      { label: 'PostgreSQL', devicon: 'devicon-postgresql-plain' },
      { label: 'MySQL', devicon: 'devicon-mysql-plain' },
      { label: 'MongoDB', devicon: 'devicon-mongodb-plain' },
      { label: 'TimescaleDB', icon: Clock3 },
      { label: 'Redis', devicon: 'devicon-redis-plain' },
      { label: 'NoSQL', icon: Database },
    ],
  },
  {
    title: 'Machine Learning and AI',
    items: [
      { label: 'scikit-learn', devicon: 'devicon-python-plain' },
      { label: 'XGBoost', icon: LineChart },
      { label: 'TensorFlow', devicon: 'devicon-tensorflow-original' },
      { label: 'NLP', icon: Brain },
      { label: 'Spark', custom: 'spark' },
      { label: 'OpenAI APIs', icon: Bot },
      { label: 'Prompt Engineering', icon: Sparkles },
    ],
  },
  {
    title: 'Testing and Monitoring',
    items: [
      { label: 'JUnit', icon: TestTube2 },
      { label: 'Jest', devicon: 'devicon-jest-plain' },
      { label: 'pytest', icon: TestTube2 },
      { label: 'Prometheus', devicon: 'devicon-prometheus-original' },
      { label: 'Grafana', devicon: 'devicon-grafana-original' },
      { label: 'ELK Stack', icon: Activity },
      { label: 'APM', icon: Gauge },
    ],
  },
  {
    title: 'Workflow and Security',
    items: [
      { label: 'Maven', icon: Wrench },
      { label: 'Git', devicon: 'devicon-git-plain' },
      { label: 'Agile', icon: Rocket },
      { label: 'SDLC', icon: Workflow },
      { label: 'OAuth 2.0', icon: Lock },
      { label: 'RBAC', icon: KeyRound },
      { label: 'API Gateway Security', icon: ShieldCheck },
    ],
  },
]

function SkillGlyph({ item }){
  if (item.custom === 'spark'){
    return <ClusterIcon size={34} />
  }

  if (item.devicon){
    return <i className={`${item.devicon} colored`} aria-hidden="true"></i>
  }

  if (item.icon){
    const Icon = item.icon
    return <Icon size={34} strokeWidth={1.9} aria-hidden="true" />
  }

  return <Braces size={34} strokeWidth={1.9} aria-hidden="true" />
}

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
        {SKILL_GROUPS.map((group) => (
          <Reveal key={group.title} className="sgroup">
            <h3>{group.title}</h3>
            <div className="icons">
              {group.items.map((item) => (
                <div key={`${group.title}-${item.label}`} className={`icon${item.custom === 'spark' ? ' spark' : ''}`}>
                  <SkillGlyph item={item} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
