import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function AndroidAutoFAQs() {
  const faqs = [
    {
      question: "¿Qué es Android Auto?",
      answer: "Android Auto es la plataforma de Google que permite integrar tu smartphone Android con el sistema de infoentretenimiento del vehículo. Proporciona una interfaz optimizada para conducción segura, permitiendo el acceso a aplicaciones de navegación, mensajería, música y más mientras mantienes tu atención en la carretera."
    },
    {
      question: "¿Cómo funciona la navegación Turn-by-Turn en Android Auto?",
      answer: "La navegación paso a paso (Turn-by-Turn) es el núcleo de las aplicaciones de navegación en Android Auto. Requiere integrar el Navigation SDK for Android y utilizar NavigationViewForAuto para renderizar el mapa. Es crítico mapear correctamente los tipos de maniobra de tu biblioteca (como DEPART, TURN_LEFT, FORK_RIGHT) a los tipos de Android Auto (TYPE_DEPART, TYPE_TURN_LEFT, TYPE_FORK_RIGHT) para proporcionar instrucciones precisas al conductor."
    },
    {
      question: "¿El kit de Figma es oficial de Google?",
      answer: "No. El Design Kit de Figma mencionado en esta guía ha sido creado por la comunidad y no es un producto oficial de Google. Sin embargo, se basa en las especificaciones oficiales del sistema de diseño de Android for Cars App Library. Siempre consulta la documentación oficial de Google para los requisitos finales."
    },
    {
      question: "¿Qué tipos de aplicaciones puedo desarrollar para Android Auto?",
      answer: "Android Auto admite principalmente aplicaciones de navegación, medios (música, podcasts, audiolibros), mensajería (con entrada por voz), y puntos de interés (POI). Las aplicaciones de navegación son las más comunes e incluyen características como mapas interactivos, búsqueda de destinos, navegación paso a paso, y actualizaciones de tráfico en tiempo real."
    },
    {
      question: "¿Cuáles son los requisitos de diseño para pantallas en Android Auto?",
      answer: "Android Auto debe funcionar en diferentes tamaños de pantalla, desde pequeñas (800x480) hasta extra grandes (1920x1080 o superiores). Las aplicaciones deben ser responsive y adaptarse automáticamente. Los elementos táctiles deben tener un tamaño mínimo de 76dp x 76dp para garantizar la usabilidad mientras se conduce. El sistema utiliza temas claro y oscuro que se adaptan según las condiciones de conducción."
    },
    {
      question: "¿Qué son los destinos rápidos en Android Auto?",
      answer: "Los destinos rápidos son accesos optimizados para establecer rutas de navegación de forma segura. Incluyen tres categorías principales: Recientes (lugares visitados recientemente), Categorías predefinidas (gasolineras, restaurantes, estacionamientos), y Guardados (ubicaciones sincronizadas como Casa, Trabajo y Favoritos). Esto minimiza la necesidad de escribir y permite acceso rápido con un toque."
    },
    {
      question: "¿Necesito un vehículo compatible para desarrollar aplicaciones Android Auto?",
      answer: "No necesariamente. Google proporciona el Desktop Head Unit (DHU) que te permite emular Android Auto en tu ordenador para pruebas. También puedes usar dispositivos Android con la app de Android Auto para desarrollo. Sin embargo, para pruebas finales y validación completa, se recomienda probar en un entorno real de Android Auto."
    },
    {
      question: "¿Qué herramientas necesito para diseñar para Android Auto?",
      answer: "Para diseñar, puedes utilizar Figma con el kit de diseño de la comunidad, o cualquier herramienta de diseño UI/UX. Para desarrollar, necesitarás Android Studio, el SDK de Android for Cars App Library, un dispositivo Android para pruebas, y conocimientos de Kotlin o Java. Google proporciona templates y componentes específicos para cada tipo de aplicación."
    },
    {
      question: "¿Cuáles son las mejores prácticas para diseñar interfaces de Android Auto?",
      answer: "Minimiza la distracción del conductor: usa texto grande y legible, limita el número de acciones en pantalla, proporciona retroalimentación clara, utiliza los componentes y plantillas oficiales de Google, asegura alto contraste, diseña para uso con una sola mano, y considera las condiciones de iluminación variables (modo día/noche). La navegación debe ser simple y predecible."
    },
    {
      question: "¿Cómo funcionan las restricciones de conducción en Android Auto?",
      answer: "Android Auto implementa restricciones automáticas de Distraction Optimization para garantizar la seguridad. Esto incluye límites en el número de elementos en listas (máximo 12 items visibles por vista), restricciones en la entrada de texto mientras se conduce (solo voz), y optimización automática del contenido mostrado. El sistema detecta si el vehículo está en movimiento y ajusta las capacidades de la app."
    },
    {
      question: "¿Dónde puedo encontrar documentación oficial de Google sobre Android Auto?",
      answer: "La documentación oficial se encuentra en developers.google.com/cars. Específicamente, consulta las guías de 'Create apps for Android Auto', 'Android for Cars App Library', y las directrices de diseño específicas para cada tipo de app. También puedes acceder a los recursos para desarrolladores en developer.android.com/training/cars."
    }
  ];

  return (
    <section id="faqs" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="mb-4"
            style={{ 
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              lineHeight: 1.2
            }}
          >
            Preguntas frecuentes
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ 
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: 1.6
            }}
          >
            Respuestas a las dudas más comunes sobre diseño y desarrollo para Android Auto
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border-2 border-gray-200 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger 
                className="hover:no-underline py-6"
                style={{ 
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  lineHeight: 1.4
                }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent 
                className="text-gray-700 pb-6"
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