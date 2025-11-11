import { Button } from "./ui/button";
import { Alert } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FigmaKit() {
  return (
    <section id="figma-kit" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="mb-6 text-center text-gray-900 dark:text-gray-50"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2
          }}
        >
          Kit de diseño de Figma para CarPlay
        </h2>

        <Alert className="max-w-3xl mx-auto mb-12 bg-amber-50/95 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800 backdrop-blur-sm">
          <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <div className="ml-3">
            <p className="text-amber-900 dark:text-amber-200" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Este kit ha sido creado por un usuario de la comunidad de Figma. <strong>No es oficial de Apple</strong>, pero replica los componentes visuales de CarPlay para facilitar el diseño.
            </p>
          </div>
        </Alert>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 
              className="mb-4 text-gray-900 dark:text-gray-100"
              style={{ 
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3
              }}
            >
              Componentes listos para usar
            </h3>
            <p 
              className="mb-6 text-gray-600 dark:text-gray-400"
              style={{ 
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              El kit incluye todos los elementos esenciales de la interfaz de CarPlay: navegación, listas, botones, controles de reproducción y más. Todos diseñados siguiendo las guías de interfaz humana de Apple.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Templates de pantallas principales',
                'Componentes de navegación',
                'Controles de audio y medios',
                'Listas y elementos de menú',
                'Botones y controles táctiles',
                'Iconografía y recursos visuales'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300" style={{ fontSize: '1rem', fontWeight: 400 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white w-full sm:w-auto"
              style={{ fontSize: '1.125rem', fontWeight: 400, height: '50px', padding: '0 2.5rem' }}
              asChild
            >
              <a 
                href="https://www.figma.com/community/file/1384385816001053279" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ver kit de Figma
              </a>
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Figma Design Kit Preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600 rounded-2xl opacity-10 blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-600 rounded-2xl opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
