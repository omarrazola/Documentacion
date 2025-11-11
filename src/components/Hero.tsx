import { Button } from "./ui/button";
import { Alert } from "./ui/alert";
import { AlertCircle, ArrowLeft } from "lucide-react";
import heroImage from "figma:asset/3c7843b69c72b5b079328b16d25eef0059ac9e40.png";

interface HeroProps {
  onBack?: () => void;
}

export function Hero({ onBack }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-8 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>Volver</span>
          </button>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="text-left flex flex-col justify-center h-full">
            <h1 
              className="text-gray-900 dark:text-gray-50 mb-6"
              style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.2
              }}
            >
              Diseña Apps para Apple CarPlay
            </h1>
            
            <p 
              className="text-gray-700 dark:text-gray-300 mb-8"
              style={{ 
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                fontWeight: 600,
                lineHeight: 1.5
              }}
            >
              Guía práctica basada en los requisitos oficiales y un kit de diseño de Figma
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all w-full sm:w-auto text-white"
                style={{ fontSize: '1.125rem', fontWeight: 400, height: '50px', padding: '0 2.5rem' }}
                asChild
              >
                <a 
                  href="https://developer.apple.com/download/files/CarPlay-Developer-Guide.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Descargar guía oficial
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
                  href="https://iberdrolasite.atlassian.net/browse/ADD-67?atlOrigin=eyJpIjoiOTJhNGUwMjQzNDBhNGU5NzgxZjZhYjg0NGQ4Mjk3NTQiLCJwIjoiaiJ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver kit de Figma
                </a>
              </Button>
            </div>

            <Alert className="bg-amber-50/95 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800 backdrop-blur-sm">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <div className="ml-3">
                <p className="text-amber-900 dark:text-amber-200" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  El Design Kit de Figma ha sido creado por un usuario de la comunidad y <strong>no es oficial de Apple</strong>.
                </p>
              </div>
            </Alert>
          </div>

          {/* Right Image Container */}
          <div className="relative flex items-center h-full">
            <div className="relative rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-gray-700 w-full shadow-2xl">
              <img
                src={heroImage}
                alt="Apple CarPlay Navigation Interface - Interior de vehículo con pantalla de navegación"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative blur circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}