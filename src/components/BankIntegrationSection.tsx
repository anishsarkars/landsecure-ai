
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Shield, FileCheck, Landmark, ArrowRight } from "lucide-react";

const BankIntegrationSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="absolute -right-20 top-40 w-80 h-80 rounded-full bg-landsecure-50 mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -left-20 bottom-40 w-80 h-80 rounded-full bg-blue-50 mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 border-landsecure-200 text-landsecure-700 bg-landsecure-50 mb-4">
            Bank & Loan Integration
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Smart Mortgage Approval System
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Help financial institutions verify property ownership and eligibility before issuing loans, preventing fraud and reducing non-performing assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Land Eligibility Checker Card */}
          <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-landsecure-800 to-landsecure-600 p-5 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Land Eligibility Checker</h3>
                  <div className="p-2 bg-white/10 rounded-full">
                    <Building className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-landsecure-100">
                  Comprehensive verification system for banks to assess property eligibility before loan approval
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Verify property ownership in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Check for existing mortgages or liens</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Detect past ownership disputes and legal issues</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Generate comprehensive risk reports</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6 w-full bg-landsecure-600 hover:bg-landsecure-700 text-white transition-all" asChild>
                  <Link to="/bank-integration">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Fraud Prevention API Card */}
          <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white rounded-xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-gray-900 to-gray-700 p-5 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Fraud Prevention API</h3>
                  <div className="p-2 bg-white/10 rounded-full">
                    <Shield className="h-6 w-6" />
                  </div>
                </div>
                <p className="text-gray-200">
                  Secure API integration for financial institutions to verify property information and prevent fraud
                </p>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">RESTful API for seamless integration</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Real-time fraud alerts and risk scoring</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Secure OAuth 2.0 authentication</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-risk-low text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-700">Comprehensive API documentation</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-6 w-full bg-gray-900 hover:bg-gray-800 text-white transition-all" asChild>
                  <Link to="/api-docs">
                    View API Docs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-lg mx-auto p-6 bg-landsecure-50 rounded-xl border border-landsecure-100 text-center">
          <Landmark className="h-10 w-10 text-landsecure-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted by leading financial institutions</h3>
          <p className="text-gray-600 mb-6">Our platform has helped reduce non-performing assets by up to 15% for partner banks.</p>
          <Button variant="outline" className="border-landsecure-200 text-landsecure-700 hover:bg-landsecure-100 hover:text-landsecure-800" asChild>
            <Link to="/partners">
              View Bank Partners
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BankIntegrationSection;
