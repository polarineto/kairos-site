'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen font-sans text-gray-800">
      {/* Cabeçalho */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-kairos.png" alt="Logo da Kairós" width={40} height={40} />
            <div>
              <h1 className="text-2xl font-bold text-green-900">Kairós</h1>
              <p className="text-sm text-yellow-600 font-medium">Inteli.tech</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-gray-700 hover:text-green-800 font-medium">Serviços</a>
            <a href="#esg" className="text-gray-700 hover:text-green-800 font-medium">ESG</a>
            <a href="#startups" className="text-gray-700 hover:text-green-800 font-medium">Startups</a>
            <a href="#contato" className="text-gray-700 hover:text-green-800 font-medium">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-20">
        <h2 className="text-5xl font-bold text-green-800 mb-4 leading-tight">
          Transforme Oportunidades em <span className="text-yellow-600">Resultados</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Aconselhamento estratégico para empresas que desejam atuar no mercado financeiro com inteligência, dados e visão de futuro.
        </p>
      </section>

      {/* Quem Somos */}
      <section className="px-6 py-16 bg-white text-center">
        <h3 className="text-3xl font-bold text-green-800 mb-6">Quem Somos</h3>
        <p className="text-gray-700 max-w-4xl mx-auto mb-12">
          A Kairós oferece serviços de aconselhamento estratégico para empresas que desejam explorar oportunidades no mercado financeiro, seja por meio de soluções BaaS ou da criação de uma instituição financeira regulada dentro do seu grupo econômico.
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto text-left">
          <ul className="space-y-6">
            {[
              {
                titulo: "Ao explanar, permite-se ouvir sua própria visão",
                texto: "Compartilhar expectativas com profissionais externos traz clareza estratégica.",
              },
              {
                titulo: "Ao questionar, permite-se refletir sobre novos pontos de vista",
                texto: "Nossos KSP desafiam perspectivas para expandir horizontes.",
              },
              {
                titulo: "Ao responder, reforça-se o propósito",
                texto: "Validação estratégica fortalece a tomada de decisão.",
              },
              {
                titulo: "Ao refletir, o pensamento expande",
                texto: "Base sólida para decisões estratégicas fundamentadas.",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="bg-yellow-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">{i + 1}</span>
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">{item.titulo}</h4>
                  <p className="text-sm text-gray-600">{item.texto}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-green-100 p-6 rounded-xl shad
