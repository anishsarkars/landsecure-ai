
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, FileCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background elements - abstract shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-radial from-landsecure-100/30 to-transparent"></div>
        <div className="absolute top-[25%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-landsecure-50/20 to-transparent"></div>
        <div className="absolute -bottom-[15%] left-[30%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-blue-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-landsecure-50 text-landsecure-700 border border-landsecure-200">
                <span className="w-2 h-2 rounded-full bg-landsecure-500 mr-2 animate-pulse-soft"></span>
                <span>Powered by AI and Blockchain</span>
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              <span className="block text-balance">Secure Land Verification</span>
              <span className="block mt-2 bg-gradient-to-r from-landsecure-700 to-landsecure-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Prevent property fraud with AI-powered verification. Instantly check
              land status, verify ownership, and assess risk before making your
              investment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-landsecure-600 hover:bg-landsecure-700 text-white gap-2 rounded-full px-6 shadow-md shadow-landsecure-500/10 hover:shadow-lg transition-all"
                asChild
              >
                <Link to="/search">
                  <Search className="h-5 w-5" />
                  <span>Check Land Status</span>
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-landsecure-600 text-landsecure-600 hover:bg-landsecure-50 gap-2 rounded-full px-6"
                asChild
              >
                <Link to="/verify">
                  <FileCheck className="h-5 w-5" />
                  <span>Verify Documents</span>
                </Link>
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-risk-low mr-1" />
                  <span>Govt. Verified Data</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-risk-low mr-1" />
                  <span>AI Risk Assessment</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-risk-low mr-1" />
                  <span>Instant Verification</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero image/illustration */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square lg:aspect-auto lg:h-[600px] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-lg mx-auto">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-landsecure-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-landsecure-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "4s" }}></div>
                  
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                    <div className="h-full w-full">
                      <MapPreview />
                    </div>
                    
                    {/* Glass overlay with stats */}
                    <div className="absolute bottom-0 left-0 right-0 glass-effect backdrop-blur-md p-4 border-t border-white/20">
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-xs text-gray-500">Legal Plots</div>
                          <div className="text-lg font-semibold text-risk-low">12,345</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Disputes</div>
                          <div className="text-lg font-semibold text-risk-high">1,234</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Verifications</div>
                          <div className="text-lg font-semibold text-landsecure-600">50,000+</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple map preview for the hero section
const MapPreview = () => {
  return (
    <div className="relative w-full h-full bg-slate-100 rounded-2xl overflow-hidden">
      <div 
        className="w-full h-full opacity-90"
        style={{
          backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/78.9629,20.5937,4,0/600x600?access_token=pk.eyJ1IjoiYW5pc2hzYXJrYXJzIiwiYSI6ImNtOG54YnJjZjA1a3Eya29zaGc3YWc2bXkifQ.qMgKYko3eUlWJGTx-fi5sQ')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
      </div>
      
      {/* Overlay pins */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-risk-low shadow-lg shadow-risk-low/30 animate-pulse-soft"></div>
      <div className="absolute top-1/3 left-1/2 w-4 h-4 rounded-full bg-risk-high shadow-lg shadow-risk-high/30 animate-pulse-soft" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-2/3 left-1/4 w-4 h-4 rounded-full bg-landsecure-500 shadow-lg shadow-landsecure-500/30 animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-risk-medium shadow-lg shadow-risk-medium/30 animate-pulse-soft" style={{ animationDelay: "1.5s" }}></div>
      
      {/* Visual overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;
