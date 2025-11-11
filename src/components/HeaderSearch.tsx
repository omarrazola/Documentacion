import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  section: string;
  relevance: number;
}

interface HeaderSearchProps {
  onSearch: (query: string) => void;
}

export function HeaderSearch({ onSearch }: HeaderSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Comprehensive search index with synonyms and related terms
  const searchIndex = [
    {
      id: "why-carplay",
      title: "¿Por qué diseñar para Apple CarPlay?",
      description: "Beneficios de desarrollar apps para CarPlay: seguridad, ecosistema Apple y experiencia optimizada",
      keywords: [
        "por qué", "porque", "razones", "motivos", "beneficios", "ventajas",
        "seguridad", "seguro", "conducción", "conducir", "manejo",
        "ecosistema", "apple", "ios", "iphone", "integración",
        "experiencia", "optimizada", "optimización", "usuario", "ux",
        "vehiculo", "vehículo", "coche", "auto", "automóvil", "carro"
      ]
    },
    {
      id: "design-principles",
      title: "Principios clave de diseño",
      description: "Seguridad, visibilidad, interacción táctil mínima y consistencia con iOS",
      keywords: [
        "principios", "fundamentos", "reglas", "guías", "directrices",
        "diseño", "diseñar", "design", "ux", "ui", "interfaz",
        "seguridad", "protección", "safety",
        "visibilidad", "visible", "legibilidad", "legible", "contraste", "ver",
        "táctil", "tactil", "touch", "tocar", "interacción", "interactuar",
        "botones", "controles", "elementos",
        "consistencia", "coherencia", "ios", "apple", "estándar"
      ]
    },
    {
      id: "design-principles-safety",
      title: "Seguridad ante todo",
      description: "Minimiza distracciones y prioriza información esencial",
      keywords: [
        "seguridad", "safety", "protección", "distracción", "distracciones",
        "atención", "foco", "concentración", "conducir", "manejo",
        "esencial", "importante", "prioritario", "crítico"
      ]
    },
    {
      id: "design-principles",
      title: "Visibilidad y foco rápido",
      description: "Alto contraste y tipografías legibles para comprensión rápida",
      keywords: [
        "visibilidad", "visible", "ver", "vista", "visual",
        "contraste", "alto contraste", "colores", "color", "ratio", "ratios",
        "tipografía", "tipografia", "fuentes", "fonts", "texto", "letra",
        "legible", "legibilidad", "leer", "lectura", "comprensión",
        "rápido", "rapido", "vistazo", "glance",
        "accesibilidad", "wcag", "4.5:1", "3:1", "modo oscuro", "dark mode", "claro"
      ]
    },
    {
      id: "design-principles-touch",
      title: "Interacción táctil mínima",
      description: "Limita toques y usa botones grandes",
      keywords: [
        "táctil", "tactil", "touch", "tocar", "toque", "toques",
        "interacción", "interactuar", "interactividad",
        "mínima", "minima", "reducir", "limitar", "simplificar",
        "botones", "botón", "button", "controles",
        "grande", "grandes", "tamaño", "size"
      ]
    },
    {
      id: "design-principles-consistency",
      title: "Consistencia con iOS",
      description: "Mantén coherencia con convenciones de iOS",
      keywords: [
        "consistencia", "coherencia", "consistency",
        "ios", "iphone", "apple", "sistema",
        "convenciones", "estándar", "estandar", "patrones",
        "familiar", "familiaridad", "conocido"
      ]
    },
    {
      id: "figma-kit",
      title: "Kit de diseño de Figma",
      description: "Componentes visuales no oficiales para diseñar en Figma",
      keywords: [
        "figma", "kit", "toolkit", "herramienta",
        "componentes", "elementos", "components",
        "plantillas", "templates", "mockups", "prototipos",
        "diseño", "diseñar", "design",
        "no oficial", "comunidad", "recursos", "assets",
        "visual", "visuales", "gráfico", "grafico"
      ]
    },
    {
      id: "figma-components",
      title: "Componentes del kit de Figma",
      description: "Navegación, listas, botones, controles de audio y más",
      keywords: [
        "navegación", "navegacion", "navigation", "menú", "menu",
        "listas", "list", "elementos",
        "botones", "botón", "button",
        "audio", "música", "musica", "media", "reproducción", "player",
        "controles", "controls",
        "iconos", "icons", "iconografía", "iconografia"
      ]
    },
    {
      id: "figma-kit",
      title: "Personalización de CTAs",
      description: "Los colores de los botones pueden customizarse según tu marca",
      keywords: [
        "cta", "ctas", "call to action", "botones", "botón",
        "personalizar", "customizar", "colores", "color", "marca", "brand",
        "accesibilidad", "contraste", "personalización", "customización"
      ]
    },
    {
      id: "figma-kit",
      title: "Botón secundario en mapas",
      description: "Exclusivo para ofrecer rutas alternativas en navegación",
      keywords: [
        "botón secundario", "boton secundario", "secundario",
        "mapa", "mapas", "navegación", "navegacion", "navigation",
        "ruta alternativa", "rutas alternativas", "ruta", "alternativa",
        "card", "tarjeta", "cards", "restricción", "restriccion", "exclusivo"
      ]
    },
    {
      id: "workflow",
      title: "Flujo de trabajo sugerido",
      description: "Pasos para diseñar y desarrollar tu app CarPlay",
      keywords: [
        "flujo", "workflow", "proceso", "metodología", "metodologia",
        "trabajo", "pasos", "steps", "etapas", "fases",
        "desarrollo", "desarrollar", "develop", "crear", "construcción",
        "guía", "tutorial", "cómo", "como", "how to"
      ]
    },
    {
      id: "workflow-step1",
      title: "Revisar guía oficial de Apple",
      description: "Familiarízate con la documentación oficial",
      keywords: [
        "guía", "guia", "guide", "documentación", "documentacion",
        "oficial", "apple", "developer",
        "requisitos", "requerimientos", "requirements",
        "técnico", "tecnico", "technical"
      ]
    },
    {
      id: "workflow-step2",
      title: "Descargar kit de Figma",
      description: "Obtén el kit de diseño para prototipos",
      keywords: [
        "descargar", "download", "obtener", "conseguir",
        "kit", "figma", "herramientas", "tools",
        "prototipos", "mockups", "diseño", "design"
      ]
    },
    {
      id: "workflow-step3",
      title: "Adaptar componentes",
      description: "Personaliza elementos según tu app",
      keywords: [
        "adaptar", "personalizar", "customizar", "modificar",
        "componentes", "elementos",
        "app", "aplicación", "aplicacion", "software",
        "coherencia", "consistencia"
      ]
    },
    {
      id: "workflow-step4",
      title: "Probar en simulador CarPlay",
      description: "Valida tu diseño en Xcode",
      keywords: [
        "probar", "testing", "test", "validar", "verificar",
        "simulador", "simulator", "emulador",
        "xcode", "desarrollo", "developer",
        "escenarios", "casos", "pruebas"
      ]
    },
    {
      id: "workflow-step5",
      title: "Subir a App Store",
      description: "Cumple directrices y envía para revisión",
      keywords: [
        "subir", "publicar", "enviar", "submit", "upload",
        "app store", "appstore", "tienda",
        "directrices", "guidelines", "requisitos", "requerimientos",
        "revisión", "revision", "review", "aprobación", "aprobacion"
      ]
    },
    {
      id: "resources",
      title: "Recursos y enlaces útiles",
      description: "Documentación oficial, HIG, artículos y ejemplos",
      keywords: [
        "recursos", "resources", "enlaces", "links", "urls",
        "documentación", "documentacion", "docs", "documentation",
        "hig", "human interface guidelines", "guías",
        "artículos", "articulos", "articles", "blog",
        "ejemplos", "examples", "casos", "referencias"
      ]
    }
  ];

  // Perform intelligent search with synonyms
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const normalizedQuery = searchQuery.toLowerCase().trim();
    const searchResults: SearchResult[] = [];

    searchIndex.forEach(item => {
      let relevance = 0;
      
      // Exact title match (highest priority)
      if (item.title.toLowerCase().includes(normalizedQuery)) {
        relevance += 100;
      }

      // Description match (medium priority)
      if (item.description.toLowerCase().includes(normalizedQuery)) {
        relevance += 50;
      }

      // Keyword match (includes synonyms)
      const matchingKeywords = item.keywords.filter(keyword => 
        keyword.includes(normalizedQuery) || normalizedQuery.includes(keyword)
      );
      relevance += matchingKeywords.length * 20;

      // Partial matches (lower priority)
      const queryWords = normalizedQuery.split(' ');
      queryWords.forEach(word => {
        if (word.length > 2) {
          item.keywords.forEach(keyword => {
            if (keyword.includes(word) || word.includes(keyword)) {
              relevance += 5;
            }
          });
        }
      });

      if (relevance > 0) {
        searchResults.push({
          id: item.id,
          title: item.title,
          description: item.description,
          section: item.id,
          relevance
        });
      }
    });

    // Sort by relevance and limit results
    const sortedResults = searchResults
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 6);

    setResults(sortedResults);
    setShowResults(sortedResults.length > 0);
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    setSelectedIndex(-1);
    performSearch(value);
  };

  const handleResultClick = (result: SearchResult) => {
    onSearch(result.section);
    setQuery("");
    setResults([]);
    setShowResults(false);
    
    // Scroll to section with offset for fixed header
    setTimeout(() => {
      const element = document.getElementById(result.section);
      if (element) {
        const headerOffset = 100; // Height of fixed header + padding
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
    inputRef.current?.focus();
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowResults(false);
      inputRef.current?.blur();
    }
  };

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Buscar en la guía..."
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setShowResults(true)}
          className="pl-10 pr-10 py-2 rounded-lg border-gray-200 focus:border-blue-400 transition-colors"
          style={{ fontSize: '0.875rem' }}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-400" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                {results.length} {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
            </div>
            {results.map((result, index) => (
              <button
                key={result.id}
                onClick={() => handleResultClick(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-3 py-3 rounded-md transition-colors ${
                  selectedIndex === index 
                    ? 'bg-blue-50 dark:bg-blue-900/30' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className={`w-2 h-2 rounded-full ${
                      result.relevance > 80 ? 'bg-green-500 dark:bg-green-400' :
                      result.relevance > 40 ? 'bg-blue-500 dark:bg-blue-400' :
                      'bg-gray-400 dark:bg-gray-500'
                    }`}></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p 
                      className="truncate text-gray-900 dark:text-gray-100"
                      style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: 600
                      }}
                    >
                      {result.title}
                    </p>
                    <p 
                      className="truncate mt-0.5 text-gray-600 dark:text-gray-400"
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 400
                      }}
                    >
                      {result.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {showResults && results.length === 0 && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 z-50">
          <p 
            className="text-center text-gray-600 dark:text-gray-400"
            style={{ 
              fontSize: '0.875rem', 
              fontWeight: 500
            }}
          >
            No se encontraron resultados para "{query}"
          </p>
          <p 
            className="text-center mt-1"
            style={{ 
              fontSize: '0.75rem', 
              fontWeight: 400,
              color: '#9ca3af'
            }}
          >
            Intenta con otros términos como "diseño", "seguridad", o "figma"
          </p>
        </div>
      )}
    </div>
  );
}