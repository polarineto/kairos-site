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
      </body>
    </html>
  );
}
