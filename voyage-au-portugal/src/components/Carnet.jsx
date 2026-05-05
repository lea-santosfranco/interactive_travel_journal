import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTransition } from '../TransitionContext'

// ── Small helpers ──────────────────────────────────────────────────────────────

function InkDivider({ color }) {
  return (
    <svg width="100%" height="18" viewBox="0 0 600 18" preserveAspectRatio="none" className="my-6 opacity-60">
      <path
        d="M0,9 C50,3 100,15 150,9 C200,3 250,15 300,9 C350,3 400,15 450,9 C500,3 550,15 600,9"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="300" cy="9" r="2.5" fill={color} />
    </svg>
  )
}

function Postmark({ city, color }) {
  const now = new Date()
  const dateStr = now.toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' })
  return (
    <div className="flex flex-col items-center select-none" style={{ opacity: 0.55 }}>
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="42" fill="none" stroke={color} strokeWidth="2.5" strokeDasharray="4 3"/>
        <circle cx="45" cy="45" r="33" fill="none" stroke={color} strokeWidth="1"/>
        {/* Horizontal bars */}
        <line x1="12" y1="38" x2="78" y2="38" stroke={color} strokeWidth="1.5"/>
        <line x1="12" y1="52" x2="78" y2="52" stroke={color} strokeWidth="1.5"/>
        <text x="45" y="47" textAnchor="middle" dominantBaseline="middle"
          style={{ fontFamily: '"IM Fell English SC", serif', fontSize: '10px', fill: color, letterSpacing: '1px' }}>
          {city.toUpperCase()}
        </text>
        <text x="45" y="71" textAnchor="middle"
          style={{ fontFamily: 'Georgia, serif', fontSize: '7px', fill: color }}>
          {dateStr}
        </text>
        <text x="45" y="23" textAnchor="middle"
          style={{ fontFamily: 'Georgia, serif', fontSize: '7px', fill: color }}>
          PORTUGAL
        </text>
      </svg>
    </div>
  )
}

function SectionTitle({ children, color }) {
  return (
    <h2 style={{
      fontFamily: '"IM Fell English SC", serif',
      color,
      fontSize: '1rem',
      letterSpacing: '0.18em',
      marginBottom: '1rem',
      opacity: 0.8,
    }}>
      {children}
    </h2>
  )
}

