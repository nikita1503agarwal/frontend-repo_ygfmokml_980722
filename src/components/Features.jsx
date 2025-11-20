import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, BrainCircuit, Wallet, Crown, CheckCircle2 } from 'lucide-react'

const features = [
  { icon: Star, title: 'Peer-reviewed tutors', desc: 'Quality you can trust, with ratings from real students.' },
  { icon: ShieldCheck, title: 'College-verified profiles', desc: 'Only verified students in your campus community.' },
  { icon: BrainCircuit, title: 'Learn any skill', desc: 'Coding, music, arts, DSA, competitive programming, and more.' },
  { icon: Wallet, title: 'Secure in-app payments', desc: 'Funds are held in escrow until completion is verified.' },
  { icon: CheckCircle2, title: 'In-app quizzes', desc: 'Short eligibility quizzes keep quality high.' },
  { icon: Crown, title: 'Cross-college premium', desc: 'Unlock mentoring beyond your campus with premium.' },
]

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#0B0B0D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Powerful Features</h2>
          <p className="mt-3 text-white/70">Built for smooth, safe, and effective peer learning.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#7C3AED]/20 text-[#7C3AED] shadow-[0_0_24px_rgba(124,58,237,0.35)]">
                  <f.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
