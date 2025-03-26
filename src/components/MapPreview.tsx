
import React, { useEffect } from 'react';
import { MapPin, Home, AlertTriangle, Search } from 'lucide-react';
import { landRecords, getRiskLevel } from '@/data/landData';
import { textRevealAnimation } from '@/utils/animationUtils';

const MapPreview = () => {
  useEffect(() => {
    // Animate pins after component mounts
    const pins = document.querySelectorAll('.map-pin');
    pins.forEach((pin, index) => {
      setTimeout(() => {
        (pin as HTMLElement).style.transform = 'scale(1) translateY(0)';
        (pin as HTMLElement).style.opacity = '1';
      }, index * 150);
    });
    
    // Animate search control
    const searchControl = document.querySelector('.search-control');
    if (searchControl) {
      setTimeout(() => {
        (searchControl as HTMLElement).style.opacity = '1';
        (searchControl as HTMLElement).style.transform = 'translateY(0)';
      }, 300);
    }
    
    // Animate legend
    const legend = document.querySelector('.map-legend');
    if (legend) {
      setTimeout(() => {
        (legend as HTMLElement).style.opacity = '1';
        (legend as HTMLElement).style.transform = 'translateY(0)';
      }, 500);
    }
    
    // Animate map title if it exists
    const mapTitle = document.getElementById('map-title');
    if (mapTitle) {
      textRevealAnimation(mapTitle);
    }
  }, []);
  
  // Filter to only show first 8 records for preview
  const previewRecords = landRecords.slice(0, 8);

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
      
      {/* Map Title */}
      <div className="absolute top-3 left-0 right-0 text-center">
        <h3 id="map-title" className="text-sm font-medium text-gray-800 bg-white/80 mx-auto px-3 py-1 rounded-full inline-block" style={{visibility: 'hidden'}}>
          Land Registry Map of India
        </h3>
      </div>
      
      {/* Overlay pins with enhanced styling */}
      {previewRecords.map((record, index) => {
        const riskLevel = getRiskLevel(record.riskScore);
        let pinColorClass = '';
        
        switch(record.status) {
          case 'legal': pinColorClass = 'bg-risk-low'; break;
          case 'illegal': pinColorClass = 'bg-risk-high'; break;
          case 'govt': pinColorClass = 'bg-landsecure-500'; break;
          case 'no-registry': pinColorClass = 'bg-risk-medium'; break;
        }
        
        // Calculate random position for demo purposes
        const top = 15 + (Math.random() * 70);
        const left = 10 + (Math.random() * 80);
        
        return (
          <div 
            key={record.id}
            className="map-pin absolute p-1 rounded-full bg-white shadow-lg group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-20"
            style={{ 
              top: `${top}%`, 
              left: `${left}%`, 
              transform: 'scale(0.5) translateY(20px)', 
              opacity: 0, 
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <div className={`w-4 h-4 rounded-full ${pinColorClass} relative`}>
              <span className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium bg-white text-gray-800 rounded shadow-md transition-opacity duration-300 whitespace-nowrap">
                {record.plotNumber} - {record.location.district}
              </span>
            </div>
          </div>
        );
      })}
      
      {/* Floating search control */}
      <div className="search-control absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-10 opacity-0 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2 text-sm transition-all duration-500">
        <Search size={14} className="text-landsecure-600" />
        <span className="text-gray-400">Search location...</span>
      </div>
      
      {/* Legend overlay with glass effect */}
      <div className="map-legend absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-lg p-3 text-xs border border-gray-100 transition-all duration-500 opacity-0 translate-y-4">
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
    </div>
  );
};

export default MapPreview;
