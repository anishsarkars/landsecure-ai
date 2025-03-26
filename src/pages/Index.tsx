
import React, { useEffect } from "react";
import {
  Navbar,
  Footer,
  HeroSection,
  FeatureSection,
  DemoSection,
  RiskSection,
  TestimonialSection,
  RoleSection,
  CTASection,
} from "@/components";
import { setupScrollAnimations } from "@/utils/animationObserver";

const Index = () => {
  useEffect(() => {
    // Set up scroll animations
    const cleanup = setupScrollAnimations();
    
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      cleanup();
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeatureSection />
        <DemoSection />
        <RiskSection />
        <TestimonialSection />
        <RoleSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
