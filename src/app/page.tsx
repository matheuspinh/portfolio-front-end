import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Hero from './components/Hero'
import Technologies from './components/Technologies'

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-x-hidden font-sans scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-50/70">
      {/* Hero */}
      <section id="Hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Case Studies */}
      <section id="case-studies" className="snap-center">
        <CaseStudies />
      </section>
      {/* My Technologies */}
      <section id="technologies" className="snap-center">
        <Technologies />
      </section>
    </main>
  )
}
