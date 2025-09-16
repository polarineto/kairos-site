// app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kairos Inteli.tech",
  description: "Conselheiros estratégicos para empresas no mercado financeiro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="sticky top-0 z-50 w-full bg-white shadow">
          <nav className="flex items-center justify-between px-4 py-2">
            <a href="#">
              <img
                src="/logo-kairos.png"
                alt="Kairos Inteli.tech"
                className="h-12 w-auto object-contain"
              />
            </a>
            <ul className="hidden md:flex space-x-4 text-sm font-semibold text-green-900">
              <li>
                <a href="#servicos" className="hover:text-olive transition-colors duration-200">Serviços</a>
              </li>
              <li>
                <a href="#startups" className="hover:text-olive transition-colors duration-200">Startups</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-olive transition-colors duration-200">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
        <main>{children}</main>
        <footer className="bg-green-900 text-white text-center py-4 mt-12">
          <p className="text-xs">
            &copy; 2025 Kairos Inteli.tech. Todos os direitos reservados.
          </p>
        </footer>
      </body>
    </html>
  );
}
