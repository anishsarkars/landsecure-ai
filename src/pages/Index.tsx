
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
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import FAQSection from "@/components/FAQSection";
import { 
  setupEnhancedScrollAnimations, 
  animateElementsInView, 
  setupHoverAnimations,
  setupParallaxBackgrounds,
  setupImageRevealAnimations,
  setupSmoothScrolling,
  counterAnimation 
} from "@/utils/animationUtils";

const Index = () => {
  useEffect(() => {
    // Set up all animations
    const cleanup = setupEnhancedScrollAnimations();
    
    // Animate elements already in view
    animateElementsInView();
    
    // Setup hover animations
    setupHoverAnimations();

    // Setup parallax backgrounds
    setupParallaxBackgrounds();
    
    // Setup image reveal animations
    setupImageRevealAnimations();
    
    // Setup smooth scrolling for anchor links
    setupSmoothScrolling();
    
    // Set up counter animations
    const counterElements = document.querySelectorAll('[data-counter]');
    counterElements.forEach(el => {
      const target = parseInt(el.getAttribute('data-counter') || '0', 10);
      counterAnimation(el as HTMLElement, target);
    });
    
    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      cleanup();
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedPropertiesSection />
        <FeatureSection />
        <DemoSection />
        <RiskSection />
        <BankIntegrationSection />
        <VerificationSection />
        <AuctionSection />
        <TestimonialSection />
        <FAQSection />
        <RoleSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
