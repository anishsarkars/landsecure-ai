
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Check, Info, X, AlertTriangle } from 'lucide-react';
import { createMarkerElement, formatLandStatus, getStatusClasses } from '@/utils/mapHelpers';
import { landRecords, LandRecord, formatIndianCurrency, getRiskLevel } from '@/data/landData';
import { useToast } from '@/hooks/use-toast';

// Mapbox access token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5pc2hzYXJrYXJzIiwiYSI6ImNtOG54YnJjZjA1a3Eya29zaGc3YWc2bXkifQ.qMgKYko3eUlWJGTx-fi5sQ';

const MapComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const markers = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const { toast } = useToast();

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    // Fix: Type 'number[]' is not assignable to type 'LngLatLike'
    // Convert to LngLat object
    const centerCoordinates: mapboxgl.LngLatLike = [78.9629, 20.5937]; // India center
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: centerCoordinates,
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
      setMapLoaded(true);
      
      // Add a custom layer for glowing effect around India
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

      // Add land plot markers using real data
      addMarkersToMap();
      
      // Add animation to markers
      animateMarkers();
      
      // Fix: Convert string to number
      const toastDuration = 3000;
      // Notify user that the map has loaded
      toast({
        title: "Map loaded successfully",
        description: "Showing land records from across India",
        duration: toastDuration,
      });
    });

    // Cleanup on unmount
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Function to add markers to the map
  const addMarkersToMap = () => {
    if (!map.current || !mapLoaded) return;
    
    landRecords.forEach(record => {
      // Create marker element with our utility function
      const markerEl = createMarkerElement(
        record.status,
        record.id,
        () => {
          setActiveMarker(record.id);
          showPopup(record);
        }
      );

      // Add marker to map
      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([record.location.lng, record.location.lat])
        .addTo(map.current!);
        
      // Store marker reference
      markers.current[record.id] = marker;
    });
  };
  
  // Function to animate markers
  const animateMarkers = () => {
    Object.values(markers.current).forEach((marker, index) => {
      const element = marker.getElement();
      
      // Use setTimeout to stagger the animations
      setTimeout(() => {
        element.animate(
          [
            { transform: 'translateY(-20px)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
          ],
          {
            duration: 500,
            easing: 'ease-out',
            fill: 'forwards'
          }
        );
      }, index * 100);
    });
  };

  // Function to show popup with land record details
  const showPopup = (record: LandRecord) => {
    if (!map.current) return;
    
    // Remove existing popup if any
    if (popupRef.current) {
      popupRef.current.remove();
    }

    // Create popup content
    const popupContent = document.createElement('div');
    popupContent.className = 'glass-effect rounded-lg p-3';
    
    const titleEl = document.createElement('h3');
    titleEl.className = 'font-semibold text-sm';
    titleEl.textContent = record.plotNumber;
    
    const statusClass = getStatusClasses(record.status);
    
    const statusEl = document.createElement('span');
    statusEl.className = `text-xs px-2 py-0.5 rounded-full ${statusClass} inline-block mt-1`;
    statusEl.textContent = formatLandStatus(record.status);
    
    const detailsEl = document.createElement('div');
    detailsEl.className = 'mt-2 text-xs space-y-1 text-gray-600';
    
    const addDetail = (label: string, value: string) => {
      const p = document.createElement('p');
      p.innerHTML = `<span class="font-medium">${label}:</span> ${value}`;
      detailsEl.appendChild(p);
    };
    
    addDetail('Owner', record.owner.name);
    addDetail('Location', `${record.location.village}, ${record.location.district}`);
    addDetail('Area', `${record.area.value} ${record.area.unit}`);
    
    const riskLevel = getRiskLevel(record.riskScore);
    let riskIcon = '';
    let riskColor = '';
    
    switch(riskLevel) {
      case 'Low':
        riskIcon = '✅';
        riskColor = 'text-risk-low';
        break;
      case 'Medium':
        riskIcon = '⚠️';
        riskColor = 'text-risk-medium';
        break;
      case 'High':
        riskIcon = '❌';
        riskColor = 'text-risk-high';
        break;
    }
    
    const riskP = document.createElement('p');
    riskP.innerHTML = `<span class="font-medium">Risk:</span> <span class="${riskColor}">${riskIcon} ${riskLevel} (${record.riskScore}/100)</span>`;
    detailsEl.appendChild(riskP);
    
    addDetail('Value', formatIndianCurrency(record.marketValue));
    
    if (record.disputes && record.disputes.length > 0) {
      const disputesP = document.createElement('p');
      disputesP.innerHTML = `<span class="font-medium text-risk-high">Disputes:</span> ${record.disputes.length} active`;
      detailsEl.appendChild(disputesP);
    }
    
    // Button
    const buttonEl = document.createElement('button');
    buttonEl.className = 'mt-2 text-xs bg-landsecure-600 hover:bg-landsecure-700 text-white px-2 py-1 rounded-md transition-colors w-full text-center';
    buttonEl.textContent = 'View Full Details';
    
    buttonEl.addEventListener('click', () => {
      // Close the popup
      if (popupRef.current) {
        popupRef.current.remove();
      }
      
      // Show a toast notification
      toast({
        title: "Property Details",
        description: `Viewing details for ${record.plotNumber}`,
        duration: 3000,
      });
    });
    
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
      .setLngLat([record.location.lng, record.location.lat])
      .setDOMContent(popupContent)
      .addTo(map.current);
      
    // Close popup event
    popupRef.current.on('close', () => {
      setActiveMarker(null);
    });
  };

  // Get statistics about land records
  const getLegalCount = () => landRecords.filter(r => r.status === 'legal').length;
  const getIllegalCount = () => landRecords.filter(r => r.status === 'illegal').length;
  const getGovtCount = () => landRecords.filter(r => r.status === 'govt').length;
  const getNoRegistryCount = () => landRecords.filter(r => r.status === 'no-registry').length;

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
      <div className="absolute top-4 left-4 z-10 glass-effect p-2 rounded-lg shadow-sm">
        <div className="text-xs font-medium mb-1 text-gray-800">Land Status</div>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-risk-low mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-600">Legal ({getLegalCount()})</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-risk-high mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-600">Illegal ({getIllegalCount()})</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-landsecure-500 mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-600">Government ({getGovtCount()})</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-risk-medium mr-2 animate-pulse"></div>
            <span className="text-xs text-gray-600">No Registry ({getNoRegistryCount()})</span>
          </div>
        </div>
      </div>
      <div className="map-gradient-overlay"></div>
      
      {/* Search bar overlay */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 glass-effect px-3 py-2 rounded-full shadow-md z-10 flex items-center gap-2 min-w-64">
        <input 
          type="text" 
          placeholder="Search by plot number or location..." 
          className="text-sm bg-transparent border-none outline-none flex-1 text-gray-700 placeholder-gray-400"
        />
        <button className="text-landsecure-600 hover:text-landsecure-700 transition-colors">
          <AlertTriangle size={16} />
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
