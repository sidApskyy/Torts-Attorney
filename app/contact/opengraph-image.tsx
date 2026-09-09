import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Contact The Torts Attorney — Build Your Acquisition System'

export default function ContactOGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A1A1F 0%, #202124 50%, #2A2A30 100%)',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '48px', height: '2px', background: '#C6A24A' }} />
          <span style={{ color: '#C6A24A', fontSize: 20, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Contact
          </span>
        </div>
        <div style={{ color: '#F8F8F6', fontSize: 56, fontWeight: 800, lineHeight: 1.1, fontFamily: 'serif', maxWidth: '900px', display: 'flex', flexDirection: 'column' }}>
          <span>Build Your</span>
          <span style={{ color: '#C6A24A' }}>Acquisition System.</span>
        </div>
        <div style={{ color: 'rgba(248, 248, 246, 0.6)', fontSize: 22, marginTop: '32px', maxWidth: '700px', lineHeight: 1.5 }}>
          Schedule a consultation for campaign strategy and intake operations tailored to your firm.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #C6A24A, #9B7830)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#FFFFFF', fontSize: 28, fontWeight: 800, fontFamily: 'serif' }}>T</span>
          </div>
          <span style={{ color: '#F8F8F6', fontSize: 24, fontWeight: 700, fontFamily: 'serif' }}>The Torts Attorney</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
