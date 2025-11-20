import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'Python','JavaScript','Java','C++','SQL','Web Dev','Data Science','Machine Learning','AI','Blockchain','DSA','Competitive Programming','Guitar','Piano','Singing','Drawing','Photography','Graphic Design','Video Editing','Public Speaking','and more'
]

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#0B0B0D] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Categories</h2>
          <p className="mt-3 text-white/70">Endless possibilities to learn and teach.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <motion.div key={s} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-white/90 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(124,58,237,0.45)] hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/10 transition">
              <span className="inline-block text-sm">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
