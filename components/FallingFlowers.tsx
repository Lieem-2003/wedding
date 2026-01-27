'use client'
import { useEffect, useState } from 'react'

interface Flower {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  sway: number
  layer: number
}

export default function FallingFlowers({ active = true }: { active?: boolean }) {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    if (!active) return

    const count =
      typeof window !== 'undefined' && window.innerWidth < 480 ? 16 : 28

    const items: Flower[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 16,
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 6,
      sway: Math.random() * 40 - 20, // lắc trái phải
      layer: Math.floor(Math.random() * 3) // 0 1 2
    }))

    setFlowers(items)
  }, [active])

  if (!active) return null

  return (
    <div className="flowers-wrapper">
      {flowers.map(f => (
        <span
          key={f.id}
          className={`flower layer-${f.layer}`}
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            '--sway': `${f.sway}px`
          } as React.CSSProperties}
        >
          🌸
        </span>
      ))}
    </div>
  )
}
