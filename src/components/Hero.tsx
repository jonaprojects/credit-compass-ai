import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-dark to-brand-dark/90 text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 opacity-0 animate-fade-in">
            <span className="gradient-text">
              AI-Powered Credit Risk Assessment
            </span>
            :
            <span className="block mt-2">
              Smarter, Fairer, and More Inclusive Lending
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 opacity-0 animate-fade-in delay-100">
            Leverage the power of AI to predict loan risks, prevent credit
            fraud, and empower individuals with no traditional credit
            background.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16 opacity-0 animate-fade-in delay-200">
            <Button
              className="bg-brand-purple hover:bg-brand-purple/90 text-lg h-12 px-8"
              asChild
            >
              <Link to="/demo">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="text-lg h-12 px-8 border-white/20 text-black hover:bg-white/10"
              asChild
            >
              <Link to="/impact">See the Social Impact</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl opacity-0 animate-fade-in delay-300">
              <div className="mb-4 bg-brand-purple/20 p-3 rounded-lg inline-block">
                <ShieldCheck className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraud Prevention</h3>
              <p className="text-gray-300">
                AI-driven fraud detection to prevent lending to fraudulent
                applicants.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl opacity-0 animate-fade-in delay-400">
              <div className="mb-4 bg-brand-blue/20 p-3 rounded-lg inline-block">
                <Users className="h-7 w-7 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Financial Inclusion
              </h3>
              <p className="text-gray-300">
                Enable people without credit histories to gain access to loans.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl opacity-0 animate-fade-in delay-500">
              <div className="mb-4 bg-brand-purple/20 p-3 rounded-lg inline-block">
                <BarChart3 className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Social Responsibility
              </h3>
              <p className="text-gray-300">
                Make fairer and more inclusive lending decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
