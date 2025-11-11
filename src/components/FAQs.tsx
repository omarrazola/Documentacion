import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQs() {
  const faqs = [
    {
      question: "¿Qué es Apple CarPlay?",
      answer: "Apple CarPlay es una plataforma que permite integrar tu iPhone con el sistema de infoentretenimiento del vehículo, proporcionando una forma segura y conveniente de usar aplicaciones mientras conduces. CarPlay está diseñado específicamente para minimizar distracciones y mantener la atención en la carretera."
    },
    {
      question: "¿El kit de Figma es oficial de Apple?",
      answer: "No. El Design Kit de Figma mencionado en esta guía ha sido creado por un miembro de la comunidad y no es un producto oficial de Apple. Sin embargo, se basa en las especificaciones oficiales de diseño de Apple para CarPlay. Siempre consulta la documentación oficial de Apple para los requisitos finales."
    },
    {
      question: "¿Qué tipos de aplicaciones puedo desarrollar para CarPlay?",
      answer: "CarPlay admite varios tipos de aplicaciones según su categoría: Audio (música, podcasts, audiolibros), Mensajería (solo mediante voz con Siri), Navegación (mapas y GPS), Parking (buscar y pagar estacionamiento), Carga de vehículos eléctricos, y Quick Food Ordering. Cada categoría tiene requisitos específicos y plantillas de interfaz proporcionadas por Apple."
    },
    {
      question: "¿Cuáles son los requisitos mínimos de contraste para CarPlay?",
      answer: "Para texto estándar (menor a 17 puntos o 14 puntos en negrita), se requiere un ratio de contraste mínimo de 4.5:1. Para texto grande (18 puntos o más, o 14 puntos en negrita o más), el ratio mínimo es 3:1. Los componentes de interfaz y elementos gráficos también requieren un ratio de 3:1. Estos requisitos son esenciales para garantizar la legibilidad en diferentes condiciones de iluminación mientras se conduce."
    },
    {
      question: "¿Necesito un vehículo compatible para desarrollar aplicaciones CarPlay?",
      answer: "No necesariamente. Apple proporciona el simulador de CarPlay dentro de Xcode que te permite probar tus aplicaciones sin necesidad de un vehículo compatible. Sin embargo, para pruebas finales y una experiencia completa, se recomienda probar en un entorno real de CarPlay."
    },
    {
      question: "¿Qué herramientas necesito para diseñar para CarPlay?",
      answer: "Para diseñar, puedes utilizar Figma con el kit de diseño de la comunidad mencionado en esta guía, o cualquier herramienta de diseño de interfaces. Para desarrollar, necesitarás Xcode (disponible solo para macOS), un iPhone con iOS 14 o posterior, y familiaridad con Swift o Objective-C. Apple proporciona frameworks específicos como CarPlay framework para desarrollo."
    },
    {
      question: "¿Cuáles son las mejores prácticas para diseñar interfaces de CarPlay?",
      answer: "Prioriza la simplicidad y minimiza la carga cognitiva. Usa elementos grandes y fácilmente tocables, mantén altos ratios de contraste, limita la cantidad de información en pantalla, utiliza las plantillas de interfaz de Apple, asegura que las acciones importantes sean accesibles con mínimas interacciones, y siempre diseña considerando que el usuario está conduciendo."
    },
    {
      question: "¿Dónde puedo encontrar documentación oficial de Apple sobre CarPlay?",
      answer: "La documentación oficial se encuentra en el portal de desarrolladores de Apple (developer.apple.com). Específicamente, busca 'CarPlay App Programming Guide' y las 'Human Interface Guidelines for CarPlay'. También puedes descargar la guía oficial en PDF desde el enlace proporcionado en el hero de esta página."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-gray-900 dark:text-gray-50"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Preguntas frecuentes
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            style={{ 
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: 1.6
            }}
          >
            Respuestas a las dudas más comunes sobre diseño y desarrollo para Apple CarPlay
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger 
                className="hover:no-underline py-6 text-gray-900 dark:text-gray-100"
                style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  lineHeight: 1.4
                }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="text-gray-700 dark:text-gray-300 pb-6"
                style={{ 
                  fontSize: '1rem',
                  lineHeight: 1.7
                }}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
