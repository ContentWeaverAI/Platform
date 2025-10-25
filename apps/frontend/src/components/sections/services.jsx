import React from 'react';
import { Card, CardContent } from '../ui/card';
import Button from '../ui/button';

const Services = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.data?.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.attributes?.title || 'AI Content Management'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.attributes?.description || 'Professional content management with AI assistance'}
                </p>
                <div className="text-2xl font-bold text-blue-600 mb-4">
                  {service.attributes?.price ? `€${service.attributes.price}/month` : 'Custom Pricing'}
                </div>
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;