// app/page.js

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="py-20 bg-green-50 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-green-900 mb-6 leading-tight">
            Transforme Oportunidades em <span className="text-yellow-600">Resultados</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Aconselhamento estratégico para empresas que desejam atuar no mercado financeiro com inteligência, dados e visão de futuro.
          </p>
        </div>
      </section>

      {/* QUEM SOMOS SECTION */}
      <section className="py-20 bg-white" id="quem-somos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Quem Somos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A <strong>Kairós</strong> oferece serviços de aconselhamento estratégico para empresas que desejam explorar oportunidades no mercado financeiro, seja por meio de soluções <strong>BaaS</strong> ou da criação de uma instituição financeira regulada dentro do seu grupo econômico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Ao explanar, permite-se ouvir sua própria visão</h4>
                  <p className="text-gray-600">Compartilhar expectativas com profissionais externos traz clareza estratégica.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Ao questionar, permite-se refletir sobre novos pontos de vista</h4>
                  <p className="text-gray-600">Nossos KSP desafiam perspectivas para expandir horizontes.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Ao responder, reforça-se o propósito</h4>
                  <p className="text-gray-600">Validação estratégica fortalece a tomada de decisão.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Ao refletir, o pensamento expande</h4>
                  <p className="text-gray-600">Base sólida para decisões estratégicas fundamentadas.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-4">Kairós Senior Partners (KSP)</h3>
              <p className="text-gray-700 leading-relaxed">
                Nossos <strong>KSP</strong> são profissionais com experiência sólida como C-Level, Conselheiros e Investidores,
                com profundo conhecimento em regulação, compliance e estratégias de negócios.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
