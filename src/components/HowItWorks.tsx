
import React from 'react';
import { 
  Upload, 
  Brain, 
  CheckCircle, 
  ShieldAlert, 
  ChartPie, 
  BarChart 
} from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Upload className="h-10 w-10 text-white" />,
      title: "Data Collection",
      description: "Upload traditional and alternative data sources securely to our platform."
    },
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "AI Analysis",
      description: "Our machine learning algorithms analyze and evaluate multiple dimensions of credit risk."
    },
    {
      icon: <ShieldAlert className="h-10 w-10 text-white" />,
      title: "Fraud Detection",
      description: "Advanced patterns recognition identifies potential fraudulent applications."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Risk Assessment",
      description: "Get comprehensive risk profiles with clear, actionable insights."
    },
    {
      icon: <ChartPie className="h-10 w-10 text-white" />,
      title: "Decision Support",
      description: "Receive tailored recommendations for loan terms based on risk profiles."
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" />,
      title: "Impact Tracking",
      description: "Monitor and report on the social impact of your inclusive lending practices."
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">How It <span className="gradient-text">Works</span></h2>
          <p className="text-lg text-gray-600">
            Our platform uses a straightforward process to help you make smarter lending decisions while promoting financial inclusion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-6 bg-gradient-to-r from-brand-purple to-brand-blue p-5 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute transform translate-x-48 mt-10">
                  <svg width="64" height="24" viewBox="0 0 64 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M63.0607 13.0607C63.6464 12.4749 63.6464 11.5251 63.0607 10.9393L53.5147 1.3934C52.9289 0.807611 51.9792 0.807611 51.3934 1.3934C50.8076 1.97919 50.8076 2.92893 51.3934 3.51472L59.8787 12L51.3934 20.4853C50.8076 21.0711 50.8076 22.0208 51.3934 22.6066C51.9792 23.1924 52.9289 23.1924 53.5147 22.6066L63.0607 13.0607ZM0 13.5H62V10.5H0V13.5Z" fill="#9b87f5"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
