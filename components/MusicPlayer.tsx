'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Note {
  id: number
  x: number
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const noteId = useRef(0)

  // 🎵 Tạo nốt nhạc bay ra
  useEffect(() => {
    if (!playing) return

    const timer = setInterval(() => {
      setNotes(prev => [
        ...prev,
        {
          id: noteId.current++,
          x: Math.random() * 30 - 15 // lệch trái phải
        }
      ])
    }, 1200)

    return () => clearInterval(timer)
  }, [playing])

  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
        if (playing) {
        audioRef.current.pause()
        } else {
        audioRef.current.volume = 0.8
        await audioRef.current.play()
        }
        setPlaying(!playing)
    } catch (e) {
        console.warn('Play bị chặn bởi browser')
    }
    }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        playsInline
        />

      {/* 🎵 ĐĨA NHẠC */}
      <div style={wrap}>
        <motion.div
          onClick={toggleMusic}
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{
            repeat: playing ? Infinity : 0,
            duration: 6,
            ease: 'linear'
          }}
          style={disc}
        >
          {/* tâm đĩa */}
          <div style={centerDot} />

          {/* icon play / pause */}
          {!playing && (
            <div style={playIcon}>▶</div>
          )}
        </motion.div>

        {/* 🎶 NỐT NHẠC BAY */}
        <AnimatePresence>
          {notes.map(note => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -50 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              onAnimationComplete={() =>
                setNotes(prev => prev.filter(n => n.id !== note.id))
              }
              style={{
                ...musicNote,
                left: `calc(50% + ${note.x}px)`
              }}
            >
              ♪
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

/* ================= STYLE ================= */

const wrap: React.CSSProperties = {
  position: 'fixed',
  bottom: 20,
  right: 20,
  width: 72,
  height: 72,
  zIndex: 1000
}

const disc: React.CSSProperties = {
  width: 72,
  height: 72,
  borderRadius: '50%',
  background:
    'radial-gradient(circle at center, #fff 0%, #e7b6bc 35%, #8b1c2d 70%)',
  boxShadow: '0 8px 20px rgba(139,28,45,0.4)',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const centerDot: React.CSSProperties = {
  width: 14,
  height: 14,
  borderRadius: '50%',
  background: '#fff',
  zIndex: 2
}

const playIcon: React.CSSProperties = {
  position: 'absolute',
  fontSize: 18,
  color: '#8b1c2d',
  marginLeft: 2
}

const musicNote: React.CSSProperties = {
  position: 'absolute',
  bottom: 72,
  fontSize: 16,
  color: '#8b1c2d',
  pointerEvents: 'none'
}
