'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

import CurtainIntro from '@/components/CurtainIntro'
import WishOverlay from '@/components/WishOverlay'

import Cover from '@/components/Cover'
import Family from '@/components/Family'
import Couple from '@/components/Couple'
import EventInfo from '@/components/EventInfo'
import Countdown from '@/components/Countdown'
import Gallery from '@/components/Gallery'
import RSVP from '@/components/RSVP'
import MusicPlayer, { MusicHandle } from '@/components/MusicPlayer'
import Calendar from '@/components/Calendar'
import FallingFlowers from '@/components/FallingFlowers'
import GiftButton from '@/components/GiftButton'
import SectionDivider from '@/components/SectionDivider'

interface Wish {
  name: string
  relation: string
  message: string
}

export default function HomePage() {
  const [opening, setOpening] = useState(false)
  const [opened, setOpened] = useState(false)
  const [openProgress, setOpenProgress] = useState(0)

  const [wishes, setWishes] = useState<Wish[]>([])
  const [hasWish, setHasWish] = useState(false)

  const musicRef = useRef<MusicHandle>(null)

  /* ================= LOAD WISHES FROM DB ================= */
  useEffect(() => {
    const fetchWishes = async () => {
      try {
        const res = await fetch('/api/wishes')
        const data = await res.json()

        if (Array.isArray(data.wishes) && data.wishes.length > 0) {
          setWishes(data.wishes)
          setHasWish(true) // ✅ đã có lời chúc → bật overlay
        }
      } catch (err) {
        console.error('Không load được lời chúc', err)
      }
    }

    fetchWishes()
  }, [])
  /* ======================================================= */

  return (
    <>
      {/* 🎵 MUSIC PLAYER */}
      <MusicPlayer ref={musicRef} />
      <GiftButton />

      {/* ===== NỘI DUNG THIỆP ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opening || opened ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <Cover progress={openProgress} />
        <Family />
        <SectionDivider />
        <Couple />
        <EventInfo />
        <SectionDivider />
        <Calendar />
        <Countdown />
        <Gallery />

        {/* ===== RSVP ===== */}
        <RSVP
          onNewWish={(w: Wish) => {
            setWishes(prev => [...prev, w])
            setHasWish(true) // 🔥 bật overlay ngay lần gửi đầu tiên
          }}
        />

        <footer
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            fontStyle: 'italic',
            color: '#b23a48'
          }}
        >
          Gia đình nhà gái xin chân thành cảm ơn<br />
          và mong được đón tiếp quý khách trong ngày vui của chúng tôi 💖
        </footer>
      </motion.div>

      {/* 💬 OVERLAY LỜI CHÚC */}
      <WishOverlay
        wishes={wishes}
        active={(opening || opened) && hasWish}
      />

      {/* 🎬 BÌA MỞ */}
      {!opened && (
        <CurtainIntro
          opening={opening}
          onOpen={() => {
            setOpening(true)
            musicRef.current?.play()
          }}
          onFinish={() => setOpened(true)}
          onProgress={setOpenProgress}
        />
      )}

      {/* 🌸 HOA RƠI */}
      <FallingFlowers active={opening || opened} />
    </>
  )
}
