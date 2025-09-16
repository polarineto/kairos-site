"use client";

import FormContato from "../components/ui/formContato";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-olive mb-6 leading-tight">
            Transforme Oportunidades em {" "}
            <span className="text-gold">Resultados Estratégicos</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Aconselhamento estratégico especializado para empresas que desejam
            atuar no mercado financeiro.
          </p>
          <div className="aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg mt-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DvN6dS4eN9k"
              title="Apresentação Institucional"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-olive mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                titulo: "Braço Financeiro",
                texto:
                  "Criação de braço financeiro usando serviços especializados de terceiros (BaaS).",
              },
              {
                titulo: "Instituição Regulada",
                texto:
                  "Estruturação de instituição financeira regulada com compliance e governança.",
              },
              {
                titulo: "Gestão de Riscos",
                texto:
                  "Análise de oportunidades e riscos com base em dados e inteligência.",
              },
              {
                titulo: "Segurança Cibernética",
                texto:
                  "Avaliação de vulnerabilidades e proteção de ativos digitais estratégicos.",
              },
            ].map((servico, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-olive mb-2">
                  {servico.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{servico.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Compromisso ESG</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Todos os clientes da Kairós contribuem diretamente com a melhoria do 3º setor.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Retribuição Social</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Parte do valor investido em nossos serviços é convertido em
                aconselhamento especializado para organizações sociais, inclusive
                podendo ser indicadas pelos próprios clientes.
              </p>
              <p className="text-gray-500 text-sm">
                Apoiamos boas práticas de gestão, controles e transparência no
                terceiro setor.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-6 rounded-xl shadow-md">
                <p className="text-green-800 font-semibold">
                  Ética • Responsabilidade • Inovação
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startups */}
      <section id="startups" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-olive mb-6">Programa para Startups</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Startups selecionadas recebem 2 sessões gratuitas com conselheiros da Kairós.
          </p>
          <div className="bg-gradient-to-r from-gold-light to-gold p-8 rounded-xl shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">Inscreva seu case!</h3>
            <p className="text-white mb-6">
              A banca KSP selecionará os desafios mais estratégicos para mentoria.
            </p>
            <button className="bg-white text-gold-dark px-6 py-2 rounded font-semibold hover:bg-yellow-100">
              Quero Participar
            </button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <FormContato />
    </main>
  );
}
