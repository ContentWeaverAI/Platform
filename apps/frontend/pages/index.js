import Head from 'next/head'
import { useState } from 'react'

export default function Home({ services }) {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <Head>
        <title>ContentWeaverAI - AI-Powered Content Management</title>
        <meta name="description" content="Transform your website content with AI. Update, optimize, and manage your site through natural conversation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Floating Chat Button */}
      <button 
        className="floating-chat-btn"
        onClick={() => setIsChatOpen(true)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="currentColor"/>
        </svg>
      </button>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="chat-modal">
          <div className="chat-header">
            <h3>ContentWeaver AI Assistant</h3>
            <button onClick={() => setIsChatOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            <div className="message ai-message">
              <div className="message-avatar">AI</div>
              <div className="message-content">
                <p>Hello! I'm your ContentWeaver AI assistant. I can help you update your website content, modify services, or optimize your pages. What would you like to change today?</p>
              </div>
            </div>
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Ask me to update your website content..." />
            <button>Send</button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">ContentWeaverAI</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
          </div>
          <button className="nav-cta">Get Started</button>
        </div>
      </nav>

      {/* Hero Section - OpenAI Style */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            Transform Your Website Content
            <span className="gradient-text"> with AI Conversation</span>
          </h1>
          <p className="hero-subtitle">
            Update your website, modify services, and optimize content through natural conversation. 
            No technical skills required. Just talk to your AI content assistant.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Start Chatting Now</button>
            <button className="btn btn-secondary">View Demo</button>
          </div>
          <div className="hero-demo">
            <div className="demo-card">
              <div className="demo-message user-message">
                "Update our pricing page to show monthly subscriptions starting at €49"
              </div>
              <div className="demo-message ai-message">
                "✓ Updated pricing page with monthly subscription options. Added clear CTAs and comparison table."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>How ContentWeaverAI Works</h2>
            <p>Simple, powerful content management through AI conversation</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Chat-Based Updates</h3>
              <p>Simply tell our AI what changes you want. No forms, no complex interfaces.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Instant Deployment</h3>
              <p>Changes go live immediately. Preview before publishing with one click.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Safe & Controlled</h3>
              <p>AI suggests changes, you approve them. Full control over your content.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Managed Services</h2>
            <p>Professional website management with AI assistance</p>
          </div>
          <div className="services-grid">
            {services?.data?.map((service, index) => (
              <div key={service.id} className="service-card">
                <h3 className="service-title">{service.attributes?.title || 'AI Content Management'}</h3>
                <p className="service-description">
                  {service.attributes?.description || 'Professional content management with AI assistance'}
                </p>
                <div className="service-price">
                  {service.attributes?.price ? `€${service.attributes.price}/month` : 'Custom Pricing'}
                </div>
                <ul className="service-features">
                  <li>✓ Unlimited content updates</li>
                  <li>✓ AI writing assistance</li>
                  <li>✓ 24/7 support</li>
                  <li>✓ SEO optimization</li>
                </ul>
                <button className="service-cta">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Content Management?</h2>
          <p>Join businesses already using AI to manage their websites effortlessly.</p>
          <div className="cta-actions">
            <button className="btn btn-large btn-primary">Start Free Trial</button>
            <button className="btn btn-large btn-secondary">Schedule Demo</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* OpenAI-inspired Design System */
        :root {
          --primary-bg: #ffffff;
          --secondary-bg: #f7f7f8;
          --border-color: #e5e5e5;
          --text-primary: #374151;
          --text-secondary: #6b7280;
          --accent-color: #10a37f;
          --accent-hover: #0d8c6c;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: var(--text-primary);
          background: var(--primary-bg);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Floating Chat Button */
        .floating-chat-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(16, 163, 127, 0.3);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .floating-chat-btn:hover {
          background: var(--accent-hover);
          transform: scale(1.05);
        }

        /* Chat Modal */
        .chat-modal {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 400px;
          height: 600px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
        }

        .chat-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--secondary-bg);
        }

        .chat-header h3 {
          font-size: 1rem;
          font-weight: 600;
        }

        .chat-header button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-secondary);
        }

        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
        }

        .message {
          display: flex;
          margin-bottom: 1rem;
          gap: 0.75rem;
        }

        .ai-message {
          flex-direction: row;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background: var(--accent-color);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .message-content {
          flex: 1;
          background: var(--secondary-bg);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
        }

        .chat-input {
          padding: 1rem;
          border-top: 1px solid var(--border-color);
          display: flex;
          gap: 0.5rem;
        }

        .chat-input input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.875rem;
        }

        .chat-input button {
          padding: 0.75rem 1.5rem;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.875rem;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          z-index: 100;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--text-secondary);
          font-size: 0.875rem;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--text-primary);
        }

        .nav-cta {
          padding: 0.5rem 1.5rem;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          cursor: pointer;
        }

        /* Hero Section */
        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .hero-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 0 20px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--accent-color) 0%, #1e40af 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .btn {
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
          font-size: 0.875rem;
        }

        .btn-primary {
          background: var(--accent-color);
          color: white;
        }

        .btn-primary:hover {
          background: var(--accent-hover);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
          background: var(--secondary-bg);
        }

        .btn-large {
          padding: 1rem 2.5rem;
          font-size: 1rem;
        }

        .hero-demo {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          border: 1px solid var(--border-color);
          text-align: left;
        }

        .demo-card {
          max-width: 500px;
          margin: 0 auto;
        }

        .demo-message {
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }

        .user-message {
          background: var(--secondary-bg);
          border: 1px solid var(--border-color);
        }

        .ai-message {
          background: #f0f9ff;
          border: 1px solid #bfdbfe;
          color: #1e40af;
        }

        /* Features Section */
        .features {
          padding: 80px 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .feature-card h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .feature-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Services Section */
        .services {
          padding: 80px 0;
          background: var(--secondary-bg);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .service-card {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          text-align: center;
        }

        .service-title {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .service-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-color);
          margin-bottom: 2rem;
        }

        .service-features {
          list-style: none;
          margin-bottom: 2rem;
          text-align: left;
        }

        .service-features li {
          padding: 0.5rem 0;
          color: var(--text-secondary);
        }

        .service-cta {
          width: 100%;
          padding: 1rem;
          background: var(--accent-color);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #1e40af 0%, var(--accent-color) 100%);
          color: white;
          text-align: center;
        }

        .cta-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.125rem;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-actions,
          .cta-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .chat-modal {
            width: 100vw;
            height: 100vh;
            bottom: 0;
            right: 0;
            border-radius: 0;
          }
          
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export async function getServerSideProps() {
  let services = null

  try {
    // Your existing Strapi API calls
    // services = await getServices()
  } catch (error) {
    console.error('Error fetching services:', error)
  }

  return {
    props: {
      services
    }
  }
}