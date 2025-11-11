import { AlertTriangle, Eye, Hand, Layers } from "lucide-react";

const principles = [
  {
    icon: AlertTriangle,
    title: "Seguridad ante todo",
    description: "Minimiza distracciones y prioriza información esencial",
    details: "Las apps de CarPlay deben diseñarse para usarse con mínima atención visual. Evita animaciones complejas, información innecesaria y elementos que requieran concentración prolongada."
  },
  {
    icon: Eye,
    title: "Visibilidad y foco rápido",
    description: "Alto contraste y tipografías legibles para comprensión rápida",
    details: "Utiliza colores con suficiente contraste según WCAG Nivel AA: texto estándar requiere mínimo 4.5:1, texto grande (18pt+) y componentes UI mínimo 3:1. Estos ratios se mantienen constantes en modo claro y oscuro. El conductor debe poder comprender la información de un vistazo sin apartar la vista de la carretera."
  },
  {
    icon: Hand,
    title: "Interacción táctil mínima",
    description: "Limita toques y usa botones grandes",
    details: "Los elementos interactivos deben ser lo suficientemente grandes para tocar sin mirar (mínimo 44x44 puntos). Reduce el número de pasos necesarios para completar acciones comunes."
  },
  {
    icon: Layers,
    title: "Consistencia con iOS",
    description: "Mantén coherencia con convenciones de iOS",
    details: "Los usuarios esperan que tu app en CarPlay funcione de manera similar a su versión iOS. Usa componentes estándar y patrones de navegación familiares siempre que sea posible."
  }
];

