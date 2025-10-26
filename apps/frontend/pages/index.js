import Head from 'next/head'
import Header from '../src/components/layout/header'
import Hero from '../src/components/sections/hero'
import HowItWorks from '../src/components/sections/how-it-works'
import Features from '../src/components/sections/features'
import Pricing from '../src/components/sections/pricing'

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
          <Pricing />
        </main>
      </div>
    </>
  )
}