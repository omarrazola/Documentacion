import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Apple, Info } from "lucide-react";
import androidAutoImage from "figma:asset/e96912fe460b7728e6a726136171d2ab285c7834.png";
import carPlayImage from "figma:asset/3c7843b69c72b5b079328b16d25eef0059ac9e40.png";

interface LandingSelectorProps {
  onSelectPlatform: (platform: 'carplay' | 'android-auto') => void;
}

export function LandingSelector({ onSelectPlatform }: LandingSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header - Fixed like other pages */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div>
                <h1 
                  className="text-gray-900"
                  style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    lineHeight: 1.2
                  }}
                >
                  Automotive App Design
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Add padding-top to account for fixed header */}
      <div className="pt-28 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <div className="text-center mb-16">
            <h2 
              className="text-gray-900 mb-4"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 900,
                lineHeight: 1.1
              }}
            >
              Elige tu plataforma
            </h2>
            <p 
              className="text-gray-600 max-w-2xl mx-auto"
              style={{ 
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Accede a guías detalladas, requisitos oficiales y kits de diseño para desarrollar aplicaciones optimizadas para conducción.
            </p>
          </div>

          {/* Platform Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Apple CarPlay Card */}
            <Card 
              className="overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group bg-white cursor-pointer"
              onClick={() => onSelectPlatform('carplay')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectPlatform('carplay');
                }
              }}
              aria-label="Seleccionar Apple CarPlay"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <ImageWithFallback
                  src={carPlayImage}
                  alt="Panel de control de Apple CarPlay mostrando navegación y medios"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg" aria-hidden="true">
                    <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ 
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    lineHeight: 1.2
                  }}
                >
                  Apple CarPlay
                </h3>
                
                <p 
                  className="text-gray-600 mb-6"
                  style={{ 
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  Diseña apps integradas con el ecosistema iOS. Incluye plantillas oficiales, principios de HIG, y un kit de Figma creado por la comunidad.
                </p>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6" role="list">
                  {[
                    '8 plantillas especializadas',
                    'Guías de interfaz humana (HIG)',
                    'Kit de diseño de Figma',
                    'Requisitos de accesibilidad'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" aria-hidden="true"></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontSize: '0.9375rem',
                          fontWeight: 400
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPlatform('carplay');
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 group/btn text-white cursor-pointer"
                  size="lg"
                  style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    minHeight: '52px',
                    minWidth: '44px'
                  }}
                  aria-label="Ver documentación de Apple CarPlay"
                >
                  Ver documentación
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </Card>

            {/* Android Auto Card */}
            <Card 
              className="overflow-hidden border-2 border-gray-200 hover:border-green-400 hover:shadow-2xl transition-all duration-300 group bg-white cursor-pointer"
              onClick={() => onSelectPlatform('android-auto')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectPlatform('android-auto');
                }
              }}
              aria-label="Seleccionar Android Auto"
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <ImageWithFallback
                  src={androidAutoImage}
                  alt="Interfaz de Android Auto mostrando navegación y aplicaciones"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg" aria-hidden="true">
                    <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.43 11.43 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.81 10.81 0 001 18h22a10.81 10.81 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 
                  className="text-gray-900 mb-3"
                  style={{ 
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    lineHeight: 1.2
                  }}
                >
                  Android Auto
                </h3>
                
                <p 
                  className="text-gray-600 mb-6"
                  style={{ 
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  Desarrolla apps para el ecosistema Android en vehículos. Accede a documentación oficial de Google y mejores prácticas de diseño.
                </p>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6" role="list">
                  {[
                    'Material Design adaptado',
                    'Templates de navegación',
                    'Guías de Google Developer',
                    'API de Media y Messaging'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true"></div>
                      <span 
                        className="text-gray-700"
                        style={{ 
                          fontSize: '0.9375rem',
                          fontWeight: 400
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPlatform('android-auto');
                  }}
                  className="w-full bg-green-600 hover:bg-green-700 group/btn text-white cursor-pointer"
                  size="lg"
                  style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    minHeight: '52px',
                    minWidth: '44px'
                  }}
                  aria-label="Ver documentación de Android Auto"
                >
                  Ver documentación
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <div 
            className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 max-w-4xl mx-auto"
            role="note"
            aria-label="Información importante sobre los recursos"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p 
                  className="text-gray-700 mb-2"
                  style={{ 
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  <strong className="text-gray-900">Nota importante:</strong> Las guías de Apple CarPlay están basadas en documentación oficial y recursos de la comunidad. Los kits de diseño de Figma mencionados no son oficiales, pero replican fielmente las especificaciones técnicas.
                </p>
                <p 
                  className="text-gray-600"
                  style={{ 
                    fontSize: '0.875rem',
                    fontWeight: 400,
                    lineHeight: 1.5
                  }}
                >
                  Siempre consulta la documentación oficial de{' '}
                  <a 
                    href="https://developer.apple.com/carplay/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline focus-visible:underline cursor-pointer"
                    style={{ fontWeight: 600 }}
                  >
                    Apple CarPlay
                  </a>
                  {' '}y{' '}
                  <a 
                    href="https://developer.android.com/cars" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline focus-visible:underline cursor-pointer"
                    style={{ fontWeight: 600 }}
                  >
                    Android Auto
                  </a>
                  {' '}para obtener la información más actualizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
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
              className="hover:text-blue-600 transition-colors cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              Omar Razola
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}