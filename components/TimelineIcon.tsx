'use client'

interface Props {
  type: 'welcome' | 'ceremony' | 'gift' | 'tea' | 'party'
  size?: number
}

const COLOR = '#8b1c2d'

export default function TimelineIcon({ type, size = 22 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: COLOR,
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,   // ✅ FIX
    strokeLinejoin: 'round' as const   // ✅ FIX
  }

  switch (type) {
    /* 💐 ĐÓN KHÁCH */
    case 'welcome':
      return (
        <svg {...common}>
          <path d="M12 2v6" />
          <path d="M9 5l3 3 3-3" />
          <circle cx="12" cy="14" r="4" />
        </svg>
      )

    /* 🕯️ LỄ VU QUY */
    case 'ceremony':
      return (
        <svg {...common}>
          <path d="M12 3c1.5 2 1.5 4 0 6" />
          <rect x="9" y="9" width="6" height="10" rx="2" />
        </svg>
      )

    /* 🎁 TRAO SÍNH LỄ */
    case 'gift':
      return (
        <svg {...common}>
          <rect x="3" y="8" width="18" height="13" rx="2" />
          <path d="M12 8v13" />
          <path d="M3 12h18" />
        </svg>
      )

    /* 🍵 DÂNG TRÀ */
    case 'tea':
      return (
        <svg {...common}>
          <path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8z" />
          <path d="M16 10h2a2 2 0 0 1 0 4h-2" />
        </svg>
      )

    /* 🎉 DÙNG TIỆC */
    case 'party':
      return (
        <svg {...common}>
          <path d="M4 20l8-16 8 16z" />
          <path d="M12 9v4" />
        </svg>
      )

    default:
      return null
  }
}
