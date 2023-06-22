'use client'

import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'
import BackgroundCirclesAnimation from './BackgroundCirclesAnimation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageInfo } from '../types/page-info'

type data = {
  data: PageInfo
}

function Hero({ data }: data) {
  const [mainText] = useTypewriter({
    words: [
      "I'm Matheus Pinheiro",
      'Back-End',
      'Front-End',
      'Full-Stack Developer',
    ],
    loop: true,
    delaySpeed: 1000,
  })

  const [upperText] = useTypewriter({
    words: ['//Software Developer'],
    delaySpeed: 1000,
  })

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex h-screen w-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center"
    >
      <BackgroundCirclesAnimation />
      <Image
        width={160}
        height={160}
        src={`${data.heroPicture.url}`}
        alt="avatar"
        className="relative mx-auto aspect-square h-32 w-32 rounded-full object-cover"
      />
      <div>
        <h2 className="pb-2 text-lg uppercase text-gray-400">
          <span>{upperText}</span>
          <Cursor cursorStyle={'▋'} />
        </h2>
        <h1 className="text-4xl text-red-50 lg:text-6xl">
          <span>{mainText}</span>
          <Cursor cursorStyle={'▋'} />
        </h1>
        <div className="flex items-center justify-center text-sm text-gray-400">
          <Link href="#about">
            <button className="mx-2 hover:text-red-50">About</button>
          </Link>
          <Link href="#case-studies">
            <button className="mx-2 hover:text-red-50">Case Studies</button>
          </Link>
          <Link href="#technologies">
            <button className="mx-2 hover:text-red-50">My Technologies</button>
          </Link>
          {/* <Link href="#contact">
            <button className="mx-2 hover:text-red-50">Contact Me</button>
          </Link> */}
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
