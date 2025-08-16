'use client'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), {
  ssr: false
})

const CircularText = dynamic(() => import('../components/CircularText'), {
  ssr: false
})

const RoadmapComponent = dynamic(() => import('../components/RoadmapComponent'), {
  ssr: false
})

const TokenomicsComponent = dynamic(() => import('../components/TokenomicsComponent'), {
  ssr: false
})

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

export default function Roadmap() {
  const pillNavItems = [
    { label: 'HOME', href: '/' },
    { label: 'ROADMAP & TOKENOMICS', href: '/roadmap' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <FaultyTerminal
        tint="#00ffff"
        brightness={0.8}
        scanlineIntensity={0.4}
        glitchAmount={1.2}
      />

      <PillNav
        logo="https://via.placeholder.com/36x36?text=F"
        items={pillNavItems}
        activeHref="/roadmap"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        position: 'absolute',
        top: '30px',
        left: '30px',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <CircularText text="ROADMAP & TOKENOMICS " spinDuration={12} onHover="pause" />
      </div>

      <div style={{
        position: 'absolute',
        top: '120px',
        left: '20px',
        right: '20px',
        bottom: '20px',
        zIndex: 10,
        display: 'flex',
        gap: '20px',
        flexDirection: 'row'
      }}>
        <div style={{ 
          flex: '1',
          minWidth: '300px'
        }}>
          <RoadmapComponent />
        </div>
        <div style={{ 
          flex: '1',
          minWidth: '300px'
        }}>
          <TokenomicsComponent />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="flex"] {
            flex-direction: column !important;
          }
        }
      `}</style>
    </main>
  )
}