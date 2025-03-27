
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Star, Clock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { landRecords, formatIndianCurrency, getRiskLevel, getRiskColorClass } from '@/data/landData';

const FeaturedPropertiesSection = () => {
  // Get premium properties (those with no disputes and low risk)
  const featuredProperties = landRecords
    .filter(record => !record.disputes && getRiskLevel(record.riskScore) === 'Low')
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900" data-animate>Featured Properties from Around India</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto" data-animate data-delay="0.1">
              From city apartments to spacious family homes, our verified listings cater to various needs and preferences.
            </p>
          </div>
          
          {/* Featured property cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger data-stagger-amount="0.15">
            {featuredProperties.map((property) => (
              <div 
                key={property.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                data-stagger-item
                data-hover-animate
                data-hover-effect="lift"
              >
                <div className="relative" data-image-reveal>
                  <img 
                    src={`https://source.unsplash.com/featured/600x400/?property,${property.location.state.toLowerCase()}`} 
                    alt={property.plotNumber} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white py-1 px-3 rounded-full text-xs font-semibold shadow-sm">
                    {property.status === 'legal' ? 'Verified' : 'Unverified'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {property.plotNumber}
                    </h3>
                    <span className="text-landsecure-600 font-semibold">
                      {formatIndianCurrency(property.marketValue)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location.village}, {property.location.district}, {property.location.state}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-5">
                    <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
                      {property.area.value} {property.area.unit}
                    </div>
                    <div className="bg-gray-100 rounded-full px-3 py-1 text-xs">
                      Owner: {property.owner.name}
                    </div>
                    <div className={`rounded-full px-3 py-1 text-xs ${getRiskLevel(property.riskScore) === 'Low' ? 'bg-risk-low/10 text-risk-low' : 'bg-risk-medium/10 text-risk-medium'}`}>
                      Risk: {getRiskLevel(property.riskScore)}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-4 mt-4">
                    <Button 
                      variant="outline" 
                      className="w-full text-landsecure-600 border-landsecure-200 hover:bg-landsecure-50 hover:border-landsecure-300 transition-all"
                      asChild
                    >
                      <Link to={`/property/${property.id}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center" data-animate>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link to="/search">
                View All Properties
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
