export default function Home() {
  return (
    <main className="bg-green-50 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo-kairos.png" alt="Logo Kairós" className="h-8" />
          <div>
            <h1 className="text-xl font-bold text-green-800 leading-tight">Kairós</h1>
            <p className="text-sm text-yellow-700 -mt-1">Inteli.tech</p>
          </div>
        </div>
        <nav className="space-x-8 text-sm font-medium text-gray-700">
          <a href="#servicos" className="hover:text-green-700">Serviços</a>
          <a href="#esg" className="hover:text-green-700">ESG</a>
          <a href="#startups" className="hover:text-green-700">Startups</a>
          <a href="#contato" className="hover:text-green-700">Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-20 px-4 bg-green-100">
        <h2 className="text-4xl sm:text-5xl font-bold text-green-800 mb-4">
          Transforme Oportunidades em <br />
          <span className="text-yellow-700">Resultados</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Aconselhamento estratégico para empresas que desejam atuar no mercado financeiro com inteligência, dados e visão de futuro.
        </p>
      </section>

      {/* QUEM SOMOS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-6">Quem Somos</h3>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            A <strong>Kairós</strong> oferece serviços de aconselhamento estratégico para empresas que desejam explorar oportunidades no mercado financeiro, seja por meio de soluções <strong>BaaS</strong> ou da criação de uma instituição financeira regulada dentro do seu grupo econômico.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center mr-4">1</div>
                <div>
                  <p className="font-semibold text-green-800">Ao explanar, permite-se ouvir sua própria visão</p>
                  <p className="text-gray-600 text-sm">Compartilhar expectativas com profissionais externos traz clareza estratégica.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center mr-4">2</div>
                <div>
                  <p className="font-semibold text-green-800">Ao questionar, permite-se refletir sobre novos pontos de vista</p>
                  <p className="text-gray-600 text-sm">Nossos KSP desafiam perspectivas para expandir horizontes.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center mr-4">3</div>
                <div>
                  <p className="font-semibold text-green-800">Ao responder, reforça-se o propósito</p>
                  <p className="text-gray-600 text-sm">Validação estratégica fortalece a tomada de decisão.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-yellow-500 text-white font-bold flex items-center justify-center mr-4">4</div>
                <div>
                  <p className="font-semibold text-green-800">Ao refletir, o pensamento expande</p>
                  <p className="text-gray-600 text-sm">Base sólida para decisões estratégicas fundamentadas.</p>
                </div>
              </li>
            </ul>
            <div className="bg-green-100 p-6 rounded-xl shadow-md">
              <h4 className="text-lg font-bold text-green-900 mb-2">Kairós Senior Partners (KSP)</h4>
              <p className="text-sm text-green-800">
                Nossos <strong>KSP</strong> são profissionais com experiência sólida como C-Level, Conselheiros e Investidores, com profundo conhecimento em regulação, compliance e estratégias de negócios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOSSOS SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-10">Nossos Serviços</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h4 className="text-lg font-semibold text-green-700 mb-2">Braço Financeiro</h4>
              <p className="text-sm text-gray-600">
                Criação de braço financeiro usando serviços especializados de terceiros (BaaS) para aproveitar oportunidades do ecossistema financeiro.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h4 className="text-lg font-semibold text-green-700 mb-2">Instituição Regulada</h4>
              <p className="text-sm text-gray-600">
                Estruturação de instituição financeira regulada como negócio independente em seu grupo econômico, com compliance total.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h4 className="text-lg font-semibold text-green-700 mb-2">Gestão de Riscos</h4>
              <p className="text-sm text-gray-600">
                Visão clara de oportunidades e riscos, orientando decisões através de dados, inteligência e apetite de exposição ao risco.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all">
              <h4 className="text-lg font-semibold text-green-700 mb-2">Segurança Cibernética</h4>
              <p className="text-sm text-gray-600">
                Assessment de vulnerabilidades, análise de superfície de ataque e implementação de controles para proteção de ativos digitais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
