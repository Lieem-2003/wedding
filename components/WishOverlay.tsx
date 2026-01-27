'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export interface Wish {
  name: string
  relation: string
  message: string
}

interface LiveWish extends Wish {
  id: number
}

export default function WishOverlay({
  wishes,
  active
}: {
  wishes: Wish[]
  active: boolean
}) {
  const [queue, setQueue] = useState<LiveWish[]>([])
  const indexRef = useRef(0)
  const idRef = useRef(0)

  useEffect(() => {
    if (!active || wishes.length === 0) return

    const timer = setInterval(() => {
      const w = wishes[indexRef.current % wishes.length]
      indexRef.current++

      setQueue(prev => {
        const next: LiveWish = {
          ...w,
          id: idRef.current++
        }
        return [...prev.slice(-4), next] // ✅ tối đa 4 comment (mượt hơn)
      })
    }, 2600) // ✅ chậm hơn → dễ đọc + ít lag

    return () => clearInterval(timer)
  }, [active, wishes])

  if (!active) return null

  return (
    <div style={overlayWrap}>
      {queue.map(w => (
        <motion.div
          key={w.id}
          layout
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: 'easeOut'
          }}
          style={commentItem}
        >
          <div style={nameLine}>
            {w.name}
            {w.relation && (
              <span style={relation}> ({w.relation})</span>
            )}
          </div>
          <div style={message}>{w.message}</div>
        </motion.div>
      ))}
    </div>
  )
}

/* ================= STYLE ================= */

const overlayWrap: React.CSSProperties = {
  position: 'fixed',
  left: 16,
  bottom: 16,

  width: '80%',
  maxWidth: 320,

  height: '25vh', // ✅ 1/4 màn hình
  pointerEvents: 'none',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  gap: 8,

  zIndex: 999
}

const commentItem: React.CSSProperties = {
  background: 'rgba(255,255,255,0.05)', // ✅ trong suốt thật
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',

  borderRadius: 14,
  padding: '8px 12px',

  color: '#6b1c25',
  fontSize: 13,

  boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
}

const nameLine: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 12,
  marginBottom: 2
}

const relation: React.CSSProperties = {
  fontSize: 11,
  opacity: 0.6
}

const message: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.4
}
