import { Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                CarPlay Guide
              </span>
            </div>
            <p 
              className="mb-6 max-w-sm"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 400,
                color: '#9ca3af',
                lineHeight: 1.6
              }}
            >
              Guía completa para diseñar aplicaciones para Apple CarPlay. Basada en documentación oficial y recursos de la comunidad.
            </p>
            <div className="flex gap-4">
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="mb-4"
              style={{ 
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: 1.3
              }}
            >
              Enlaces rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Por qué CarPlay", href: "#why-carplay" },
                { label: "Principios de diseño", href: "#design-principles" },
                { label: "Kit de Figma", href: "#figma-kit" },
                { label: "Recursos", href: "#resources" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="hover:text-blue-400 transition-colors"
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: '#9ca3af'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 
              className="mb-4"
              style={{ 
                fontSize: '1rem',
                fontWeight: 700,
                lineHeight: 1.3
              }}
            >
              Recursos externos
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Documentación Apple", href: "https://developer.apple.com/" },
                { label: "HIG CarPlay", href: "https://developer.apple.com/design/human-interface-guidelines/" },
                { label: "Kit de Figma", href: "https://www.figma.com/community/file/1384385816001053279" },
                { label: "Developer Forums", href: "https://developer.apple.com/forums/" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    style={{ 
                      fontSize: '0.875rem',
                      fontWeight: 400,
                      color: '#9ca3af'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center gap-4">
            <p 
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 400,
                color: '#6b7280'
              }}
            >
              © 2025 Automotive App Design Guide. Material educativo y de referencia. 
            </p>
            <p 
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 400,
                color: '#6b7280'
              }}
            >
             Creado por{" "}
              <a 
                href="https://www.linkedin.com/in/omarrazolaarevalo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                style={{ fontWeight: 600, color: '#9ca3af' }}
              >
                Omar Razola
              </a>
            </p>
            <div className="flex gap-6">
              
              
            </div>
          </div>
          
          {/* Legal Disclaimer */}
          <div className="mt-8 p-4 bg-gray-800 rounded-lg">
            <p 
              className="text-center"
              style={{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1.5 }}
            >
              ⚠️ Aviso legal: El Design Kit de Figma no es oficial de Apple. Consulta siempre la documentación oficial antes de publicar tu app.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}