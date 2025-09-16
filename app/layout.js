// app/layout.js

export const metadata = {
  title: 'Kairos Inteli.tech',
  description: 'Conselheiros estratégicos para empresas no mercado financeiro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
