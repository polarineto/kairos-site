"use client";

import "./globals.css";

export const metadata = {
  title: "Kairos Inteli.tech",
  description: "Conselheiros estratégicos para empresas no mercado financeiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-kairos.png" type="image/png" />
      </head>
      <body className="bg-white text-green-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