function FlowerOrnament({ color }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" style={{ opacity: 0.45 }}>
      {[0,60,120,180,240,300].map(a => (
        <ellipse key={a}
          cx={20 + 8 * Math.cos(a * Math.PI / 180)}
          cy={20 + 8 * Math.sin(a * Math.PI / 180)}
          rx="5" ry="3"
          transform={`rotate(${a}, ${20 + 8 * Math.cos(a * Math.PI / 180)}, ${20 + 8 * Math.sin(a * Math.PI / 180)})`}
          fill={color}
        />
      ))}
      <circle cx="20" cy="20" r="3" fill={color}/>
    </svg>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────

export default function Carnet({ region }) {
  const navigate = useNavigate()
  const { setZoom } = useTransition()

  function handleRetour() {
    navigate('/')
  }

  const bg = '#f5edd8'
  const ink = '#2e1a08'
  const { accent } = region

  return (
    <div
      style={{
        minHeight: '100vh',
        background: bg,
        backgroundImage: `
          repeating-linear-gradient(
            transparent, transparent 31px,
            rgba(180,150,100,0.18) 31px, rgba(180,150,100,0.18) 32px
          )
        `,
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        color: ink,
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Paper texture overlay */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
      }}/>

      {/* Left margin line */}
      <div style={{
        position: 'fixed', left: '72px', top: 0, bottom: 0, width: '1px',
        background: 'rgba(180,100,80,0.25)', zIndex: 0, pointerEvents: 'none',
      }}/>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '720px', margin: '0 auto', padding: '3rem 2rem 5rem 5rem' }}>

        {/* ── a) En-tête ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
          <button
            onClick={handleRetour}
            style={{
              fontFamily: '"IM Fell English SC", serif',
              fontSize: '0.85rem',
              color: accent,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.1em',
              opacity: 0.85,
              padding: 0,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.85}
          >
            ← voltar ao mapa
          </button>
          <Postmark city={region.subtitle} color={accent} />
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(4rem, 10vw, 7rem)',
            lineHeight: 0.9,
            color: ink,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            {region.nom}
          </h1>
        </div>

        <p style={{
          fontFamily: '"IM Fell English SC", serif',
          fontSize: '0.95rem',
          letterSpacing: '0.2em',
          color: accent,
          marginTop: '0.75rem',
          marginBottom: '0.5rem',
          opacity: 0.9,
        }}>
          {region.subtitle}
        </p>

        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: ink,
          opacity: 0.65,
          marginBottom: '0.5rem',
        }}>
          {region.tagline}
        </p>

        <InkDivider color={accent} />

        {/* ── b) História ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <SectionTitle color={accent}>História</SectionTitle>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.85, opacity: 0.88 }}>
            {region.historia}
          </p>
        </section>

        <InkDivider color={accent} />

        {/* ── c) À mesa ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <SectionTitle color={accent}>À mesa</SectionTitle>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {region.food.map((item) => (
              <li key={item.nom} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  color: accent, fontSize: '1.3rem', lineHeight: 1, marginTop: '0.1rem', flexShrink: 0, opacity: 0.7,
                }}>✦</span>
                <div>
                  <span style={{ fontStyle: 'italic', fontWeight: 600, fontSize: '1.1rem' }}>{item.nom}</span>
                  <span style={{ opacity: 0.7, fontSize: '1rem' }}> — {item.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <InkDivider color={accent} />

        {/* ── d) Para explorar ── */}
        <section style={{ marginBottom: '2.5rem' }}>
          <SectionTitle color={accent}>Para explorar</SectionTitle>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {region.explore.map((item) => (
              <li key={item.lieu} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{
                  color: accent, fontSize: '1.3rem', lineHeight: 1, marginTop: '0.1rem', flexShrink: 0, opacity: 0.7,
                }}>◈</span>
                <div>
                  <span style={{ fontStyle: 'italic', fontWeight: 600, fontSize: '1.1rem' }}>{item.lieu}</span>
                  <span style={{ opacity: 0.7, fontSize: '1rem' }}> — {item.note}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <InkDivider color={accent} />

        {/* ── e) Caderno do viajante ── */}
        <section style={{
          marginBottom: '2.5rem',
          background: `rgba(${hexToRgb(accent)}, 0.04)`,
          border: `1px solid rgba(${hexToRgb(accent)}, 0.18)`,
          borderRadius: '2px',
          padding: '1.5rem 1.75rem',
          position: 'relative',
        }}>
          <SectionTitle color={accent}>Caderno do viajante</SectionTitle>
          <p style={{
            fontFamily: '"Caveat", cursive',
            fontSize: '1.45rem',
            lineHeight: 1.7,
            color: ink,
            opacity: 0.82,
          }}>
            {region.carnet}
          </p>
          {/* Corner fold */}
          <div style={{
            position: 'absolute', bottom: 0, right: 0,
            width: 0, height: 0,
            borderStyle: 'solid',
            borderWidth: '0 0 24px 24px',
            borderColor: `transparent transparent rgba(${hexToRgb(accent)}, 0.2) transparent`,
          }}/>
        </section>

        {/* ── f) Pied de page ── */}
        <footer style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderTop: `1px solid rgba(${hexToRgb(accent)}, 0.25)`,
          paddingTop: '1.25rem',
          opacity: 0.55,
        }}>
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontSize: '0.9rem' }}>
            {region.pageRomaine}
          </span>
          <FlowerOrnament color={accent} />
          <span style={{ fontFamily: '"IM Fell English SC", serif', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            {region.nom}
          </span>
        </footer>

      </div>
    </div>
  )
}

// Convert hex color to "r,g,b" string for rgba()
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16)
  const g = parseInt(hex.slice(3,5), 16)
  const b = parseInt(hex.slice(5,7), 16)
  return `${r},${g},${b}`
}
