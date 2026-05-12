import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import IntegrationsTicker from '@/components/sections/IntegrationsTicker'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import UseCases from '@/components/sections/UseCases'
import Features from '@/components/sections/Features'
import Demo from '@/components/sections/Demo'
import Team from '@/components/sections/Team'
import CTA from '@/components/sections/CTA'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <IntegrationsTicker />
        <Problem />
        <HowItWorks />
        <UseCases />
        <Features />
        <Demo />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
