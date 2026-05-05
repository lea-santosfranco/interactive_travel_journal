import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { REGIONS } from '../data'
import Carnet from '../components/Carnet'

export default function CarnetPage() {
  const { id } = useParams()
  const region = REGIONS[id]

  if (!region) return <Navigate to="/" replace />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <Carnet region={region} />
    </motion.div>
  )
}
