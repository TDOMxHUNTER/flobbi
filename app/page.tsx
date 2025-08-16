'use client'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('./components/FaultyTerminal'), {
  ssr: false
})

const CircularText = dynamic(() => import('./components/CircularText'), {
  ssr: false
})

const TextType = dynamic(() => import('./components/TextType'), {
  ssr: false
})

const PillNav = dynamic(() => import('./components/PillNav'), {
  ssr: false
})

export default function Home() {
  const pillNavItems = [
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
        activeHref="/"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        position: 'absolute',
        top: '30px',
        left: '30px',
        zIndex: 10,
      }}>
        <CircularText text="FLOBBIMEME" spinDuration={15} onHover="speedUp" />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '140px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        pointerEvents: 'none',
        textAlign: 'center'
      }}>
        <TextType
          text={["Welcome to the FLOBBILAND", "Experience the CHAOS with flobbi"]}
          typingSpeed={100}
          pauseDuration={1500}
          deletingSpeed={50}
          loop={true}
          showCursor={true}
          cursorCharacter="|"
          textColors={["#FFFFFF"]}
          as="h2"
          style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}
        />
      </div>
    </main>
  )
}