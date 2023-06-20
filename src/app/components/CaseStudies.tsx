'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import DinDinImage from '../assets/Screenshot from 2023-06-20 09-46-42.png'

function CaseStudies() {
  const projects = [1, 2, 3, 4, 5]

  return (
    <div className="relative mx-auto flex h-screen max-w-full snap-center flex-col items-center justify-evenly text-left md:flex-row">
      <h1 className="z-4 absolute top-20 mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-gray-400">
        Case Studies
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        whileInView={{ opacity: 1 }}
        className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-red-50/70"
      >
        {projects.map((project) => (
          <div
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20 md:p-44"
            key={project}
          >
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
            >
              <Image
                className="rounded-lg"
                width={390}
                src={DinDinImage}
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
                Estudo de caso {project} de {projects.length}: DinDin
              </h4>
              <p className="text-gray-100 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Expedita quibusdam magnam natus, eveniet quia quas reiciendis
                enim sint hic libero, eius alias optio dolorem consequuntur quam
                nam! Vitae incidunt commodi ut quibusdam ad iure reiciendis vero
                quidem aspernatur sint officiis eligendi recusandae repellat
                soluta possimus, quae suscipit. Harum vero voluptate magni iure
                sapiente voluptatibus vitae sit animi! Nihil dicta eligendi rem
                hic repudiandae impedit nobis, saepe quos dignissimos,
                consectetur sit quibusdam voluptates facere repellat quo ipsa
                voluptatum totam aperiam, cumque obcaecati eum cum inventore.
                Fugit cumque molestiae, animi dolorem laboriosam exercitationem
                laborum modi. Sed iusto, quis repellat reiciendis cum ea.
              </p>
            </motion.div>
          </div>
        ))}
      </motion.div>

      <div className="absolute right-0 top-[30%] h-[500px] w-screen skew-y-12 bg-red-50/10" />
    </div>
  )
}

export default CaseStudies
