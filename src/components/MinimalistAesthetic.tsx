import { Palette, Type, Space, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MinimalistAesthetic() {
  const recommendations = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Paleta de colores neutros",
      description: "Utiliza blancos, grises suaves y un color de acento para guiar la atención sin generar fatiga visual.",
      examples: [
        "Fondo blanco (#FFFFFF) o gris muy claro (#F9FAFB)",
        "Texto principal en gris oscuro (#111827)",
        "Color de acento: Verde (#10B981) o Azul (#3B82F6)",
        "Elementos secundarios en gris medio (#6B7280)"
      ],
      color: "bg-slate-50 text-slate-600"
    },
    {
      icon: <Type className="w-8 h-8" />,
      title: "Tipografía clara y legible",
      description: "Sans-serif con buen contraste, tamaños generosos y jerarquía clara entre títulos, subtítulos y texto.",
      examples: [
        "Títulos: 24-36px, peso 700-800",
        "Subtítulos: 18-20px, peso 600",
        "Cuerpo de texto: 14-16px, peso 400",
        "Contraste mínimo 4.5:1 (WCAG AA)"
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Space className="w-8 h-8" />,
      title: "Espacios generosos",
      description: "Reduce la densidad visual con márgenes y paddings amplios. Menos elementos por pantalla, más fácil de procesar.",
      examples: [
        "Padding de secciones: 48-96px vertical",
        "Espacio entre elementos: 16-24px",
        "Máximo 3-4 elementos por fila en desktop",
        "Evitar aglomeraciones visuales"
      ],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Iconografía simple y CTAs claros",
      description: "Iconos lineales minimalistas, ilustraciones simples y llamadas a la acción destacadas con buen contraste.",
      examples: [
        "Iconos de línea con grosor 2px",
        "Ilustraciones con paleta limitada",
        "Botones primarios con color de acento",
        "Estados hover/focus bien definidos"
      ],
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <section id="aesthetic" className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 pt-[0px] pr-[24px] pb-[64px] pl-[24px]">
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
            Cómo aplicar la estética minimalista
          </h2>
          <p 
            className="text-gray-600 max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Recomendaciones específicas para crear interfaces limpias, claras y optimizadas para la conducción segura.
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {recommendations.map((rec, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl p-6 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`p-3 rounded-xl ${rec.color} w-fit mb-4`}>
                {rec.icon}
              </div>
              <h3 
                className="text-gray-900 mb-2"
                style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                {rec.title}
              </h3>
              <p 
                className="text-gray-600 mb-4"
                style={{ 
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {rec.description}
              </p>

              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2">
                  {rec.examples.map((example, idx) => (
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
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Inspiration */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 text-center border-b border-gray-200">
            <h3 
              className="text-gray-900 mb-2"
              style={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                lineHeight: 1.3
              }}
            >
              Inspiración – Diseño minimalista
            </h3>
            <p 
              className="text-gray-600"
              style={{ 
                fontSize: '0.9375rem',
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              Ejemplo de cómo una interfaz minimalista mejora la experiencia de conducción
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="p-8 border-r border-gray-200">
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full"
                  style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  ❌ Evitar
                </span>
                <h4 
                  className="text-gray-900 mt-3 mb-2"
                  style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 700
                  }}
                >
                  Sobrecarga visual
                </h4>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-200">
                <div className="space-y-2">
                  <div className="h-3 bg-red-300 rounded w-3/4"></div>
                  <div className="h-3 bg-red-300 rounded w-full"></div>
                  <div className="h-3 bg-red-300 rounded w-5/6"></div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="h-12 bg-red-400 rounded"></div>
                    <div className="h-12 bg-red-400 rounded"></div>
                    <div className="h-12 bg-red-400 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div className="h-8 bg-red-400 rounded"></div>
                    <div className="h-8 bg-red-400 rounded"></div>
                  </div>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                <li 
                  className="text-gray-600 flex items-start gap-2"
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  <span className="text-red-500">✗</span> Demasiados elementos
                </li>
                <li 
                  className="text-gray-600 flex items-start gap-2"
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  <span className="text-red-500">✗</span> Poco espacio entre elementos
                </li>
                <li 
                  className="text-gray-600 flex items-start gap-2"
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  <span className="text-red-500">✗</span> Colores saturados
                </li>
              </ul>
            </div>

            {/* After */}
            <div className="p-8 bg-gray-50">
              <div className="mb-4">
                <span 
                  className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full"
                  style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  ✓ Recomendado
                </span>
                <h4 
                  className="text-gray-900 mt-3 mb-2"
                  style={{ 
                    fontSize: '1.125rem',
                    fontWeight: 700
                  }}
                >
                  Diseño limpio y enfocado
                </h4>
              </div>
              <div className="bg-white rounded-lg p-8 border-2 border-green-200 shadow-sm">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-16 bg-green-100 rounded flex items-center justify-center">
                    <div className="w-8 h-8 bg-green-500 rounded"></div>
                  </div>
                  <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                <li 
                  className="text-gray-600 flex items-start gap-2"
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  <span className="text-green-500">✓</span> Jerarquía clara
                </li>
                <li 
                  className="text-gray-600 flex items-start gap-2"
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  <span className="text-green-500">✓</span> Espaciado generoso
                </li>
                <li 
                  className="text-gray-600 flex items-start gap-2"
                  style={{ fontSize: '0.875rem', fontWeight: 400 }}
                >
                  <span className="text-green-500">✓</span> Paleta neutral con acento
                </li>
              </ul>
            </div>
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