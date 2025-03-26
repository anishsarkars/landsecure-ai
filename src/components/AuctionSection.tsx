
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Gavel, CheckCircle, ArrowRight } from "lucide-react";

const AuctionSection = () => {
  const auctionProperties = [
    {
      id: 1,
      title: "Prime Commercial Plot",
      location: "Sector 62, Noida",
      area: "1250 sq.m",
      basePrice: "₹2.5 Cr",
      endDate: "July 15, 2023",
      verified: true,
      image: "/lovable-uploads/3b1260f5-43a1-4dc7-8559-76e05a9ff32d.png"
    },
    {
      id: 2,
      title: "Residential Land",
      location: "Whitefield, Bangalore",
      area: "800 sq.m",
      basePrice: "₹1.8 Cr",
      endDate: "July 20, 2023",
      verified: true,
      image: "/lovable-uploads/e14b9fb4-5735-47d0-a196-6cb3c5308c71.png"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 border-landsecure-200 text-landsecure-700 bg-landsecure-50 mb-4">
            Government Verified
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Land Auctions & Government Properties
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Access verified government land listings and participate in secure online auctions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-full">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Verified Government Land Listings</h3>
                  <Building className="h-6 w-6 text-landsecure-600" />
                </div>
                <p className="mt-2 text-gray-600">
                  Browse government-approved properties with complete legal verification and clear titles
                </p>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <CheckCircle className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">Direct listings from government authorities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <CheckCircle className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">Complete legal documentation included</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <CheckCircle className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">Transparent pricing with no hidden costs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <CheckCircle className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">Zero risk of fraudulent transactions</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full bg-landsecure-600 hover:bg-landsecure-700 text-white" asChild>
                    <Link to="/government-listings">
                      Browse Government Properties
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 h-full">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">Online Land Auction System</h3>
                  <Gavel className="h-6 w-6 text-landsecure-600" />
                </div>
                <p className="mt-2 text-gray-600">
                  Participate in secure online auctions for premium properties with verified buyer authentication
                </p>
              </div>
              
              <div className="p-6 space-y-6">
                <h4 className="font-semibold text-gray-900">Featured Auctions</h4>
                
                {auctionProperties.map((property) => (
                  <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all">
                    <div className="relative h-40">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover"
                      />
                      {property.verified && (
                        <div className="absolute top-2 right-2 bg-white/90 text-risk-low text-xs px-2 py-1 rounded-full flex items-center">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Govt. Verified
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <h5 className="font-semibold text-gray-900">{property.title}</h5>
                      <div className="mt-1 text-xs text-gray-600">{property.location}</div>
                      
                      <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-xs text-gray-500">Area</div>
                          <div className="font-medium text-gray-900">{property.area}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Base Price</div>
                          <div className="font-medium text-gray-900">{property.basePrice}</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          Ends: {property.endDate}
                        </div>
                        <Button variant="outline" size="sm" className="text-xs h-8 border-landsecure-200 text-landsecure-700 hover:bg-landsecure-50">
                          Place Bid
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4 border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
                  <Link to="/auctions">
                    View All Auctions
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionSection;
