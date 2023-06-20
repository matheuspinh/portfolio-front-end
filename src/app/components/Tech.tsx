import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Tech({ }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <img
        width={100}
        height={100}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
        alt="ts"
        className="aspect-square h-20 w-20 rounded-full border border-gray-300 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-24 md:w-24"
      />
      <div className="absolute z-0 h-20 w-20 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-red-50 group-hover:opacity-90 md:h-24 md:w-24">
        <div className="flex h-full items-center justify-center">
          <p className="text-xl font-bold text-black opacity-100">TypeScript</p>
        </div>
      </div>
    </div>
  )
}

export default Tech
