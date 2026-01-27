'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Countdown() {
  // ⏰ Mốc thời gian CHUẨN: 01/02/2026 - 10:00 (GMT+7)
  const target = new Date('2026-02-01T10:00:00+07:00').getTime()

  const [time, setTime] = useState({
    d: 0,
    h: 0,
    m: 0,
    s: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        clearInterval(timer)
        setTime({ d: 0, h: 0, m: 0, s: 0 })
        return
      }

      setTime({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [target])

  const pad = (n: number) => String(n).padStart(2, '0')

  const Box = ({
    value,
    label,
    highlight = false
  }: {
    value: string | number
    label: string
    highlight?: boolean
  }) => (
    <motion.div
      animate={{ scale: highlight ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 0.6 }}
      style={{
        width: 70,
        padding: '14px 0',
        borderRadius: 16,
        background: highlight ? '#8b1c2d' : '#fff',
        color: highlight ? '#fff' : '#8b1c2d',
        border: highlight ? 'none' : '1.5px solid #e7b6bc',
        boxShadow: highlight
          ? '0 10px 30px rgba(139,28,45,0.4)'
          : '0 6px 16px rgba(0,0,0,0.12)',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          lineHeight: 1
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 11,
          letterSpacing: 1,
          marginTop: 6,
          opacity: 0.8
        }}
      >
        {label}
      </div>
    </motion.div>
  )

  return (
    <section
      style={{
        paddingTop: 40,
        paddingBottom: 60,
        textAlign: 'center',
        background: '#fffaf5'
      }}
    >
      {/* TIÊU ĐỀ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: 13,
          letterSpacing: 3,
          marginBottom: 24
        }}
      >
        ĐẾM NGƯỢC NGÀY VỀ CHUNG ĐÔI
      </motion.div>

      {/* COUNTDOWN */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12
        }}
      >
        <Box value={time.d} label="NGÀY" highlight />
        <Box value={pad(time.h)} label="GIỜ" />
        <Box value={pad(time.m)} label="PHÚT" />
        <Box value={pad(time.s)} label="GIÂY" />
      </motion.div>

      {/* CHÚ THÍCH */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        style={{
          fontSize: 12,
          marginTop: 20
        }}
      >
        ⏳ Khoảnh khắc hạnh phúc đang đến rất gần
      </motion.div>
    </section>
  )
}
