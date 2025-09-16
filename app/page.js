"use client";

import { useState } from "react";
import Image from "next/image";
import FormContato from "../components/ui/formContato";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const scrollWithOffset = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // ajuste conforme altura do header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Cabeçalho fixo */}
      <header className="fixed top-0 w-full bg-white shadow z-50 px-4 py-3 flex justify-between items-center">
        <Image src="/logo-kairos.png" alt="Kairós Logo" width={140} height={40} />
        <nav className="space-x-6 text-sm font-semibold text-gray-700 hidden md:flex">
          <button onClick={() => scrollWithOffset("servicos")}>Serviços</button>
          <button onClick={() => scrollWithOffset("esg")}>ESG</button>
          <button onClick={() => scrollWithOffset("startups")}>Startups</button>
          <button onClick={() => scrollWithOffset("contato")}>Contato</button>
        </nav>
      </header>

      <div className="pt-24">
        {/* Hero */}
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
              <video controls className="w-full h-full">
                <source src="/institucional.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
              </video>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-olive mb-12">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Braço Financeiro", desc: "Criação de braço financeiro usando serviços especializados de terceiros (BaaS)." },
                { title: "Instituição Regulada", desc: "Estruturação de instituição financeira regulada com compliance e governança." },
                { title: "Gestão de Riscos", desc: "Análise de oportunidades e riscos com base em dados e inteligência." },
                { title: "Segurança Cibernética", desc: "Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos." },
              ].map((s, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-olive mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm">{s.desc}</p>
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
                  Parte do valor investido em nossos serviços é convertido em aconselhamento especializado
                  para organizações sociais, inclusive podendo ser indicadas pelos próprios clientes.
                </p>
                <p className="text-gray-500 text-sm">
                  Apoiamos boas práticas de gestão, controles e transparência no terceiro setor.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-xl shadow-md">
                  <p className="text-green-800 font-semibold">Ética • Responsabilidade • Inovação</p>
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
              <h3 className="text-2xl font-bold mb-4">Inscreva sua Start-up e participe da próxima seletiva</h3>
              <p className="text-white mb-6">
                A banca KSP selecionará os desafios mais estratégicos para mentoria.
              </p>
              <button
                className="bg-white text-gold-dark px-6 py-2 rounded font-semibold hover:bg-yellow-100"
                onClick={() => setShowModal(true)}
              >
                Quero Participar
              </button>
            </div>
          </div>
        </section>

        {/* Modal para Startups */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-lg relative">
              <button onClick={() => setShowModal(false)} className="absolute top-2 right-3 text-gray-500">✕</button>
              <h2 className="text-xl font-bold mb-4 text-olive">Inscrição no Programa de Startups</h2>
              <FormContato />
            </div>
          </div>
        )}

        {/* Contato */}
        <section id="contato" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-olive mb-6 text-center">
              Agende uma Conversa Preliminar
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <FormContato />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
