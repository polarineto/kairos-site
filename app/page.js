"use client";

import { useState } from "react";
import Image from "next/image";
import FormContato from "../components/ui/formContato";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function Home() {
  const [showFormStartups, setShowFormStartups] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Cabeçalho Fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50 py-3 px-4 flex items-center justify-between">
        <Image src="/logo-kairos.png" alt="Logo" width={140} height={40} className="object-contain" />
        <nav className="space-x-4 hidden md:block">
          <button onClick={() => handleScroll("servicos")} className="text-sm text-olive font-medium hover:underline">Serviços</button>
          <button onClick={() => handleScroll("esg")} className="text-sm text-olive font-medium hover:underline">ESG</button>
          <button onClick={() => handleScroll("startups")} className="text-sm text-olive font-medium hover:underline">Startups</button>
          <button onClick={() => handleScroll("contato")} className="text-sm text-olive font-medium hover:underline">Agende uma Conversa Preliminar</button>
        </nav>
      </header>

      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-olive mb-6 leading-tight">
              Transforme Oportunidades em <span className="text-gold">Resultados Estratégicos</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
            </p>
            <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg mt-8">
              <video className="w-full h-full" controls preload="auto">
                <source src="/institucional.mp4" type="video/mp4" />
                Seu navegador não suporta a exibição do vídeo.
              </video>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-olive mb-12">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-olive mb-2">Braço Financeiro</h3>
                <p className="text-gray-600 text-sm">
                  Criação de braço financeiro usando serviços especializados de terceiros (BaaS).
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-olive mb-2">Instituição Regulada</h3>
                <p className="text-gray-600 text-sm">
                  Estruturação de instituição financeira regulada com compliance e governança.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-olive mb-2">Gestão de Riscos</h3>
                <p className="text-gray-600 text-sm">
                  Análise de oportunidades e riscos com base em dados e inteligência.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-olive mb-2">Segurança Cibernética</h3>
                <p className="text-gray-600 text-sm">
                  Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.
                </p>
              </div>
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
                  Parte do valor investido em nossos serviços é convertido em aconselhamento especializado para organizações sociais, inclusive podendo ser indicadas pelos próprios clientes.
                </p>
                <p className="text-gray-500 text-sm">
                  Apoiamos boas práticas de gestão, controles e transparência no terceiro setor.
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
              Inscreva sua Start-up e participe da próxima seletiva.
            </p>
            <div className="bg-gradient-to-r from-gold-light to-gold p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Inscreva seu case!</h3>
              <p className="text-white mb-6">
                A banca KSP selecionará os desafios mais estratégicos para mentoria.
              </p>
              <button onClick={() => setShowFormStartups(!showFormStartups)} className="bg-white text-gold-dark px-6 py-2 rounded font-semibold hover:bg-yellow-100">
                Quero Participar
              </button>
            </div>
            {showFormStartups && (
              <div className="mt-8 bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto">
                <form action="https://formsubmit.co/seu-email@dominio.com" method="POST" className="grid gap-4">
                  <Input type="text" name="nome" placeholder="Nome" required />
                  <Input type="email" name="email" placeholder="Email" required />
                  <Input type="text" name="startup" placeholder="Nome da Startup" required />
                  <Textarea name="mensagem" placeholder="Descreva seu desafio" rows={4} required />
                  <Button type="submit" className="bg-[#bfa144] text-white hover:bg-yellow-700">
                    Enviar Inscrição
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-olive mb-4 text-center">Agende uma Conversa Preliminar</h2>
            <FormContato />
          </div>
        </section>
      </div>
    </main>
  );
}
