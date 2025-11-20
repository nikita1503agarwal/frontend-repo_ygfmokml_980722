import React from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0D] text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#7C3AED] shadow-[0_0_24px_rgba(124,58,237,0.6)]" />
            <span className="font-semibold">PeerMate</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#testimonials" className="hover:text-white transition">Stories</a>
            <a href="#download" className="rounded-xl bg-[#7C3AED] px-4 py-2 text-white shadow-[0_0_24px_rgba(124,58,237,0.6)] hover:brightness-110 transition">Download</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Features />
        <Skills />
        <Testimonials />
        <Download />
      </main>

      <Footer />
    </div>
  )
}

export default App
