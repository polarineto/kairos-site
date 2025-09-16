"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function Page() {
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    empresa: '',
    cnpj: '',
    setor: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  return (
    <div className="min-h-screen bg-white text-green-900">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-4 py-2 flex items-center justify-between">
        <Image src="/logo-kairos.png" alt="Kairos Logo" width={120} height={40} priority />
        <nav className="space-x-4 text-sm font-medium hidden md:flex">
          <a href="#servicos" className="hover:text-olive">Serviços</a>
          <a href="#esg" className="hover:text-olive">ESG</a>
          <a href="#startups" className="hover:text-olive">Startups</a>
          <a href="#contato" className="hover:text-olive">Contato</a>
        </nav>
      </header>

      <main className="pt-24 px-4 max-w-5xl mx-auto space-y-16">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">
            Transforme Oportunidades em<br />
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
          </p>
          <div className="mt-6 flex justify-center">
            <video controls className="rounded shadow-lg max-w-full h-auto w-[640px]">
              <source src="/institucional.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="text-center">
          <h2 className="text-2xl font-bold">Nossos Serviços</h2>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {[
              {
                titulo: "Braço Financeiro",
                descricao: "Criação de braço financeiro usando serviços especializados de terceiros (BaaS)."
              },
              {
                titulo: "Instituição Regulada",
                descricao: "Estruturação de instituição financeira regulada com compliance e governança."
              },
              {
                titulo: "Gestão de Riscos",
                descricao: "Análise de oportunidades e riscos com base em dados e inteligência."
              },
              {
                titulo: "Segurança Cibernética",
                descricao: "Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos."
              }
            ].map((item, i) => (
              <div key={i} className="border p-4 rounded shadow hover:shadow-md transition">
                <h3 className="font-semibold">{item.titulo}</h3>
                <p className="text-sm mt-2 text-gray-600">{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ESG */}
        <section id="esg" className="text-center bg-gray-50 p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Compromisso ESG</h2>
          <p className="text-sm text-gray-700">
            Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
          </p>
          <div className="mt-4 bg-green-100 p-4 rounded shadow text-green-800 text-sm font-medium">
            Parte do valor investido nos serviços é convertido em aconselhamento para organizações sociais.
            <br />
            <span className="text-gold">Ética + Responsabilidade + Inovação</span>
          </div>
        </section>

        {/* Startups */}
        <section id="startups" className="text-center">
          <h2 className="text-2xl font-bold">Programa para Startups</h2>
          <p className="text-sm text-gray-700 mt-1">
            Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
          </p>
          <div className="mt-4 p-6 border rounded shadow">
            <p className="text-green-900 font-semibold mb-2">Inscreva sua case!</p>
            <p className="text-sm text-gray-700 mb-4">
              A banca KSP selecionará os desafios mais estratégicos para mentoria.
            </p>
            <Button className="bg-green-900 text-white hover:bg-green-800">Quero Participar</Button>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="text-center">
          <h2 className="text-2xl font-bold">Entre em Contato</h2>
          <p className="text-sm text-gray-700 mb-6">Solicite um Aconselhamento</p>
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 text-left">
            <Input placeholder="Nome Completo" name="nome" onChange={handleChange} required />
            <Input placeholder="Cargo" name="cargo" onChange={handleChange} required />
            <Input placeholder="Nome da Empresa" name="empresa" onChange={handleChange} required />
            <Input placeholder="CNPJ da Empresa" name="cnpj" onChange={handleChange} required />
            <Input placeholder="Setor de Atuação" name="setor" onChange={handleChange} required />
            <div className="md:col-span-2">
              <Textarea placeholder="Descreva o Aconselhamento Desejado" name="mensagem" onChange={handleChange} rows={4} required />
            </div>
            <div className="md:col-span-2 text-center">
              <Button type="submit" className="bg-gold text-white hover:bg-yellow-500">Enviar</Button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center text-xs py-4 mt-16">
        © 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </div>
  );
}
