'use client'
import { motion } from 'framer-motion'

export default function Family() {
  return (
    <section
      style={{
        paddingTop: 60,
        paddingBottom: 80,
        textAlign: 'center',
        background: '#fffaf5'
      }}
    >
      {/* SONG HỶ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          border: '1.5px solid #b23a48',
          margin: '0 auto 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#b23a48',
          fontSize: 26,
          background: '#fff',
          boxShadow: '0 6px 16px rgba(178,58,72,0.2)'
        }}
      >
        囍
      </motion.div>

      {/* HOA VĂN */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 14,
          color: '#b23a48',
          marginBottom: 36,
          letterSpacing: 4
        }}
      >
        ✧ ✧ ✧
      </motion.div>

      {/* HAI NHÀ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          maxWidth: 520,
          margin: '0 auto 40px',
          fontSize: 14
        }}
      >
        {/* NHÀ TRAI */}
        <div>
          <div
            style={{
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 10
            }}
          >
            NHÀ TRAI
          </div>
          <p>Ông: Nguyễn Văn A</p>
          <p>Bà: Nguyễn Thị B</p>
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
            Phương Trù – Châu Ninh – Hưng Yên
          </p>
        </div>

        {/* NHÀ GÁI */}
        <div>
          <div
            style={{
              fontWeight: 600,
              letterSpacing: 2,
              marginBottom: 10
            }}
          >
            NHÀ GÁI
          </div>
          <p>Ông: Nguyễn Văn C</p>
          <p>Bà: Trần Thị D</p>
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
            Nghi Xuyên – Chí Minh – Hưng Yên
          </p>
        </div>
      </motion.div>

      {/* TRÂN TRỌNG BÁO TIN */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          marginBottom: 16,
          fontSize: 14,
          letterSpacing: 1
        }}
      >
        Trân trọng báo tin lễ thành hôn của
      </motion.p>

      {/* TÊN CẶP ĐÔI */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: 30,
          color: '#b23a48',
          lineHeight: 1.7
        }}
      >
        Hữu Ngọc
        <br />
        <span style={{ fontSize: 20 }}>&amp;</span>
        <br />
        Nguyễn Thị Hải Anh
      </motion.div>
    </section>
  )
}
