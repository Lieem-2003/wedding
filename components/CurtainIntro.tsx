'use client'
import { motion } from 'framer-motion'

interface Props {
  opening: boolean
  onOpen: () => void
  onFinish: () => void
  onProgress: (p: number) => void
}

export default function CurtainIntro({
  opening,
  onOpen,
  onFinish,
  onProgress
}: Props) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* NỬA TRÁI */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: opening ? '-100%' : '0%' }}
        transition={{
          duration: 3.5,
          ease: [0.77, 0, 0.175, 1]
        }}
        onUpdate={(latest) => {
          if (!opening) return

          /**
           * latest.x là giá trị transform X
           * khi mở: 0 → -100 (%)
           */
          const raw = Math.abs(Number(String(latest.x).replace('%', '')))
          const progress = Math.min(raw / 100, 1)

          onProgress(progress)
        }}
        onAnimationComplete={() => {
          if (opening) {
            onProgress(1) // đảm bảo progress kết thúc = 1
            onFinish()
          }
        }}
        style={{
          position: 'absolute',
          left: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url(/cover.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'left center'
        }}
      />

      {/* NỬA PHẢI */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: opening ? '100%' : '0%' }}
        transition={{
          duration: 3.5,
          ease: [0.77, 0, 0.175, 1]
        }}
        style={{
          position: 'absolute',
          right: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url(/cover.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center'
        }}
      />

      {/* NÚT MỞ */}
      {!opening && (
        <div
          onClick={onOpen}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              background: 'rgba(139,0,0,0.85)',
              color: '#ffd700',
              fontSize: 68,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(255,215,0,0.7)'
            }}
          >
            囍
          </motion.div>
        </div>
      )}
    </div>
  )
}
