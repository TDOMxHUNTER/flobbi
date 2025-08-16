'use client'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), {
  ssr: false
})

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

export default function About() {
  const pillNavItems = [
    { label: 'HOME', href: '/' },
    { label: 'ROADMAP & TOKENOMICS', href: '/roadmap' },
    { label: 'ABOUT', href: '/about' },
    { label: 'CONTACT', href: '/contact' }
  ];

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <FaultyTerminal 
        tint="#00ffff"
        brightness={0.8}
        scanlineIntensity={0.4}
        glitchAmount={1.2}
      />

      <PillNav
        logo="https://via.placeholder.com/36x36?text=F"
        items={pillNavItems}
        activeHref="/about"
        baseColor="#00ffff"
        pillColor="#060010"
        hoveredPillTextColor="#00ffff"
      />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        pointerEvents: 'none',
        textAlign: 'center',
        maxWidth: '800px',
        padding: '20px'
      }}>
        <div style={{
          background: 'rgba(0, 255, 255, 0.1)',
          border: '1px solid #00ffff',
          borderRadius: '10px',
          padding: '30px',
          backdropFilter: 'blur(10px)'
        }}>
          <h1 style={{
            color: '#00ffff',
            fontSize: '2.5rem',
            marginBottom: '20px',
            textShadow: '0 0 10px #00ffff'
          }}>
            ABOUT FLOBBI
          </h1>

          <div style={{ textAlign: 'left', color: '#ffffff' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#d856bf', marginBottom: '10px' }}>What is FLOBBI?</h3>
              <p>FLOBBI is the most chaotic meme token in the digital universe. Born from pure internet madness and fueled by community energy.</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#d856bf', marginBottom: '10px' }}>Our Mission</h3>
              <p>To spread chaos, laughter, and financial gains across the blockchain. We believe in the power of memes to change the world!</p>
            </div>

            <div>
              <h3 style={{ color: '#d856bf', marginBottom: '10px' }}>Join the Chaos</h3>
              <p>Welcome to FLOBBILAND where logic doesn't apply and gains are eternal!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}