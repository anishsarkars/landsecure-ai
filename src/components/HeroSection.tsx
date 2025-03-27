
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin, Check, ArrowRight, FileText } from "lucide-react";
import { textRevealAnimation } from "@/utils/animationUtils";
import MapPreview from "./MapPreview";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Apply text reveal animation
    setTimeout(() => {
      textRevealAnimation(headingRef.current);
    }, 300);
    
    setTimeout(() => {
      textRevealAnimation(subheadingRef.current);
    }, 800);
  }, []);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden bg-white">
      {/* Background overlay - subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white pointer-events-none z-0"></div>
      
      {/* Optional decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-landsecure-50/30 rounded-bl-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gray-50 rounded-tr-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Hero content */}
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
              <div 
                className="inline-block bg-gray-50 rounded-full px-4 py-1.5 border border-gray-100 shadow-sm"
                data-animate-onload
              >
                <span className="inline-flex items-center text-sm font-medium text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-landsecure-500 mr-2 animate-pulse"></span>
                  <span>Secure Land Verification</span>
                </span>
              </div>
              
              <h1 
                ref={headingRef}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-none"
                style={{visibility: 'hidden'}}
              >
                Own Your World, <br className="hidden sm:block" />
                <span className="text-landsecure-600">One Property at a Time.</span>
              </h1>
              
              <p 
                ref={subheadingRef}
                className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
                style={{visibility: 'hidden'}}
              >
                Instantly verify land ownership, check legal status, and assess risk before making your investment with our advanced AI-powered platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-animate-onload>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white gap-2 rounded-lg px-6 shadow-md transition-all"
                  asChild
                  data-hover-animate
                  data-hover-effect="scale"
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
                  data-hover-animate
                  data-hover-effect="lift"
                >
                  <Link to="/verify">
                    <FileText className="h-5 w-5" />
                    <span>Verify Documents</span>
                  </Link>
                </Button>
              </div>
              
              <div className="pt-4" data-animate-onload>
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
            
            {/* Hero map visualization */}
            <div className="w-full lg:w-1/2 relative" data-animate data-delay="0.3">
              <div className="aspect-square lg:aspect-auto lg:h-[550px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-lg mx-auto">
                    {/* Decorative elements */}
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-landsecure-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: "2s" }}></div>
                    
                    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                      <div className="h-full w-full bg-white">
                        <MapPreview />
                      </div>
                      
                      {/* Glass overlay with stats */}
                      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 border-t border-gray-100">
                        <div className="grid grid-cols-3 gap-3 text-center">
                          <div>
                            <div className="text-xs text-gray-500 font-medium">Legal Plots</div>
                            <div className="text-lg font-bold text-risk-low" data-counter="12345">12,345</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 font-medium">Disputes</div>
                            <div className="text-lg font-bold text-risk-high" data-counter="1234">1,234</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 font-medium">Verifications</div>
                            <div className="text-lg font-bold text-landsecure-600" data-counter="50000">50,000+</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Property search panel */}
          <div className="mt-16" data-animate>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Location</label>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <input
                      type="text"
                      placeholder="Search by location or plot number"
                      className="w-full border-0 p-0 focus:ring-0 text-gray-800 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                </div>
                
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Property Type</label>
                  <select className="w-full border-0 p-0 focus:ring-0 text-gray-800 text-sm bg-transparent">
                    <option value="all">All Property Types</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="agricultural">Agricultural</option>
                  </select>
                </div>
                
                <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-100">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Price Range</label>
                  <select className="w-full border-0 p-0 focus:ring-0 text-gray-800 text-sm bg-transparent">
                    <option value="any">Any Price</option>
                    <option value="0-5000000">Under ₹50 Lakhs</option>
                    <option value="5000000-10000000">₹50 Lakhs - 1 Crore</option>
                    <option value="10000000+">Above 1 Crore</option>
                  </select>
                </div>
                
                <div className="p-4 flex items-end">
                  <Button className="w-full bg-landsecure-600 hover:bg-landsecure-700 text-white gap-1 rounded-lg shadow-sm">
                    <Search className="h-4 w-4" />
                    <span>Search</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12" data-stagger data-stagger-amount="0.1">
            <div className="text-center" data-stagger-item>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900" data-counter="128000">128K+</div>
              <div className="mt-2 text-sm text-gray-600">Properties Verified</div>
            </div>
            <div className="text-center" data-stagger-item>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900" data-counter="98">98%</div>
              <div className="mt-2 text-sm text-gray-600">Accuracy Rate</div>
            </div>
            <div className="text-center" data-stagger-item>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900" data-counter="50000">50K+</div>
              <div className="mt-2 text-sm text-gray-600">Fraud Prevented</div>
            </div>
            <div className="text-center" data-stagger-item>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">24/7</div>
              <div className="mt-2 text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
