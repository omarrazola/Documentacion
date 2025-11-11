import { useState } from "react";
import { LandingSelector } from "./components/LandingSelector";
import { CarPlayDocs } from "./components/CarPlayDocs";
import { AndroidAutoDocs } from "./components/AndroidAutoDocs";
import { SkipToContent } from "./components/SkipToContent";

type Platform = 'selector' | 'carplay' | 'android-auto';

export default function App() {
  const [currentView, setCurrentView] = useState<Platform>('selector');

  const handleSelectPlatform = (platform: 'carplay' | 'android-auto') => {
    setCurrentView(platform);
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setCurrentView('selector');
    // Scroll to top when going back
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSwitchPlatform = () => {
    const newPlatform = currentView === 'carplay' ? 'android-auto' : 'carplay';
    setCurrentView(newPlatform);
    // Scroll to top when switching platforms
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="transition-colors duration-300">
      {/* WCAG 2.2 AA - Skip to main content link */}
      <SkipToContent />
      
      {/* Main content wrapper with id for skip link */}
      <main id="main-content">
        {/* Render based on current view */}
        {currentView === 'carplay' && <CarPlayDocs onBack={handleBack} onSwitchPlatform={handleSwitchPlatform} />}
        {currentView === 'android-auto' && <AndroidAutoDocs onBack={handleBack} onSwitchPlatform={handleSwitchPlatform} />}
        {currentView === 'selector' && <LandingSelector onSelectPlatform={handleSelectPlatform} />}
      </main>
    </div>
  );
}