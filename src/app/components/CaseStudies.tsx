import React from 'react'
import { PageInfo } from '../types/page-info'
import ProjectsList from './ProjectsList'

type data = {
  data: PageInfo
}

function CaseStudies({ data }: data) {
  const projects = data.projects

  return (
    <div className="relative mx-auto flex h-screen max-w-full snap-center flex-col items-center justify-evenly text-left md:flex-row">
      <h1 className="z-4 absolute top-10 mr-[-20px] text-center text-xl uppercase tracking-[20px] text-gray-300 md:text-2xl">
        Case Studies
      </h1>
      <div className="absolute right-0 top-[30%] -z-10 h-[500px] w-screen skew-y-12 bg-red-50/10" />
      <ProjectsList
        projects={projects}
        technologies={[]}
        heroPicture={{
          url: '',
        }}
        abouttext={{
          text: '',
        }}
        aboutPicture={{
          url: '',
        }}
      />
    </div>
  )
}

export default CaseStudies
