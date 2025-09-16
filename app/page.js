"use client";

import React, { useState } from "react";

export default function KairosLandingPage() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:marketing@kairosinteli.tech?subject=Aconselhamento Kairós&body=Nome: ${formData.nome}%0D%0ACargo: ${formData.cargo}%0D%0AEmpresa: ${formData.empresa}%0D%0ACNPJ: ${formData.cnpj}%0D%0ASetor: ${formData.setor}%0D%0AAconselhamento: ${formData.aconselhamento}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="font-sans bg-gradient-to-b from-slate-50 to-white text-gray-800 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/logo-kairos.png"
              alt="Logo Kairós"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-[#4b5e36] leading-none">Kairós</h1>
              <p className="text-sm text-[#bfa144]">Inteli.tech</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-[#4b5e36] mb-4 leading-tight">
          Transforme Oportunidades em <span className="text-[#bfa144]">Resultados</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aconselhamento estratégico para empresas que desejam atuar no mercado financeiro com inteligência, dados e visão de futuro.
        </p>
      </section>

      {/* Video */}
      <section className="py-12 px-6 bg-[#e8ecde]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#4b5e36] mb-4">Apresentação da Kairós</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-96 rounded-xl shadow-md"
              src="https://www.youtube.com/embed/"
              title="Vídeo Institucional da Kairós"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto bg-slate-50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-[#4b5e36] text-center mb-6">
            Solicite um Aconselhamento
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="nome"
              placeholder="Nome completo"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#4b5e36]"
            />
            <input
              name="cargo"
              placeholder="Cargo"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#4b5e36]"
            />
            <input
              name="empresa"
              placeholder="Nome da empresa"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#4b5e36]"
            />
            <input
              name="cnpj"
              placeholder="CNPJ da empresa"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#4b5e36]"
            />
            <input
              name="setor"
              placeholder="Setor de atuação"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#4b5e36]"
            />
            <textarea
              name="aconselhamento"
              rows="5"
              placeholder="Descreva o aconselhamento desejado"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#4b5e36] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#bfa144] hover:bg-[#a98f39] text-white font-semibold py-3 rounded-xl shadow-md"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4b5e36] text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Kairós Inteli.tech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
