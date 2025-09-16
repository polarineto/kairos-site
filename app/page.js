"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("Enviado com sucesso!");
    e.target.reset();
  };

  return (
    <main className="pt-20 px-4 md:px-20 text-green-900">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-2xl md:text-4xl font-bold">
          Transforme Oportunidades em <br />
          <span className="text-gold">Resultados Estratégicos</span>
        </h1>
        <p className="mt-2 text-sm md:text-base">
          Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
        </p>
        <div className="mt-6 flex justify-center">
          <video controls className="rounded-xl w-full max-w-3xl shadow-lg">
            <source src="/institucional.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Nossos Serviços</h2>
        <ul className="space-y-3 text-sm md:text-base">
          <li>
            <strong>Braço Financeiro</strong> – Criação de braço financeiro usando serviços especializados de terceiros (BaaS).
          </li>
          <li>
            <strong>Instituição Regulada</strong> – Estruturação de instituição financeira regulada com compliance e governança.
          </li>
          <li>
            <strong>Gestão de Riscos</strong> – Análise de oportunidades e riscos com base em dados e inteligência.
          </li>
          <li>
            <strong>Segurança Cibernética</strong> – Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.
          </li>
          <li>
            <strong>Compromisso ESG</strong> – Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
          </li>
          <li>
            <strong>Retribuição Social</strong> – Parte do valor investido em nossos serviços é convertido em aconselhamento especializado para organizações sociais, inclusive podendo ser indicadas pelos próprios clientes.
          </li>
        </ul>
        <p className="mt-2 text-xs text-gray-600">
          Apoiamo boas práticas de gestão, controles e transparência no terceiro setor. 
          <strong>Ética</strong> • <strong>Responsabilidade</strong> • <strong>Inovação</strong>
        </p>
      </section>

      {/* Programa para Startups */}
      <section id="startups" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-2">Programa para Startups</h2>
        <p className="mb-2 text-sm md:text-base">
          Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
        </p>
        <p className="mb-4 text-sm md:text-base">
          Inscreva sua Start-up e participe da próxima seletiva.
        </p>
        <button
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
          onClick={() => document.getElementById("formulario").scrollIntoView({ behavior: "smooth" })}
        >
          Quero Participar
        </button>
      </section>

      {/* Contato */}
      <section id="contato" className="mb-12">
        <h2 className="text-xl md:text-2xl font-bold mb-2">Agende uma Conversa Preliminar</h2>
        <form
          id="formulario"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 max-w-xl mx-auto mt-4"
        >
          <input className="border rounded p-2" type="text" placeholder="Nome Completo" required />
          <input className="border rounded p-2" type="text" placeholder="Cargo" required />
          <input className="border rounded p-2" type="text" placeholder="Nome da Empresa" required />
          <input className="border rounded p-2" type="text" placeholder="CNPJ da Empresa" required />
          <input className="border rounded p-2" type="text" placeholder="Setor de Atuação" required />
          <textarea className="border rounded p-2" placeholder="Descreva o Aconselhamento Desejado" rows={4} required />
          <button
            type="submit"
            className="bg-green-900 text-white py-2 rounded hover:bg-green-800"
          >
            Enviar
          </button>
          {formStatus && <p className="text-green-700 font-semibold text-center">{formStatus}</p>}
        </form>
      </section>

      {/* Rodapé */}
      <footer className="bg-green-900 text-white text-center text-sm py-2 mt-10">
        &copy; 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
