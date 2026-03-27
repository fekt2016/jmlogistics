'use client'

import { useEffect, useRef, useState } from 'react'

const variants = {
  'fade-up':    'opacity-0 translate-y-8',
  'fade-down':  'opacity-0 -translate-y-8',
  'fade-left':  'opacity-0 translate-x-8',
  'fade-right': 'opacity-0 -translate-x-8',
  'fade':       'opacity-0',
  'zoom':       'opacity-0 scale-95',
}

const visible = 'opacity-100 translate-y-0 translate-x-0 scale-100'

export default function AnimateInView({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = '',
  once = true,
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${variants[variant]} ${inView ? visible : ''} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: inView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
