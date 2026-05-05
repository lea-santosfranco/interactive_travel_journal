import React, { Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { TransitionProvider } from './TransitionContext'
import MapPage from './pages/MapPage'
import CarnetPage from './pages/CarnetPage'

export default function App() {
  const location = useLocation()

  return (
    <TransitionProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MapPage />} />
          <Route path="/regiao/:id" element={<CarnetPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </TransitionProvider>
  )
}
