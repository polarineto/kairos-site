"use client"; // ✅ Torna o componente um Client Component

export const metadata = {
  title: 'Kairos Inteli.tech',
  description: 'Conselheiros estratégicos para empresas no mercado financeiro.',
};

import './globals.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-modern text-gray-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// COMPONENTE HEADER
function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo apenas */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/logo-kairos.png"
                alt="Logo Kairós"
                className="h-10 w-auto sm:h-12"
              />
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              className="text-olive focus:outline-none"
              aria-label="Abrir menu"
            >
              {menuAberto ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Navegação desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#servicos" className="text-gray-700 hover:text-olive transition-colors font-medium">Serviços</a>
            <a href="#esg" className="text-gray-700 hover:text-olive transition-colors font-medium">ESG</a>
            <a href="#startups" className="text-gray-700 hover:text-olive transition-colors font-medium">Startups</a>
            <a href="#contato" className="text-gray-700 hover:text-olive transition-colors font-medium">Contato</a>
          </nav>
        </div>

        {/* Menu mobile */}
        {menuAberto && (
          <div className="md:hidden mt-2 space-y-2 pb-4 animate-fade-in">
            <a href="#servicos" className="block text-gray-700 hover:text-olive font-medium">Serviços</a>
            <a href="#esg" className="block text-gray-700 hover:text-olive font-medium">ESG</a>
            <a href="#startups" className="block text-gray-700 hover:text-olive font-medium">Startups</a>
            <a href="#contato" className="block text-gray-700 hover:text-olive font-medium">Contato</a>
          </div>
        )}
      </div>
    </header>
  );
}

// COMPONENTE FOOTER
function Footer() {
  return (
    <footer className="bg-olive-dark text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Kairós Inteli.tech. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
