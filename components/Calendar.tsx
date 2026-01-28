'use client'
import { motion } from 'framer-motion'

export default function Calendar() {
  return (
    <section style={{ paddingBottom: 80 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 380,
          margin: '0 auto',
          borderRadius: 24,
          padding: 20,
          background: '#fff',
          border: '2.5px solid #8b1c2d',
          boxShadow: '0 18px 40px rgba(139,28,45,0.25)'
        }}
      >
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 3,
              opacity: 0.7,
              marginBottom: 6
            }}
          >
            SAVE THE DATE
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3
            }}
          >
            THÁNG 01 · 2026
          </div>
        </div>

        {/* THỨ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            fontSize: 12,
            marginBottom: 10,
            textAlign: 'center',
            opacity: 0.7
          }}
        >
          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => (
            <div key={d}>{d}</div>
          ))}
        </div>

        {/* NGÀY */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: 8,
            textAlign: 'center'
          }}
        >
          {/* Tháng 1/2026 bắt đầu Thứ Năm */}
          {[null, null, null].map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
            const isSecondary = day === 31

            return (
              <div
                key={day}
                style={{
                  height: 36,
                  width: 36,
                  margin: '0 auto',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: isSecondary ? 600 : 400,
                  border: isSecondary ? '2px solid #8b1c2d' : '1px solid transparent',
                  color: isSecondary ? '#8b1c2d' : '#333'
                }}
              >
                {isSecondary ? '♡' : day}
              </div>
            )
          })}

          {/* 01/02/2026 – NGÀY CƯỚI CHÍNH */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              height: 38,
              width: 38,
              margin: '0 auto',
              borderRadius: '50%',
              background: '#8b1c2d',
              color: '#fff',
              fontSize: 16,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 18px rgba(139,28,45,0.7)'
            }}
          >
            ❤
          </motion.div>
        </div>

        {/* CHÚ THÍCH */}
        <div
          style={{
            textAlign: 'center',
            fontSize: 12,
            opacity: 0.7,
            marginTop: 18,
            lineHeight: 1.6
          }}
        >
          ♡ 31/01/2026 – Ngày làm lễ<br />
          ❤ 01/02/2026 – Ngày vu quy
        </div>
      </motion.div>
    </section>
  )
}
