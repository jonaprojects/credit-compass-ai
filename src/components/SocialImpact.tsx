
import React from 'react';
import { 
  Heart, 
  GraduationCap, 
  Home, 
  Globe, 
  TrendingUp,
  ShieldCheck,
  ShieldX,
  DollarSign,
  TrendingDown,
  Handshake,
  BarChart,
  Wrench,
  ShieldOff,
  Users
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
                        <ShieldCheck className="h-6 w-6 text-brand-purple" />
                      </div>
                      <h4 className="font-semibold">Enhanced Identification</h4>
                    </div>
                    <p className="text-gray-600">Identifying reliable borrowers through advanced AI algorithms.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-blue/20 p-2 rounded-lg">
                        <ShieldX className="h-6 w-6 text-brand-blue" />
                      </div>
                      <h4 className="font-semibold">Risk Protection</h4>
                    </div>
                    <p className="text-gray-600">Protecting companies from high-risk clients through predictive analytics.</p>
                  </div>
                </div>
                
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-purple/20 p-2 rounded-lg">
                        <TrendingUp className="h-6 w-6 text-brand-purple" />
                      </div>
                      <h4 className="font-semibold">Improved Predictions</h4>
                    </div>
                    <p className="text-gray-600">Better loan repayment predictions with multidimensional data analysis.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-brand-blue/20 p-2 rounded-lg">
                        <TrendingDown className="h-6 w-6 text-brand-blue" />
                      </div>
                      <h4 className="font-semibold">Reduced Defaults</h4>
                    </div>
                    <p className="text-gray-600">Significantly reducing default rates through smarter lending decisions.</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex space-x-3">
                  <div className="bg-brand-purple/20 p-2 h-fit rounded-lg">
                    <DollarSign className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Lower Default Costs</h3>
                    <p className="text-gray-600 text-sm">
                      Reducing the financial burden of loan defaults for lenders.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="bg-brand-blue/20 p-2 h-fit rounded-lg">
                    <Handshake className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Building Trust</h3>
                    <p className="text-gray-600 text-sm">
                      Creating stronger relationships between borrowers and lenders.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex space-x-3">
                  <div className="bg-brand-purple/20 p-2 h-fit rounded-lg">
                    <BarChart className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Optimized Assessment</h3>
                    <p className="text-gray-600 text-sm">
                      Fine-tuning credit risk assessment with AI algorithms.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="bg-brand-blue/20 p-2 h-fit rounded-lg">
                    <Wrench className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Minimized Errors</h3>
                    <p className="text-gray-600 text-sm">
                      Reducing human error in loan approval decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex space-x-3">
                  <div className="bg-brand-purple/20 p-2 h-fit rounded-lg">
                    <ShieldOff className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Fraud Prevention</h3>
                    <p className="text-gray-600 text-sm">
                      Identifying and preventing fraudulent loan applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <div className="bg-brand-blue/20 p-2 h-fit rounded-lg">
                    <Users className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Fair Assessment</h3>
                    <p className="text-gray-600 text-sm">
                      Providing accessible and fair loan assessment for all.
                    </p>
                  </div>
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
