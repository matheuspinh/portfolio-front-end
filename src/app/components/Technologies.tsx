'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Tech from './Tech'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 0.8,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const techItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 0.8,
  },
}

const skillz = [
  'Javascript',
  'HTML',
  'CSS',
  'Python',
  'Sass',
  'ReactJS',
  'Django',
  'NodeJS',
  'Javascript1',
  'HTML2',
  'CSS3',
  'Python4',
  'Sass5',
  'ReactJS6',
  'Django7',
]

function Technologies() {
  return (
    <div className="xl: relative mt-1 flex min-h-screen flex-col items-center justify-center text-center md:flex-row md:text-left xl:px-10">
      <h1 className="absolute top-20 mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-gray-400">
        My Technologies
      </h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-4 gap-5"
      >
        {skillz.map((skill, i) => (
          <motion.div variants={techItem} key={i}>
            <Tech />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies
