'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Wish {
  name: string
  relation: string
  message: string
}

export default function RSVP({
  onNewWish
}: {
  onNewWish: (w: Wish) => void
}) {
  const [form, setForm] = useState({
    name: '',
    relation: '',
    message: ''
  })

  const [showPopup, setShowPopup] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.message.trim()) {
      alert('Vui lòng nhập tên và lời chúc 💌')
      return
    }

    try {
      setSending(true)

      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Gửi thất bại')
      }

      // ✅ ĐẨY VÀO OVERLAY LIVE
      onNewWish(data.wish)

      // reset form
      setForm({ name: '', relation: '', message: '' })
      setShowPopup(true)
    } catch (err) {
      alert('Có lỗi xảy ra, vui lòng thử lại 🙏')
      console.error(err)
    } finally {
      setSending(false)
    }
  }

  return (
    <section style={{ paddingBottom: 100 }}>
      {/* ===== FORM ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={formBox}
      >
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 28, color: '#ffd7dc' }}>💌</div>
          <h3 style={titleStyle}>Gửi Lời Chúc</h3>
        </div>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tên của bạn"
          style={inputStyle}
        />

        <input
          name="relation"
          value={form.relation}
          onChange={handleChange}
          placeholder="Bạn là gì của Dâu - Rể nhỉ?"
          style={inputStyle}
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Gửi lời chúc đến Dâu Rể nhé 💖"
          rows={3}
          style={{
            ...inputStyle,
            height: 90,
            borderRadius: 16,
            padding: '12px 16px',
            resize: 'none'
          }}
        />

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 260 }}
          onClick={handleSubmit}
          disabled={sending}
          style={{
            ...submitBtn,
            opacity: sending ? 0.6 : 1
          }}
        >
          {sending ? 'ĐANG GỬI...' : 'GỬI LỜI CHÚC'}
        </motion.button>
      </motion.div>

      {/* ===== POPUP CẢM ƠN ===== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={popupOverlay}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={popupBox}
              onClick={e => e.stopPropagation()}
            >
              <img src="/f1.jpg" alt="" style={popupImage} />

              <div style={popupContent}>
                <h4 style={popupTitle}>💖 Xin chân thành cảm ơn</h4>
                <p style={popupText}>
                  Lời chúc của bạn đã được gửi thành công.<br />
                  Gia đình và Dâu Rể rất trân trọng!
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  style={popupBtn}
                >
                  Đóng
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ================= STYLE ================= */

const formBox: React.CSSProperties = {
  maxWidth: 360,
  margin: '0 auto',
  background: '#8b1c2d',
  borderRadius: 26,
  padding: 24,
  boxShadow: '0 22px 48px rgba(139,28,45,0.45)',
  textAlign: 'center'
}

const titleStyle: React.CSSProperties = {
  color: '#fff',
  fontWeight: 500,
  lineHeight: 1.5
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  height: 46,
  padding: '0 16px',
  marginBottom: 12,
  borderRadius: 999,
  border: 'none',
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box'
}

const submitBtn: React.CSSProperties = {
  marginTop: 16,
  width: '100%',
  height: 48,
  background: '#fff',
  color: '#8b1c2d',
  borderRadius: 999,
  border: 'none',
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: 1,
  cursor: 'pointer',
  boxShadow: '0 6px 14px rgba(0,0,0,0.18)'
}

/* ===== POPUP ===== */

const popupOverlay: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999
}

const popupBox: React.CSSProperties = {
  width: '92%',
  maxWidth: 420,                 // ✅ RỘNG HƠN
  background: '#fffaf5',
  borderRadius: 28,
  overflow: 'hidden',
  border: '1.5px solid rgba(139,28,45,0.35)',
  boxShadow: '0 30px 80px rgba(139,28,45,0.35)'
}

const popupImage: React.CSSProperties = {
  width: '100%',
  maxHeight: 260,
  objectFit: 'contain',          // 🔥 KHÔNG CẮT ẢNH
  background: '#f6ede4'
}

const popupContent: React.CSSProperties = {
  padding: '18px 22px',
  textAlign: 'center'
}

const popupTitle: React.CSSProperties = {
  marginBottom: 8,
  color: '#8b1c2d',
  fontWeight: 600
}

const popupText: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.7,
  color: '#6b1c25',
  marginBottom: 14
}

const popupBtn: React.CSSProperties = {
  padding: '8px 22px',
  borderRadius: 999,
  border: '1px solid rgba(139,28,45,0.4)',
  background: '#fff',
  color: '#8b1c2d',
  fontWeight: 600,
  cursor: 'pointer'
}
