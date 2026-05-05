import React from 'react';

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden flex items-center justify-center relative" style={{ background: '#d2bc96' }}>

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

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl text-[#5a4a3a] opacity-90 tracking-tighter" style={{ fontFamily: 'serif' }}>
          Bienvenue au <br />
          <span className='italic text-4xl opacity-80'>Portugal!</span>
        </h1>
        <div className='w-24 h-px bg-[#5a4a3a] mx-auto mt-6 opacity-30'></div>
      </div>

    </div>
  )
}

export default App
