
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Find and verify any property</h2>
            <p className="mt-3 text-gray-600">Search by location, risk level, or property type to get instant verification</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden p-1">
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
                <Button className="bg-landsecure-600 hover:bg-landsecure-700 text-white px-6 rounded-lg h-10">
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
          
          <div className="mt-6 text-center text-sm text-gray-500">
            Popular searches: Delhi NCR, Mumbai Suburbs, Bangalore Tech Park, Chennai Coastal
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
