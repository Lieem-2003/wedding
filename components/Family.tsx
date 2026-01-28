'use client'
import { motion } from 'framer-motion'

const songHy: React.CSSProperties = {
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
}

const divider: React.CSSProperties = {
  fontSize: 14,
  color: '#b23a48',
  marginBottom: 36,
  letterSpacing: 4
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 32,
  maxWidth: 520,
  margin: '0 auto 42px'
}

const avatar: React.CSSProperties = {
  width: 72,
  height: 72,
  borderRadius: '50%',
  objectFit: 'cover',
  marginBottom: 10,
  boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
}

const houseTitle: React.CSSProperties = {
  fontFamily: '"Playfair Display", serif',
  fontWeight: 600,
  fontSize: 15,
  letterSpacing: 2,
  marginBottom: 10,
  color: '#5a1a22'
}

const familyText: React.CSSProperties = {
  fontFamily: '"Libre Baskerville", serif',
  fontSize: 14,
  lineHeight: 1.8
}

const address: React.CSSProperties = {
  fontSize: 12,
  opacity: 0.7,
  marginTop: 6
}

const announce: React.CSSProperties = {
  marginBottom: 16,
  fontSize: 14,
  letterSpacing: 1,
  fontFamily: '"Libre Baskerville", serif'
}

const coupleName: React.CSSProperties = {
  fontFamily: '"Great Vibes", cursive',
  fontSize: 32,
  color: '#b23a48',
  lineHeight: 1.7
}


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
        style={songHy}
      >
        囍
      </motion.div>

      {/* HOA VĂN */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.5, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={divider}
      >
        ✧ ✧ ✧
      </motion.div>

      {/* HAI NHÀ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={grid}
      >
        {/* NHÀ TRAI */}
        <div>
          <img src="/avt1.jpg" alt="Chú rể" style={avatar} />

          <div style={houseTitle}>NHÀ TRAI</div>

          <div style={familyText}>
            <p>Ông: Nguyễn Hữu Hải</p>
            <p>Bà: Đặng Thị Thủy</p>
            <p style={address}>
              Phương Trù – Châu Ninh – Hưng Yên
            </p>
          </div>
        </div>

        {/* NHÀ GÁI */}
        <div>
          <img src="/avt2.jpg" alt="Cô dâu" style={avatar} />

          <div style={houseTitle}>NHÀ GÁI</div>

          <div style={familyText}>
            <p>Ông: Nguyễn Xuân Nhanh</p>
            <p>Bà: Bùi Thị Út</p>
            <p style={address}>
              Nghi Xuyên – Chí Minh – Hưng Yên
            </p>
          </div>
        </div>
      </motion.div>

      {/* TRÂN TRỌNG BÁO TIN */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={announce}
      >
        Trân trọng báo tin lễ thành hôn của
      </motion.p>

      {/* TÊN CẶP ĐÔI */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={coupleName}
      >
        Nguyễn Hữu Ngọc
        <br />
        <span style={{ fontSize: 20 }}>&amp;</span>
        <br />
        Nguyễn Thị Hải Anh
      </motion.div>
    </section>
  )
}
