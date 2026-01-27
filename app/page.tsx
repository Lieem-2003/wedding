'use client'

import { useState } from 'react'
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
import MusicPlayer from '@/components/MusicPlayer'
import Calendar from '@/components/Calendar'
import FallingFlowers from '@/components/FallingFlowers'

interface Wish {
  name: string
  relation: string
  message: string
}

export default function HomePage() {
  const [opening, setOpening] = useState(false)
  const [opened, setOpened] = useState(false)
  const [openProgress, setOpenProgress] = useState(0)

  // ⭐ STATE LỜI CHÚC TRUNG TÂM
  const [wishes, setWishes] = useState<Wish[]>([
    {
      name: 'Anh Tuấn',
      relation: 'Bạn đại học',
      message: 'Chúc hai bạn trăm năm hạnh phúc ❤️'
    },
    {
      name: 'Cô Lan',
      relation: 'Hàng xóm',
      message: 'Ngày vui thật rộn ràng, chúc gia đình luôn an vui 💐'
    },
    {
      name: 'Minh Anh',
      relation: 'Bạn thân cô dâu',
      message: 'Cuối cùng ngày này cũng tới rồi! 🥰'
    }
  ])

  return (
    <>
      {/* NỘI DUNG THIỆP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: opening || opened ? 1 : 0 }}
        transition={{ duration: 2 }}
      >
        <MusicPlayer />
        <Cover progress={openProgress} />
        <Family />
        <Couple />
        <EventInfo />
        <Calendar />
        <Countdown />
        <Gallery />

        {/* RSVP GỬI LỜI CHÚC */}
        <RSVP
          onNewWish={(w: Wish) =>
            setWishes(prev => [...prev, w])
          }
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

      {/* OVERLAY LỜI CHÚC – CHỈ SAU KHI MỞ BÌA */}
      <WishOverlay
        wishes={wishes}
        active={opening || opened}
      />

      {/* BÌA MỞ */}
      {!opened && (
        <CurtainIntro
          opening={opening}
          onOpen={() => setOpening(true)}
          onFinish={() => setOpened(true)}
          onProgress={setOpenProgress}
        />
      )}

      {/* HOA RƠI */}
      <FallingFlowers active={opening || opened} />
    </>
  )
}
