import React from 'react'
import Image from 'next/image'
import { Tech } from '../types/page-info'

type techData = {
  data: Tech
}

function TechPin({ data }: techData) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg text-red-50 hover:scale-110 hover:bg-gray-500 hover:text-white">
      <div className="relative flex h-16 w-16 items-center justify-center rounded-md p-2">
        <Image
          width={100}
          height={100}
          src={`${data.techIcon.url}`}
          alt="ts"
          className="h-10 w-10 rounded-lg bg-transparent object-contain filter transition duration-300 ease-in-out group-hover:grayscale md:h-16 md:w-16"
        />
      </div>
      <div className="w-full border-t border-t-gray-500 p-1">
        <div className="flex h-full items-center justify-center ">
          <p className="text-sm font-bold opacity-100">{data.name}</p>
        </div>
      </div>
    </div>
  )
}

export default TechPin
