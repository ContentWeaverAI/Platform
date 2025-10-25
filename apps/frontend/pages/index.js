import Head from 'next/head';
import Header from '../src/components/layout/header';
import Hero from '../src/components/sections/hero';
import Services from '../src/components/sections/Services';
import Features from '../src/components/sections/Features';
import ChatWidget from '../src/components/chat/chatwirdget';

export default function Home({ services }) {
  return (
    <>
      <Head>
        <title>ContentWeaverAI - AI-Powered Content Management</title>
        <meta name="description" content="Transform your website content with AI. Update, optimize, and manage your site through natural conversation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <Services services={services} />
        </main>
        <ChatWidget />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  let services = null;

  try {
    // Your existing Strapi API calls
    // services = await getServices()
  } catch (error) {
    console.error('Error fetching services:', error);
  }

  return {
    props: {
      services
    }
  };
}