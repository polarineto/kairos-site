export default function Home() {
  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/logo-kairos.png" alt="Logo da Kairós" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-green-900">Kairós</h1>
                <p className="text-sm text-yellow-600 font-medium">Inteli.tech</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicos" className="text-gray-700 hover:text-green-800 font-medium transition">Serviços</a>
              <a href="#esg" className="text-gray-700 hover:text-green-800 font-medium transition">ESG</a>
              <a href="#startups" className="text-gray-700 hover:text-green-800 font-medium transition">Startups</a>
              <a href="#contato" className="text-gray-700 hover:text-green-800 font-medium transition">Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-900 leading-tight mb-6">
            Transforme Oportunidades em <span className="text-yellow-600">Resultados</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Aconselhamento estratégico para empresas que desejam atuar no mercado financeiro com inteligência, dados e visão de futuro.
          </p>
        </div>
      </section>
    </main>
  );
}
