import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTransition } from '../TransitionContext'

const EASING = [0.65, 0, 0.35, 1]

// Compass SVG — rotates during transition
function Compass() {
  return (
    <motion.svg
      width="64" height="64" viewBox="0 0 64 64"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.4, ease: 'linear', repeat: Infinity }}
      style={{ position: 'absolute', top: '50%', left: '50%', x: '-50%', y: '-50%' }}
    >
      <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      {/* North needle */}
      <polygon points="32,8 35,32 32,36 29,32" fill="white" opacity="0.9"/>
      {/* South needle */}
      <polygon points="32,56 35,32 32,28 29,32" fill="rgba(255,255,255,0.4)"/>
      <circle cx="32" cy="32" r="3" fill="white"/>
      <text x="32" y="5" textAnchor="middle" fill="white" fontSize="7" fontFamily="Georgia, serif" opacity="0.8">N</text>
    </motion.svg>
  )
}

export default function ZoomOverlay() {
  const { zoom } = useTransition()

  // Diagonal of viewport — enough to cover everything
  const diagonal = Math.hypot(window.innerWidth, window.innerHeight) * 2

  return (
    <AnimatePresence>
      {zoom && (
        <motion.div
          key="zoom-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Expanding circle */}
          <motion.div
            style={{
              position: 'absolute',
              borderRadius: '50%',
              background: zoom.color,
              width: 18,
              height: 18,
              left: zoom.x - 9,
              top: zoom.y - 9,
            }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: diagonal / 18, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: EASING }}
          />
          {/* Compass centred on screen */}
          <Compass />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
