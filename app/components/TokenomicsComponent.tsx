
'use client'

export default function TokenomicsComponent() {
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
        TOKENOMICS
      </h2>
      
      <div style={{ color: '#ffffff', fontSize: '1rem', lineHeight: '1.6' }}>
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '15px' }}>Total Supply</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ffff' }}>1,000,000,000 FLOBBI</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Distribution</h3>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Liquidity Pool:</span>
              <span style={{ color: '#00ffff' }}>40%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Marketing & Development:</span>
              <span style={{ color: '#00ffff' }}>20%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Team & Advisors:</span>
              <span style={{ color: '#00ffff' }}>15%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Community Rewards:</span>
              <span style={{ color: '#00ffff' }}>15%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Reserve Fund:</span>
              <span style={{ color: '#00ffff' }}>10%</span>
            </div>
          </div>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Tax Structure</h3>
          <div style={{ paddingLeft: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Buy Tax:</span>
              <span style={{ color: '#00ffff' }}>3%</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span>Sell Tax:</span>
              <span style={{ color: '#00ffff' }}>5%</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 style={{ color: '#00ffff', marginBottom: '10px' }}>Utility</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Governance Voting Rights</li>
            <li>Staking Rewards</li>
            <li>NFT Marketplace Currency</li>
            <li>Gaming Platform Token</li>
            <li>Exclusive Access to Events</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
