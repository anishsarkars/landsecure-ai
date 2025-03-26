
import React from 'react';
import { MapPin, Home, AlertTriangle } from 'lucide-react';

const MapPreview = () => {
  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
      <div 
        className="w-full h-full opacity-90"
        style={{
          backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/light-v11/static/78.9629,20.5937,4,0/600x600?access_token=pk.eyJ1IjoiYW5pc2hzYXJrYXJzIiwiYSI6ImNtOG54YnJjZjA1a3Eya29zaGc3YWc2bXkifQ.qMgKYko3eUlWJGTx-fi5sQ')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
      </div>
      
      {/* Overlay pins with enhanced styling */}
      <div className="absolute top-1/4 left-1/3 p-1 rounded-full bg-white shadow-lg group cursor-pointer transition-all duration-300 hover:scale-110">
        <div className="w-4 h-4 rounded-full bg-risk-low relative">
          <span className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-white text-gray-800 rounded shadow-md transition-opacity duration-300 whitespace-nowrap">Clear Title</span>
        </div>
      </div>
      
      <div className="absolute top-1/3 left-1/2 p-1 rounded-full bg-white shadow-lg group cursor-pointer transition-all duration-300 hover:scale-110">
        <div className="w-4 h-4 rounded-full bg-risk-high relative">
          <span className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-white text-gray-800 rounded shadow-md transition-opacity duration-300 whitespace-nowrap">Disputed Property</span>
        </div>
      </div>
      
      <div className="absolute top-2/3 left-1/4 p-1 rounded-full bg-white shadow-lg group cursor-pointer transition-all duration-300 hover:scale-110">
        <div className="w-4 h-4 rounded-full bg-landsecure-500 relative">
          <span className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-white text-gray-800 rounded shadow-md transition-opacity duration-300 whitespace-nowrap">Government Land</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/3 p-1 rounded-full bg-white shadow-lg group cursor-pointer transition-all duration-300 hover:scale-110">
        <div className="w-4 h-4 rounded-full bg-risk-medium relative">
          <span className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-white text-gray-800 rounded shadow-md transition-opacity duration-300 whitespace-nowrap">Pending Registry</span>
        </div>
      </div>
      
      {/* Legend overlay with glass effect */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-3 text-xs border border-gray-100">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-risk-low"></div>
            <span className="text-gray-700">Clear Title</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-risk-high"></div>
            <span className="text-gray-700">Disputed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-landsecure-500"></div>
            <span className="text-gray-700">Government</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-risk-medium"></div>
            <span className="text-gray-700">Pending Registry</span>
          </div>
        </div>
      </div>
      
      {/* Floating search control */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-sm">
        <MapPin size={14} className="text-landsecure-600" />
        <span className="text-gray-400">Search location...</span>
      </div>
    </div>
  );
};

export default MapPreview;
