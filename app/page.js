"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [form, setForm] = useState({
    nome: "",
    cargo: "",
    empresa: "",
    cnpj: "",
    setor: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-white text-green-900">
      {/* Header fixo */}
      <header className="fixed top-0 w-full bg-white shadow z-50 px-4 py-3 flex items-center justify-between">
        <Image src="/logo-kairos.png" alt="Logo Kairós" width={140} height={50} />
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#servicos" className="hover:underline">Serviços</a>
          <a href="#esg" className="hover:underline">ESG</a>
          <a href="#startups" className="hover:underline">Startups</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>
      </header>

      {/* Espaço compensando o header */}
      <div className="h-20" />

      {/* Hero */}
      <section className="text-center px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Transforme Oportunidades em <br />
          <span className="text-gold">Resultados Estratégicos</span>
        </h1>
        <p className="mt-4 text-sm text-gray-600">
          Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
        </p>
        <div className="mt-6 flex justify-center">
          <video width="640" height="360" controls className="rounded shadow">
            <source src="/institucional.mp4" type="video/mp4" />
            Seu navegador não suporta o vídeo.
          </video>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-gray-50 py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Braço Financeiro</h3>
            <p>Criação de braço financeiro usando serviços especializados de terceiros (BaaS).</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Instituição Regulada</h3>
            <p>Estruturação de instituição financeira regulada com compliance e governança.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Gestão de Riscos</h3>
            <p>Análise de oportunidades e riscos com base em dados e inteligência.</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">Segurança Cibernética</h3>
            <p>Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.</p>
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="bg-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Compromisso ESG</h2>
        <p className="mb-6 text-sm">
          Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
        </p>
        <div className="bg-green-100 text-green-900 px-6 py-4 rounded shadow inline-block">
          <h3 className="font-bold">Retribuição Social</h3>
          <p className="text-sm">
            Parte do valor investido em nossos serviços é convertido em aconselhamento especializado para organizações sociais,
            inclusive podendo ser indicadas pelos próprios clientes.
          </p>
          <p className="mt-2 text-xs font-semibold">
            Ética • Responsabilidade • Inovação
          </p>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Programa para Startups</h2>
        <p className="text-sm mb-4">
          Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
        </p>
        <div className="bg-white p-6 rounded shadow inline-block">
          <h3 className="text-lg font-bold mb-2">Inscreva sua case!</h3>
          <p className="text-sm mb-4">A banca KSP selecionará os desafios mais estratégicos para mentoria.</p>
          <Button>Quero Participar</Button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Solicite um Aconselhamento</h2>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <Input name="nome" placeholder="Nome Completo" value={form.nome} onChange={handleChange} />
          <Input name="cargo" placeholder="Cargo" value={form.cargo} onChange={handleChange} />
          <Input name="empresa" placeholder="Nome da Empresa" value={form.empresa} onChange={handleChange} />
          <Input name="cnpj" placeholder="CNPJ da Empresa" value={form.cnpj} onChange={handleChange} />
          <Input name="setor" placeholder="Setor de Atuação" value={form.setor} onChange={handleChange} />
          <Textarea
            name="mensagem"
            placeholder="Descreva o Aconselhamento Desejado"
            value={form.mensagem}
            onChange={handleChange}
            className="md:col-span-2"
          />
          <Button className="md:col-span-2 w-full">Enviar</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center text-xs py-4">
        © 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
