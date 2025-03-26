
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Lock, Shield, Bell, ArrowRight, Check } from "lucide-react";

const VerificationSection = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-radial from-white to-transparent"></div>
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] rounded-full bg-gradient-radial from-white to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="px-3 py-1 border-landsecure-200 text-landsecure-700 bg-landsecure-50 mb-4">
            Advanced Verification
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Aadhaar & DigiLocker Integration
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Seamless identity verification and document authentication via official government platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              <div className="relative p-1">
                <img 
                  src="/lovable-uploads/d1f56300-903e-4687-a1ca-5df09b6d7cdc.png" 
                  alt="DigiLocker Integration" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Secure Document Verification</h3>
                    <p className="text-gray-200 text-sm">Link DigiLocker to access official property documents</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-landsecure-50 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-landsecure-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">DigiLocker API Integration</h4>
                    <p className="text-sm text-gray-600">Access verified government-issued documents</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-landsecure-50 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-landsecure-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Official Land Records</h4>
                    <p className="text-sm text-gray-600">Direct access to property documents from government databases</p>
                  </div>
                </div>
                
                <Button className="w-full bg-landsecure-600 hover:bg-landsecure-700 text-white" asChild>
                  <Link to="/digilocker-integration">
                    Connect DigiLocker
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Instant KYC & Land Owner Verification</h3>
              <p className="text-gray-600">Our platform leverages India's official identity and document verification systems to ensure completely secure and legitimate property transactions.</p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <Check className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Aadhaar-Based Verification</h4>
                    <p className="mt-1 text-sm text-gray-600">Link Aadhaar for identity verification and OTP-based authentication during property transactions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <Check className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">PAN Integration</h4>
                    <p className="mt-1 text-sm text-gray-600">Verify financial records and tax compliance through PAN linkage</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <Check className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">Fraud Prevention with Biometric Verification</h4>
                    <p className="mt-1 text-sm text-gray-600">Ensures a person can't sell land without proper Aadhaar-linked verification</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-1 rounded-full bg-risk-low/20">
                    <Check className="h-5 w-5 text-risk-low" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">OTP-Based Authentication</h4>
                    <p className="mt-1 text-sm text-gray-600">Secure OTP sent to registered mobile number before finalizing registry</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-white" asChild>
                  <Link to="/verification-process">
                    Learn More About Verification
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900">Smart Notifications & Alerts</h3>
            <p className="mt-3 text-lg text-gray-600">Stay updated on property status changes and important alerts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-landsecure-50 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-landsecure-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp & SMS Alerts</h4>
              <p className="text-gray-600 text-sm">Get real-time updates on land status changes, new disputes, and government projects</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-risk-high/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-risk-high" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fraud Alerts</h4>
              <p className="text-gray-600 text-sm">Instant notifications about unauthorized access attempts or suspicious activities</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-landsecure-50 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-landsecure-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Property Status Updates</h4>
              <p className="text-gray-600 text-sm">Regular updates about registry status, legal proceedings, and risk assessment changes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
