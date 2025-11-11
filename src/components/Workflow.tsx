const steps = [
  {
    number: "01",
    title: "Revisa la guía oficial de Apple",
    description: "Familiarízate con los requisitos técnicos y de diseño. Apple ofrece documentación detallada sobre qué tipos de apps son compatibles con CarPlay y las directrices que deben seguir."
  },
  {
    number: "02",
    title: "Descarga el kit de Figma",
    description: "Obtén el kit de diseño no oficial que te ayudará a crear prototipos visuales rápidamente con los componentes de CarPlay."
  },
  {
    number: "03",
    title: "Adapta los componentes a tu app",
    description: "Personaliza los elementos del kit según la funcionalidad de tu aplicación, manteniendo siempre la coherencia con las directrices de Apple."
  },
  {
    number: "04",
    title: "Prueba en el simulador de CarPlay",
    description: "Utiliza Xcode para probar tu diseño en el simulador de CarPlay. Valida diferentes escenarios de uso y tamaños de pantalla."
  },
  {
    number: "05",
    title: "Sube tu app a la App Store",
    description: "Una vez que tu app cumpla con todas las directrices, envíala para revisión. Apple verificará que siga los estándares de seguridad y usabilidad de CarPlay."
  }
];

export function Workflow() {
  return (
    <section id="workflow" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="mb-6 text-center text-gray-900 dark:text-gray-50"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2
          }}
        >
          Flujo de trabajo sugerido
        </h2>
        
        <p 
          className="text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-400"
          style={{ 
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          Sigue estos pasos para diseñar y desarrollar tu aplicación CarPlay de manera eficiente.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl p-4 border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center"
                  >
                    <span 
                      className="text-white"
                      style={{ 
                        fontSize: '1.5rem',
                        fontWeight: 800
                      }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 
                    className="mb-3 text-gray-900 dark:text-gray-100"
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-gray-600 dark:text-gray-400"
                    style={{ 
                      fontSize: '1rem',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
