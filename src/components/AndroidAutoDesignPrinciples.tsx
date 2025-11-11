import { Layout, AlertTriangle, Mic, Layers, Car, List } from "lucide-react";

export function AndroidAutoDesignPrinciples() {
  const principles = [
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Plantillas optimizadas para conducción",
      description: "Utiliza plantillas especializadas como NavigationTemplate, MapWithContentTemplate y PlaceListNavigationTemplate para garantizar una experiencia segura y consistente.",
      details: [
        "Plantilla de mapa con navegación activa",
        "Vista previa de ruta",
        "Lista de lugares de interés",
        "Integración de mapas en tiempo real"
      ],
      color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Reglas MUST / SHOULD / MAY",
      description: "El sistema define requisitos obligatorios (MUST), recomendados (SHOULD) y opcionales (MAY) para garantizar la seguridad durante la conducción.",
      details: [
        "MUST: Información crítica siempre visible",
        "SHOULD: Minimizar interacciones complejas",
        "MAY: Funciones adicionales contextuales",
        "Cumplimiento de normativas de seguridad"
      ],
      color: "bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Diseño minimalista con apoyo por voz",
      description: "Prioriza el contenido relevante, limita las interacciones táctiles complejas y proporciona alternativas de control por voz para todas las acciones principales.",
      details: [
        "Interfaces limpias y despejadas",
        "Comandos de voz integrados",
        "Botones grandes y accesibles (76dp × 76dp mínimo)",
        "Reducción de distracciones visuales"
      ],
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Contenido relevante y jerárquico",
      description: "Organiza la información con una jerarquía clara, mostrando solo los datos esenciales en cada momento y permitiendo navegación progresiva.",
      details: [
        "Jerarquía visual clara",
        "Información contextual",
        "Navegación por capas",
        "Minimización de elementos superfluos"
      ],
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Estados de conducción (Driving State)",
      description: "Android Auto ajusta automáticamente las capacidades de la app según si el vehículo está en movimiento o detenido, garantizando la seguridad.",
      details: [
        "Entrada de texto solo con vehículo detenido",
        "Listas limitadas a 12 items durante conducción",
        "Restricciones automáticas de Distraction Optimization",
        "Detección automática del estado del vehículo"
      ],
      color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
    },
    {
      icon: <List className="w-8 h-8" />,
      title: "Límites de contenido en listas",
      description: "Para minimizar la distracción, Android Auto implementa restricciones estrictas en la cantidad de elementos visibles en listas y menús.",
      details: [
        "Máximo 12 items por vista en listas",
        "Paginación automática para contenido extenso",
        "Priorizar elementos más relevantes arriba",
        "Filtrado y búsqueda para acceso rápido"
      ],
      color: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
    }
  ];

  return (
    <section id="design-principles" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-gray-900 dark:text-gray-50 mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Principios clave del sistema de diseño
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Basado en las guías oficiales de Android for Cars App Library, estos principios garantizan experiencias seguras y optimizadas para la conducción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`p-3 rounded-xl ${principle.color} dark:bg-opacity-20 w-fit mb-4`}>
                {principle.icon}
              </div>
              <h3 
                className="text-gray-900 dark:text-gray-100 mb-2"
                style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                {principle.title}
              </h3>
              <p 
                className="text-gray-600 dark:text-gray-400 mb-4"
                style={{ 
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {principle.description}
              </p>

              <ul className="space-y-2 pl-2">
                {principle.details.map((detail, idx) => (
                  <li 
                    key={idx}
                    className="flex items-start gap-3 text-gray-700"
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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