"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function Home() {
  const contatoRef = useRef(null);
  const startupFormRef = useRef(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [startupFormSuccess, setStartupFormSuccess] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = ref.current.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleSubmit = (e, isStartup = false) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      if (isStartup) {
        setStartupFormSuccess(true);
        setTimeout(() => setStartupFormSuccess(false), 5000);
      } else {
        setFormSuccess(true);
        setTimeout(() => setFormSuccess(false), 5000);
      }
      form.reset();
    });
  };

  return (
    <main className="text-green-900 bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow z-50 flex justify-between items-center px-6 py-3">
        <Image src="/logo-kairos.png" alt="Logo Kairós" width={120} height={50} />
        <nav className="space-x-4 text-sm md:text-base">
          <button onClick={() => scrollToSection(contatoRef)}>Contato</button>
          <button onClick={() => scrollToSection(startupFormRef)}>Startups</button>
        </nav>
      </header>

      <div className="pt-24 max-w-4xl mx-auto px-4">
        {/* HERO */}
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold">
            Transforme Oportunidades em{" "}
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="mt-2 text-sm">
            Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
          </p>
          <video
            src="/institucional.mp4"
            controls
            preload="auto"
            className="mt-4 w-full rounded shadow"
          />
        </section>

        {/* SERVIÇOS */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Nossos Serviços</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Braço Financeiro</strong> – Criação de braço financeiro usando serviços especializados de terceiros (BaaS).</li>
            <li><strong>Instituição Regulada</strong> – Estruturação de instituição financeira regulada com compliance e governança.</li>
            <li><strong>Gestão de Riscos</strong> – Análise de oportunidades e riscos com base em dados e inteligência.</li>
            <li><strong>Segurança Cibernética</strong> – Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.</li>
            <li><strong>Compromisso ESG</strong> – Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.</li>
            <li><strong>Retribuição Social</strong> – Parte do valor investido em nossos serviços é revertido em aconselhamento especializado para organizações sociais, inclusive indicadas pelos próprios clientes. Ética • Responsabilidade • Inovação.</li>
          </ul>
        </section>

        {/* STARTUPS */}
        <section className="mb-12" ref={startupFormRef}>
          <h2 className="text-2xl font-bold mb-2">Programa para Startups</h2>
          <p className="text-sm mb-4">
            Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
          </p>
          <p className="text-sm font-medium mb-4">Inscreva sua Start-up e participe da próxima seletiva.</p>
          <button
            onClick={() => scrollToSection(contatoRef)}
            className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Quero Participar
          </button>
        </section>

        {/* FORMULÁRIO */}
        <section className="mb-16" ref={contatoRef}>
          <h2 className="text-2xl font-bold mb-4">Agende uma Conversa Preliminar</h2>
          <p className="text-sm mb-4">Informe seus Dados</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input name="nome" placeholder="Nome Completo" className="border p-2 w-full rounded" required />
            <input name="cargo" placeholder="Cargo" className="border p-2 w-full rounded" />
            <input name="empresa" placeholder="Nome da Empresa" className="border p-2 w-full rounded" />
            <input name="cnpj" placeholder="CNPJ da Empresa" className="border p-2 w-full rounded" />
            <input name="setor" placeholder="Setor de Atuação" className="border p-2 w-full rounded" />
            <textarea name="mensagem" placeholder="Descreva o Aconselhamento Desejado" className="border p-2 w-full rounded" required />
            <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800">
              Enviar
            </button>
            {formSuccess && <p className="text-green-600">Enviado com sucesso!</p>}
          </form>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white text-center py-3 text-xs">
        © 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  );
}
