export const metadata = {
  title: 'Kairos Inteli.tech',
  description: 'Conselheiros estratégicos para empresas no mercado financeiro.',
};

import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-modern text-gray-800">
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
