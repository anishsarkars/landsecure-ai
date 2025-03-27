
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, X, AlertTriangle, Map, FileText, Calendar, BarChart4, Building, IndianRupee, Users, Home } from 'lucide-react';
import { Navbar, Footer } from '@/components';
import { landRecords, LandRecord, formatIndianCurrency, getRiskLevel, getRiskLevelDescription } from '@/data/landData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { setupHoverAnimations, animateElementsInView, textRevealAnimation } from '@/utils/animationUtils';
import { useToast } from '@/hooks/use-toast';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Mapbox access token
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYW5pc2hzYXJrYXJzIiwiYSI6ImNtOG54YnJjZjA1a3Eya29zaGc3YWc2bXkifQ.qMgKYko3eUlWJGTx-fi5sQ';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<LandRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const { toast } = useToast();
  const mapContainer = React.useRef<HTMLDivElement>(null);
  const map = React.useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    // Simulate API call to fetch property data
    setLoading(true);
    setTimeout(() => {
      const foundProperty = landRecords.find(record => record.id === id);
      setProperty(foundProperty || null);
      setLoading(false);
      
      if (foundProperty) {
        toast({
          title: "Property Data Loaded",
          description: `Loaded details for ${foundProperty.plotNumber}`,
          duration: 3000,
        });
        
        // Initialize elements with animation
        animateElementsInView();
        setupHoverAnimations();
        
        // Apply text reveal animation to title
        const titleElement = document.getElementById('property-title');
        if (titleElement) {
          textRevealAnimation(titleElement);
        }
      } else {
        toast({
          title: "Error",
          description: "Property not found",
          variant: "destructive",
          duration: 3000,
        });
      }
    }, 1000);
  }, [id]);
  
  useEffect(() => {
    // Initialize map once property data is loaded
    if (property && mapContainer.current && !map.current) {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [property.location.lng, property.location.lat],
        zoom: 12,
        projection: 'mercator',
        antialias: true,
      });
      
      map.current.on('load', () => {
        // Add marker for the property location
        const markerElement = document.createElement('div');
        markerElement.className = 'property-marker';
        
        // Add pulsing dot
        const pulseElement = document.createElement('div');
        pulseElement.className = 'pulse-dot';
        markerElement.appendChild(pulseElement);
        
        // Style the marker based on property status
        let markerColor = '';
        switch(property.status) {
          case 'legal': markerColor = 'var(--risk-low)'; break;
          case 'illegal': markerColor = 'var(--risk-high)'; break;
          case 'govt': markerColor = 'var(--landsecure-500)'; break;
          case 'no-registry': markerColor = 'var(--risk-medium)'; break;
        }
        
        pulseElement.style.backgroundColor = markerColor;
        
        // Add CSS for pulsing effect
        const style = document.createElement('style');
        style.textContent = `
          .property-marker {
            width: 24px;
            height: 24px;
            position: relative;
          }
          .pulse-dot {
            background-color: ${markerColor};
            width: 16px;
            height: 16px;
            border-radius: 50%;
            position: absolute;
            top: 4px;
            left: 4px;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0.4);
            animation: pulse 2s infinite;
          }
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.4);
            }
            70% {
              box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            }
          }
        `;
        document.head.appendChild(style);
        
        // Add marker to map
        new mapboxgl.Marker(markerElement)
          .setLngLat([property.location.lng, property.location.lat])
          .addTo(map.current!);
          
        // Add a glowing circle
        map.current!.addSource('property-area', {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [property.location.lng, property.location.lat]
            },
            properties: {}
          }
        });
        
        map.current!.addLayer({
          id: 'property-area-glow',
          type: 'circle',
          source: 'property-area',
          paint: {
            'circle-radius': 80,
            'circle-color': markerColor,
            'circle-opacity': 0.15,
            'circle-blur': 0.5
          }
        });
        
        map.current!.addLayer({
          id: 'property-area-outline',
          type: 'circle',
          source: 'property-area',
          paint: {
            'circle-radius': 80,
            'circle-color': 'transparent',
            'circle-stroke-width': 2,
            'circle-stroke-color': markerColor,
            'circle-stroke-opacity': 0.5
          }
        });
      });
      
      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );
    }
    
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [property]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-landsecure-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading property details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto text-center">
            <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-6">We couldn't find the property you're looking for. It might have been removed or the ID is incorrect.</p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const riskLevel = getRiskLevel(property.riskScore);
  const riskColorClass = riskLevel === 'Low' ? 'text-risk-low' : riskLevel === 'Medium' ? 'text-risk-medium' : 'text-risk-high';
  const statusColorClass = property.status === 'legal' ? 'bg-risk-low/20 text-risk-low' : 
                           property.status === 'illegal' ? 'bg-risk-high/20 text-risk-high' : 
                           property.status === 'govt' ? 'bg-landsecure-500/20 text-landsecure-700' : 
                           'bg-risk-medium/20 text-risk-medium';
  
  const statusText = property.status === 'legal' ? 'Legal' : 
                     property.status === 'illegal' ? 'Illegal' : 
                     property.status === 'govt' ? 'Government' : 
                     'No Registry';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 py-6 mb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Button variant="outline" size="sm" asChild className="mb-4 sm:mb-0">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={statusColorClass}>{statusText}</Badge>
                <Badge className={`bg-${riskColorClass.replace('text-', '')}/20 ${riskColorClass}`}>
                  {riskLevel} Risk
                </Badge>
              </div>
            </div>
            
            <h1 id="property-title" className="text-2xl md:text-3xl font-bold text-gray-900 mt-4" style={{visibility: 'hidden'}}>
              {property.plotNumber} - {property.location.village}, {property.location.district}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Map className="h-4 w-4 mr-1" />
                <span>{property.location.district}, {property.location.state}</span>
              </div>
              <div className="flex items-center">
                <Home className="h-4 w-4 mr-1" />
                <span>{property.area.value} {property.area.unit}</span>
              </div>
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 mr-1" />
                <span>{formatIndianCurrency(property.marketValue)}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Last Updated: {new Date(property.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                  <TabsTrigger value="disputes">
                    Disputes
                    {property.disputes && property.disputes.length > 0 && (
                      <span className="ml-1.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-risk-high/20 text-risk-high text-xs">
                        {property.disputes.length}
                      </span>
                    )}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card data-animate-onload>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Users className="h-5 w-5 mr-2 text-landsecure-600" />
                          Owner Information
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="space-y-2">
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Name</dt>
                            <dd className="text-sm font-semibold text-gray-900">{property.owner.name}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Aadhaar Linked</dt>
                            <dd className="text-sm font-semibold text-gray-900">
                              {property.owner.aadhaarLinked ? (
                                <span className="flex items-center text-risk-low">
                                  <Check className="h-4 w-4 mr-1" /> Yes
                                </span>
                              ) : (
                                <span className="flex items-center text-risk-high">
                                  <X className="h-4 w-4 mr-1" /> No
                                </span>
                              )}
                            </dd>
                          </div>
                          {property.owner.contactNumber && (
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Contact</dt>
                              <dd className="text-sm font-semibold text-gray-900">{property.owner.contactNumber}</dd>
                            </div>
                          )}
                        </dl>
                      </CardContent>
                    </Card>
                    
                    <Card data-animate-onload>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <BarChart4 className="h-5 w-5 mr-2 text-landsecure-600" />
                          Risk Assessment
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <div className="text-sm font-medium">Risk Score</div>
                              <div className={`text-sm font-bold ${riskColorClass}`}>{property.riskScore}/100</div>
                            </div>
                            <Progress value={property.riskScore} className="h-2" 
                              style={{
                                background: '#e5e7eb',
                                '--progress-background': property.riskScore < 30 ? 'var(--risk-low)' : 
                                                       property.riskScore < 70 ? 'var(--risk-medium)' : 
                                                       'var(--risk-high)'
                              } as any}
                            />
                          </div>
                          
                          <div className="text-xs text-gray-600 mt-2">
                            {getRiskLevelDescription(property.riskScore)}
                          </div>
                          
                          {property.encumbrances && property.encumbrances.length > 0 && (
                            <div className="mt-2 pt-2 border-t border-gray-100">
                              <div className="text-sm font-medium text-gray-500 mb-1">Encumbrances</div>
                              <ul className="text-sm space-y-1">
                                {property.encumbrances.map((encumbrance, index) => (
                                  <li key={index} className="flex justify-between">
                                    <span>{encumbrance.type}</span>
                                    {encumbrance.amount && (
                                      <span className={riskColorClass}>{formatIndianCurrency(encumbrance.amount)}</span>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <Card data-animate-onload>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Map className="h-5 w-5 mr-2 text-landsecure-600" />
                          Property Location
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div ref={mapContainer} className="w-full h-[400px] rounded-b-lg"></div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="documents" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-landsecure-600" />
                        Property Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {property.documents.map((doc, index) => (
                          <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-landsecure-200 transition-colors" data-hover-animate data-hover-effect="lift">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-sm font-medium text-gray-900">{doc.type}</h3>
                                <p className="text-xs text-gray-500">Uploaded on: {new Date(doc.uploadDate).toLocaleDateString()}</p>
                              </div>
                              <Badge variant={doc.verified ? "default" : "outline"} className={doc.verified ? "bg-risk-low/20 text-risk-low" : "border-risk-high text-risk-high"}>
                                {doc.verified ? "Verified" : "Unverified"}
                              </Badge>
                            </div>
                            <div className="mt-3 flex justify-between">
                              <Button variant="outline" size="sm" className="text-xs">View Document</Button>
                              <Button variant="outline" size="sm" className="text-xs">Download</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-lg text-center">
                        <p className="text-sm text-gray-600 mb-2">Upload additional documents for verification</p>
                        <Button variant="outline" size="sm">Upload Document</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="history" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-landsecure-600" />
                        Ownership History
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative ml-3 border-l-2 border-gray-200 pl-6 pb-1 pt-1">
                        {/* Current owner */}
                        <div className="mb-8 relative">
                          <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-landsecure-600"></div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">{property.owner.name}</span>
                            <span className="text-xs text-gray-500">Current Owner (since {new Date(property.history.transferDates[property.history.transferDates.length - 1] || property.lastUpdated).toLocaleDateString()})</span>
                          </div>
                        </div>
                        
                        {/* Previous owners */}
                        {property.history.previousOwners.map((owner, index) => (
                          <div key={index} className="mb-8 relative">
                            <div className="absolute -left-8 top-0 h-4 w-4 rounded-full bg-gray-400"></div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{owner}</span>
                              <span className="text-xs text-gray-500">
                                {index === 0 ? 'Original Owner' : 'Previous Owner'} 
                                {property.history.transferDates[index] && ` (until ${new Date(property.history.transferDates[index]).toLocaleDateString()})`}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="text-sm text-gray-600">
                        <p>This property has changed hands {property.history.previousOwners.length + 1} times since records began.</p>
                        <p className="mt-1 text-xs text-gray-500">Note: All ownership transfers are recorded on the blockchain for transparency.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="disputes" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2 text-landsecure-600" />
                        Property Disputes
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {property.disputes && property.disputes.length > 0 ? (
                        <div className="space-y-4">
                          {property.disputes.map((dispute, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg bg-gray-50" data-animate-onload>
                              <div className="flex items-start justify-between">
                                <div>
                                  <h3 className="text-sm font-medium text-gray-900">{dispute.type}</h3>
                                  <p className="text-xs text-gray-500">Filed by: {dispute.filedBy} on {new Date(dispute.filedDate).toLocaleDateString()}</p>
                                </div>
                                <Badge className={
                                  dispute.status === 'active' ? 'bg-risk-high/20 text-risk-high' :
                                  dispute.status === 'resolved' ? 'bg-risk-low/20 text-risk-low' :
                                  'bg-risk-medium/20 text-risk-medium'
                                }>
                                  {dispute.status.charAt(0).toUpperCase() + dispute.status.slice(1)}
                                </Badge>
                              </div>
                              <p className="mt-2 text-sm text-gray-600">{dispute.description}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <Check className="h-12 w-12 text-risk-low mx-auto mb-3" />
                          <h3 className="text-lg font-medium text-gray-900 mb-1">No Disputes Found</h3>
                          <p className="text-sm text-gray-600">This property has no recorded disputes or legal issues.</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card data-animate-onload>
                <CardHeader className="pb-3">
                  <CardTitle>Property Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-landsecure-600 hover:bg-landsecure-700">Verify Ownership</Button>
                  <Button variant="outline" className="w-full">Generate Report</Button>
                  <Button variant="outline" className="w-full">Share Property</Button>
                </CardContent>
              </Card>
              
              <Card data-animate-onload>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2 text-landsecure-600" />
                    Nearby Properties
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-xs text-gray-500">
                    Similar properties in {property.location.village}, {property.location.district}
                  </div>
                  
                  {landRecords
                    .filter(record => 
                      record.id !== property.id && 
                      record.location.district === property.location.district
                    )
                    .slice(0, 3)
                    .map((record, index) => (
                      <div key={index} className="p-2 border border-gray-200 rounded-md hover:border-landsecure-200 transition-colors" data-hover-animate data-hover-effect="lift">
                        <div className="flex justify-between">
                          <div className="text-sm font-medium">{record.plotNumber}</div>
                          <Badge className={
                            record.status === 'legal' ? 'bg-risk-low/20 text-risk-low' :
                            record.status === 'illegal' ? 'bg-risk-high/20 text-risk-high' :
                            record.status === 'govt' ? 'bg-landsecure-500/20 text-landsecure-700' :
                            'bg-risk-medium/20 text-risk-medium'
                          }>
                            {record.status.charAt(0).toUpperCase() + record.status.slice(1).replace('-', ' ')}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <div className="text-gray-500">{record.area.value} {record.area.unit}</div>
                          <div>{formatIndianCurrency(record.marketValue)}</div>
                        </div>
                        <Button size="sm" variant="link" asChild className="mt-1 h-auto p-0 text-landsecure-600">
                          <Link to={`/property/${record.id}`}>View Details</Link>
                        </Button>
                      </div>
                    ))
                  }
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="ghost" size="sm" className="w-full text-landsecure-600" asChild>
                    <Link to="/search">View More Properties</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card data-animate-onload>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-landsecure-600" />
                    Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-medium">Risk Level</div>
                    <Badge className={
                      riskLevel === 'Low' ? 'bg-risk-low/20 text-risk-low' :
                      riskLevel === 'Medium' ? 'bg-risk-medium/20 text-risk-medium' :
                      'bg-risk-high/20 text-risk-high'
                    }>
                      {riskLevel}
                    </Badge>
                  </div>
                  
                  <Progress value={property.riskScore} className="h-2" 
                    style={{
                      background: '#e5e7eb',
                      '--progress-background': property.riskScore < 30 ? 'var(--risk-low)' : 
                                             property.riskScore < 70 ? 'var(--risk-medium)' : 
                                             'var(--risk-high)'
                    } as any}
                  />
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-600">Legal Status</span>
                      <span className={property.status === 'legal' ? 'text-risk-low' : property.status === 'illegal' ? 'text-risk-high' : 'text-risk-medium'}>
                        {statusText}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-600">Aadhaar Linked</span>
                      <span className={property.owner.aadhaarLinked ? 'text-risk-low' : 'text-risk-high'}>
                        {property.owner.aadhaarLinked ? 'Yes' : 'No'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-600">Active Disputes</span>
                      <span className={
                        !property.disputes || property.disputes.length === 0 ? 'text-risk-low' : 
                        property.disputes.length > 2 ? 'text-risk-high' : 'text-risk-medium'
                      }>
                        {property.disputes ? property.disputes.length : 0}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-600">Encumbrances</span>
                      <span className={
                        !property.encumbrances || property.encumbrances.length === 0 ? 'text-risk-low' : 
                        property.encumbrances.length > 1 ? 'text-risk-high' : 'text-risk-medium'
                      }>
                        {property.encumbrances ? property.encumbrances.length : 0}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
