import Head from 'next/head'
import Header from '../src/components/layout/header'

export default function Home() {
  return (
    <>
      <Head>
        <title>ContentWeaver - AI-Powered Content Management</title>
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          {/* We'll add Hero component next */}
          <div className="h-screen flex items-center justify-center">
            <p className="text-gray-500">Hero section coming next...</p>
          </div>
        </main>
      </div>
    </>
  )
}