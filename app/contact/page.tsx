'use client'
import dynamic from 'next/dynamic'

const FaultyTerminal = dynamic(() => import('../components/FaultyTerminal'), {
  ssr: false
})

const PillNav = dynamic(() => import('../components/PillNav'), {
  ssr: false
})

export default function Contact() {
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
        activeHref="/contact"
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
            CONTACT US
          </h1>

          <div style={{ textAlign: 'left', color: '#ffffff' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#e0e0e0', marginBottom: '10px' }}>Get in Touch</h3>
              <p>Ready to dive into the chaos of FLOBBILAND?</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#e0e0e0', marginBottom: '10px' }}>Email</h3>
              <p>contact@flobbiland.dev</p>
            </div>

            <div>
              <h3 style={{ color: '#e0e0e0', marginBottom: '10px' }}>Discord</h3>
              <p>Join our community server!</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}