'use client'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

const images = [
  '/ac1.jpg', '/ac1.jpg', '/ac1.jpg',
  '/ac1.jpg', '/ac1.jpg', '/ac1.jpg'
]

export default function Gallery() {
  const controls = useAnimation()
  const [active, setActive] = useState<string | null>(null)

  // Auto chạy từ phải → trái
  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        ease: 'linear',
        duration: 30,
        repeat: Infinity
      }
    })
  }, [controls])

  return (
    <section
      style={{
        paddingTop: 60,
        paddingBottom: 80,
        background: '#fffaf5',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* TIÊU ĐỀ */}
      <div style={{ textAlign: 'center', marginBottom: 36 }}>
        <div style={{ fontSize: 13, letterSpacing: 3 }}>
          ALBUM ẢNH
        </div>
        <div
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 32,
            color: '#8b1c2d',
            marginTop: 6
          }}
        >
          Khoảnh Khắc Hạnh Phúc
        </div>
      </div>

      {/* FADE MÉP TRÁI */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background:
            'linear-gradient(to right, #fffaf5 0%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* FADE MÉP PHẢI */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background:
            'linear-gradient(to left, #fffaf5 0%, transparent 100%)',
          zIndex: 5,
          pointerEvents: 'none'
        }}
      />

      {/* SLIDER */}
      <motion.div
        style={{ cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -9999, right: 0 }}
          onDragStart={() => controls.stop()}
          onDragEnd={() => {
            controls.start({
              x: ['0%', '-50%'],
              transition: {
                ease: 'linear',
                duration: 30,
                repeat: Infinity
              }
            })
          }}
          animate={controls}
          style={{
            display: 'flex',
            gap: 18
          }}
        >
          {[...images, ...images].map((src, i) => (
            <motion.div
              key={i}
              onClick={() => setActive(src)}
              animate={{ scale: [1, 1.04, 1] }} // breathing
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                minWidth: 220,
                height: 300,
                overflow: 'hidden',
                borderRadius: 22,
                boxShadow: '0 14px 36px rgba(0,0,0,0.18)',
                flexShrink: 0,
                cursor: 'pointer'
              }}
            >
              <img
                src={src}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* LIGHTBOX */}
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActive(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <motion.img
            src={active}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{
              maxWidth: '90%',
              maxHeight: '85%',
              borderRadius: 20,
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)'
            }}
          />

          {/* NÚT ĐÓNG */}
          <div
            onClick={() => setActive(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 24,
              fontSize: 32,
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            ×
          </div>
        </motion.div>
      )}
    </section>
  )
}
