
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Check, Info, X } from 'lucide-react';
import { createMarkerElement, formatLandStatus, getStatusClasses } from '@/utils/mapHelpers';

// Land plot marker data for demonstration
const PLOT_DATA = [
  {
    id: 1,
    lat: 20.5937,
    lng: 78.9629,
    status: 'legal',
    owner: 'Rajeev Kumar',
    plot: 'Plot #1023',
    registry: 'Registered (2018)',
    disputes: 'None',
    risk: 'Low'
  },
  {
    id: 2,
    lat: 20.6937,
    lng: 78.8629,
    status: 'illegal',
    owner: 'Unknown',
    plot: 'Plot #892',
    registry: 'Not Registered',
    disputes: 'Multiple Claims',
    risk: 'High'
  },
  {
    id: 3,
    lat: 20.4937,
    lng: 79.0629,
    status: 'govt',
    owner: 'Government of India',
    plot: 'Plot #456',
    registry: 'Government Land',
    disputes: 'None',
    risk: 'Low'
  },
  {
    id: 4,
    lat: 20.5937,
    lng: 79.1629,
    status: 'no-registry',
    owner: 'Suresh Patel',
    plot: 'Plot #789',
    registry: 'Pending Registration',
    disputes: 'Boundary Dispute',
    risk: 'Medium'
  }
];

// Mapbox access token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5pc2hzYXJrYXJzIiwiYSI6ImNtOG54YnJjZjA1a3Eya29zaGc3YWc2bXkifQ.qMgKYko3eUlWJGTx-fi5sQ';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [78.9629, 20.5937], // India center
      zoom: 4,
      projection: 'mercator',
      antialias: true,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Create markers when map loads
    map.current.on('load', () => {
      // Add a custom layer for glowing effect
      map.current?.addSource('india-outline', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [68.1, 8.0], [97.4, 8.0], [97.4, 37.0], [68.1, 37.0], [68.1, 8.0]
            ]]
          },
          properties: {} // Added empty properties object to satisfy the GeoJSON type
        }
      });
      
      map.current?.addLayer({
        id: 'india-glow',
        type: 'line',
        source: 'india-outline',
        layout: {},
        paint: {
          'line-color': '#0ea5e9',
          'line-width': 2,
          'line-opacity': 0.6,
          'line-blur': 5
        }
      });

      // Add land plot markers
      PLOT_DATA.forEach(plot => {
        // Create marker element with our utility function
        const markerEl = createMarkerElement(
          plot.status as 'legal' | 'illegal' | 'govt' | 'no-registry',
          plot.id,
          () => {
            setActiveMarker(plot.id);
            showPopup(plot);
          }
        );

        // Add marker to map
        new mapboxgl.Marker(markerEl)
          .setLngLat([plot.lng, plot.lat])
          .addTo(map.current!);
      });
    });

    // Function to show popup
    const showPopup = (plot: typeof PLOT_DATA[0]) => {
      // Remove existing popup if any
      if (popupRef.current) {
        popupRef.current.remove();
      }

      // Create popup content
      const popupContent = document.createElement('div');
      popupContent.className = 'glass-effect rounded-lg p-3';
      
      const titleEl = document.createElement('h3');
      titleEl.className = 'font-semibold text-sm';
      titleEl.textContent = plot.plot;
      
      const statusClass = getStatusClasses(plot.status as 'legal' | 'illegal' | 'govt' | 'no-registry');
      
      const statusEl = document.createElement('span');
      statusEl.className = `text-xs px-2 py-0.5 rounded-full ${statusClass} inline-block mt-1`;
      statusEl.textContent = formatLandStatus(plot.status);
      
      const detailsEl = document.createElement('div');
      detailsEl.className = 'mt-2 text-xs space-y-1 text-gray-600';
      
      const addDetail = (label: string, value: string) => {
        const p = document.createElement('p');
        p.innerHTML = `<span class="font-medium">${label}:</span> ${value}`;
        detailsEl.appendChild(p);
      };
      
      addDetail('Owner', plot.owner);
      addDetail('Registry', plot.registry);
      addDetail('Disputes', plot.disputes);
      addDetail('Risk', plot.risk);
      
      // Button
      const buttonEl = document.createElement('button');
      buttonEl.className = 'mt-2 text-xs bg-landsecure-600 hover:bg-landsecure-700 text-white px-2 py-1 rounded-md transition-colors w-full text-center';
      buttonEl.textContent = 'View Details';
      
      // Assemble popup content
      popupContent.appendChild(titleEl);
      popupContent.appendChild(statusEl);
      popupContent.appendChild(detailsEl);
      popupContent.appendChild(buttonEl);

      // Create and show popup
      popupRef.current = new mapboxgl.Popup({ 
        closeButton: true,
        closeOnClick: false,
        maxWidth: '240px',
        className: 'land-plot-popup'
      })
        .setLngLat([plot.lng, plot.lat])
        .setDOMContent(popupContent)
        .addTo(map.current!);
        
      // Close popup event
      popupRef.current.on('close', () => {
        setActiveMarker(null);
      });
    };

    // Cleanup on unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute top-4 left-4 z-10 glass-effect p-2 rounded-lg shadow-sm">
        <div className="text-xs font-medium mb-1 text-gray-800">Land Status</div>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-risk-low mr-2"></div>
            <span className="text-xs text-gray-600">Legal</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-risk-high mr-2"></div>
            <span className="text-xs text-gray-600">Illegal</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-landsecure-500 mr-2"></div>
            <span className="text-xs text-gray-600">Government</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-risk-medium mr-2"></div>
            <span className="text-xs text-gray-600">No Registry</span>
          </div>
        </div>
      </div>
      <div className="map-gradient-overlay"></div>
    </div>
  );
};

export default MapComponent;
