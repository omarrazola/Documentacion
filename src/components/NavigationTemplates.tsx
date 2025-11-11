import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Map, List, Grid3x3, Search, Info, MapPin, LayoutGrid, Mic, ExternalLink } from "lucide-react";
import mapTemplateImage from "figma:asset/cb04424ec3889ebb5e0bad6b13d299d0b5f16b40.png";
import listTemplateImage from "figma:asset/8672dfbf06d5a3dc5461028ef9011d531eb9a062.png";
import gridTemplateImage from "figma:asset/68d408472fc674266ff0f9d2fa071d599c4389f5.png";
import searchTemplateImage from "figma:asset/eae1fd2ff9cf6f52fafd26fe9c9afe8ed8992628.png";
import poiTemplateImage from "figma:asset/3571fc1d7992d4e8a548fefaf383e3a371ec77e8.png";
import tabBarTemplateImage from "figma:asset/af693bab013481f5819721bf996daf8d6e95b990.png";
import infoTemplateImage from "figma:asset/5d8c3dde3d865c2c8be88b8a32dc5665001c7d21.png";
import voiceTemplateImage from "figma:asset/580f807f1489d7922c923a4f9a0408a07967826c.png";

interface Template {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  useCases: string[];
  category: 'navigation' | 'communication' | 'media' | 'general';
  imageUrl: string;
}

