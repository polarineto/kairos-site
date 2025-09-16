"use client";

import { useState } from "react";
import Image from "next/image";
import FormContato from "../components/FormContato";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <main>
      {/* Header */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Image
            src="/logo-kairos.png"
            alt="Logo Kairós"
            width={160}
            height={50}
            className="h-auto w-auto max-h-12 object-contain"
          />

          {/* Botão Mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            &#9776;
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="#servicos" className="text-gray-700 hover:text-olive">Serviços</a>
            <a href="#esg" className="text-gray-700 hover:text-olive">ESG</a>
            <a href="#startups" className="text-gray-700 hover:text-olive">Startups</a>
            <a href="#contato" className="text-gray-700 hover:text-olive">Contato</a>
          </nav>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <nav className="md:hidden bg-white px-4 pb-4 space-y-2">
            <a href="#servicos" className="block text-gray-700">Serviços</a>
            <a href="#esg" className="block text-gray-700">ESG</a>
            <a href="#startups" className="block text-gray-700">Startups</a>
            <a href="#contato" className="block text-gray-700">Contato</a>
          </nav>
        )}
      </header>

      {/* Espaço para o header fixo */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-olive mb-6 leading-tight">
            Transforme Oportunidades em {" "}
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Aconselhamento estratégico especializado para empresas que desejam
            atuar no mercado financeiro.
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg mt-8">
            <video
              className="w-full h-full object-cover"
              src="/institucional.mp4"
              controls
              poster="/poster-video.jpg"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-olive mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ["Braço Financeiro", "Criação de braço financeiro usando serviços especializados de terceiros (BaaS)."],
              ["Instituição Regulada", "Estruturação de instituição financeira regulada com compliance e governança."],
              ["Gestão de Riscos", "Análise de oportunidades e riscos com base em dados e inteligência."],
              ["Segurança Cibernética", "Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos."]
            ].map(([title, desc]) => (
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition" key={title}>
                <h3 className="text-xl font-semibold text-olive mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Compromisso ESG</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Retribuição Social</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Parte do valor investido em nossos serviços é convertido em
                aconselhamento especializado para organizações sociais, inclusive
                podendo ser indicadas pelos próprios clientes.
              </p>
              <p className="text-gray-500 text-sm">
                Apoiamos boas práticas de gestão, controles e transparência no
                terceiro setor.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-xl shadow-md">
                <p className="text-green-800 font-semibold">
                  Ética • Responsabilidade • Inovação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-olive mb-6">Programa para Startups</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
          </p>
          <div className="bg-gradient-to-r from-gold-light to-gold p-8 rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Inscreva seu case!</h3>
            <p className="text-white mb-6">
              A banca KSP selecionará os desafios mais estratégicos para mentoria.
            </p>
            <button className="bg-white text-gold-dark px-6 py-2 rounded font-semibold hover:bg-yellow-100">
              Quero Participar
            </button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-olive mb-10">Entre em Contato</h2>
          <FormContato />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-olive text-white text-center py-4 text-sm">
        &copy; 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
