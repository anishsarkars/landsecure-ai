
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to set up enhanced scroll animations
export const setupEnhancedScrollAnimations = () => {
  if (typeof window === 'undefined') return () => {};

  const animateElements = document.querySelectorAll('[data-animate]');
  const staggerElements = document.querySelectorAll('[data-stagger]');
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  const fadeElements = document.querySelectorAll('[data-fade]');
  const scaleElements = document.querySelectorAll('[data-scale]');
  const rotateElements = document.querySelectorAll('[data-rotate]');
  
  // Set up standard animations
  animateElements.forEach((element) => {
    const delayAttr = element.getAttribute('data-delay');
    // Fix: Convert string to number or use 0 as default
    const delay = delayAttr ? parseFloat(delayAttr) : 0;
    
    gsap.fromTo(
      element,
      { 
        y: 50, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Set up staggered animations
  staggerElements.forEach((parent) => {
    const children = parent.querySelectorAll('[data-stagger-item]');
    const staggerAmountAttr = parent.getAttribute('data-stagger-amount');
    // Fix: Convert string to number or use 0.1 as default
    const staggerAmount = staggerAmountAttr ? parseFloat(staggerAmountAttr) : 0.1;
    
    gsap.fromTo(
      children,
      { 
        y: 30, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: staggerAmount,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: parent,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Set up parallax effect
  parallaxElements.forEach((element) => {
    const strengthAttr = element.getAttribute('data-parallax-strength');
    // Fix: Convert string to number or use 30 as default
    const strength = strengthAttr ? parseFloat(strengthAttr) : 30;
    
    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: -strength,
        ease: 'none',
        scrollTrigger: {
          trigger: element.parentElement || element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  });
  
  // Set up fade animations
  fadeElements.forEach((element) => {
    const direction = element.getAttribute('data-fade-direction') || 'up';
    const distanceAttr = element.getAttribute('data-fade-distance');
    const distance = distanceAttr ? parseFloat(distanceAttr) : 50;
    
    // Fix: Properly set variables for different directions
    let fromObj: {opacity: number, y?: number, x?: number} = { opacity: 0 };
    
    // Set direction of fade
    switch(direction) {
      case 'up':
        fromObj = { ...fromObj, y: distance };
        break;
      case 'down':
        fromObj = { ...fromObj, y: -distance };
        break;
      case 'left':
        fromObj = { ...fromObj, x: distance };
        break;
      case 'right':
        fromObj = { ...fromObj, x: -distance };
        break;
    }
    
    gsap.fromTo(
      element,
      fromObj,
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Set up scale animations
  scaleElements.forEach((element) => {
    const fromAttr = element.getAttribute('data-scale-from');
    // Fix: Convert string to number or use 0.8 as default
    const from = fromAttr ? parseFloat(fromAttr) : 0.8;
    
    gsap.fromTo(
      element,
      { 
        scale: from, 
        opacity: 0 
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Set up rotate animations
  rotateElements.forEach((element) => {
    const fromAttr = element.getAttribute('data-rotate-from');
    // Fix: Convert string to number or use -5 as default
    const from = fromAttr ? parseFloat(fromAttr) : -5;
    
    gsap.fromTo(
      element,
      { 
        rotation: from, 
        opacity: 0 
      },
      {
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  // Return cleanup function to kill all ScrollTrigger instances
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
};

// Function to animate elements already in view on initial load
export const animateElementsInView = () => {
  const elements = document.querySelectorAll('[data-animate-onload]');
  
  elements.forEach((element, index) => {
    const delay = index * 0.1;
    
    gsap.fromTo(
      element,
      { 
        y: 20, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: delay,
        ease: 'power2.out'
      }
    );
  });
};

// Function to create hover animations
export const setupHoverAnimations = () => {
  const hoverElements = document.querySelectorAll('[data-hover-animate]');
  
  hoverElements.forEach((element) => {
    const effect = element.getAttribute('data-hover-effect') || 'scale';
    
    element.addEventListener('mouseenter', () => {
      switch(effect) {
        case 'scale':
          gsap.to(element, { scale: 1.05, duration: 0.3, ease: 'power1.out' });
          break;
        case 'lift':
          gsap.to(element, { y: -10, duration: 0.3, ease: 'power1.out' });
          break;
        case 'glow':
          gsap.to(element, { boxShadow: '0 0 15px rgba(14, 165, 233, 0.5)', duration: 0.3 });
          break;
      }
    });
    
    element.addEventListener('mouseleave', () => {
      switch(effect) {
        case 'scale':
          gsap.to(element, { scale: 1, duration: 0.3, ease: 'power1.out' });
          break;
        case 'lift':
          gsap.to(element, { y: 0, duration: 0.3, ease: 'power1.out' });
          break;
        case 'glow':
          gsap.to(element, { boxShadow: '0 0 0px rgba(14, 165, 233, 0)', duration: 0.3 });
          break;
      }
    });
  });
};

// Function to create a fancy text reveal animation
export const textRevealAnimation = (element: HTMLElement | null) => {
  if (!element) return;
  
  const text = element.textContent || '';
  element.textContent = '';
  element.style.visibility = 'visible';
  
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.style.opacity = '0';
    span.style.display = 'inline-block';
    element.appendChild(span);
  }
  
  const chars = element.querySelectorAll('span');
  gsap.fromTo(
    chars,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 0.5,
      ease: 'power2.out'
    }
  );
};

// Function to create a counter animation
export const counterAnimation = (element: HTMLElement | null, target: number, duration: number = 2, prefix: string = '', suffix: string = '') => {
  if (!element) return;
  
  let start = 0;
  const format = new Intl.NumberFormat('en-IN');
  
  gsap.to({ count: start }, {
    count: target,
    duration: duration,
    ease: 'power2.out',
    onUpdate: function() {
      const current = Math.round(this.targets()[0].count);
      element.textContent = `${prefix}${format.format(current)}${suffix}`;
    }
  });
};
