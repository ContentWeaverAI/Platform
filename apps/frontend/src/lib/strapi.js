import axios from 'axios';

// Use IPv4 address instead of localhost to avoid IPv6 issues
const STRAPI_URL = 'http://127.0.0.1:3001';

export const strapi = axios.create({
  baseURL: STRAPI_URL,
});

export async function getHeroContent() {
  try {
    console.log('API: Fetching hero content from:', `${STRAPI_URL}/api/hero-section?populate=*`);
    const response = await strapi.get('/api/hero-section?populate=*');
    console.log('API: Hero content fetched successfully');
    return response.data;
  } catch (error) {
    console.error('API: Error fetching hero content:', error.message);
    return null;
  }
}

export async function getServices() {
  try {
    console.log('API: Fetching services from:', `${STRAPI_URL}/api/services?populate=*`);
    const response = await strapi.get('/api/services?populate=*');
    console.log('API: Services fetched successfully, count:', response.data?.data?.length || 0);
    return response.data;
  } catch (error) {
    console.error('API: Error fetching services:', error.message);
    return null;
  }
}