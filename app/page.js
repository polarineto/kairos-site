"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function Home() {
  const [formEnviado, setFormEnviado] = useState(false);
  const [startupFormEnviado, setStartupFormEnviado] = useState(false);
  const [formStartupAberto, setFormStartupAberto] = useState(false);

  const enviarFormulario = (event, isStartup = false) => {
    event.preventDefault();
    if (isStartup) {
      setStartupFormEnviado(true);
    } else {
      setFormEnviado(true);
    }
    setTimeout(() => {
      if (isStartup) {
        setStartupFormEnviado(false);
      } else {
        setFormEnviado(false);
      }
    }, 5000);
  };

  return (
    <main className="text-green-900">
      {/* HERO */}
      <section className="text-center py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Transforme Oportunidades em <br />
          <span className="text-gold">Resultados Estratégicos</span>
        </h1>
        <p className="mt-2 text-sm md:text-base">
          Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
        </p>
        <video
          controls
          preload="metadata"
          className="mx-auto mt-6 rounded shadow-md w-full max-w-2xl"
        >
          <source src="/institucional.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-4 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Nossos Serviços</h2>
        <ul className="space-y-3">
          <li><strong>Braço Financeiro</strong> – Criação de braço financeiro usando serviços especializados de terceiros (BaaS).</li>
          <li><strong>Instituição Regulada</strong> – Estruturação de instituição financeira regulada com compliance e governança.</li>
          <li><strong>Gestão de Riscos</strong> – Análise de oportunidades e riscos com base em dados e inteligência.</li>
          <li><strong>Segurança Cibernética</strong> – Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.</li>
          <li><strong>Compromisso ESG</strong> – Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.</li>
          <li><strong>Retribuição Social</strong> – Parte do valor investido em nossos serviços é revertido em aconselhamento especializado para organizações sociais, inclusive indicadas pelos próprios clientes. <br /> Ética • Responsabilidade • Inovação.</li>
        </ul>
      </section>

      {/* STARTUPS */}
      <section id="startups" className="px-4 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Programa para Startups</h2>
        <p className="mb-2 text-sm">Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.</p>
        <p className="mb-4 text-sm">Inscreva sua Start-up e participe da próxima seletiva.</p>
        <Button onClick={() => setFormStartupAberto(true)} className="bg-green-900 text-white">Quero Participar</Button>
        {formStartupAberto && (
          <form onSubmit={(e) => enviarFormulario(e, true)} className="grid gap-2 mt-6">
            <Input placeholder="Nome Completo" required />
            <Input placeholder="Cargo" required />
            <Input placeholder="Nome da Empresa" required />
            <Input placeholder="CNPJ da Empresa" required />
            <Input placeholder="Setor de Atuação" required />
            <Textarea placeholder="Descreva o Aconselhamento Desejado" required />
            <Button type="submit" className="bg-green-900 text-white">Enviar</Button>
            {startupFormEnviado && <p className="text-green-600">Enviado com sucesso!</p>}
          </form>
        )}
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-4 py-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Agende uma Conversa Preliminar</h2>
        <p className="mb-4 text-sm">Informe seus Dados</p>
        <form onSubmit={enviarFormulario} className="grid gap-2">
          <Input placeholder="Nome Completo" required />
          <Input placeholder="Cargo" required />
          <Input placeholder="Nome da Empresa" required />
          <Input placeholder="CNPJ da Empresa" required />
          <Input placeholder="Setor de Atuação" required />
          <Textarea placeholder="Descreva o Aconselhamento Desejado" required />
          <Button type="submit" className="bg-green-900 text-white">Enviar</Button>
          {formEnviado && <p className="text-green-600">Enviado com sucesso!</p>}
        </form>
      </section>

      {/* RODAPÉ */}
      <footer className="text-center text-white text-xs py-4 bg-green-900 mt-10">
        &copy; 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
