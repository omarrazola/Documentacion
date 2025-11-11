import svgPaths from "../imports/svg-1mu60ggtz0";

export function AndroidAutoTemplates() {
  const templates = [
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p11d16a80} stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3 9H21" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3 15H21" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M9 3V21" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M15 3V21" stroke="#7F22FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de cuadrícula",
      badge: "Vista en cuadrícula",
      badgeColor: "#6b1dd1",
      borderColor: "#ddd6ff",
      bgColor: "#f5f3ff",
      description: "Muestra contenido organizado en formato de cuadrícula, ideal para galerías de destinos, categorías de lugares o colecciones visuales.",
      useCase: "Exploración visual de múltiples opciones",
      features: [
        "Organización en grid de 2-4 columnas",
        "Imágenes y títulos para cada item",
        "Navegación táctil optimizada",
        "Desplazamiento vertical fluido"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/grid-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d="M3 5H3.01" stroke="#0084D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3 12H3.01" stroke="#0084D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M3 19H3.01" stroke="#0084D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M8 5H21" stroke="#0084D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M8 12H21" stroke="#0084D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M8 19H21" stroke="#0084D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de lista",
      badge: "Lista vertical",
      badgeColor: "#0068a8",
      borderColor: "#b8e6fe",
      bgColor: "#f0f9ff",
      description: "Lista vertical estándar de items, fundamental para navegación de menús, configuraciones y listados de opciones.",
      useCase: "Navegación de menús y opciones",
      features: [
        "Lista vertical de items desplazable",
        "Hasta 6 items visibles simultáneamente",
        "Iconos y texto por cada elemento",
        "Acciones rápidas por item"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/list-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p2baddd00} stroke="#009689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M15 5.764V20.764" stroke="#009689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M9 3.236V18.236" stroke="#009689" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Mapa + Plantilla de contenido",
      badge: "Mapa + contenido",
      badgeColor: "#007a6e",
      borderColor: "#96f7e4",
      bgColor: "#f0fdfa",
      description: "Mantiene el mapa visible en segundo plano con contenido superpuesto, útil para mostrar información contextual sin perder la referencia visual.",
      useCase: "Información contextual durante navegación",
      features: [
        "Mapa siempre visible en segundo plano",
        "Panel de contenido configurable",
        "Transiciones suaves entre estados",
        "Cierre fácil para vista completa"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/map-content-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p261dfb00} stroke="#E17100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de mensaje",
      badge: "Mensajes cortos",
      badgeColor: "#b85d00",
      borderColor: "#fef0d4",
      bgColor: "#fffbeb",
      description: "Muestra mensajes y alertas importantes durante la navegación de forma concisa y sin distracciones innecesarias.",
      useCase: "Notificaciones y alertas breves",
      features: [
        "Mensaje destacado con icono",
        "Hasta 2 botones de acción",
        "Niveles de urgencia diferenciados",
        "Cierre automático o manual"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/message-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.pb47f400} stroke="#D95F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p17a13100} stroke="#D95F00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de mensaje largo",
      badge: "Contenido extenso",
      badgeColor: "#b85000",
      borderColor: "#ffdfb0",
      bgColor: "#fff7ed",
      description: "Versión extendida de la plantilla de mensaje para mostrar contenido más detallado, términos y condiciones o información compleja.",
      useCase: "Información detallada y textos largos",
      features: [
        "Soporte para texto largo desplazable",
        "Formato con título y cuerpo extenso",
        "Botones de acción al final del contenido",
        "Scroll suave para lectura cómoda"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/long-message-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p27c543b0} stroke="#0065D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2d59bff0} stroke="#0065D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de navegación",
      badge: "Mapa en tiempo real",
      badgeColor: "#0055ad",
      borderColor: "#b4d9ff",
      bgColor: "#eff6ff",
      description: "Plantilla principal para navegación turn-by-turn activa con mapa a pantalla completa e instrucciones en tiempo real.",
      useCase: "Navegación en curso con guiado activo",
      features: [
        "Vista de mapa completa con ruta visible",
        "Panel de información de viaje (ETA, distancia)",
        "Indicaciones turn-by-turn prominentes",
        "Alertas de tráfico en tiempo real"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/navigation-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.pdb17300} stroke="#6000D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2f6e8c0} stroke="#6000D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p32c0b4c0} stroke="#6000D1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de panel",
      badge: "Panel dividido",
      badgeColor: "#5200ad",
      borderColor: "#cdb2ff",
      bgColor: "#faf5ff",
      description: "División flexible de pantalla (60/40) con mapa y panel lateral para mostrar información detallada sin ocultar el mapa.",
      useCase: "Información detallada con contexto de mapa",
      features: [
        "División 60% mapa / 40% panel",
        "Scroll independiente en panel",
        "Botones de acción personalizables",
        "Adaptable a orientación de pantalla"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/pane-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p27c543b0} stroke="#00A300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2d59bff0} stroke="#00A300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de lista de lugares (mapa)",
      badge: "Lugares + mapa",
      badgeColor: "#008500",
      borderColor: "#b4ffb4",
      bgColor: "#f0fdf4",
      description: "Vista equilibrada de mapa y lista con sincronización bidireccional para explorar múltiples destinos visualmente.",
      useCase: "Exploración de múltiples lugares",
      features: [
        "Vista dividida mapa + lista",
        "Sincronización bidireccional",
        "Marcadores personalizados en mapa",
        "Filtrado y búsqueda integrados"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/place-list-map-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d={svgPaths.p21daaf00} stroke="#D100AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p240f9a80} stroke="#D100AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p3cdbdea0} stroke="#D100AD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de vista previa de ruta",
      badge: "Comparador de rutas",
      badgeColor: "#ad008d",
      borderColor: "#ffc4f0",
      bgColor: "#fdf4ff",
      description: "Previsualiza y compara hasta 3 rutas alternativas antes de iniciar la navegación con información detallada de cada opción.",
      useCase: "Selección y comparación de rutas",
      features: [
        "Ruta completa trazada en mapa",
        "Hasta 3 alternativas comparables",
        "Tiempo, distancia y tráfico en vivo",
        "Indicadores de peajes y autopistas"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/route-preview-template?hl=es-419"
    },
    {
      icon: (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g>
            <path d="M21 21L16.66 16.66" stroke="#00B8D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p19568f00} stroke="#00B8D4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      ),
      title: "Plantilla de búsqueda",
      badge: "Búsqueda interactiva",
      badgeColor: "#0095ad",
      borderColor: "#b4f2ff",
      bgColor: "#ecfeff",
      description: "Interfaz de búsqueda optimizada para conducción con sugerencias, autocompletado y resultados rápidos.",
      useCase: "Búsqueda de destinos y POIs",
      features: [
        "Campo de búsqueda con voz integrada",
        "Sugerencias en tiempo real",
        "Historial de búsquedas recientes",
        "Categorías de búsqueda rápida"
      ],
      url: "https://developers.google.com/cars/design/create-apps/apps-for-drivers/templates/search-template?hl=es-419"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-green-100 px-4 py-1.5 rounded-lg border border-[#7bf1a8]">
            <p className="text-[#016630] text-sm font-semibold">
              Android for Cars App Library
            </p>
          </div>
          <h2 className="text-[#101828] mb-6 text-5xl leading-[1.2]" style={{ fontWeight: 800 }}>
            Plantillas de navegación para Android Auto
          </h2>
          <p className="text-[#4a5565] max-w-3xl mx-auto text-lg leading-[1.6]">
            Plantillas especializadas y pre-optimizadas diseñadas por Google para crear experiencias
            de navegación seguras, efectivas y consistentes.
          </p>
        </div>

        {/* Documentation Note - First Position */}
        <div className="mb-8 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-3 text-lg leading-[1.3]" style={{ fontWeight: 700 }}>
                  Documentación oficial
                </h4>
                <p className="text-gray-700 mb-3 text-sm leading-[1.6]">
                  Todas estas plantillas están disponibles en el <strong>Android for Cars App Library</strong> y cumplen
                  automáticamente con las directrices de seguridad de Google.
                </p>
                <a
                  href="https://developers.google.com/cars/design?hl=es-419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold"
                >
                  Explorar documentación completa
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path
                      d="M3.33333 8H12.6667"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                    <path
                      d={svgPaths.p1d405500}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.33333"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <a
              key={index}
              href={template.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-full p-6 rounded-2xl border-2 hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderColor: template.borderColor,
                  backgroundColor: template.bgColor
                }}
              >
                {/* Badge + Icon + Title section */}
                <div className="mb-4">
                  {/* Badge */}
                  <div className="mb-3">
                    <div
                      className="inline-block px-2 py-1 rounded-lg text-white text-[11px] font-semibold shadow-sm"
                      style={{ backgroundColor: '#007F93' }}
                    >
                      {template.badge}
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 flex-shrink-0">
                      {template.icon}
                    </div>
                    <h3 className="text-[#101828] text-xl leading-[1.3] flex-1" style={{ fontWeight: 700 }}>
                      {template.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#364153] mb-4 text-[15px] leading-[1.6]">
                  {template.description}
                </p>

                {/* Use Case */}
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-[#6a7282] mb-1 uppercase tracking-wider text-[11px] font-semibold">
                    Caso de uso
                  </p>
                  <p className="text-[#1e2939] text-sm leading-[1.4]" style={{ fontWeight: 600 }}>
                    {template.useCase}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <p className="text-[#364153] mb-2 uppercase tracking-wider text-[11px] font-semibold">
                    Características clave
                  </p>
                  <ul className="space-y-1.5">
                    {template.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[#364153] text-[13px] leading-[1.5]"
                      >
                        <span
                          className="flex-shrink-0 mt-1.5 rounded-full"
                          style={{
                            width: '4px',
                            height: '4px',
                            backgroundColor: template.badgeColor
                          }}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center justify-between text-[#101828] group-hover:text-[#364153] transition-colors">
                    <span className="text-sm font-semibold">
                      Ver plantilla oficial
                    </span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.33333 8H12.6667"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                      <path
                        d={svgPaths.p1d405500}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.33333"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}