import { Navigation, Smartphone, Shield } from "lucide-react";

export function WhyAndroidAuto() {
  const benefits = [
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Diseño centrado en el conductor",
      description: "Las apps de navegación requieren interfaces optimizadas para pantallas grandes de vehículos, con información clara y accesible durante la conducción.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Uso combinado vehículo + móvil",
      description: "Android Auto integra perfectamente el ecosistema del smartphone con el sistema del vehículo, permitiendo una experiencia fluida entre dispositivos.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conducción segura y optimizada",
      description: "El sistema está diseñado específicamente para minimizar distracciones, con plantillas optimizadas, controles por voz y interacciones simplificadas.",
      color: "bg-purple-50 text-purple-600"
    }
  ];

  return (
    <section id="why-android-auto" className="py-24 px-6 bg-white dark:bg-gray-950">
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
            ¿Por qué diseñar para Android Auto?
          </h2>
          <p 
            className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Las apps de navegación para Android Auto requieren un enfoque centrado en el conductor: pantalla de gran tamaño, uso mientras se conduce, uso combinado del vehículo + móvil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl p-6 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className={`p-4 rounded-xl ${benefit.color} w-fit mb-4`}>
                {benefit.icon}
              </div>
              <h3 
                className="text-gray-900 dark:text-gray-100 mb-3"
                style={{ 
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  lineHeight: 1.3
                }}
              >
                {benefit.title}
              </h3>
              <p 
                className="text-gray-600 dark:text-gray-400"
                style={{ 
                  fontSize: '0.9375rem',
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