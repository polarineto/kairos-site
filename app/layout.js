export const metadata = {
  title: 'Kairos Inteli.tech',
  description: 'Conselheiros estratégicos para empresas no mercado financeiro.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-modern text-gray-800">
        {/* HEADER */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              {/* Logo e nome */}
              <div className="flex items-center space-x-3">
                <img src="/logo-kairos.png" alt="Logo Kairós" className="h-10 w-auto" />
                <div>
                  <h1 className="text-2xl font-bold text-olive">Kairós</h1>
                  <p className="text-sm text-gold font-medium">Inteli.tech</p>
                </div>
              </div>

              {/* Navegação */}
              <nav className="hidden md:flex space-x-8">
                <a href="#servicos" className="text-gray-700 hover:text-olive transition-colors font-medium">Serviços</a>
                <a href="#esg" className="text-gray-700 hover:text-olive transition-colors font-medium">ESG</a>
                <a href="#startups" className="text-gray-700 hover:text-olive transition-colors font-medium">Startups</a>
                <a href="#contato" className="text-gray-700 hover:text-olive transition-colors font-medium">Contato</a>
              </nav>
            </div>
          </div>
        </header>

        {/* CONTEÚDO */}
        {children}

        {/* FOOTER */}
        <footer className="bg-olive-dark text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-200">
              &copy; {new Date().getFullYear()} Kairós Inteli.tech. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
