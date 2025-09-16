// app/layout.js

import './globals.css'

export const metadata = {
  title: 'Kairos Inteli.tech',
  description: 'Conselheiros estratégicos para empresas no mercado financeiro.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-800 antialiased scroll-smooth">
        {children}
      </body>
    </html>
  )
}
