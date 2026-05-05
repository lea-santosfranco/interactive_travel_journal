import { createContext, useContext, useState } from 'react'

const TransitionContext = createContext(null)

export function TransitionProvider({ children }) {
  const [zoom, setZoom] = useState(null)
  // zoom: { x, y, color } in viewport px — origin of the clicked marker

  return (
    <TransitionContext.Provider value={{ zoom, setZoom }}>
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)
