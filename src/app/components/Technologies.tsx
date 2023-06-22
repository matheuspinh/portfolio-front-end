'use client'

import React from 'react'
import { motion } from 'framer-motion'
import TechPin from './TechPin'
import { PageInfo } from '../types/page-info'

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

type data = {
  data: PageInfo
}

function Technologies({ data }: data) {
  const techs = data.technologies

  return (
    <div className="xl: relative mt-2 flex min-h-screen flex-col items-center justify-center text-center md:flex-row md:text-left xl:px-10">
      <h1 className="absolute top-10 mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-gray-400">
        My Technologies
      </h1>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-4 gap-5"
      >
        {techs.map((tech, i) => (
          <motion.div variants={techItem} key={i}>
            <TechPin data={tech} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Technologies
