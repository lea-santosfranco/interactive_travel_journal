import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTransition } from '../TransitionContext'
import { REGIONS } from '../data'
import PortugalMap from '../components/PortugalMap'
import ZoomOverlay from '../components/ZoomOverlay'

function FlowerOrnament({ color = '#5a4a3a', scale = 1 }) {
  return (
    <svg width={40 * scale} height={40 * scale} viewBox="0 0 40 40" style={{ opacity: 0.45 }}>
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

function CompassRose() {
  return (
    <svg width="110" height="110" viewBox="-64 -64 128 128" style={{ opacity: 0.55, pointerEvents: 'none' }}>
      <circle r="50" fill="none" stroke="#2a1a0a" strokeWidth="0.8"/>
      <circle r="43" fill="none" stroke="#2a1a0a" strokeWidth="0.4"/>
      <line x1="0" y1="-50" x2="0" y2="-43" stroke="#2a1a0a" strokeWidth="1.2"/>
      <line x1="0" y1="50" x2="0" y2="43" stroke="#2a1a0a" strokeWidth="1.2"/>
      <line x1="50" y1="0" x2="43" y2="0" stroke="#2a1a0a" strokeWidth="1.2"/>
      <line x1="-50" y1="0" x2="-43" y2="0" stroke="#2a1a0a" strokeWidth="1.2"/>
      <polygon points="0,-42 5,-16 0,-8 -5,-16" fill="#2a1a0a"/>
      <polygon points="0,42 5,16 0,8 -5,16" fill="#2a1a0a" opacity="0.45"/>
      <polygon points="42,0 16,5 8,0 16,-5" fill="#2a1a0a" opacity="0.45"/>
      <polygon points="-42,0 -16,5 -8,0 -16,-5" fill="#2a1a0a" opacity="0.45"/>
      <polygon points="30,-30 13,-9 9,-13" fill="#2a1a0a" opacity="0.28"/>
      <polygon points="30,30 13,9 9,13" fill="#2a1a0a" opacity="0.28"/>
      <polygon points="-30,30 -13,9 -9,13" fill="#2a1a0a" opacity="0.28"/>
      <polygon points="-30,-30 -13,-9 -9,-13" fill="#2a1a0a" opacity="0.28"/>
      <circle r="8" fill="#e8dcc0" stroke="#2a1a0a" strokeWidth="1"/>
      <circle r="3.5" fill="#2a1a0a"/>
      <text x="0" y="-57" textAnchor="middle" fontSize="14" fontFamily="Georgia, serif" fill="#2a1a0a" fontStyle="italic">N</text>
    </svg>
  )
}

function CityList() {
  const navigate = useNavigate()
  const { setZoom } = useTransition()
  const cities = Object.values(REGIONS)

  function handleClick(e, region) {
    const rect = e.currentTarget.getBoundingClientRect()
    setZoom({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, color: region.accent })
    setTimeout(() => {
      navigate(`/regiao/${region.id}`)
      setTimeout(() => setZoom(null), 200)
    }, 650)
  }

  return (
    <div style={{ padding: '4rem 1.5rem 3rem', maxWidth: '480px', margin: '0 auto', width: '100%' }}>
      <h1 style={{
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontSize: '2.2rem',
        color: '#5a4a3a',
        opacity: 0.9,
        marginBottom: '0.25rem',
        lineHeight: 1.1,
      }}>
        Bienvenue au
      </h1>
      <h1 style={{
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontSize: '1.6rem',
        color: '#5a4a3a',
        opacity: 0.75,
        marginBottom: '2rem',
      }}>
        Portugal
      </h1>
      <div>
        {cities.map((region, i) => (
          <motion.button
            key={region.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            onClick={(e) => handleClick(e, region)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: 'none',
              border: 'none',
              borderBottom: '1px solid rgba(90,55,10,0.15)',
              padding: '0.9rem 0',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: region.accent, flexShrink: 0,
            }} />
            <div>
              <div style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic',
                fontSize: '1.3rem',
                color: '#2e1a08',
                lineHeight: 1.1,
              }}>
                {region.nom}
              </div>
              <div style={{
                fontFamily: '"IM Fell English SC", serif',
                fontSize: '0.65rem',
                color: region.accent,
                letterSpacing: '0.1em',
                opacity: 0.85,
                marginTop: '0.15rem',
              }}>
                {region.subtitle}
              </div>
            </div>
            <span style={{ marginLeft: 'auto', color: region.accent, opacity: 0.45, fontSize: '1.2rem' }}>›</span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default function MapPage() {
  const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < 640)

  React.useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < 640)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  return (
    <>
      <ZoomOverlay />
      <motion.div
        className={`w-screen relative ${isMobile ? 'min-h-screen overflow-y-auto' : 'h-screen overflow-hidden flex items-center justify-center'}`}
        style={{ background: '#d2bc96' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Variation organique du papier vieilli — grandes taches */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <filter id="paper-age">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.022" numOctaves="5" seed="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.55   0 0 0 0 0.38   0 0 0 0 0.15   0 0 0 0.45 0"/>
            <feComposite in2="SourceGraphic" operator="in"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-age)"/>
        </svg>

        {/* Grain fin du papier */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <filter id="paper-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" seed="8" stitchTiles="stitch"/>
            <feColorMatrix type="saturate" values="0"/>
            <feBlend in="SourceGraphic" mode="overlay" result="blend"/>
            <feComposite in="blend" in2="SourceGraphic" operator="in"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-grain)" opacity="0.12"/>
        </svg>

        {/* Vignette chaude sur les bords */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(90,55,10,0.28) 80%, rgba(60,35,5,0.45) 100%)'
        }}/>

        {isMobile ? (
          <CityList />
        ) : (
          <>
            {/* Rose des vents — coin haut droit */}
            <div className="absolute top-6 right-8 z-10">
              <CompassRose />
            </div>

            {/* Titre en haut à gauche */}
            <div className="absolute top-8 left-10 z-10">
              <h1 className="text-5xl md:text-6xl text-[#5a4a3a] opacity-90 tracking-tighter" style={{ fontFamily: 'serif' }}>
                Bienvenue au <br />
                <span className="italic text-4xl opacity-80">Portugal!</span>
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.75rem 0 0 0' }}>
                <FlowerOrnament color="#5a4a3a" scale={0.7} />
                <p style={{
                  fontFamily: '"IM Fell English SC", serif',
                  fontSize: '0.8rem',
                  letterSpacing: '0.12em',
                  color: '#5a4a3a',
                  opacity: 0.7,
                  margin: 0,
                }}>
                  Douze carnets, douze histoires
                </p>
                <FlowerOrnament color="#5a4a3a" scale={0.7} />
              </div>
              <div className="w-24 h-px bg-[#5a4a3a] mt-6 opacity-30" />
            </div>

            <PortugalMap
              style={{
                height: '85vh',
                width: 'auto',
                filter: 'drop-shadow(4px 8px 16px rgba(40,20,5,0.45))',
              }}
            />
          </>
        )}
      </motion.div>
    </>
  )
}
