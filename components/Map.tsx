'use client'
import { motion } from 'framer-motion'

export default function Map() {
  return (
    <section style={{ paddingBottom: 60 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: 360,
          margin: '0 auto',
          border: '2px solid #b23a48',
          borderRadius: 16,
          padding: 16,
          textAlign: 'center'
        }}
      >
        <strong style={{ fontSize: 14 }}>
          THE ADORA CENTER
        </strong>
        <p style={{ fontSize: 13, margin: '8px 0' }}>
          xx, Phường xx,<br />
          Quận x, Hồ Chí Minh
        </p>

        <a
          href="https://www.google.com/maps"
          target="_blank"
          style={{
            display: 'inline-block',
            marginTop: 10,
            padding: '10px 16px',
            background: '#b23a48',
            color: '#fff',
            borderRadius: 20,
            textDecoration: 'none'
          }}
        >
          Xem Chỉ Đường
        </a>
      </motion.div>
    </section>
  )
}
