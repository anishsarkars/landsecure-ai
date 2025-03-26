
export const setupScrollAnimations = () => {
  if (typeof window !== 'undefined') {
    const animateElements = document.querySelectorAll('[data-animate]');
    
    if (animateElements.length === 0) return;
    
    document.body.classList.add('scroll-animations');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px',
      }
    );
    
    animateElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animateElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }
  
  return () => {};
};
