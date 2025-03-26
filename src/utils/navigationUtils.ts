
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

// Helper for handling page navigation with toast feedback
export const useNavigation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const navigateTo = useCallback((path: string, options?: { 
    message?: string, 
    pageTitle?: string,
    delay?: number
  }) => {
    const { message, pageTitle, delay = 0 } = options || {};
    
    if (message) {
      toast({
        title: pageTitle || "Navigating",
        description: message,
        duration: 2000,
      });
    }
    
    if (delay > 0) {
      setTimeout(() => navigate(path), delay);
    } else {
      navigate(path);
    }
  }, [navigate, toast]);
  
  return { navigateTo };
};

// Helper to smooth scroll to elements
export const scrollToElement = (elementId: string, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    return true;
  }
  return false;
};

// Helper to scroll to top of page
export const scrollToTop = (smooth = true) => {
  window.scrollTo({ 
    top: 0, 
    behavior: smooth ? 'smooth' : 'auto' 
  });
};
