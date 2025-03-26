
import React, { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components';
import { landRecords, indianStates, searchLandRecords, getRiskLevel, formatIndianCurrency } from '@/data/landData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useLocation } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Search, Filter, MapPin, Home, IndianRupee, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { setupHoverAnimations, setupEnhancedScrollAnimations } from '@/utils/animationUtils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const SearchResults = () => {
  // Get search params from URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState(landRecords);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<'Low' | 'Medium' | 'High' | ''>('');
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState('list');
  const { toast } = useToast();
  
  // Get available districts based on selected state
  const getAvailableDistricts = () => {
    if (!selectedState) return [];
    const stateObj = indianStates.find(state => state.name === selectedState);
    return stateObj ? stateObj.districts : [];
  };
  
  // Handle search
  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulate API delay
    setTimeout(() => {
      const results = searchLandRecords(searchQuery, {
        state: selectedState,
        district: selectedDistrict,
        status: selectedStatus || undefined,
        riskLevel: selectedRiskLevel || undefined
      });
      
      setSearchResults(results);
      setIsSearching(false);
      
      // Show toast with results count
      toast({
        title: "Search Results",
        description: `Found ${results.length} properties matching your criteria`,
        duration: 3000,
      });
    }, 800);
  };
  
  // Handle filter reset
  const handleResetFilters = () => {
    setSelectedState('');
    setSelectedDistrict('');
    setSelectedStatus('');
    setSelectedRiskLevel('');
    
    // Run search with just the text query
    setTimeout(() => {
      const results = searchLandRecords(searchQuery);
      setSearchResults(results);
      
      toast({
        title: "Filters Reset",
        description: "All filters have been cleared",
        duration: 2000,
      });
    }, 100);
  };
  
  // Effect to handle initial search
  useEffect(() => {
    if (initialQuery) {
      handleSearch();
    }
    
    // Set up animations
    const cleanupScrollAnimations = setupEnhancedScrollAnimations();
    setupHoverAnimations();
    
    return () => {
      cleanupScrollAnimations();
    };
  }, []);
  
  // Get property status badge
  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'legal':
        return <Badge className="bg-risk-low/20 text-risk-low">Legal</Badge>;
      case 'illegal':
        return <Badge className="bg-risk-high/20 text-risk-high">Illegal</Badge>;
      case 'govt':
        return <Badge className="bg-landsecure-500/20 text-landsecure-700">Government</Badge>;
      case 'no-registry':
        return <Badge className="bg-risk-medium/20 text-risk-medium">No Registry</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  
  // Get risk badge
  const getRiskBadge = (riskScore: number) => {
    const riskLevel = getRiskLevel(riskScore);
    switch(riskLevel) {
      case 'Low':
        return <Badge className="bg-risk-low/20 text-risk-low">Low Risk</Badge>;
      case 'Medium':
        return <Badge className="bg-risk-medium/20 text-risk-medium">Medium Risk</Badge>;
      case 'High':
        return <Badge className="bg-risk-high/20 text-risk-high">High Risk</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };
  
  // Get risk icon
  const getRiskIcon = (riskScore: number) => {
    const riskLevel = getRiskLevel(riskScore);
    switch(riskLevel) {
      case 'Low':
        return <CheckCircle className="h-5 w-5 text-risk-low" />;
      case 'Medium':
        return <AlertTriangle className="h-5 w-5 text-risk-medium" />;
      case 'High':
        return <XCircle className="h-5 w-5 text-risk-high" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 pt-16">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Search</h1>
            
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  className="pl-10"
                  placeholder="Search by plot number, location, or owner..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                  className="min-w-[100px]"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                  {(selectedState || selectedDistrict || selectedStatus || selectedRiskLevel) && (
                    <span className="ml-2 h-5 w-5 rounded-full bg-landsecure-600 text-white text-xs flex items-center justify-center">
                      {[selectedState, selectedDistrict, selectedStatus, selectedRiskLevel].filter(Boolean).length}
                    </span>
                  )}
                </Button>
                
                <Button onClick={handleSearch} className="bg-landsecure-600 hover:bg-landsecure-700 min-w-[100px]">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
            
            {/* Filters */}
            {isFiltersVisible && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in" data-animate-onload>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium text-gray-900">Filter Properties</h3>
                  <Button variant="ghost" size="sm" onClick={handleResetFilters}>Reset</Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All States</SelectItem>
                        {indianStates.map(state => (
                          <SelectItem key={state.name} value={state.name}>{state.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Select 
                      value={selectedDistrict} 
                      onValueChange={setSelectedDistrict}
                      disabled={!selectedState}
                    >
                      <SelectTrigger id="district">
                        <SelectValue placeholder="Select district" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Districts</SelectItem>
                        {getAvailableDistricts().map(district => (
                          <SelectItem key={district} value={district}>{district}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="status">Property Status</Label>
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger id="status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Statuses</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="illegal">Illegal</SelectItem>
                        <SelectItem value="govt">Government</SelectItem>
                        <SelectItem value="no-registry">No Registry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="risk">Risk Level</Label>
                    <Select 
                      value={selectedRiskLevel} 
                      onValueChange={(value) => setSelectedRiskLevel(value as any)}
                    >
                      <SelectTrigger id="risk">
                        <SelectValue placeholder="Select risk level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Risk Levels</SelectItem>
                        <SelectItem value="Low">Low Risk</SelectItem>
                        <SelectItem value="Medium">Medium Risk</SelectItem>
                        <SelectItem value="High">High Risk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Search Results */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {isSearching ? 'Searching...' : `${searchResults.length} Properties Found`}
              </h2>
              <p className="text-sm text-gray-600">
                {searchQuery ? `Search results for "${searchQuery}"` : 'Showing all available properties'}
              </p>
            </div>
            
            <Tabs value={viewMode} onValueChange={setViewMode} className="w-auto">
              <TabsList className="h-9 bg-gray-100">
                <TabsTrigger value="list" className="px-3 text-xs h-7">
                  List View
                </TabsTrigger>
                <TabsTrigger value="grid" className="px-3 text-xs h-7">
                  Grid View
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {isSearching ? (
            <div className="flex justify-center items-center py-16">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-landsecure-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Searching properties...</p>
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <AlertTriangle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Properties Found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any properties matching your search criteria.</p>
              <Button onClick={handleResetFilters}>Reset Filters</Button>
            </div>
          ) : (
            <TabsContent value="list" className="mt-0">
              <div className="space-y-4">
                {searchResults.map((property, index) => (
                  <Card 
                    key={property.id} 
                    className="overflow-hidden hover:shadow-md transition-shadow"
                    data-stagger-item
                  >
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 bg-gray-50 flex flex-col justify-between">
                          <div>
                            <h3 className="font-medium text-gray-900">{property.plotNumber}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {getStatusBadge(property.status)}
                              {getRiskBadge(property.riskScore)}
                            </div>
                          </div>
                          
                          <div className="mt-4 md:mt-0">
                            <div className="text-sm text-gray-500 mb-1">Risk Score</div>
                            <div className="flex items-center justify-between text-sm">
                              <Progress value={property.riskScore} className="w-4/5 h-2" 
                                style={{
                                  background: '#e5e7eb',
                                  '--progress-background': property.riskScore < 30 ? 'var(--risk-low)' : 
                                                         property.riskScore < 70 ? 'var(--risk-medium)' : 
                                                         'var(--risk-high)'
                                } as any}
                              />
                              <span className={
                                property.riskScore < 30 ? 'text-risk-low' : 
                                property.riskScore < 70 ? 'text-risk-medium' : 
                                'text-risk-high'
                              }>
                                {property.riskScore}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-3/4 p-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <div className="flex items-center gap-1 text-gray-600 text-sm mb-2">
                                <MapPin className="h-4 w-4" />
                                <span>
                                  {property.location.village}, {property.location.district}, {property.location.state}
                                </span>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm my-2">
                                <div className="flex items-center gap-1">
                                  <Home className="h-4 w-4 text-gray-500" />
                                  <span>{property.area.value} {property.area.unit}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <IndianRupee className="h-4 w-4 text-gray-500" />
                                  <span>{formatIndianCurrency(property.marketValue)}</span>
                                </div>
                              </div>
                              
                              <div className="mt-2 mb-4">
                                <span className="text-sm text-gray-700 font-medium">Owner:</span> 
                                <span className="text-sm text-gray-600 ml-1">{property.owner.name}</span>
                                {property.owner.aadhaarLinked && (
                                  <Badge variant="outline" className="ml-2 bg-green-50 text-green-700 border-green-200 text-xs">
                                    Aadhaar Verified
                                  </Badge>
                                )}
                              </div>
                            </div>
                            
                            <div className="mt-2 md:mt-0">
                              {property.disputes && property.disputes.length > 0 && (
                                <div className="flex items-center text-risk-high text-sm mb-2">
                                  <AlertTriangle className="h-4 w-4 mr-1" />
                                  <span>{property.disputes.length} active disputes</span>
                                </div>
                              )}
                              
                              {property.encumbrances && property.encumbrances.length > 0 && (
                                <div className="flex items-center text-risk-medium text-sm mb-2">
                                  <AlertTriangle className="h-4 w-4 mr-1" />
                                  <span>{property.encumbrances.length} encumbrances</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <Separator className="my-2" />
                          
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-gray-500">
                              Last updated: {new Date(property.lastUpdated).toLocaleDateString()}
                            </div>
                            <Button size="sm" asChild className="bg-landsecure-600 hover:bg-landsecure-700">
                              <Link to={`/property/${property.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}
          
          <TabsContent value="grid" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((property) => (
                <Card 
                  key={property.id} 
                  className="overflow-hidden hover:shadow-md transition-shadow"
                  data-hover-animate
                  data-hover-effect="lift"
                >
                  <CardContent className="p-0">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium text-gray-900">{property.plotNumber}</h3>
                        {getRiskIcon(property.riskScore)}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {getStatusBadge(property.status)}
                        {getRiskBadge(property.riskScore)}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>{property.location.district}, {property.location.state}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <Home className="h-4 w-4" />
                          <span>{property.area.value} {property.area.unit}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <IndianRupee className="h-4 w-4" />
                          <span>{formatIndianCurrency(property.marketValue)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-sm font-medium">Owner</div>
                        {property.owner.aadhaarLinked ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                            Verified
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 text-xs">
                            Unverified
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">{property.owner.name}</p>
                      
                      {(property.disputes && property.disputes.length > 0) || 
                       (property.encumbrances && property.encumbrances.length > 0) ? (
                        <div className="mb-4">
                          {property.disputes && property.disputes.length > 0 && (
                            <div className="flex items-center text-risk-high text-xs mb-1">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              <span>{property.disputes.length} active disputes</span>
                            </div>
                          )}
                          
                          {property.encumbrances && property.encumbrances.length > 0 && (
                            <div className="flex items-center text-risk-medium text-xs">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              <span>{property.encumbrances.length} encumbrances</span>
                            </div>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="bg-gray-50 p-4">
                    <Button size="sm" className="w-full bg-landsecure-600 hover:bg-landsecure-700" asChild>
                      <Link to={`/property/${property.id}`}>View Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchResults;
