import { Button } from "./ui/button";
import { Alert } from "./ui/alert";
import { Info, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import androidAutoImage from "figma:asset/5f100f36fefd106f73c3b008374938e6dd7906cb.png";

interface AndroidAutoHeroProps {
  onBack?: () => void;
}

export function AndroidAutoHero({ onBack }: AndroidAutoHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-8 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors cursor-pointer group"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Volver</span>
          </button>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className="text-left flex flex-col justify-center">
            <h1 
              className="text-gray-900 dark:text-gray-50 mb-6"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.2
              }}
            >
              Diseña Apps para Android Auto
            </h1>
            
            <p 
              className="text-gray-700 dark:text-gray-300 mb-8"
              style={{ 
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontWeight: 600,
                lineHeight: 1.5
              }}
            >
              Guía para diseñadores UX/UI: del sistema oficial a tu pantalla en el coche
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white transition-all w-full sm:w-auto"
                style={{ fontSize: '1.125rem', fontWeight: 400, height: '50px', padding: '0 2.5rem' }}
                asChild
              >
                <a 
                  href="https://developers.google.com/cars/design/create-apps/app-types/navigation?hl=es-419" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver documentación oficial
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200 w-full sm:w-auto"
                style={{ fontSize: '1.125rem', fontWeight: 400, height: '50px', padding: '0 2.5rem' }}
                asChild
              >
                <a 
                  href="https://www.figma.com/community/file/1506418622696735515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir kit de diseño en Figma
                </a>
              </Button>
            </div>

            <Alert className="bg-blue-50/95 dark:bg-blue-950/50 border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <div className="ml-3">
                <p className="text-blue-900 dark:text-blue-200" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  Esta guía está basada en el <strong>sistema oficial de Android for Cars App Library</strong> de Google.
                </p>
              </div>
            </Alert>
          </div>

          {/* Right Image Container */}
          <div className="relative flex items-stretch">
            <div className="relative rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 w-full" style={{ maxHeight: '500px' }}>
              <ImageWithFallback
                src={androidAutoImage}
                alt="Android Auto Navigation Interface"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 35%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
            </div>
            {/* Decorative blur circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 dark:bg-green-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}