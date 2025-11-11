import { Clock, Grid3x3, Star, Mic, Search } from "lucide-react";
import { Card } from "./ui/card";

export function QuickDestinations() {
  const destinationTypes = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Recientes",
      description: "Lugares visitados recientemente",
      examples: [
        "Última ubicación visitada",
        "Historial de destinos",
        "Rutas frecuentes",
        "Acceso rápido con un toque"
      ],
      color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      icon: <Grid3x3 className="w-8 h-8" />,
      title: "Categorías",
      description: "Opciones predefinidas de búsqueda",
      examples: [
        "Gasolineras cercanas",
        "Restaurantes y cafeterías",
        "Estacionamientos",
        "Puntos de interés (POI)"
      ],
      color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Guardados",
      description: "Ubicaciones sincronizadas del usuario",
      examples: [
        "Casa",
        "Trabajo",
        "Favoritos personalizados",
        "Lugares guardados en la nube"
      ],
      color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
    }
  ];

  return (
    <section id="quick-destinations" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 pt-[64px] pr-[24px] pb-[0px] pl-[24px]">
      

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