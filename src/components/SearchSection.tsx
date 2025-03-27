
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter, Home, Landmark, Building } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10" data-animate>
            <h2 className="text-3xl font-bold text-gray-900">Find and verify any property</h2>
            <p className="mt-3 text-gray-600">Search by location, risk level, or property type to get instant verification</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden p-1" data-animate data-delay="0.2">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Location</label>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                  <Input 
                    type="text" 
                    placeholder="Search by address, city, or plot number" 
                    className="border-0 p-0 focus-visible:ring-0 placeholder:text-gray-400 text-gray-900"
                  />
                </div>
              </div>
              
              <div className="flex-1 p-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Property Type</label>
                <Select>
                  <SelectTrigger className="border-0 p-0 h-8 focus:ring-0">
                    <SelectValue placeholder="All Property Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Property Types</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="agricultural">Agricultural</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1 p-3">
                <label className="block text-xs font-medium text-gray-500 mb-1.5">Risk Level</label>
                <Select>
                  <SelectTrigger className="border-0 p-0 h-8 focus:ring-0">
                    <SelectValue placeholder="Any Risk Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any Risk Level</SelectItem>
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="p-3 flex items-end">
                <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 rounded-lg h-10">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
            
            <div className="bg-gray-50 p-3 flex items-center justify-between border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <Filter className="h-4 w-4 mr-1" />
                <span>Advanced Filters</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-medium text-landsecure-600">12,345</span> properties available
              </div>
            </div>
          </div>
          
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4" data-stagger data-stagger-amount="0.1">
            <div 
              className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
              data-stagger-item
              data-hover-animate
              data-hover-effect="lift"
            >
              <div className="w-12 h-12 bg-landsecure-50 rounded-full flex items-center justify-center mb-3">
                <Home className="h-6 w-6 text-landsecure-600" />
              </div>
              <h3 className="font-medium text-gray-900">Residential</h3>
              <p className="text-xs text-gray-500 mt-1">8,234 properties</p>
            </div>
            
            <div 
              className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
              data-stagger-item
              data-hover-animate
              data-hover-effect="lift"
            >
              <div className="w-12 h-12 bg-landsecure-50 rounded-full flex items-center justify-center mb-3">
                <Building className="h-6 w-6 text-landsecure-600" />
              </div>
              <h3 className="font-medium text-gray-900">Commercial</h3>
              <p className="text-xs text-gray-500 mt-1">2,651 properties</p>
            </div>
            
            <div 
              className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
              data-stagger-item
              data-hover-animate
              data-hover-effect="lift"
            >
              <div className="w-12 h-12 bg-landsecure-50 rounded-full flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-landsecure-600" />
              </div>
              <h3 className="font-medium text-gray-900">Agricultural</h3>
              <p className="text-xs text-gray-500 mt-1">1,423 properties</p>
            </div>
            
            <div 
              className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer"
              data-stagger-item
              data-hover-animate
              data-hover-effect="lift"
            >
              <div className="w-12 h-12 bg-landsecure-50 rounded-full flex items-center justify-center mb-3">
                <Landmark className="h-6 w-6 text-landsecure-600" />
              </div>
              <h3 className="font-medium text-gray-900">Government</h3>
              <p className="text-xs text-gray-500 mt-1">837 properties</p>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500" data-animate>
            Popular searches: Delhi NCR, Mumbai Suburbs, Bangalore Tech Park, Chennai Coastal
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
