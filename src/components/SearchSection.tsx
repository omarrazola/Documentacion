import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="mb-6"
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.2
          }}
        >
          ¿Buscas algo específico?
        </h2>
        
        <p 
          className="mb-10"
          style={{ 
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#6b7280',
            lineHeight: 1.6
          }}
        >
          Usa nuestro buscador para encontrar rápidamente información sobre diseño, componentes, requisitos y más.
        </p>

        <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Ej: seguridad, botones, navegación..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 rounded-xl border-gray-200 shadow-sm"
              style={{ fontSize: '1rem' }}
            />
          </div>
          <Button 
            type="submit"
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 rounded-xl"
            style={{ fontSize: '1rem', fontWeight: 400, height: '50px' }}
          >
            Buscar
          </Button>
        </form>

        <div className="mt-8 flex flex-wrap gap-2 justify-center">
          <p style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6b7280' }} className="w-full mb-2">
            Búsquedas populares:
          </p>
          {['seguridad', 'figma', 'botones', 'navegación', 'contraste', 'ctas', 'mapas', 'workflow'].map((term, index) => (
            <button
              key={index}
              onClick={() => {
                setSearchQuery(term);
                onSearch(term);
              }}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer"
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}