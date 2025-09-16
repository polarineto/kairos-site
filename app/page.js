"use client";

import { useState } from "react";
import FormContato from "../components/ui/formContato";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <main className="font-modern text-gray-800">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo-kairos.png"
                alt="Logo Kairós"
                className="h-12 w-auto sm:h-14"
              />
            </div>

            {/* Navegação Desktop */}
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-gray-700 hover:text-olive font-medium transition">Serviços</a>
              <a href="#esg" className="text-gray-700 hover:text-olive font-medium transition">ESG</a>
              <a href="#startups" className="text-gray-700 hover:text-olive font-medium transition">Startups</a>
              <a href="#contato" className="text-gray-700 hover:text-olive font-medium transition">Contato</a>
            </nav>

            {/* Botão Mobile */}
            <div className="md:hidden">
              <button onClick={() => setMenuAberto(!menuAberto)} className="text-gray-700 focus:outline-none">
                ☰
              </button>
            </div>
          </div>

          {/* Navegação Mobile */}
          {menuAberto && (
            <nav className="md:hidden flex flex-col space-y-2 pb-4">
              <a href="#servicos" className="text-gray-700 hover:text-olive font-medium">Serviços</a>
              <a href="#esg" className="text-gray-700 hover:text-olive font-medium">ESG</a>
              <a href="#startups" className="text-gray-700 hover:text-olive font-medium">Startups</a>
              <a href="#contato" className="text-gray-700 hover:text-olive font-medium">Contato</a>
            </nav>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-olive mb-6 leading-tight">
            Transforme Oportunidades em{" "}
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg mt-8">
            <video className="w-full h-full" controls>
              <source src="/video-kairos.mp4" type="video/mp4" />
              Seu navegador não suporta o vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-olive mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["Braço Financeiro", "Criação de braço financeiro usando serviços especializados de terceiros (BaaS)."],
              ["Instituição Regulada", "Estruturação de instituição financeira regulada com compliance e governança."],
              ["Gestão de Riscos", "Análise de oportunidades e riscos com base em dados e inteligência."],
              ["Segurança Cibernética", "Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos."]
            ].map(([titulo, desc], idx) => (
              <
