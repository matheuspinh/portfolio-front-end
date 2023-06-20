'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AboutAvatar from '../assets/IMG_20230618_150643.jpg'
import Image from 'next/image'

function About() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center p-6 text-center md:flex-row md:text-left">
      <h1 className="absolute top-20 mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-gray-400">
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
        className="aspect-square h-60"
      >
        <Image src={AboutAvatar} alt="About Image" className="rounded-full" />
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
        <p className="text-justify">
          Sou Desenvolvedor full-stack e bacharel em engenharia civil.
        </p>
        <p className="text-justify">
          Atuei durante o período da graduação no setor de construção civil e de
          manutenção de hotelaria. Nesses setores pude desenvolver habilidades
          de comunicação, de gerenciamento de recursos, gestão de prazos e
          adaptabilidade, mas principalmente solução de problemas. Por isso
          considero essas habilidades como pontos fortes.
        </p>
        <p className="text-justify">
          Tive meu primeiro contato com programação em 2021, quando iniciei e
          concluí o curso CS50x, e em 2022 iniciei o curso de desenvolvimento de
          software na Cubos academy tendo concluído o curso em 2023.
        </p>
      </motion.div>
    </div>
  )
}

export default About
