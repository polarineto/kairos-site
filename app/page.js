'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

export default function Home() {
  const formRef = useRef(null)
  const startupRef = useRef(null)

  const [formSent, setFormSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(formRef.current)

    await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
    })

    setFormSent(true)
    formRef.current.reset()
  }

  const scrollToStartups = () => {
    startupRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="flex flex-col items-center px-4 md:px-12 pt-20">
      <Image
        src="/logo-kairos.png"
        alt="Logo Kairós"
        width={160}
        height={60}
        className="mb-4"
      />

      <section className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900">
          Transforme Oportunidades em <br />
          <span className="text-gold">Resultados Estratégicos</span>
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          Aconselhamento estratégico especializado para empresas que desejam atuar no mercado financeiro.
        </p>
        <video
          className="w-full rounded-lg mt-6 shadow"
          controls
          preload="auto"
          width="640"
          height="360"
        >
          <source src="/institucional.mp4" type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </section>

      <section id="servicos" className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-6">Nossos Serviços</h2>
        <ul className="space-y-3 text-sm text-gray-800">
          <li><strong>Braço Financeiro</strong> – Criação de braço financeiro usando serviços especializados de terceiros (BaaS).</li>
          <li><strong>Instituição Regulada</strong> – Estruturação de instituição financeira regulada com compliance e governança.</li>
          <li><strong>Gestão de Riscos</strong> – Análise de oportunidades e riscos com base em dados e inteligência.</li>
          <li><strong>Segurança Cibernética</strong> – Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.</li>
        </ul>
      </section>

      <section id="esg" className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-green-900 text-center mb-4">Compromisso ESG</h2>
        <p className="text-sm text-center">
          Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
        </p>
        <p className="text-xs mt-2 text-justify">
          Parte do valor investido em nossos serviços é convertido em aconselhamento especializado para organizações sociais, inclusive podendo ser indicadas pelos próprios clientes.
          Apoiamos boas práticas de gestão, controles e transparência no terceiro setor. <span className="text-green-900 font-semibold">Ética</span> • <span className="text-green-900 font-semibold">Responsabilidade</span> • <span className="text-green-900 font-semibold">Inovação</span>.
        </p>
      </section>

      <section id="startups" className="mt-16 w-full max-w-4xl" ref={startupRef}>
        <h2 className="text-2xl font-bold text-green-900 text-center mb-4">Programa para Startups</h2>
        <p className="text-sm text-center">
          Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
        </p>
        <p className="text-sm text-center mb-4">Inscreva sua Start-up e participe da próxima seletiva.</p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800"
          >
            Quero Participar
          </button>
        </div>
      </section>

      <section id="contato" className="mt-20 w-full max-w-xl">
        <h2 className="text-xl font-bold text-green-900 mb-4 text-center">Agende uma Conversa Preliminar</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md space-y-4"
        >
          <input type="text" name="nome" placeholder="Nome Completo" required className="w-full border px-3 py-2 rounded" />
          <input type="text" name="cargo" placeholder="Cargo" className="w-full border px-3 py-2 rounded" />
          <input type="text" name="empresa" placeholder="Nome da Empresa" className="w-full border px-3 py-2 rounded" />
          <input type="text" name="cnpj" placeholder="CNPJ da Empresa" className="w-full border px-3 py-2 rounded" />
          <input type="text" name="setor" placeholder="Setor de Atuação" className="w-full border px-3 py-2 rounded" />
          <textarea name="mensagem" placeholder="Descreva o Aconselhamento Desejado" className="w-full border px-3 py-2 rounded h-24" />
          <button type="submit" className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800">
            Enviar
          </button>
        </form>

        {formSent && (
          <p className="text-green-700 text-sm text-center mt-2">Enviado com sucesso!</p>
        )}
      </section>

      <footer className="mt-20 text-center text-xs text-white bg-green-900 py-2 w-full">
        © 2025 Kairós Inteli.tech. Todos os direitos reservados.
      </footer>
    </main>
  )
}
