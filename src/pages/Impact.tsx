
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialImpact from '@/components/SocialImpact';
import CTA from '@/components/CTA';

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Social <span className="gradient-text">Impact</span>
              </h1>
              <p className="text-xl text-gray-600">
                Discover how Credit Advisor is making a positive difference by promoting
                financial inclusion and helping vulnerable populations access the credit they deserve.
              </p>
            </div>
          </div>
        </section>
        
        <SocialImpact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
