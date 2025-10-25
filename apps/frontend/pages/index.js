import Head from 'next/head'
import Header from '../src/components/layout/header'
import Hero from '../src/components/sections/hero'

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
          {/* We'll add more sections next */}
        </main>
      </div>
    </>
  )
}