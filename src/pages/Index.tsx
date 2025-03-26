
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
import SearchSection from "@/components/SearchSection";
import BankIntegrationSection from "@/components/BankIntegrationSection";
import VerificationSection from "@/components/VerificationSection";
import AuctionSection from "@/components/AuctionSection";
import { setupEnhancedScrollAnimations, animateElementsInView, setupHoverAnimations } from "@/utils/animationUtils";

const Index = () => {
  useEffect(() => {
    // Set up enhanced scroll animations
    const cleanup = setupEnhancedScrollAnimations();
    
    // Animate elements already in view
    animateElementsInView();
    
    // Setup hover animations
    setupHoverAnimations();
    
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
      
      <main className="flex-grow pt-16">
        <HeroSection />
        <SearchSection />
        <FeatureSection />
        <DemoSection />
        <RiskSection />
        <BankIntegrationSection />
        <VerificationSection />
        <AuctionSection />
        <TestimonialSection />
        <RoleSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
