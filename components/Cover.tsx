'use client'
import { motion } from 'framer-motion'

interface CoverProps {
  progress: number // ⬅ nhận tiến trình mở bìa (0 → 1)
}

export default function Cover({ progress }: CoverProps) {
  const showNames = progress >= 0.5

  return (
    <section
      style={{
        paddingTop: 60,
        paddingBottom: 80,
        background: '#fff7ef'
      }}
    >
      {/* TIÊU ĐỀ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          letterSpacing: 4,
          fontSize: 13,
          marginBottom: 30,
          color: '#b23a48'
        }}
      >
        THIỆP MỜI CƯỚI
      </motion.div>

      {/* KHỐI TÊN CHÉO */}
      <div
        style={{
          position: 'relative',
          height: 180,
          marginBottom: 30,
          maxWidth: 360,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {/* TÊN CÔ DÂU – TRÊN TRÁI */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: -30 }}
          animate={showNames ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 10,
            left: 0,
            fontFamily: '"Great Vibes", cursive',
            fontSize: 52,
            color: '#c23b4a',
            whiteSpace: 'nowrap'
          }}
        >
          Hải Anh
        </motion.div>

        {/* DẤU & Ở GIỮA */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={showNames ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.15, type: 'spring' }}
          style={{
            position: 'absolute',
            top: 70,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1.5px solid #c23b4a',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            fontWeight: 600,
            color: '#c23b4a',
            zIndex: 2
          }}
        >
          &
        </motion.div>

        {/* TÊN CHÚ RỂ – DƯỚI PHẢI */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 30 }}
          animate={showNames ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontFamily: '"Great Vibes", cursive',
            fontSize: 52,
            color: '#c23b4a',
            whiteSpace: 'nowrap'
          }}
        >
          Hữu Ngọc
        </motion.div>
      </div>

      {/* THỜI GIAN */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          textAlign: 'center',
          fontSize: 14,
          letterSpacing: 2,
          marginBottom: 24
        }}
      >
        THỨ 7 · 17H00 <br />
        <strong style={{ fontSize: 18, letterSpacing: 4 }}>
          31 · 01 · 2026
        </strong>
      </motion.div>

      {/* KHUNG ẢNH */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          margin: '0 auto',
          width: '90%',
          maxWidth: 420,
          padding: 14,
          borderRadius: 28,
          background: '#fff',
          boxShadow: '0 20px 40px rgba(194,59,74,0.25)',
          border: '2px solid #c23b4a'
        }}
      >
        <div
          style={{
            borderRadius: 22,
            overflow: 'hidden',
            border: '1.5px solid #e7b6bc'
          }}
        >
          <img
            src="/ac1.jpg"
            alt="Cô dâu chú rể"
            style={{
              width: '100%',
              display: 'block',
              aspectRatio: '3 / 4',
              objectFit: 'cover'
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
