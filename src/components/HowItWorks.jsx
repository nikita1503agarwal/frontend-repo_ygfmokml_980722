import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Shield, GraduationCap, Zap } from 'lucide-react'

const steps = [
  {
    title: 'Post your learning goal',
    desc: 'Set the skill you want to learn and the amount you will pay.',
    num: 1,
  },
  {
    title: 'Applicants take a short quiz',
    desc: 'Interested students apply and pass an eligibility quiz to qualify.',
    num: 2,
  },
  {
    title: 'Matched and collaborate',
    desc: 'Work together in-app with tasks, chat, and resources.',
    num: 3,
  },
  {
    title: 'Pay when verified',
    desc: 'Once completion is verified, payment is released securely.',
    num: 4,
  },
]

const HowItWorks = () => {
  return (
    <section id="how" className="relative w-full bg-[#0B0B0D] py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D1B69]/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-3 text-white/70">Simple, fair, and designed for students.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Step {s.num}</span>
                <span className="h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_18px_6px_rgba(124,58,237,0.6)]" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 flex items-center gap-3 text-white/80">
                <Shield size={18} className="text-[#7C3AED]" />
                <span className="text-sm">Secure and fair</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
