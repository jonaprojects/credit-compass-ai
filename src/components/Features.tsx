
import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Database, 
  LineChart, 
  AlertTriangle,
  Clock,
  CreditCard,
  Smile
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Database className="h-12 w-12 text-brand-purple" />,
      title: "Multidimensional Data Analysis",
      description: "Evaluate applicants using both traditional financial data and alternative sources like utility payments and mobile transaction behavior."
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-brand-blue" />,
      title: "Advanced Fraud Detection",
      description: "Implement machine learning algorithms to identify fraudulent patterns and flag high-risk applicants before loans are approved."
    },
    {
      icon: <Users className="h-12 w-12 text-brand-purple" />,
      title: "Inclusion of Underserved Individuals",
      description: "Use alternative data to assess applicants without traditional credit histories, providing fair access to credit."
    },
    {
      icon: <LineChart className="h-12 w-12 text-brand-blue" />,
      title: "Predictive Analytics",
      description: "Forecast loan default predictions and provide recommendations to improve loan portfolio performance."
    },
    {
      icon: <AlertTriangle className="h-12 w-12 text-brand-purple" />,
      title: "Risk Management",
      description: "Get actionable insights to manage higher-risk applicants, such as adjusting loan terms or requiring collateral."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-brand-blue" />,
      title: "Social Impact Reporting",
      description: "Track how many underserved individuals have been approved for loans and showcase the positive impact on society."
    },
    {
      icon: <Clock className="h-12 w-12 text-brand-purple" />,
      title: "Faster Loan Approvals",
      description: "Automate the loan assessment process to reduce manual overhead and improve processing speed."
    },
    {
      icon: <CreditCard className="h-12 w-12 text-brand-blue" />,
      title: "Reduced Default Rates",
      description: "Leverage AI to make more informed lending decisions and reduce loan defaults."
    },
    {
      icon: <Smile className="h-12 w-12 text-brand-purple" />,
      title: "Customer Satisfaction",
      description: "Improve customer satisfaction by offering faster, tailored loan offers based on predictive insights."
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4 gradient-text">Powerful Features</h2>
          <p className="text-lg text-gray-600">
            Our AI-powered platform provides comprehensive tools for accurate credit assessment and fraud prevention while promoting financial inclusion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-gradient rounded-xl p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
