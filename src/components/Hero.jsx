import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0B0D]">
      {/* Gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(124,58,237,0.35),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_10%_90%,rgba(56,189,248,0.18),transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.15]" style={{backgroundImage:'radial-gradient(circle at 1px 1px,#fff 1px,transparent 1px)', backgroundSize:'20px 20px'}} />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_18px_6px_rgba(124,58,237,0.6)]" />
              <span className="text-xs">Peer-to-peer learning for students</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white">
              Learn. Teach. Earn. <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2D1B69] to-[#7C3AED]">All Within Your College Community.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl">
              Peer-to-peer skill sharing for students — from coding to guitar, from design to public speaking.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#download" className="group inline-flex items-center gap-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-white backdrop-blur-xl transition duration-300">
                <div className="grid place-items-center rounded-xl bg-black/40 p-2">
                  {/* Apple logo */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M16.365 1.43c0 1.14-.447 2.207-1.176 3.013-.763.844-2.01 1.496-3.105 1.41-.144-1.087.434-2.238 1.171-3.03.804-.856 2.204-1.49 3.11-1.393zM20.66 17.13c-.592 1.357-.873 1.96-1.632 3.16-1.06 1.67-2.554 3.77-4.403 3.79-1.645.016-2.07-1.097-4.305-1.087-2.237.01-2.705 1.104-4.351 1.088-1.848-.018-3.27-1.899-4.33-3.566-2.964-4.707-3.275-10.23-1.45-13.146 1.3-2.11 3.356-3.352 5.29-3.352 1.973 0 3.211 1.13 4.843 1.13 1.592 0 2.562-1.132 4.846-1.132 1.73 0 3.56.94 4.86 2.56-4.27 2.34-3.577 8.45.63 10.617-.184.49-.39.96-.7 1.84z"/></svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] text-white/70">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a href="#download" className="group inline-flex items-center gap-4 rounded-2xl bg-[#7C3AED] hover:brightness-110 px-5 py-3 text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] transition duration-300">
                <div className="grid place-items-center rounded-xl bg-white/10 p-2">
                  {/* Play logo */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M3 22V2l15 10L3 22z" opacity=".7"/><path d="M20.5 18.5l-2.5-1.7V7.2l2.5-1.7c1-.7 2.5 0 2.5 1.2v10.6c0 1.2-1.5 1.9-2.5 1.2z"/></svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] text-white/80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glass morph panels floating */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="pointer-events-none absolute right-8 top-28 hidden lg:block">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl">
          <div className="h-40 w-64 rounded-2xl bg-gradient-to-br from-[#2D1B69]/60 to-[#7C3AED]/60" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
