import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'I learned guitar from a senior during free periods!', name: 'Aisha, 2nd Year' },
  { quote: 'PeerMate helped me earn money teaching Python.', name: 'Rahul, 3rd Year' },
  { quote: 'The quiz keeps quality high. Loved the experience!', name: 'Meera, 1st Year' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-[#0B0B0D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Student Success Stories</h2>
          <p className="mt-3 text-white/70">Real outcomes from real students.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
              <blockquote className="text-white/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-white/60">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
