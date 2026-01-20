import { useEffect, useRef, useState } from 'react'

export default function Reveal({
  children,
  className = '',
  threshold = 0.22,
  rootMargin = '0px 0px -10% 0px',
  delay = 0,
  duration = 800,
  distance = 18,
}){
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    const node = ref.current
    if(!node) return
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((e)=>{
        if (e.intersectionRatio >= threshold) setVisible(true)
        if (e.intersectionRatio === 0) setVisible(false)
      })
    }, { threshold: [0, threshold], rootMargin })
    io.observe(node)
    return () => io.disconnect()
  }, [threshold, rootMargin])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'in-view' : ''} ${className}`.trim()}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${duration}ms`,
        '--reveal-distance': `${distance}px`,
      }}
    >
      {children}
    </div>
  )
}
