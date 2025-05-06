import { Outlet } from 'react-router-dom';
import { useState, useEffect } from "react";

import Footer from '@/Components/PageComponents/Footer';
import SplashScreen from '@/Pages/ErrorHomeSplash/SplashScreen';

import '@/SCSS/Page.scss';
import '@/SCSS/Header.scss';

// Navigation Styles Start
import '@/SCSS/Navigation.scss';
import '@/SCSS/SharedStyles/NavigationStyles/Navigation.scss';
import '@/SCSS/SharedStyles/NavigationStyles/SearchModal.scss';
// Navigation Styles End

import '@/SCSS/Footer.scss';
import '@/SCSS/Error.scss';
import '@/SCSS/BackToTop.scss';
import '@/SCSS/Notes.scss';
import '@/SCSS/SplashScreen.scss';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="appContainer">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <div className="contentWrapper">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
