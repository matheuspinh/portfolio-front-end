import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import { PageData } from './types/page-info'
import { fetchHygraphQuery } from './utils/fetch-hygraph-query'

const getPageData = async (): Promise<PageData> => {
  const query = `query Pageinfos {
    pageinfo(where: {slug: "home"}) {
      technologies(first:20) {
        name
        techIcon{url}
      }
      heroPicture {url}
      abouttext {text}
      projects {
        name
        summary
        url
        projectPic {url}
      }
      aboutPicture {url}
    }
  }`

  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { pageinfo: data } = await getPageData()

  return (
    <main className="h-screen snap-y snap-mandatory overflow-x-hidden font-sans scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-50/70">
      {/* Hero */}
      <section id="Hero" className="snap-start">
        <Hero data={data} />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About data={data} />
      </section>
      {/* Case Studies */}
      <section id="case-studies" className="snap-center">
        <CaseStudies data={data} />
      </section>
      {/* My Technologies */}
      <section id="technologies" className="snap-center">
        <Technologies data={data} />
      </section>
    </main>
  )
}
