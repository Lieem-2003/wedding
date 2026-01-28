'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GiftButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* 🎁 NÚT HỘP QUÀ */}
      <motion.div
        onClick={() => setOpen(true)}
        animate={{ rotate: [0, -3, 3, -2, 2, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={giftBtn}
      >
        🎁
      </motion.div>

      {/* 🎁 POPUP QR */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={overlay}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.4 }}
              style={popup}
              onClick={e => e.stopPropagation()}
            >
              <div style={popupTitle}>🎀 MỪNG CƯỚI CÔ DÂU</div>

              {/* QR CODE */}
              <img
                src="/QR.png" // 👉 đổi thành QR thật
                alt="QR mừng cưới"
                style={qrImage}
              />

              <div style={note}>
                Xin cảm ơn tấm lòng của bạn 💖
              </div>

              <button
                onClick={() => setOpen(false)}
                style={closeBtn}
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ================= STYLE ================= */

const giftBtn: React.CSSProperties = {
  position: 'fixed',
  bottom: 20,
  left: 20,               // ✅ BÊN TRÁI
  width: 52,
  height: 52,
  borderRadius: '50%',
  background:
    'radial-gradient(circle, #fff 0%, #ffe0e5 40%, #8b1c2d 75%)',
  boxShadow: '0 8px 20px rgba(139,28,45,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 28,
  cursor: 'pointer',
  zIndex: 1000
}

const overlay: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999
}

const popup: React.CSSProperties = {
  background: '#fff',
  borderRadius: 22,
  padding: 22,
  width: 260,
  textAlign: 'center',
  boxShadow: '0 30px 80px rgba(0,0,0,0.35)'
}

const popupTitle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  color: '#8b1c2d',
  marginBottom: 14
}

const qrImage: React.CSSProperties = {
  width: '100%',
  borderRadius: 12,
  marginBottom: 12
}

const note: React.CSSProperties = {
  fontSize: 13,
  opacity: 0.8,
  marginBottom: 14
}

const closeBtn: React.CSSProperties = {
  padding: '8px 16px',
  borderRadius: 20,
  border: 'none',
  background: '#8b1c2d',
  color: '#fff',
  cursor: 'pointer',
  fontSize: 13
}
