'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div
      style={wrap}
    >
      <img
        src="/vien.png"
        alt="divider"
        style={image}
        draggable={false}
      />
    </div>
  )
}

/* ================= STYLE ================= */

const wrap: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',         
  background: '#fffaf5',     

  overflow: 'hidden'      
}

const image: React.CSSProperties = {
  width: '100%',               // ❗ KHÔNG dùng 100%
  maxWidth: 1480,              
  height: 'auto',

  opacity: 0.95,
  pointerEvents: 'none',
  userSelect: 'none',
}
