'use client'
import { motion } from 'framer-motion'
import TimelineIcon from './TimelineIcon'

const timeline = [
  {
    time: '08:30',
    title: 'Đón khách',
    desc: 'Gia đình hai bên đón tiếp quan khách',
    icon: 'welcome'
  },
  {
    time: '09:00',
    title: 'Lễ Vu Quy',
    desc: 'Nghi thức lễ thành hôn được cử hành tại tư gia',
    icon: 'ceremony'
  },
  {
    time: '09:30',
    title: 'Trao sính lễ',
    desc: 'Nhà trai trao lễ vật – hai họ chứng kiến',
    icon: 'gift'
  },
  {
    time: '10:00',
    title: 'Dâng trà – Ra mắt',
    desc: 'Cô dâu chú rể dâng trà gia tiên và họ hàng',
    icon: 'tea'
  },
  {
    time: '11:00',
    title: 'Dùng tiệc thân mật',
    desc: 'Buổi tiệc mừng hạnh phúc tại gia đình nhà gái',
    icon: 'party'
  }
] as const

export default function EventInfo() {
  return (
    <section
      style={{
        paddingTop: 60,
        paddingBottom: 80,
        background: '#f6ede4',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* TIÊU ĐỀ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 60 }}
      >
        <div style={{ fontSize: 13, letterSpacing: 3 }}>WEDDING</div>
        <div
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 34,
            color: '#8b1c2d',
            marginTop: 6
          }}
        >
          Timeline
        </div>
      </motion.div>

      {/* TIMELINE */}
      <div
        style={{
          maxWidth: 760,
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* TRỤC GIỮA */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            background: '#8b1c2d',
            transform: 'translateX(-50%)',
            opacity: 0.35,
            zIndex: 1
          }}
        />

        {timeline.map((item, i) => {
          const isLeft = i % 2 === 1

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-end' : 'flex-start',
                marginBottom: 48,
                position: 'relative'
              }}
            >
              {/* BOX NỘI DUNG */}
              <div
                style={{
                  width: '44%',
                  background: '#fff',
                  borderRadius: 18,
                  padding: '16px 20px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                  border: '1.5px solid #e7b6bc',
                  zIndex: 2
                }}
              >
                {/* ICON SVG + TITLE */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 6
                  }}
                >
                  <TimelineIcon type={item.icon} />
                  <strong style={{ color: '#8b1c2d' }}>
                    {item.title}
                  </strong>
                </div>

                <div style={{ fontSize: 13, opacity: 0.85 }}>
                  {item.desc}
                </div>
              </div>

              {/* DOT GIỮA */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#fff',
                  border: '2.5px solid #8b1c2d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#8b1c2d',
                  boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
                  zIndex: 3
                }}
              >
                {item.time}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
