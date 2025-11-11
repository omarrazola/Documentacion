import { ExternalLink, FileText, BookOpen, Figma, Newspaper } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Guía oficial de Apple CarPlay",
    description: "Documentación completa sobre el desarrollo para CarPlay",
    url: "https://developer.apple.com/download/files/CarPlay-Developer-Guide.pdf",
    type: "PDF"
  },
  {
    icon: BookOpen,
    title: "Human Interface Guidelines",
    description: "Guías de diseño de interfaz de Apple",
    url: "https://developer.apple.com/design/human-interface-guidelines/",
    type: "Web"
  },
  {
    icon: Figma,
    title: "Kit de diseño en Figma (no oficial)",
    description: "Recursos visuales para diseñar en Figma",
    url: "https://www.figma.com/community/file/1384385816001053279",
    type: "Figma"
  },
  {
    icon: Newspaper,
    title: "Artículos y ejemplos de diseño",
    description: "Casos de estudio y mejores prácticas",
    url: "#",
    type: "Blog"
  }
];

export function Resources() {
  return (
    <section id="resources" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="mb-6 text-center text-gray-900 dark:text-gray-50"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2
          }}
        >
          Recursos y enlaces útiles
        </h2>
        
        <p 
          className="text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-400"
          style={{ 
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          Explora estas fuentes adicionales para profundizar en el diseño y desarrollo de aplicaciones CarPlay.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-colors">
                      <resource.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 
                        className="text-gray-900 dark:text-gray-100"
                        style={{ 
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          lineHeight: 1.3
                        }}
                      >
                        {resource.title}
                      </h3>
                      <span 
                        className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs"
                        style={{ fontWeight: 600 }}
                      >
                        {resource.type}
                      </span>
                    </div>
                    <p 
                      className="text-gray-600 dark:text-gray-400"
                      style={{ 
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        lineHeight: 1.5
                      }}
                    >
                      {resource.description}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}