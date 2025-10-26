import Head from 'next/head'
import Header from '../src/components/layout/header'
import Hero from '../src/components/sections/hero'
import HowItWorks from '../src/components/sections/how-it-works'
import Features from '../src/components/sections/features'
import Demo from '../src/components/sections/demo'
import Pricing from '../src/components/sections/pricing'
import Footer from '../src/components/layout/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>ContentWeaver - AI-Powered Content Management</title>
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <Demo />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  )
}