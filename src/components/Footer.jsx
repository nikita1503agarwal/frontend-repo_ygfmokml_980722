import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0B0B0D] pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white/80">
          <div>
            <h3 className="text-white font-semibold text-lg">PeerMate</h3>
            <p className="mt-2 text-sm text-white/60">Peer-to-peer learning within your college community.</p>
          </div>
          <div>
            <p className="text-sm">About</p>
            <p className="mt-2 text-sm">Contact</p>
          </div>
          <div>
            <p className="text-sm">Terms</p>
            <p className="mt-2 text-sm">Privacy</p>
          </div>
          <div className="flex items-center gap-4">
            <a aria-label="Twitter" href="#" className="text-white/60 hover:text-white transition"><Twitter size={18} /></a>
            <a aria-label="Instagram" href="#" className="text-white/60 hover:text-white transition"><Instagram size={18} /></a>
            <a aria-label="LinkedIn" href="#" className="text-white/60 hover:text-white transition"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} PeerMate. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
