"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function Home() {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("enviado");
  };

  return (
    <main>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/logo-kairos.png" alt="Logo" width={120} height={40} />
        </div>
        <nav className="space-x-4 text-sm text-gray-700">
          <a href="#servicos">Serviços</a>
          <a href="#esg">ESG</a>
          <a href="#startups">Startups</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-24 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900">
          Transforme Oportunidades em
          <br />
          <span className="text-gold">Resultados Estratégicos</span>
        </h1>
        <p className="text-sm mt-2">
          Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
        </p>
        <div className="mt-6 max-w-3xl mx-auto">
          <video
            controls
            className="rounded shadow w-full h-auto"
            poster="/logo-kairos.png"
          >
            <source src="/institucional.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-sm">
          <div className="bg-white p-4 rounded shadow">
            <strong>Braço Financeiro</strong> – Criação de braço financeiro usando serviços especializados de terceiros (BaaS).
          </div>
          <div className="bg-white p-4 rounded shadow">
            <strong>Instituição Regulada</strong> – Estruturação de instituição financeira regulada com compliance e governança.
          </div>
          <div className="bg-white p-4 rounded shadow">
            <strong>Gestão de Riscos</strong> – Análise de oportunidades e riscos com base em dados e inteligência.
          </div>
          <div className="bg-white p-4 rounded shadow">
            <strong>Segurança Cibernética</strong> – Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="py-16 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Compromisso ESG</h2>
        <p className="text-sm max-w-3xl mx-auto mb-6">
          Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
        </p>
        <div className="bg-gray-50 rounded-lg max-w-3xl mx-auto p-6 shadow">
          <p className="text-sm text-left">
            Parte do valor investido em nossos serviços é convertido em aconselhamento especializado para organizações sociais,
            inclusive podendo ser indicadas pelos próprios clientes.<br /><br />
            Apoiamos boas práticas de gestão, controles e transparência no terceiro setor.<br />
            <span className="text-green-900 font-medium">Ética • Responsabilidade • Inovação</span>
          </p>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-2">Programa para Startups</h2>
        <p className="text-sm mb-4">
          Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
        </p>
        <p className="text-sm mb-6">Inscreva sua Start-up e participe da próxima seletiva.</p>
        <Button onClick={() => document.getElementById("contato").scrollIntoView({ behavior: "smooth" })}>
          Quero Participar
        </Button>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Agende uma Conversa Preliminar</h2>
        <p className="text-sm mb-4">Informe seus Dados</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-4 text-left px-4">
          <Input placeholder="Nome Completo" required />
          <Input placeholder="Cargo" required />
          <Input placeholder="Nome da Empresa" required />
          <Input placeholder="CNPJ da Empresa" required />
          <Input placeholder="Setor de Atuação" required />
          <Textarea placeholder="Descreva o Aconselhamento Desejado" required />
          <Button type="submit">Enviar</Button>
          {formStatus === "enviado" && (
            <p className="text-green-700 font-medium mt-2">Enviado com sucesso!</p>
          )}
        </form>
      </section>

      {/* Rodapé */}
      <footer className="bg-green-900 text-white text-center py-4 text-xs">
        © 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
