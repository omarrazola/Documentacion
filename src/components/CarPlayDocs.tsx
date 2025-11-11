import { useState, useEffect } from "react";
import { Hero } from "./Hero";
import { WhyCarPlay } from "./WhyCarPlay";
import { DesignPrinciples } from "./DesignPrinciples";
import { NavigationTemplates } from "./NavigationTemplates";
import { FigmaKit } from "./FigmaKit";
import { Workflow } from "./Workflow";
import { SearchSection } from "./SearchSection";
import { Resources } from "./Resources";
import { FAQs } from "./FAQs";
import { Footer } from "./Footer";
import { HeaderSearch } from "./HeaderSearch";
import { Menu, ArrowLeft } from "lucide-react";

interface CarPlayDocsProps {
  onBack: () => void;
  onSwitchPlatform: () => void;
}

export function CarPlayDocs({ onBack, onSwitchPlatform }: CarPlayDocsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

  // Search functionality - filters sections based on keywords
  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
    
    if (!query) {
      setHighlightedSection(null);
      return;
    }

    // Map keywords to sections with expanded terms
    const sectionKeywords: Record<string, string[]> = {
      'why-carplay': ['por qué', 'porque', 'beneficios', 'ventajas', 'seguro', 'seguridad', 'ecosistema', 'optimizada', 'apple', 'ios', 'iphone', 'conducción', 'conducir', 'vehiculo', 'vehículo', 'auto', 'coche'],
      'design-principles': ['principios', 'diseño', 'diseñar', 'seguridad', 'visibilidad', 'táctil', 'tactil', 'interacción', 'interactuar', 'consistencia', 'ios', 'botones', 'botón', 'contraste', 'legibilidad', 'touch', 'tocar', 'ratio', 'accesibilidad', 'wcag', 'color', 'colores', 'modo oscuro', 'dark mode', 'claro', 'oscuro'],
      'navigation-templates': ['plantillas', 'templates', 'map', 'mapa', 'list', 'lista', 'grid', 'cuadrícula', 'search', 'buscar', 'búsqueda', 'poi', 'point of interest', 'tab', 'pestaña', 'now playing', 'reproducción', 'voice', 'voz', 'contact', 'contacto', 'information', 'información', 'navegación', 'navegacion'],
      'figma-kit': ['figma', 'kit', 'componentes', 'recursos', 'diseño', 'mockups', 'prototipos', 'audio', 'media', 'listas', 'iconos', 'cta', 'ctas', 'personalizar', 'customizar', 'colores', 'ruta', 'alternativa', 'secundario'],
      'workflow': ['flujo', 'workflow', 'trabajo', 'pasos', 'proceso', 'guía', 'desarrollo', 'desarrollar', 'tutorial', 'cómo', 'como', 'xcode', 'simulador', 'probar', 'app store', 'publicar'],
      'faqs': ['preguntas', 'faq', 'faqs', 'dudas', 'ayuda', 'help', 'qué es', 'que es', 'cómo', 'como', 'necesito', 'herramientas', 'documentación', 'oficial', 'kit oficial', 'tipos', 'categorías'],
      'resources': ['recursos', 'enlaces', 'documentación', 'documentacion', 'artículos', 'articulos', 'ejemplos', 'hig', 'guidelines', 'oficial', 'developer', 'forums']
    };

    // Find matching section
    for (const [section, keywords] of Object.entries(sectionKeywords)) {
      if (keywords.some(keyword => keyword.includes(query) || query.includes(keyword))) {
        setHighlightedSection(section);
        
        // Scroll to section with offset for fixed header
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const headerOffset = 100; // Height of fixed header + padding
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
        return;
      }
    }
    
    setHighlightedSection(null);
  };

  // Remove highlight after some time
  useEffect(() => {
    if (highlightedSection) {
      const timer = setTimeout(() => {
        setHighlightedSection(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [highlightedSection]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="hidden sm:inline" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                CarPlay Guide
              </span>
            </div>

            {/* Search Bar - Center (hidden on mobile) */}
            <div className="hidden lg:block flex-1 max-w-md">
              <HeaderSearch onSearch={handleSearch} />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <a 
                href="#why-carplay" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Por qué
              </a>
              <a 
                href="#design-principles" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Principios
              </a>
              <a 
                href="#navigation-templates" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Plantillas
              </a>
              <a 
                href="#figma-kit" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Figma
              </a>
              <a 
                href="#workflow" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Flujo
              </a>
              <a 
                href="#resources" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Recursos
              </a>
              <a 
                href="#faqs" 
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                FAQs
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Search Bar - Full Width Below */}
          <div className="lg:hidden mt-4">
            <HeaderSearch onSearch={handleSearch} />
          </div>
        </div>
      </nav>

      {/* Main content with top padding for fixed nav */}
      <div className="pt-16">
        {/* Floating Switch Platform Button - Bottom Right */}
        <button
          onClick={onSwitchPlatform}
          className="fixed bottom-8 right-8 z-50 bg-white hover:bg-gray-50 text-green-600 rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] transition-all hover:scale-110 group border border-gray-200"
          aria-label="Cambiar a Android Auto"
          style={{ width: '64px', height: '64px' }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.43 11.43 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 001 18h22a10.81 10.81 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
          </svg>
          <span className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Cambiar a Android Auto
          </span>
        </button>

        <Hero onBack={onBack} />
        
        <div className={highlightedSection === 'why-carplay' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <WhyCarPlay />
        </div>
        
        <div className={highlightedSection === 'design-principles' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <DesignPrinciples />
        </div>
        
        <div className={highlightedSection === 'navigation-templates' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <NavigationTemplates />
        </div>
        
        <div className={highlightedSection === 'figma-kit' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <FigmaKit />
        </div>
        
        <div className={highlightedSection === 'workflow' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <Workflow />
        </div>
        
        <SearchSection onSearch={handleSearch} />
        
        <div className={highlightedSection === 'resources' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <Resources />
        </div>
        
        <div className={highlightedSection === 'faqs' ? 'bg-yellow-50/50 transition-colors duration-500' : ''}>
          <FAQs />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}