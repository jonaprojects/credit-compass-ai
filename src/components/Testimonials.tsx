
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CreditCompass AI has completely transformed our lending process. We've been able to safely extend credit to previously underserved communities while maintaining our risk standards.",
      author: "Sarah Johnson",
      title: "Chief Risk Officer",
      company: "First Community Bank"
    },
    {
      quote: "The fraud detection capabilities alone paid for the platform in the first three months. We've seen a 45% reduction in fraudulent applications while increasing our approval rates.",
      author: "Michael Chen",
      title: "Director of Fraud Prevention",
      company: "Pacific Credit Union"
    },
    {
      quote: "As a mission-driven financial institution, CreditCompass AI has allowed us to put data behind our commitment to inclusion. The impact metrics have been invaluable for reporting to our stakeholders.",
      author: "Leila Washington",
      title: "CEO",
      company: "Impact Finance Collective"
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-lg text-gray-600">
            Financial institutions trust CreditCompass AI to transform their lending practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-brand-light/30 p-8 rounded-xl shadow-md relative"
            >
              <div className="absolute -top-5 left-8">
                <div className="bg-brand-purple p-2 rounded-lg">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="pt-6">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <p className="text-brand-purple">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
