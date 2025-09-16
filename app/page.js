"use client"

import Image from "next/image";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/cards";
import "./globals.css";

export default function Page() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <main className="bg-white min-h-screen text-gray-900">
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <Image
            src="/logo-kairos.png"
            alt="Logo Kairós"
            width={120}
            height={40}
            className="object-contain h-10 w-auto"
            priority
          />
          <nav className="hidden md:flex space-x-6 text-sm text-gray-700 font-semibold">
            <a href="#servicos" className="hover:text-green-900">Serviços</a>
            <a href="#esg" className="hover:text-green-900">ESG</a>
            <a href="#startups" className="hover:text-green-900">Startups</a>
            <a href="#contato" className="hover:text-green-900">Contato</a>
          </nav>
        </div>
      </header>

      <div className="pt-24 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900">
          Transforme Oportunidades em <br />
          <span className="text-gold">Resultados Estratégicos</span>
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
        </p>

        {/* Vídeo */}
        <div className="mt-6">
          <video
            controls
            className="w-full max-w-3xl mx-auto rounded shadow-md"
          >
            <source src="/institucional.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
      </div>

      {/* Serviços */}
      <section id="servicos" className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-10">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card><CardContent><h3 className="font-bold">Braço Financeiro</h3><p className="text-sm">Criação de braço financeiro usando serviços especializados de terceiros (BaaS).</p></CardContent></Card>
          <Card><CardContent><h3 className="font-bold">Instituição Regulada</h3><p className="text-sm">Estruturação de instituição financeira com compliance e governança.</p></CardContent></Card>
          <Card><CardContent><h3 className="font-bold">Gestão de Riscos</h3><p className="text-sm">Análise de oportunidades e riscos com base em dados e inteligência.</p></CardContent></Card>
          <Card><CardContent><h3 className="font-bold">Segurança Cibernética</h3><p className="text-sm">Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.</p></CardContent></Card>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Compromisso ESG</h2>
        <p className="text-sm max-w-2xl mx-auto">
          Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
        </p>
        <div className="mt-6 max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6 text-sm">
              <p>Parte do valor investido é convertido em aconselhamento especializado para organizações sociais, inclusive podendo ser indicadas pelos próprios clientes.</p>
              <p className="mt-2 font-semibold text-green-900"> Ética + Responsabilidade + Inovação</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-2">Programa para Startups</h2>
        <p className="text-sm mb-6">Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.</p>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <p className="font-semibold text-sm">Inscreva sua case! A banca KSP seleciona os desafios mais estratégicos para mentoria.</p>
              <Button className="mt-4 bg-green-900 text-white hover:bg-green-800">Quero Participar</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-6">Solicite um Aconselhamento</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
        >
          <Input placeholder="Nome Completo" name="nome" onChange={handleChange} />
          <Input placeholder="Cargo" name="cargo" onChange={handleChange} />
          <Input placeholder="Nome da Empresa" name="empresa" onChange={handleChange} />
          <Input placeholder="CNPJ da Empresa" name="cnpj" onChange={handleChange} />
          <Input placeholder="Setor de Atuação" name="setor" onChange={handleChange} />
          <Textarea
            placeholder="Descreva o Aconselhamento Desejado"
            name="mensagem"
            className="md:col-span-2"
            onChange={handleChange}
          />
          <Button type="submit" className="md:col-span-2 bg-green-900 text-white hover:bg-green-800">Enviar</Button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="bg-green-900 text-white text-sm text-center py-4">
        &copy; 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
