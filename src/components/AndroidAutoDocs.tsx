import { useState, useEffect } from "react";
import { ArrowLeft, Menu } from "lucide-react";
import { AndroidAutoHero } from "./AndroidAutoHero";
import { WhyAndroidAuto } from "./WhyAndroidAuto";
import { AndroidAutoDesignPrinciples } from "./AndroidAutoDesignPrinciples";
import { QuickDestinations } from "./QuickDestinations";
import { AndroidAutoTemplates } from "./AndroidAutoTemplates";
import { MinimalistAesthetic } from "./MinimalistAesthetic";
import { AndroidAutoResources } from "./AndroidAutoResources";
import { AndroidAutoFAQs } from "./AndroidAutoFAQs";
import { HeaderSearch } from "./HeaderSearch";

interface AndroidAutoDocsProps {
  onBack: () => void;
  onSwitchPlatform: () => void;
}

export function AndroidAutoDocs({ onBack, onSwitchPlatform }: AndroidAutoDocsProps) {
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
      'why-android-auto': ['por qué', 'porque', 'beneficios', 'ventajas', 'seguro', 'seguridad', 'google', 'android', 'conducción', 'conducir', 'vehiculo', 'vehículo', 'auto', 'coche', 'optimizada'],
      'design-principles': ['principios', 'diseño', 'diseñar', 'seguridad', 'visibilidad', 'táctil', 'tactil', 'interacción', 'interactuar', 'consistencia', 'material', 'botones', 'botón', 'contraste', 'legibilidad', 'touch', 'tocar', 'ratio', 'accesibilidad', 'color', 'colores', 'modo oscuro', 'dark mode', 'claro', 'oscuro', 'día', 'noche', 'driving state', 'estado conducción', 'listas', 'límites'],
      'quick-destinations': ['destinos', 'destinos rápidos', 'favoritos', 'rápidos', 'recientes', 'guardados', 'categorías', 'voz', 'comandos', 'buscar', 'búsqueda', 'casa', 'trabajo', 'gasolinera'],
      'templates': ['plantillas', 'templates', 'map', 'mapa', 'list', 'lista', 'grid', 'cuadrícula', 'search', 'buscar', 'búsqueda', 'poi', 'point of interest', 'navegación', 'navegacion', 'rutas', 'tráfico', 'trafico'],
      'aesthetic': ['estética', 'estetica', 'visual', 'interfaz', 'minimalista', 'limpio', 'tipografía', 'tipografia', 'espaciado', 'layout', 'colores', 'theme', 'tema'],
      'faqs': ['preguntas', 'faq', 'faqs', 'dudas', 'ayuda', 'help', 'qué es', 'que es', 'cómo', 'como', 'necesito', 'herramientas', 'documentación', 'oficial', 'kit oficial', 'tipos', 'categorías', 'restricciones', 'distraction', 'dhd'],
      'resources': ['recursos', 'enlaces', 'documentación', 'documentacion', 'artículos', 'articulos', 'ejemplos', 'guidelines', 'oficial', 'developer', 'library', 'app library', 'cars']
    };

    // Find matching section
    for (const [section, keywords] of Object.entries(sectionKeywords)) {
      if (keywords.some(keyword => keyword.includes(query) || query.includes(keyword))) {
        setHighlightedSection(section);
        
        // Scroll to section with offset for fixed header
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
        return;
      }
    }
  };

  // Clear highlight after animation
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
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.43 11.43 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 001 18h22a10.81 10.81 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
                </svg>
              </div>
              <span className="hidden sm:inline" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Android Auto Guide
              </span>
            </div>
            
            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-md">
              <HeaderSearch onSearch={handleSearch} placeholder="Buscar en la documentación..." />
            </div>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
              <a 
                href="#why-android-auto" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Por qué
              </a>
              <a 
                href="#design-principles" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Principios
              </a>
              <a 
                href="#templates" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Plantillas
              </a>
              <a 
                href="#quick-destinations" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Destinos rápidos
              </a>
              <a 
                href="#aesthetic" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Estética
              </a>
              <a 
                href="#resources" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                Recursos
              </a>
              <a 
                href="#faqs" 
                className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap"
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                FAQs
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main content with top padding for fixed nav */}
      <div className="pt-16">
        {/* Floating Switch Platform Button - Bottom Right */}
        <button
          onClick={onSwitchPlatform}
          className="fixed bottom-8 right-8 z-50 bg-white hover:bg-gray-50 text-blue-600 rounded-full p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.2)] transition-all hover:scale-110 group border border-gray-200"
          aria-label="Cambiar a Apple CarPlay"
          style={{ width: '64px', height: '64px' }}
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <span className="absolute -top-12 right-0 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Cambiar a Apple CarPlay
          </span>
        </button>

        <AndroidAutoHero onBack={onBack} />
        <div 
          id="why-android-auto"
          className={highlightedSection === 'why-android-auto' ? 'animate-pulse-once' : ''}
        >
          <WhyAndroidAuto />
        </div>
        <div 
          id="design-principles"
          className={highlightedSection === 'design-principles' ? 'animate-pulse-once' : ''}
        >
          <AndroidAutoDesignPrinciples />
        </div>
        <div 
          id="templates"
          className={highlightedSection === 'templates' ? 'animate-pulse-once' : ''}
        >
          <AndroidAutoTemplates />
        </div>
        <div 
          id="quick-destinations"
          className={highlightedSection === 'quick-destinations' ? 'animate-pulse-once' : ''}
        >
          <QuickDestinations />
        </div>
        <div 
          id="aesthetic"
          className={highlightedSection === 'aesthetic' ? 'animate-pulse-once' : ''}
        >
          <MinimalistAesthetic />
        </div>
        <div 
          id="resources"
          className={highlightedSection === 'resources' ? 'animate-pulse-once' : ''}
        >
          <AndroidAutoResources />
        </div>
        <div 
          id="faqs"
          className={highlightedSection === 'faqs' ? 'animate-pulse-once' : ''}
        >
          <AndroidAutoFAQs />
        </div>
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 700
                  }}
                >
                  Android Auto Guide
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ 
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  Guía de diseño para apps de navegación en Android Auto, basada en documentación oficial de Google.
                </p>
              </div>

              <div>
                <h4 
                  className="text-gray-900 mb-3"
                  style={{ 
                    fontSize: '0.9375rem',
                    fontWeight: 700
                  }}
                >
                  Enlaces útiles
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://developers.google.com/cars/design"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      style={{ fontSize: '0.875rem', fontWeight: 400 }}
                    >
                      Documentación oficial
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.figma.com/community/file/1506418622696735515"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      style={{ fontSize: '0.875rem', fontWeight: 400 }}
                    >
                      Kit de Figma
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://developer.android.com/training/cars/apps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                      style={{ fontSize: '0.875rem', fontWeight: 400 }}
                    >
                      Android Developers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 
                  className="text-gray-900 mb-3"
                  style={{ 
                    fontSize: '0.9375rem',
                    fontWeight: 700
                  }}
                >
                  Créditos
                </h4>
                <p 
                  className="text-gray-600 mb-2"
                  style={{ 
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  Sistema de diseño de{" "}
                  <a 
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    Google
                  </a>
                </p>
                <p 
                  className="text-gray-600"
                  style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    lineHeight: 1.5
                  }}
                >
                  Diseñado para diseñadores UX/UI
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 text-center">
              <p 
            className="text-gray-600"
            style={{ 
              fontSize: '0.875rem',
              fontWeight: 400
            }}
          >
            © 2025 Automotive App Design Guide. Material educativo y de referencia.
            
          </p>
          <p 
            className="text-gray-600"
            style={{ 
              fontSize: '0.875rem',
              fontWeight: 400
            }}
          >
            Creado por{" "}
            <a 
              href="https://www.linkedin.com/in/omarrazolaarevalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              style={{ fontWeight: 600 }}
            >
              Omar Razola
            </a>
          </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}