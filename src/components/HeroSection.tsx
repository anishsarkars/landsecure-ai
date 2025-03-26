
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, FileCheck, Check, ArrowRight } from "lucide-react";
import MapPreview from "./MapPreview";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background elements - gradient and shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-landsecure-50/30 to-transparent"></div>
        <div className="absolute top-[25%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-landsecure-50/20 to-transparent"></div>
        <div className="absolute -bottom-[15%] left-[30%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-blue-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-landsecure-50 text-landsecure-700 border border-landsecure-200">
                <span className="w-2 h-2 rounded-full bg-landsecure-500 mr-2 animate-pulse-soft"></span>
                <span>AI-Powered Land Verification</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              <span className="block">Prevent property fraud</span>
              <span className="block mt-2 bg-gradient-to-r from-landsecure-800 to-landsecure-600 bg-clip-text text-transparent">
                with AI & blockchain
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Instantly verify land ownership, check legal status, and assess risk before making your investment with our advanced AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white gap-2 rounded-lg px-6 shadow-md transition-all flex items-center"
                asChild
              >
                <Link to="/search">
                  <Search className="h-5 w-5" />
                  <span>Check Land Status</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 gap-2 rounded-lg px-6"
                asChild
              >
                <Link to="/verify">
                  <FileCheck className="h-5 w-5" />
                  <span>Verify Documents</span>
                </Link>
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-gray-600">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-risk-low mr-2" />
                  <span>Govt. Verified Data</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-risk-low mr-2" />
                  <span>AI Risk Assessment</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-risk-low mr-2" />
                  <span>Instant Verification</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero image/map */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square lg:aspect-auto lg:h-[600px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg mx-auto">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-landsecure-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-landsecure-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "4s" }}></div>
                  
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                    <div className="h-full w-full">
                      <MapPreview />
                    </div>
                    
                    {/* Glass overlay with stats */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 border-t border-gray-100">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-xs text-gray-500 font-medium">Legal Plots</div>
                          <div className="text-lg font-bold text-risk-low">12,345</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 font-medium">Disputes</div>
                          <div className="text-lg font-bold text-risk-high">1,234</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 font-medium">Verifications</div>
                          <div className="text-lg font-bold text-landsecure-600">50,000+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900">128K+</div>
            <div className="mt-2 text-sm text-gray-600">Properties Verified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900">98%</div>
            <div className="mt-2 text-sm text-gray-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900">50K+</div>
            <div className="mt-2 text-sm text-gray-600">Fraud Prevented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900">24/7</div>
            <div className="mt-2 text-sm text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
