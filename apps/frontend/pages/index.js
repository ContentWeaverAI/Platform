import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>ContentWeaverAI</title>
      </Head>
      
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>ContentWeaverAI</h1>
        <p>Update your website through AI conversation</p>
        <button style={{ background: 'blue', color: 'white', padding: '10px' }}>
          Start Chatting
        </button>
      </div>
    </>
  )
}