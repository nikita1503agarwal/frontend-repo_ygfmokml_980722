import React from 'react'
import { motion } from 'framer-motion'

const Download = () => {
  return (
    <section id="download" className="relative w-full bg-[#0B0B0D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get PeerMate</h2>
            <p className="mt-3 text-white/70">Available on iOS and Android soon.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#" className="group inline-flex items-center gap-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-white backdrop-blur-xl transition duration-300">
                <div className="grid place-items-center rounded-xl bg-black/40 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M16.365 1.43c0 1.14-.447 2.207-1.176 3.013-.763.844-2.01 1.496-3.105 1.41-.144-1.087.434-2.238 1.171-3.03.804-.856 2.204-1.49 3.11-1.393zM20.66 17.13c-.592 1.357-.873 1.96-1.632 3.16-1.06 1.67-2.554 3.77-4.403 3.79-1.645.016-2.07-1.097-4.305-1.087-2.237.01-2.705 1.104-4.351 1.088-1.848-.018-3.27-1.899-4.33-3.566-2.964-4.707-3.275-10.23-1.45-13.146 1.3-2.11 3.356-3.352 5.29-3.352 1.973 0 3.211 1.13 4.843 1.13 1.592 0 2.562-1.132 4.846-1.132 1.73 0 3.56.94 4.86 2.56-4.27 2.34-3.577 8.45.63 10.617-.184.49-.39.96-.7 1.84z"/></svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] text-white/70">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>

              <a href="#" className="group inline-flex items-center gap-4 rounded-2xl bg-[#7C3AED] hover:brightness-110 px-5 py-3 text-white shadow-[0_0_30px_rgba(124,58,237,0.6)] transition duration-300">
                <div className="grid place-items-center rounded-xl bg-white/10 p-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M3 22V2l15 10L3 22z" opacity=".7"/><path d="M20.5 18.5l-2.5-1.7V7.2l2.5-1.7c1-.7 2.5 0 2.5 1.2v10.6c0 1.2-1.5 1.9-2.5 1.2z"/></svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[10px] text-white/80">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#2D1B69]/40 to-[#7C3AED]/40 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-2xl">
              <div className="aspect-[9/19] w-full max-w-xs rounded-2xl bg-gradient-to-br from-[#0f0f14] to-[#12121a] mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download
