'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '../types/page-info'

type data = {
  data: PageInfo
}

function About({ data }: data) {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center p-6 text-center md:flex-row md:text-left">
      <h1 className="absolute top-10 mr-[-20px] text-center text-xl uppercase tracking-[20px] text-gray-300 md:text-2xl">
        About
      </h1>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="aspect-square h-32 md:h-72"
      >
        <Image
          src={`${data.aboutPicture.url}`}
          alt="About Image"
          width={520}
          height={520}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-gray-100 md:mx-5 md:max-w-md"
      >
        <h1 className="mb-3 text-lg text-red-50">Um pouco sobre mim</h1>
        <p className="text-justify">{data.abouttext.text}</p>
      </motion.div>
    </div>
  )
}

export default About
