import React from 'react'
import TypeScriptLogo from '../assets/Typescript_logo_2020.svg.png'
import Image from 'next/image'

function Tech() {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        width={100}
        height={100}
        src={TypeScriptLogo}
        alt="ts"
        className="aspect-square h-16 w-16 rounded-full border border-gray-300 object-cover filter transition duration-300 ease-in-out group-hover:grayscale md:h-24 md:w-24"
      />
      <div className="absolute z-0 h-16 w-16 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-red-50 group-hover:opacity-90 md:h-24 md:w-24">
        <div className="flex h-full items-center justify-center">
          <p className="text-sm font-bold text-black opacity-100 md:text-lg">
            TypeScript
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tech
