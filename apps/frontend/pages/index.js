import { getHeroContent, getServices } from '../lib/strapi';

export default function Home({ hero, services }) {
  console.log('CLIENT - Hero data:', hero);
  console.log('CLIENT - Services data:', services);
  console.log('CLIENT - Services array:', services?.data);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '6rem 2rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        borderRadius: '0 0 20px 20px'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          {hero?.data?.headline || 'Swabian Consulting UG'}
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
          {hero?.data?.subheadline || 'Your trusted business partners in Biberach'}
        </p>
        <button style={{ 
          padding: '15px 30px', 
          background: 'white', 
          color: '#667eea', 
          border: 'none', 
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}>
          {hero?.data?.ctaButton || 'Get Free Consultation'}
        </button>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}>
          Our Services
        </h2>
        
        {/* Debug info */}
        <div style={{ background: '#f5f5f5', padding: '1rem', marginBottom: '2rem', borderRadius: '5px' }}>
          <p><strong>Debug Info:</strong></p>
          <p>Services data exists: {services ? 'YES' : 'NO'}</p>
          <p>Services array length: {services?.data?.length || 0}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services?.data?.map(service => (
            <div key={service.id} style={{ 
              padding: '2rem', 
              border: '1px solid #e0e0e0',
              borderRadius: '10px',
              background: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>{service.attributes.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                {service.attributes.description}
              </p>
              <div style={{ color: '#333', fontWeight: 'bold' }}>
                {service.attributes.price}
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no services */}
        {(!services?.data || services.data.length === 0) && (
          <div style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
            <p>No services found. Check if:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>• Services exist in Strapi</li>
              <li>• Services are published</li>
              <li>• API connection is working</li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  console.log('SERVER: getServerSideProps started');
  
  try {
    console.log('SERVER: Making API calls...');
    const [hero, services] = await Promise.all([
      getHeroContent(),
      getServices()
    ]);

    console.log('SERVER: Hero response:', hero ? 'SUCCESS' : 'FAILED');
    console.log('SERVER: Services response:', services ? 'SUCCESS' : 'FAILED');
    console.log('SERVER: Services data:', services?.data);

    return {
      props: {
        hero: hero || null,
        services: services || null
      }
    };
  } catch (error) {
    console.error('SERVER: Error fetching content:', error);
    return {
      props: {
        hero: null,
        services: null
      }
    };
  }
}