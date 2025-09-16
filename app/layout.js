// ❌ NÃO usar "use client" aqui
import "./globals.css";

export const metadata = {
  title: "Kairos Inteli.tech",
  description: "Conselheiros estratégicos para empresas no mercado financeiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head />
      <body className="bg-white text-green-900 font-sans">{children}</body>
    </html>
  );
}
