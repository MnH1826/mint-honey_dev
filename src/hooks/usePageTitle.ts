import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageTitles: Record<string, string> = {
  '/': 'Mint & Honey | Non-GMO Fortified Food Manufacturer | South Africa',
  '/shop': 'Shop | Mint & Honey - Fortified Cereals & Nutrition Products',
  '/bulk-orders': 'Bulk Orders | Mint & Honey - Institutional & Wholesale Pricing',
  '/about': 'About Us | Mint & Honey - Our Story & Mission',
  '/impact': 'Our Impact | Mint & Honey - Fighting Malnutrition in Africa',
  '/contact': 'Contact | Mint & Honey - Get In Touch',
  '/privacy-policy': 'Privacy Policy | Mint & Honey',
  '/terms-conditions': 'Terms & Conditions | Mint & Honey',
};

export const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || pageTitles['/'];
    document.title = title;
  }, [location]);
};