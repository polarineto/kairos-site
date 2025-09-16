"use client";

import FormContato from "../components/ui/formContato";

export default function Home() {
  return (
    <main className="pt-24">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img
            src="/logo-kairos.png"
            alt="Logomarca Kairós"
            className="h-8 md:h-10"
          />
          <nav className="space-x-6 hidden md:flex">
            <a href="#servicos" className="text-gray-700 hover:text-olive">
              Serviços
            </a>
            <a href="#esg" className="text-gray-700 hover:text-olive">
              ESG
            </a>
            <a href="#startups" className="text-gray-700 hover:text-olive">
              Startups
            </a>
            <a href="#contato" className="text-gray-700 hover:text-olive">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-olive mb-6 leading-tight">
            Transforme Oportunidades em{" "}
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Aconselhamento estratégico especializado para empresas que desejam
            atuar no mercado financeiro.
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg mt-8">
            <video
              className="w-full h-full"
              controls
              poster="/capa-video.png"
            >
              <source src="/institucional.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-olive mb-12">
            Nossos Serviços
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-olive mb-2">
                Braço Financeiro
              </h3>
              <p className="text-gray-600 text-sm">
                Criação de braço financeiro usando serviços especializados de
                terceiros (BaaS).
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-olive mb-2">
                Instituição Regulada
              </h3>
              <p className="text-gray-600 text-sm">
                Estruturação de instituição financeira regulada com compliance e
                governança.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-olive mb-2">
                Gestão de Riscos
              </h3>
              <p className="text-gray-600 text-sm">
                Análise de oportunidades e riscos com base em dados e
                inteligência.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-olive mb-2">
                Segurança Cibernética
              </h3>
              <p className="text-gray-600 text-sm">
                Avaliação de vulnerabilidades e proteção de ativos digitais
                estratégicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">
              Compromisso ESG
            </h2>
