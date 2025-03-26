
import mapboxgl from 'mapbox-gl';

/**
 * Create a marker element for a map
 * @param status The legal status of the land plot
 * @param id The unique ID of the marker
 * @param onClick Function to call when marker is clicked
 * @returns HTML Element for the marker
 */
export const createMarkerElement = (
  status: 'legal' | 'illegal' | 'govt' | 'no-registry',
  id: number,
  onClick: () => void
): HTMLElement => {
  const markerEl = document.createElement('div');
  markerEl.className = `plot-marker ${status}`;
  markerEl.id = `marker-${id}`;
  markerEl.addEventListener('click', onClick);
  return markerEl;
};

/**
 * Format land status text with proper capitalization
 * @param status The land status string
 * @returns Formatted status text
 */
export const formatLandStatus = (status: string): string => {
  // Handle hyphenated status like "no-registry"
  if (status.includes('-')) {
    return status.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Handle regular status
  return status.charAt(0).toUpperCase() + status.slice(1);
};

/**
 * Get CSS classes for status indicators
 * @param status The land status
 * @returns CSS class string for styling
 */
export const getStatusClasses = (
  status: 'legal' | 'illegal' | 'govt' | 'no-registry'
): string => {
  switch (status) {
    case 'legal':
      return 'bg-green-100 text-green-800';
    case 'illegal':
      return 'bg-red-100 text-red-800';
    case 'govt':
      return 'bg-blue-100 text-blue-800';
    case 'no-registry':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Get the risk level color class based on risk level
 * @param risk The risk level string
 * @returns CSS class for the risk color
 */
export const getRiskColorClass = (risk: string): string => {
  const lowercaseRisk = risk.toLowerCase();
  
  if (lowercaseRisk.includes('low')) {
    return 'text-risk-low';
  } else if (lowercaseRisk.includes('medium')) {
    return 'text-risk-medium';
  } else if (lowercaseRisk.includes('high')) {
    return 'text-risk-high';
  }
  
  return 'text-gray-600';
};
