
import React from 'react';
import { 
  Heart, 
  GraduationCap, 
  Home, 
  Globe, 
  TrendingUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SocialImpact = () => {
  return (
    <section className="section bg-brand-purple/5">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-purple/20 p-2 rounded-lg">
                        <Heart className="h-6 w-6 text-brand-purple" />
                      </div>
                      <h4 className="font-semibold">Financial Inclusion</h4>
                    </div>
                    <p className="text-gray-600">Providing access to credit for 15,000+ underserved individuals.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-blue/20 p-2 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-brand-blue" />
                      </div>
                      <h4 className="font-semibold">Education Access</h4>
                    </div>
                    <p className="text-gray-600">Financing 10,000+ educational opportunities for underserved students.</p>
                  </div>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-purple/20 p-2 rounded-lg">
                        <Home className="h-6 w-6 text-brand-purple" />
                      </div>
                      <h4 className="font-semibold">Housing Stability</h4>
                    </div>
                    <p className="text-gray-600">Helped 5,000+ families secure stable housing through inclusive lending.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-blue/20 p-2 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-brand-blue" />
                      </div>
                      <h4 className="font-semibold">Economic Growth</h4>
                    </div>
                    <p className="text-gray-600">Supporting over 8,000 small businesses in underserved communities.</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 -z-10 w-64 h-64 bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 rounded-full blur-3xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="mb-6">
              Making a <span className="gradient-text">Real Difference</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered platform doesn't just improve business outcomes—it creates tangible social benefits by promoting financial inclusion and economic empowerment.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex space-x-4">
                <div className="bg-brand-purple/20 p-2 h-fit rounded-lg">
                  <Globe className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p className="text-gray-600">
                    Our platform has helped financial institutions approve loans for over 50,000 individuals who would have been rejected by traditional credit scoring models.
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="bg-brand-blue/20 p-2 h-fit rounded-lg">
                  <TrendingUp className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    Institutions using our platform report a 35% increase in loan approvals for underserved populations while maintaining or improving repayment rates.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-brand-purple hover:bg-brand-purple/90" asChild>
              <Link to="/impact">
                See Our Full Impact Report
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
