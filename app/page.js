"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Enviado com sucesso!");
  };

  return (
    <div>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Image src="/logo-kairos.png" alt="Logo Kairos" width={120} height={40} />
          <nav className="space-x-4 text-sm">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#esg" className="hover:underline">ESG</a>
            <a href="#startups" className="hover:underline">Startups</a>
            <a href="#contato" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      {/* Espaço após header fixo */}
      <div className="pt-24 px-4 max-w-5xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">
            Transforme Oportunidades em <br />
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
          </p>
          <div className="mt-6">
            <video controls className="w-full max-w-xl mx-auto rounded shadow">
              <source src="/institucional.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="mb-16">
          <h2 className="text-2xl font-semibold text-green-900 text-center mb-8">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Braço Financeiro",
                desc: "Criação de braço financeiro usando serviços especializados de terceiros (BaaS).",
              },
              {
                title: "Instituição Regulada",
                desc: "Estruturação de instituição financeira regulada com compliance e governança.",
              },
              {
                title: "Gestão de Riscos",
                desc: "Análise de oportunidades e riscos com base em dados e inteligência.",
              },
              {
                title: "Segurança Cibernética",
                desc: "Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 shadow rounded">
                <h3 className="font-bold text-green-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESG */}
        <section id="esg" className="mb-16">
          <h2 className="text-2xl font-semibold text-green-900 text-center mb-4">Compromisso ESG</h2>
          <p className="text-sm text-center mb-4">
            Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
          </p>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-semibold text-green-900">Retribuição Social</h3>
            <p className="text-sm text-gray-700 mt-1">
              Parte do valor investido em nossos serviços é convertido em aconselhamento especializado para organizações sociais,
              inclusive podendo ser indicadas pelos próprios clientes.
              Apoiamos boas práticas de gestão, controles e transparência no terceiro setor.
              <br />
              <span className="font-semibold">Ética • Responsabilidade • Inovação</span>
            </p>
          </div>
        </section>

        {/* Startups */}
        <section id="startups" className="mb-16">
          <h2 className="text-2xl font-semibold text-green-900">Programa para Startups</h2>
          <p className="text-sm mb-2">
            Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
          </p>
          <p className="text-sm mb-4">Inscreva sua Start-up e participe da próxima seletiva.</p>
          <Button onClick={() => document.getElementById("form-startup").scrollIntoView({ behavior: 'smooth' })}>
            Quero Participar
          </Button>
        </section>

        {/* Formulário de Contato */}
        <section id="contato" className="mb-16">
          <h2 className="text-2xl font-semibold text-green-900 mb-4">Agende uma Conversa Preliminar</h2>
          <form onSubmit={handleSubmit} className="space-y-3 max-w-xl" id="form-startup">
            <Input placeholder="Nome Completo" required />
            <Input placeholder="Cargo" required />
            <Input placeholder="Nome da Empresa" required />
            <Input placeholder="CNPJ da Empresa" required />
            <Input placeholder="Setor de Atuação" required />
            <Textarea placeholder="Descreva o Aconselhamento Desejado" rows={4} required />
            <Button type="submit">Enviar</Button>
            {formStatus && <p className="text-green-700 text-sm">{formStatus}</p>}
          </form>
        </section>
      </div>

      {/* Rodapé */}
      <footer className="bg-green-900 text-white text-xs text-center py-2">
        © 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </div>
  );
}
