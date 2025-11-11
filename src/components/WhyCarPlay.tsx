import { Shield, Smartphone, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Seguridad ante todo",
    description: "CarPlay está diseñado específicamente para minimizar distracciones mientras conduces. Las apps deben seguir estrictos requisitos de interacción que priorizan la seguridad del conductor."
  },
  {
    icon: Smartphone,
    title: "Integrado en el ecosistema Apple",
    description: "Millones de usuarios de iPhone utilizan CarPlay diariamente. Tu app puede conectar con Siri, Apple Maps y otros servicios del ecosistema, ofreciendo una experiencia cohesiva."
  },
  {
    icon: Zap,
    title: "Experiencia optimizada para el vehículo",
    description: "Las interfaces de CarPlay están optimizadas para pantallas de automóviles, con controles grandes, alto contraste y navegación simplificada, perfectas para uso en movimiento."
  }
];

export function WhyCarPlay() {
  return (
    <section id="why-carplay" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 
          className="mb-6 text-center text-gray-900 dark:text-gray-50"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.2
          }}
        >
          ¿Por qué diseñar para Apple CarPlay?
        </h2>
        
        <p 
          className="text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-400"
          style={{ 
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.6
          }}
        >
          CarPlay ofrece a los desarrolladores una plataforma única para llevar sus aplicaciones al automóvil de forma segura y nativa.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 
                className="mb-3 text-gray-900 dark:text-gray-100"
                style={{ 
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-gray-600 dark:text-gray-400"
                style={{ 
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
