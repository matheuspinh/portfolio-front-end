'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PageInfo } from '../types/page-info'

type data = {
  data: PageInfo
}

function CaseStudies({ data }: data) {
  const projects = data.projects

  return (
    <div className="relative mx-auto flex h-screen max-w-full snap-center flex-col items-center justify-evenly text-left md:flex-row">
      <h1 className="z-4 absolute top-10 mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-gray-400">
        Case Studies
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        className="relative z-20 flex h-screen w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-50/70"
      >
        {projects.map((project, i) => (
          <div key={i} id={`${project.name}`}>
            <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 md:p-44">
              <motion.div
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="w-72 rounded-lg object-cover p-4 md:w-[540px]"
              >
                <Image
                  className=""
                  height={280}
                  width={540}
                  src={`${project.projectPic.url}`}
                  alt="image"
                />
              </motion.div>

              <motion.div
                initial={{
                  y: 300,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="w-screen p-4 md:max-w-[1000px]"
              >
                <h4 className="text-lg text-red-50">
                  Estudo de caso {i + 1} de {projects.length}: {project.name}
                </h4>
                <p className="overflow-y-auto text-justify text-gray-100">
                  {project.summary}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>

      <div className="absolute right-0 top-[30%] h-[500px] w-screen skew-y-12 bg-red-50/10" />
    </div>
  )
}

export default CaseStudies