export function DesignPrinciples() {
  return (
    <section id="design-principles" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="mb-6 text-center text-gray-900 dark:text-gray-50"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2
          }}
        >
          Principios clave de diseño
        </h2>
        
        <p 
          className="text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-400"
          style={{ 
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          Apple establece directrices estrictas para garantizar que las apps de CarPlay sean seguras, intuitivas y útiles.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <principle.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 
                className="mb-3 text-gray-900 dark:text-gray-100"
                style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                {principle.title}
              </h3>
              <p 
                className="mb-4 text-blue-600 dark:text-blue-400"
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  lineHeight: 1.4
                }}
              >
                {principle.description}
              </p>
              <p 
                className="text-gray-600 dark:text-gray-400"
                style={{ 
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {principle.details}
              </p>
            </div>
          ))}
        </div>

        {/* Ratios de contraste y accesibilidad */}
        <div className="mt-20">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950/20 dark:via-blue-950/20 dark:to-purple-950/20 p-4 rounded-3xl border-2 border-green-200 dark:border-green-800">
            <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 
              className="mb-3 text-gray-900 dark:text-gray-100"
              style={{ 
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.3
              }}
            >
              Ratios de contraste mínimos requeridos
            </h3>
            <p 
              className="mb-6 text-gray-600 dark:text-gray-400"
              style={{ 
                fontSize: '1rem',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Basado en las Pautas de Interfaz Humana (HIG) de Apple y el estándar WCAG 2.x Nivel AA:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-green-300 dark:border-green-700 flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-700 dark:text-green-400" style={{ fontSize: '1rem', fontWeight: 700 }}>Aa</span>
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="mb-1 text-gray-900 dark:text-gray-100"
                      style={{ 
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        lineHeight: 1.3
                      }}
                    >
                      Texto estándar
                    </h4>
                    <p 
                      className="text-gray-600 dark:text-gray-400"
                      style={{ 
                        fontSize: '0.938rem',
                        fontWeight: 400,
                        lineHeight: 1.6
                      }}
                    >
                      Menor a <strong className="text-gray-900 dark:text-gray-100">17 puntos</strong> o <strong className="text-gray-900 dark:text-gray-100">14 puntos en negrita</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-green-200 dark:border-green-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      Ratio mínimo requerido:
                    </span>
                    <span className="px-4 py-1.5 bg-green-600 dark:bg-green-500 text-white rounded-lg" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      4.5:1
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-blue-300 dark:border-blue-700 flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 dark:text-blue-400" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Aa</span>
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="mb-1 text-gray-900 dark:text-gray-100"
                      style={{ 
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        lineHeight: 1.3
                      }}
                    >
                      Texto grande
                    </h4>
                    <p 
                      className="text-gray-600 dark:text-gray-400"
                      style={{ 
                        fontSize: '0.938rem',
                        fontWeight: 400,
                        lineHeight: 1.6
                      }}
                    >
                      <strong className="text-gray-900 dark:text-gray-100">18 puntos o más</strong>, o <strong className="text-gray-900 dark:text-gray-100">14 puntos en negrita o más</strong>
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-blue-200 dark:border-blue-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      Ratio mínimo requerido:
                    </span>
                    <span className="px-4 py-1.5 bg-blue-600 dark:bg-blue-500 text-white rounded-lg" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      3:1
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-purple-300 dark:border-purple-700 flex flex-col">
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-700 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 
                      className="mb-1 text-gray-900 dark:text-gray-100"
                      style={{ 
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        lineHeight: 1.3
                      }}
                    >
                      Componentes de interfaz y elementos gráficos
                    </h4>
                    <p 
                      className="text-gray-600 dark:text-gray-400"
                      style={{ 
                        fontSize: '0.938rem',
                        fontWeight: 400,
                        lineHeight: 1.6
                      }}
                    >
                      Botones, controles, iconos y elementos gráficos esenciales para la comprensión o funcionamiento
                    </p>
                  </div>
                </div>
                <div className="mt-auto pt-3 border-t border-purple-200 dark:border-purple-700">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 dark:text-gray-400" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      Ratio mínimo requerido:
                    </span>
                    <span className="px-4 py-1.5 bg-purple-600 dark:bg-purple-500 text-white rounded-lg" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                      3:1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-700">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 
                  className="flex-1 text-gray-900 dark:text-gray-100"
                  style={{ 
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    paddingTop: '0.25rem'
                  }}
                >
                  Consideraciones clave para CarPlay
                </h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300" style={{ fontSize: '0.938rem', fontWeight: 400, lineHeight: 1.6 }}>
                    <strong className="text-gray-900 dark:text-gray-100">Seguridad y legibilidad:</strong> La legibilidad es crucial para la seguridad. Apple enfatiza un diseño limpio y fácil de escanear desde el asiento del conductor, minimizando el tiempo que el usuario debe apartar la vista de la carretera.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300" style={{ fontSize: '0.938rem', fontWeight: 400, lineHeight: 1.6 }}>
                    <strong className="text-gray-900 dark:text-gray-100">Aplicación universal en modos de apariencia:</strong> CarPlay es compatible con modo claro y oscuro, pudiendo cambiar automáticamente según las condiciones de iluminación. <strong className="text-amber-900 dark:text-amber-200">Los requisitos de contraste (4.5:1 y 3:1) se mantienen constantes en ambos modos.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '0.938rem', fontWeight: 400, color: '#374151', lineHeight: 1.6 }}>
                    <strong>Colores dinámicos del sistema:</strong> Apple recomienda utilizar sus colores dinámicos del sistema, diseñados para adaptarse automáticamente a fondos claros u oscuros, asegurando que la legibilidad se mantenga conforme a los ratios requeridos en todo momento.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '0.938rem', fontWeight: 400, color: '#374151', lineHeight: 1.6 }}>
                    <strong>Herramientas de prueba:</strong> Utiliza herramientas de verificación de contraste (como WebAIM Contrast Checker) y el simulador de CarPlay incluido en las herramientas adicionales de Xcode para validar que tus diseños cumplan los requisitos en diferentes condiciones.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span style={{ fontSize: '0.938rem', fontWeight: 400, color: '#374151', lineHeight: 1.6 }}>
                    <strong>No dependas solo del color:</strong> La información no debe transmitirse únicamente mediante el color. Combina siempre el uso de colores con etiquetas de texto, iconos u otros elementos visuales para diferenciar estados y acciones interactivas.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
