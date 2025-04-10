
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturesComponent from '@/components/Features';
import CTA from '@/components/CTA';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Credit Advisor <span className="gradient-text">Features</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover how our AI-powered platform can transform your lending process
                with smarter credit risk assessment and financial inclusion.
              </p>
            </div>
          </div>
        </section>
        
        <FeaturesComponent />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
