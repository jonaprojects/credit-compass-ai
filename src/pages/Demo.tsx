
import React from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2 } from 'lucide-react';

const Demo = () => {
  const [submitted, setSubmitted] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {!submitted ? (
              <div className="bg-white shadow-lg rounded-2xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Request a <span className="gradient-text">Demo</span></h2>
                  <p className="text-gray-600">
                    See how CreditCompass AI can help your institution make smarter lending decisions while promoting financial inclusion.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" type="text" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" type="text" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" type="text" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job title</Label>
                      <Input id="jobTitle" type="text" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company size</Label>
                    <Select>
                      <SelectTrigger id="companySize">
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="501-1000">501-1000 employees</SelectItem>
                        <SelectItem value="1001+">1001+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interests">What aspects of CreditCompass AI are you most interested in?</Label>
                    <Select>
                      <SelectTrigger id="interests">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="risk-assessment">Credit Risk Assessment</SelectItem>
                        <SelectItem value="fraud-detection">Fraud Detection</SelectItem>
                        <SelectItem value="financial-inclusion">Financial Inclusion</SelectItem>
                        <SelectItem value="alternative-data">Alternative Data Analysis</SelectItem>
                        <SelectItem value="social-impact">Social Impact Reporting</SelectItem>
                        <SelectItem value="all">All of the above</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Any specific questions or requirements?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your needs and how we can help..."
                      className="h-32"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-brand-purple hover:bg-brand-purple/90">
                    Request Demo
                  </Button>
                </form>
              </div>
            ) : (
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle2 className="h-16 w-16 text-green-600" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Your demo request has been submitted successfully. One of our team members will contact you shortly to schedule your personalized demo.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setSubmitted(false)}
                  className="mx-auto"
                >
                  Return to Form
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demo;
