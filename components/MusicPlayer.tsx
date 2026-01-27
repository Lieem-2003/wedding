'use client'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface MusicHandle {
  play: () => void
}

const MusicPlayer = forwardRef<MusicHandle>((_, ref) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useImperativeHandle(ref, () => ({
    async play() {
      if (!audioRef.current) return
      try {
        audioRef.current.volume = 0.8
        await audioRef.current.play()
        setPlaying(true)
      } catch (e) {
        console.warn('Autoplay bị chặn')
      }
    }
  }))

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        playsInline
      />

      <motion.div
        animate={{ rotate: playing ? 360 : 0 }}
        transition={{
          repeat: playing ? Infinity : 0,
          duration: 6,
          ease: 'linear'
        }}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 72,
          height: 72,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, #fff 0%, #e7b6bc 35%, #8b1c2d 70%)',
          boxShadow: '0 8px 20px rgba(139,28,45,0.4)',
          zIndex: 1000
        }}
      />
    </>
  )
})

export default MusicPlayer
