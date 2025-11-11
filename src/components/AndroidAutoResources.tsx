import { Button } from "./ui/button";
import { ExternalLink, FileText, Figma, BookOpen, Code } from "lucide-react";

export function AndroidAutoResources() {
  const resources = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentación oficial de diseño para navegación",
      description: "Guía completa de Google sobre cómo crear apps de navegación para Android Auto, incluyendo requisitos técnicos y mejores prácticas.",
      link: "https://developers.google.com/cars/design/create-apps/app-types/navigation?hl=es-419",
      label: "Ver documentación",
      featured: true,
      color: "bg-green-50 border-green-200 text-green-600"
    },
    {
      icon: <Figma className="w-6 h-6" />,
      title: "Design Kit de Figma para Android for Cars",
      description: "Kit oficial de diseño con componentes, plantillas y recursos visuales para diseñar apps de Android Auto.",
      link: "https://www.figma.com/community/file/1506418622696735515",
      label: "Acceder al kit de Figma",
      featured: true,
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Android for Cars App Library",
      description: "Documentación técnica de la librería oficial para desarrolladores, con APIs y ejemplos de implementación.",
      link: "https://developer.android.com/training/cars/apps",
      label: "Ver documentación técnica",
      featured: false,
      color: "bg-blue-50 border-blue-200 text-blue-600"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Guías de calidad de apps para Android Auto",
      description: "Requisitos y estándares de calidad que deben cumplir las apps antes de ser publicadas en Google Play.",
      link: "https://developer.android.com/docs/quality-guidelines/car-app-quality",
      label: "Ver guías de calidad",
      featured: false,
      color: "bg-amber-50 border-amber-200 text-amber-600"
    }
  ];

  return (
    <section id="resources" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-gray-900 mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Recursos oficiales
          </h2>
          <p 
            className="text-gray-600 max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Enlaces directos a la documentación oficial de Google y herramientas de diseño para Android Auto.
          </p>
        </div>

        {/* First 4 resources in 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {resources.slice(0, 4).map((resource, index) => (
            <a 
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block border-2 rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:shadow-xl cursor-pointer ${resource.color.split(' ')[1]}`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex flex-col gap-4">
                <div className={`p-4 rounded-xl ${resource.color.split(' ')[0]} w-fit`}>
                  <div className={resource.color.split(' ')[2]}>
                    {resource.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 
                    className="text-gray-900 mb-2"
                    style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    {resource.title}
                  </h3>
                  <p 
                    className="text-gray-600 mb-4"
                    style={{ 
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}
                  >
                    {resource.description}
                  </p>
                  <div 
                    className="inline-flex items-center justify-center rounded-md bg-green-600 hover:bg-green-700 px-4 py-2 transition-colors text-white"
                    style={{ 
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      minHeight: '40px'
                    }}
                  >
                    {resource.label}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Remaining resources */}
        <div className="space-y-6">
          {resources.slice(4).map((resource, index) => (
            <div 
              key={index + 4}
              className={`border-2 rounded-2xl p-6 transition-all duration-300 bg-white hover:shadow-lg ${resource.color.split(' ')[1]}`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${(index + 4) * 0.1}s both`
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className={`p-4 rounded-xl ${resource.color.split(' ')[0]} flex-shrink-0`}>
                  <div className={resource.color.split(' ')[2]}>
                    {resource.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 
                    className="text-gray-900 mb-2"
                    style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    {resource.title}
                  </h3>
                  <p 
                    className="text-gray-600 mb-4"
                    style={{ 
                      fontSize: '0.9375rem',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}
                  >
                    {resource.description}
                  </p>
                  <Button 
                    asChild
                    className="bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        fontSize: '0.9375rem',
                        fontWeight: 600
                      }}
                    >
                      {resource.label}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-2 border-green-200 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 
              className="text-gray-900 mb-3"
              style={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.3
              }}
            >
              Recursos adicionales recomendados
            </h3>
            <p 
              className="text-gray-600"
              style={{ 
                fontSize: '0.9375rem',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Otros artículos y guías útiles para diseñadores de apps vehiculares
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://material.io/design"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer block"
            >
              <h4 
                className="text-gray-900 mb-2"
                style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700
                }}
              >
                Material Design para Automotive
              </h4>
              <p 
                className="text-gray-600 mb-3"
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                Guías de Material Design adaptadas específicamente para entornos automotrices.
              </p>
              <span 
                className="text-green-600 hover:underline inline-flex items-center gap-1"
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                Ver Material Design
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>

            <a 
              href="https://android-developers.googleblog.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer block"
            >
              <h4 
                className="text-gray-900 mb-2"
                style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700
                }}
              >
                Android Developers Blog
              </h4>
              <p 
                className="text-gray-600 mb-3"
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                Actualizaciones, mejores prácticas y casos de estudio de apps para Android Auto.
              </p>
              <span 
                className="text-green-600 hover:underline inline-flex items-center gap-1"
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}
              >
                Visitar blog
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}