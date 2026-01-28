'use client'

const wrap: React.CSSProperties = {
  position: 'fixed',
  bottom: 18,
  right: 18,
  width: 56,
  height: 56,
  zIndex: 1000
}

const disc: React.CSSProperties = {
  width: 56,
  height: 56,
  borderRadius: '50%',
  background: `
    radial-gradient(circle at center,
      #f5d27a 0%,
      #f5d27a 12%,
      #1c1c1c 14%,
      #2a2a2a 45%,
      #0f0f0f 100%
    )
  `,
  boxShadow: '0 6px 18px rgba(0,0,0,0.45)',
  cursor: 'pointer',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const centerDot: React.CSSProperties = {
  width: 10,
  height: 10,
  borderRadius: '50%',
  background: '#f5d27a',
  boxShadow: '0 0 0 2px #111',
  zIndex: 2
}

const playIcon: React.CSSProperties = {
  position: 'absolute',
  fontSize: 14,
  color: '#f5d27a',
  marginLeft: 2
}

const musicNote: React.CSSProperties = {
  position: 'absolute',
  bottom: 56,
  fontSize: 14,
  color: '#8b1c2d',
  pointerEvents: 'none'
}


import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface MusicHandle {
  play: () => void
  pause: () => void
}

interface Note {
  id: number
  x: number
}

const MusicPlayer = forwardRef<MusicHandle>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const noteId = useRef(0)

  /* expose play / pause */
  useImperativeHandle(ref, () => ({
    async play() {
      if (!audioRef.current) return
      try {
        audioRef.current.volume = 0.8
        await audioRef.current.play()
        setPlaying(true)
      } catch {
        console.warn('Autoplay bị chặn bởi trình duyệt')
      }
    },
    pause() {
      audioRef.current?.pause()
      setPlaying(false)
    }
  }))

  /* 🎶 tạo nốt nhạc bay khi đang phát */
  useEffect(() => {
    if (!playing) return

    const timer = setInterval(() => {
      setNotes(prev => [
        ...prev,
        {
          id: noteId.current++,
          x: Math.random() * 24 - 12
        }
      ])
    }, 1400)

    return () => clearInterval(timer)
  }, [playing])

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
          onClick={() => {
            if (playing) {
              audioRef.current?.pause()
              setPlaying(false)
            } else {
              audioRef.current?.play()
              setPlaying(true)
            }
          }}
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{
            repeat: playing ? Infinity : 0,
            duration: 7,
            ease: 'linear'
          }}
          style={disc}
        >
          {/* tâm đĩa */}
          <div style={centerDot} />

          {/* play icon khi dừng */}
          {!playing && <div style={playIcon}></div>}
        </motion.div>

        {/* 🎶 NỐT NHẠC BAY */}
        <AnimatePresence>
          {notes.map(note => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 0, scale: 0.8 }}
              animate={{ opacity: 1, y: -40, scale: 1 }}
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
})

export default MusicPlayer
