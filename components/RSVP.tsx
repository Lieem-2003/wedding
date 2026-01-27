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
    message: '',
    attend: ''
  })

  const [showPopup, setShowPopup] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (!form.name || !form.message) {
      alert('Vui lòng nhập tên và lời chúc 💌')
      return
    }

    setSending(true)

    setTimeout(() => {
      const newWish: Wish = {
        name: form.name,
        relation: form.relation,
        message: form.message
      }

      onNewWish(newWish) // ✅ CHỈ GỬI KHI USER SUBMIT

      setForm({ name: '', relation: '', message: '', attend: '' })
      setSending(false)
      setShowPopup(true)
    }, 600)
  }

  return (
    <section style={{ paddingBottom: 100 }}>
      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={formBox}
      >
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 28, color: '#ffd7dc' }}>💌</div>
          <h3 style={titleStyle}>
            Xác Nhận Tham Dự<br />& Gửi Lời Chúc
          </h3>
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
          placeholder="Bạn là gì của Dâu - Rể?"
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

        <select
          name="attend"
          value={form.attend}
          onChange={handleChange}
          style={{
            ...inputStyle,
            appearance: 'none',
            backgroundImage:
              'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\'><polygon points=\'0,0 14,0 7,7\' fill=\'%238b1c2d\'/></svg>")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 16px center'
          }}
        >
          <option value="">Bạn có tham dự không?</option>
          <option value="yes">Có tham dự</option>
          <option value="no">Không tham dự</option>
        </select>

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

      {/* POPUP */}
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
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              style={popupBox}
            >
              <h4 style={{ marginBottom: 8 }}>💖 Xin chân thành cảm ơn</h4>
              <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                Lời chúc của bạn đã được gửi thành công.<br />
                Gia đình và Dâu Rể rất trân trọng!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                style={popupBtn}
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ===== STYLE ===== */

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
  background: '#fff',
  borderRadius: 20,
  padding: 22,
  textAlign: 'center',
  maxWidth: 280
}

const popupBtn: React.CSSProperties = {
  marginTop: 14,
  padding: '8px 18px',
  borderRadius: 20,
  border: 'none',
  background: '#8b1c2d',
  color: '#fff',
  cursor: 'pointer'
}
