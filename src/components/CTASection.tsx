
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-landsecure-800 to-landsecure-600 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ensure your property investment is secure
          </h2>
          <p className="mt-6 text-xl text-landsecure-100">
            Join thousands of property buyers, banks, and government officials who
            trust LandSecure for transparent property verification.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-landsecure-600 font-semibold shadow-lg hover:shadow-xl transition-all rounded-full px-8"
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 font-semibold rounded-full px-8"
              asChild
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50,000+</div>
              <div className="text-landsecure-100">Properties Verified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">₹2,500 Cr+</div>
              <div className="text-landsecure-100">Fraud Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-landsecure-100">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-landsecure-100">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
