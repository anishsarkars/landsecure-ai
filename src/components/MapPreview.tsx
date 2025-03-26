
import React from 'react';

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

export default MapPreview;
