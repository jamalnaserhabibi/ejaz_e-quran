import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();
  const TRACKING_ID = "G-YF1GVCPPFG"; // Your Measurement ID
  
  // Load and initialize Google Analytics
  useEffect(() => {
    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
    document.head.appendChild(script);
    
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', TRACKING_ID);
    
    // Cleanup function
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  // Track page view when route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', TRACKING_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [location, TRACKING_ID]);
  
  return null; 
};

export default GoogleAnalytics;