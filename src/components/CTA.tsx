
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="section bg-gradient-to-r from-brand-purple to-brand-blue text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 text-white">
            Ready to Transform Your Lending Process?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join the leading financial institutions that are making smarter
            lending decisions while promoting financial inclusion.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="bg-white text-brand-purple hover:bg-white/90 text-lg h-12 px-8"
              asChild
            >
              <Link to="/demo">
                Try Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg h-12 px-8"
              asChild
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
