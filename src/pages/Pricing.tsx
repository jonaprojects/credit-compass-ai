
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CTA from '@/components/CTA';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  highlight = false,
  custom = false 
}) => {
  return (
    <div className={`
      rounded-xl shadow-lg overflow-hidden flex flex-col
      ${highlight ? 'border-2 border-brand-purple ring-2 ring-brand-purple/20 relative' : 'border border-gray-200'}
    `}>
      {highlight && (
        <div className="absolute top-0 right-0 bg-brand-purple text-white py-1 px-3 text-sm font-medium rounded-bl-lg">
          Most Popular
        </div>
      )}
      <div className="p-6 bg-white flex-1">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="mb-4">
          {custom ? (
            <div className="text-2xl font-bold">Custom Pricing</div>
          ) : (
            <div>
              <span className="text-3xl font-bold">${price}</span>
              <span className="text-gray-500">/month</span>
            </div>
          )}
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 text-green-500 flex-shrink-0">
                <Check size={16} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 border-t border-gray-200">
        <Button 
          className={highlight ? "w-full bg-brand-purple hover:bg-brand-purple/90" : "w-full"} 
          variant={highlight ? "default" : "outline"}
        >
          {custom ? "Contact Sales" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

const AddOn = ({ name, price, description }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-5 bg-white">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-brand-purple font-semibold">${price}/mo</span>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const Discount = ({ title, description, percentage }) => {
  return (
    <div className="flex space-x-4 items-start">
      <div className="bg-brand-purple/10 p-2 rounded-lg">
        <div className="text-xl font-bold text-brand-purple">{percentage}%</div>
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Basic",
      price: 499,
      description: "Perfect for small lenders just getting started with AI risk assessment.",
      features: [
        "Up to 500 credit assessments/month",
        "Basic AI model",
        "Email support",
        "API access",
        "Standard reporting"
      ]
    },
    {
      name: "Professional",
      price: 999,
      description: "For growing lenders with moderate credit assessment needs.",
      features: [
        "Up to 2,000 credit assessments/month",
        "Advanced AI model with higher accuracy",
        "Priority email & chat support",
        "API access with higher rate limits",
        "Advanced reporting & analytics",
        "Custom model adjustments"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: 2499,
      description: "For established lenders with high-volume assessment needs.",
      features: [
        "Up to 10,000 credit assessments/month",
        "Premium AI model with highest accuracy",
        "24/7 priority support with dedicated manager",
        "Unlimited API access",
        "Comprehensive analytics dashboard",
        "Custom model training",
        "Regulatory compliance tools"
      ]
    },
    {
      name: "Custom Enterprise",
      custom: true,
      description: "Tailored solutions for large financial institutions with specific needs.",
      features: [
        "Unlimited credit assessments",
        "Fully customized AI models",
        "White-label solutions",
        "On-premise deployment options",
        "Complete system integration",
        "Custom development support",
        "Dedicated account team"
      ]
    }
  ];

  const addOns = [
    {
      name: "Additional Assessments",
      price: "0.10-0.50",
      description: "Per-assessment pricing beyond your plan limit, with volume discounts available."
    },
    {
      name: "Custom Model Training",
      price: 1500,
      description: "Train our models on your historical data for higher accuracy specific to your customer base."
    },
    {
      name: "Regulatory Compliance Package",
      price: 799,
      description: "Additional tools and reports to help meet financial regulatory requirements."
    },
    {
      name: "Data Integration Services",
      price: 2500,
      description: "Professional services to integrate our API with your existing lending systems."
    }
  ];

  const discounts = [
    {
      title: "Annual Subscription",
      description: "Pay annually and receive two months free compared to monthly billing.",
      percentage: 15
    },
    {
      title: "Referral Program",
      description: "Refer another lender who subscribes and receive a discount on your next bill.",
      percentage: 10
    },
    {
      title: "Non-Profit Organizations",
      description: "Special pricing for qualified non-profit financial institutions.",
      percentage: 25
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-white to-gray-50 py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600">
                Choose the plan that's right for your lending institution's needs,
                with no hidden fees or long-term commitments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {tiers.map((tier, index) => (
                <PricingTier key={index} {...tier} />
              ))}
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Add-Ons & Additional Services</h2>
                <p className="text-gray-600">
                  Enhance your plan with these add-ons to meet your specific business requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {addOns.map((addon, index) => (
                  <AddOn key={index} {...addon} />
                ))}
              </div>
              
              <div className="flex justify-end">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
                        <HelpCircle className="h-4 w-4" />
                        Need help choosing add-ons?
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Contact our sales team for personalized recommendations based on your specific needs.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-brand-purple/5 to-brand-blue/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Discounts & Incentives</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {discounts.map((discount, index) => (
                  <Discount key={index} {...discount} />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
