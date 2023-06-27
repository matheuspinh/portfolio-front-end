'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '../types/page-info'

function ProjectsList({ projects }: PageInfo) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      className="relative z-10 flex h-screen w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-50/70"
    >
      {projects.map((project, i) => (
        <div key={i} id={`${project.name}`} className="z-1" draggable="false">
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
                className="rounded-lg opacity-100"
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
              className="max-h-60 w-screen overflow-y-scroll p-4 scrollbar-none md:max-h-full md:max-w-[1000px]"
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
  )
}

export default ProjectsList
