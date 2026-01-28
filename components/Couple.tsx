'use client'
import { motion } from 'framer-motion'

export default function Couple() {
  return (
    <section
      style={{
        textAlign: 'center',
        paddingBottom: 60,
        paddingTop: 40,
        background: '#f6ede4'
      }}
    >
      {/* ===== THÔNG TIN LỄ ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          marginBottom: 40
        }}
      >
        <div style={{ fontSize: 14, letterSpacing: 2 }}>
          LỄ VU QUY ĐƯỢC CỬ HÀNH TẠI
        </div>

        <div
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 28,
            color: '#8b1c2d',
            margin: '6px 0 14px'
          }}
        >
          Tư Gia
        </div>

        <div style={{ fontSize: 14, marginBottom: 10 }}>VÀO LÚC</div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: '#8b1c2d',
            marginBottom: 12
          }}
        >
          13:00
        </div>

        {/* NGÀY */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 18,
            marginBottom: 10
          }}
        >
          <div style={{ fontSize: 12 }}>CHỦ NHẬT</div>

          <div
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#8b1c2d'
            }}
          >
            01
          </div>

          <div style={{ fontSize: 12 }}>THÁNG 02</div>
        </div>

        <div style={{ fontSize: 14, marginBottom: 6 }}>2026</div>

        <div style={{ fontSize: 12, opacity: 0.7 }}>
          (Tức ngày 14/12 Ất Tỵ)
        </div>
      </motion.div>

      {/* ===== TRÂN TRỌNG KÍNH MỜI ===== */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: 22,
          marginBottom: 26,
          color: '#8b1c2d'
        }}
      >
        Trân Trọng Kính Mời
      </motion.p>

      {/* ===== ẢNH COUPLE ===== */}
      <div
        style={{
          maxWidth: 380,
          margin: '0 auto'
        }}
      >
        {/* ẢNH CHÍNH */}
        <motion.img
          src="/f1.jpg"
          alt="Ảnh cưới"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            width: '100%',
            aspectRatio: '3 / 4',
            objectFit: 'cover',
            borderRadius: 20,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            marginBottom: 14
          }}
        />

        {/* 2 ẢNH PHỤ */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12
          }}
        >
          {['/f2.jpg', '/f3.jpg'].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                width: '100%',
                aspectRatio: '3 / 4',
                objectFit: 'cover',
                borderRadius: 16,
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
              }}
            />
          ))}
        </div>
      </div>
      <motion.a
        href="https://maps.app.goo.gl/Zrx659HdRtDJ6GWu9?g_st=ifm"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          marginTop: 34,
          padding: '12px 22px',
          borderRadius: 999,
          background: '#8b1c2d',
          color: '#fff',
          fontSize: 14,
          fontWeight: 600,
          textDecoration: 'none',
          boxShadow: '0 10px 24px rgba(139,28,45,0.35)'
        }}
      >
         Xem đường đến nơi tổ chức
      </motion.a>
    </section>
  )
}
