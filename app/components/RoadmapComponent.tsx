
'use client'

export default function RoadmapComponent() {
  return (
    <div style={{
      background: 'rgba(0, 255, 255, 0.1)',
      border: '2px solid #00ffff',
      borderRadius: '15px',
      padding: '20px',
      backdropFilter: 'blur(10px)',
      height: '100%',
      overflowY: 'auto'
    }}>
      <h2 style={{
        color: '#00ffff',
        fontSize: '2rem',
        marginBottom: '20px',
        textAlign: 'center',
        textShadow: '0 0 10px #00ffff'
      }}>
        ROADMAP
      </h2>
      
      <div style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.6' }}>
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Phase 1: Foundation</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Launch FLOBBI Token</li>
            <li>Community Building</li>
            <li>Initial Marketing Campaign</li>
            <li>Website & Social Media Setup</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Phase 2: Expansion</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>DEX Listings</li>
            <li>Partnership Development</li>
            <li>Influencer Collaborations</li>
            <li>Community Events</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Phase 3: Innovation</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>NFT Collection Launch</li>
            <li>Gaming Integration</li>
            <li>Mobile App Development</li>
            <li>Global Exchange Listings</li>
          </ul>
        </div>
        
        <div>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Phase 4: Dominance</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Metaverse Integration</li>
            <li>Cross-chain Compatibility</li>
            <li>Enterprise Partnerships</li>
            <li>Ecosystem Expansion</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