export function NavigationTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const templates: Template[] = [
    {
      id: 'map',
      name: 'Map Template',
      icon: <Map className="w-8 h-8" />,
      description: 'Plantilla principal para apps de navegación con mapas interactivos y guiado.',
      useCases: ['Navegación GPS', 'Mapas en tiempo real', 'Guiado por voz', 'Vista de ruta'],
      category: 'navigation',
      imageUrl: mapTemplateImage
    },
    {
      id: 'list',
      name: 'List Template',
      icon: <List className="w-8 h-8" />,
      description: 'Muestra listas desplazables de elementos con texto, imágenes y accesorios.',
      useCases: ['Listas de destinos', 'Resultados de búsqueda', 'Favoritos', 'Historial'],
      category: 'general',
      imageUrl: listTemplateImage
    },
    {
      id: 'grid',
      name: 'Grid Template',
      icon: <Grid3x3 className="w-8 h-8" />,
      description: 'Presenta elementos en formato de cuadrícula para navegación visual rápida.',
      useCases: ['Categorías', 'Accesos directos', 'Selección visual', 'Menús principales'],
      category: 'general',
      imageUrl: gridTemplateImage
    },
    {
      id: 'search',
      name: 'Search Template',
      icon: <Search className="w-8 h-8" />,
      description: 'Interfaz de búsqueda con teclado virtual y sugerencias.',
      useCases: ['Buscar destinos', 'Búsqueda por voz', 'Sugerencias automáticas', 'Filtros'],
      category: 'general',
      imageUrl: searchTemplateImage
    },
    {
      id: 'poi',
      name: 'Point of Interest',
      icon: <MapPin className="w-8 h-8" />,
      description: 'Muestra puntos de interés en el mapa con información detallada.',
      useCases: ['Gasolineras', 'Restaurantes', 'Estacionamientos', 'Lugares cercanos'],
      category: 'navigation',
      imageUrl: poiTemplateImage
    },
    {
      id: 'tab-bar',
      name: 'Tab Bar Template',
      icon: <LayoutGrid className="w-8 h-8" />,
      description: 'Navegación por pestañas para alternar entre diferentes vistas.',
      useCases: ['Navegación principal', 'Cambio de vistas', 'Secciones de app', 'Menú inferior'],
      category: 'general',
      imageUrl: tabBarTemplateImage
    },
    {
      id: 'information',
      name: 'Information Template',
      icon: <Info className="w-8 h-8" />,
      description: 'Presenta información detallada con texto, imágenes y botones de acción.',
      useCases: ['Detalles de destino', 'Información de contacto', 'Descripciones', 'Confirmaciones'],
      category: 'general',
      imageUrl: infoTemplateImage
    },
    {
      id: 'voice',
      name: 'Voice Control',
      icon: <Mic className="w-8 h-8" />,
      description: 'Interfaz para comandos de voz y control manos libres.',
      useCases: ['Siri integration', 'Comandos por voz', 'Dictado', 'Control sin manos'],
      category: 'communication',
      imageUrl: voiceTemplateImage
    }
  ];

  const handleTemplateClick = (template: Template) => {
    setSelectedTemplate(template);
    setDialogOpen(true);
  };

  const categoryColors = {
    navigation: 'bg-blue-100 text-blue-800 border-blue-200',
    communication: 'bg-green-100 text-green-800 border-green-200',
    media: 'bg-purple-100 text-purple-800 border-purple-200',
    general: 'bg-gray-100 text-gray-800 border-gray-200'
  };

  const categoryLabels = {
    navigation: 'Navegación',
    communication: 'Comunicación',
    media: 'Media',
    general: 'General'
  };

  return (
    <section id="navigation-templates" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-gray-900 dark:text-gray-50 mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Plantillas de Navegación
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Apple CarPlay ofrece 8 plantillas especializadas para diferentes tipos de apps. 
            Cada plantilla está optimizada para la conducción segura y cumple con las directrices de HIG.
          </p>
          <p 
            className="text-blue-600 dark:text-blue-400 mt-2 text-center"
            style={{ 
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              fontWeight: 500,
              lineHeight: 1.6
            }}
          >
            💡 Haz clic en cualquier plantilla para ver un ejemplo visual
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template, index) => (
            <Card 
              key={template.id}
              className="p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 bg-white dark:bg-gray-800 group cursor-pointer flex flex-col"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
              onClick={() => handleTemplateClick(template)}
            >
              {/* Icon and Category */}
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                  {template.icon}
                </div>
                <Badge 
                  variant="outline" 
                  className={`${categoryColors[template.category]} dark:bg-opacity-20 dark:text-gray-200 dark:border-gray-600 border`}
                  style={{ fontSize: '0.75rem', fontWeight: 500 }}
                >
                  {categoryLabels[template.category]}
                </Badge>
              </div>

              {/* Title */}
              <h3 
                className="text-gray-900 dark:text-gray-100 mb-1.5"
                style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                {template.name}
              </h3>

              {/* Description */}
              <p 
                className="text-gray-600 dark:text-gray-400 mb-4"
                style={{ 
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {template.description}
              </p>

              {/* Use Cases */}
              <div className="space-y-2 mb-4 mt-auto">
                <p 
                  className="text-gray-700 dark:text-gray-300"
                  style={{ 
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Casos de Uso:
                </p>
                <ul className="space-y-1">
                  {template.useCases.slice(0, 3).map((useCase, idx) => (
                    <li 
                      key={idx}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                      style={{ 
                        fontSize: '0.875rem',
                        fontWeight: 400
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ver plantilla link */}
              <div className="flex items-center justify-end text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors pt-2 border-t border-gray-100 dark:border-gray-700">
                <span 
                  style={{ 
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  Ver plantilla
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Dialog for Template Preview */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle 
                className="flex items-center gap-3"
                style={{ fontSize: '1.5rem', fontWeight: 700 }}
              >
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  {selectedTemplate?.icon}
                </div>
                {selectedTemplate?.name}
              </DialogTitle>
              <DialogDescription style={{ fontSize: '1rem', fontWeight: 400 }}>
                {selectedTemplate?.description}
              </DialogDescription>
            </DialogHeader>
            
            {selectedTemplate && (
              <div className="space-y-6 mt-4">
                {/* Template Image */}
                <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <ImageWithFallback
                    src={selectedTemplate.imageUrl}
                    alt={`${selectedTemplate.name} preview`}
                    className="w-full h-auto"
                  />
                </div>

                {/* Use Cases */}
                <div>
                  <h4 
                    className="text-gray-900 dark:text-gray-100 mb-3"
                    style={{ fontSize: '1.125rem', fontWeight: 700 }}
                  >
                    Casos de uso principales:
                  </h4>
                  <ul className="space-y-2">
                    {selectedTemplate.useCases.map((useCase, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                        style={{ fontSize: '0.9375rem', fontWeight: 400 }}
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p 
                    className="text-gray-700 dark:text-gray-300"
                    style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}
                  >
                    <strong>Nota:</strong> Esta es una imagen de referencia. Para ver los detalles exactos de diseño 
                    y especificaciones técnicas, consulta la{" "}
                    <a 
                      href="https://developer.apple.com/download/files/CarPlay-Developer-Guide.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                      style={{ fontWeight: 600 }}
                    >
                      documentación oficial de Apple CarPlay
                    </a>.
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-4 mt-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Info className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <h4 
                className="text-gray-900 dark:text-gray-100 mb-3"
                style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 700
                }}
              >
                Restricciones importantes de diseño
              </h4>
              <ul className="space-y-2">
                <li 
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-2"></span>
                  Las plantillas están pre-diseñadas por Apple y <strong>no se pueden personalizar visualmente</strong> más allá de contenido y colores de acento.
                </li>
                <li 
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-2"></span>
                  Cada tipo de app está limitado a <strong>plantillas específicas</strong> aprobadas por Apple (ej: apps de navegación solo pueden usar Map, List, Search, etc.).
                </li>
                <li 
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-2"></span>
                  El <strong>diseño responsive</strong> es automático y se adapta a diferentes tamaños de pantalla del vehículo.
                </li>
                <li 
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  style={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.6 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0 mt-2"></span>
                  Consulta siempre la <a href="https://developer.apple.com/download/files/CarPlay-Developer-Guide.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline" style={{ fontWeight: 600 }}>documentación oficial</a> para conocer las limitaciones de cada plantilla.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Consideraciones importantes de diseño */}
        <div className="mt-20">
          <h3 
            className="mb-8 text-center text-gray-900 dark:text-gray-100"
            style={{ 
              fontSize: '1.75rem',
              fontWeight: 700,
              lineHeight: 1.3
            }}
          >
            Consideraciones importantes de diseño
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Personalización de CTAs */}
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-800 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-purple-500 dark:bg-purple-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 
                    className="mb-2 text-gray-900 dark:text-gray-100"
                    style={{ 
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    Personalización de colores en CTAs
                  </h4>
                  <p 
                    className="text-gray-600 dark:text-gray-400"
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}
                  >
                    Los botones de llamada a la acción (CTAs) pueden personalizarse con los colores de tu marca, siempre manteniendo suficiente contraste para garantizar la legibilidad y cumplir con las directrices de accesibilidad de Apple.
                  </p>
                </div>
              </div>
            </div>

            {/* Restricción botones secundarios en mapas */}
            <div className="bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-gray-800 p-4 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 dark:bg-amber-600 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 
                    className="mb-2 text-gray-900 dark:text-gray-100"
                    style={{ 
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      lineHeight: 1.3
                    }}
                  >
                    Botón secundario en cards de mapa
                  </h4>
                  <p 
                    className="text-gray-600 dark:text-gray-400"
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      lineHeight: 1.6
                    }}
                  >
                    El botón secundario en las tarjetas de navegación está <strong>exclusivamente reservado</strong> para ofrecer al usuario la opción de buscar una ruta alternativa. No se puede utilizar para otras acciones según las directrices de Apple.
                  </p>
                </div>
              </div>
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
