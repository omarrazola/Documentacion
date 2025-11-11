/**
 * SkipToContent Component
 * WCAG 2.2 AA - Criterion 2.4.1: Bypass Blocks
 * 
 * Provides a keyboard-accessible link to skip repetitive navigation
 * and jump directly to main content.
 */

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] 
                 bg-primary text-primary-foreground px-6 py-3 rounded-lg 
                 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-offset-4 focus:ring-offset-white dark:focus:ring-offset-gray-950
                 transition-all duration-200"
      style={{ fontWeight: 600 }}
    >
      Saltar al contenido principal
    </a>
  );
}
