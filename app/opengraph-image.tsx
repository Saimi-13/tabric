import { ImageResponse } from 'next/og'

export const alt = 'Tabric — Turn spreadsheets into stories'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
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
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(49,196,216,0.18) 0%, rgba(192,132,252,0.10) 50%, #080c16 100%)',
          padding: '80px 96px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Logo grid */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 48 }}>
          <svg width="56" height="56" viewBox="0 0 44 44">
            <rect x="0" y="0" width="20" height="13" rx="2.5" fill="#E8523A" />
            <rect x="23" y="0" width="20" height="13" rx="2.5" fill="#E8523A" />
            <rect x="0" y="16" width="20" height="13" rx="2.5" fill="#E8523A" />
            <rect x="23" y="16" width="12" height="13" rx="2.5" fill="#E8523A" />
            <rect x="38" y="16" width="6" height="13" rx="2.5" fill="#31C4D8" />
            <rect x="0" y="32" width="9" height="12" rx="2.5" fill="#E8523A" />
            <rect x="12" y="32" width="19" height="12" rx="2.5" fill="#E8523A" />
          </svg>
          <div style={{ color: '#fff', fontSize: 36, fontWeight: 800, letterSpacing: -0.5 }}>tabric</div>
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            color: '#31C4D8',
            background: 'rgba(49,196,216,0.10)',
            border: '1px solid rgba(49,196,216,0.25)',
            borderRadius: 999,
            padding: '10px 22px',
            fontSize: 22,
            fontWeight: 500,
            marginBottom: 36,
          }}
        >
          AI-Powered Business Analytics
        </div>

        {/* Headline */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            color: '#fff',
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 28,
          }}
        >
          <span>Your data tells&nbsp;</span>
          <span>a&nbsp;</span>
          <span
            style={{
              backgroundImage: 'linear-gradient(135deg, #31C4D8, #C084FC)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            story.
          </span>
        </div>

        {/* Subtitle */}
        <div style={{ color: '#7588a3', fontSize: 30, fontWeight: 400 }}>
          Upload a spreadsheet. Get dashboards, insights, and an AI chatbot — in under a minute.
        </div>
      </div>
    ),
    { ...size }
  )
}
