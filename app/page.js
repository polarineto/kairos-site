
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function KairosLandingPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const mailtoLink = `mailto:marketing@kairosinteli.tech?subject=Aconselhamento Kairós&body=${
      "Nome: " + data.nome + "%0D%0A" +
      "Cargo: " + data.cargo + "%0D%0A" +
      "Empresa: " + data.empresa + "%0D%0A" +
      "CNPJ: " + data.cnpj + "%0D%0A" +
      "Setor: " + data.setor + "%0D%0A" +
      "Aconselhamento: " + data.aconselhamento
    }`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#2f2f2f] font-sans">
      <header className="bg-[#4b5e36] text-white py-8 px-4 text-center">
        <h1 className="text-4xl font-light tracking-wide">Kairós Inteli.tech</h1>
        <p className="mt-2 text-lg max-w-3xl mx-auto">
          Conselheiros estratégicos para empresas que desejam atuar no mercado financeiro com inteligência, dados e visão de futuro.
        </p>
      </header>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium text-[#4b5e36] mb-4">Quem Somos</h2>
        <p className="mb-6">
          A Kairós oferece serviços de aconselhamento estratégico para empresas que buscam explorar oportunidades no mercado financeiro, seja por meio de soluções BaaS ou da criação de uma instituição financeira regulada dentro do seu grupo econômico.
        </p>
        <p>
          Nossos KSP – Kairós Senior Partners – têm experiência sólida como C-Level, Conselheiros e Investidores, com profundo conhecimento em regulação, compliance e estratégias de negócios.
        </p>
      </section>

      <section className="bg-[#e8ecde] py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-[#4b5e36] mb-4">Apresentação da Kairós</h2>
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

      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium text-[#4b5e36] mb-4">Compromisso ESG</h2>
          <p>
            Parte do valor investido nos nossos serviços é direcionado ao aconselhamento gratuito de organizações sociais, que podem ser indicadas pelos próprios clientes. Isso reforça nosso compromisso com a ética, a responsabilidade e a transformação positiva da sociedade.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium text-[#4b5e36] mb-4">Incentivo a Startups</h2>
        <p>
          Startups podem inscrever seu case e, se selecionadas pela banca KSP, recebem duas sessões de aconselhamento gratuito com especialistas na área de maior desafio.
        </p>
      </section>

      <section className="bg-[#f3f1ea] py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-medium text-[#4b5e36] mb-4">Por que contratar a Kairós?</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Compartilhar a visão permite ouvir sua própria estratégia.</li>
            <li>Ser questionado expande sua reflexão e visão de futuro.</li>
            <li>Responder fortalece convicções e clareza de propósito.</li>
            <li>Refletir com apoio qualificado dá base real para decisões.</li>
          </ul>
          <p className="mt-4">
            A Kairós ajuda a projetar o cenário futuro e desafiar a estrutura desejada antes mesmo de executá-la.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-medium text-[#4b5e36] mb-6 text-center">Solicite um Aconselhamento</h2>
        <form onSubmit={handleSubmit}>
          <Card className="shadow-md">
            <CardContent className="grid gap-4 p-6">
              <Input name="nome" placeholder="Nome Completo" required />
              <Input name="cargo" placeholder="Cargo" required />
              <Input name="empresa" placeholder="Nome da Empresa" required />
              <Input name="cnpj" placeholder="CNPJ da Empresa" required />
              <Input name="setor" placeholder="Setor de Atuação" required />
              <Textarea name="aconselhamento" placeholder="Descreva o Aconselhamento Desejado" rows={5} required />
              <Button type="submit" className="bg-[#bfa144] text-white hover:bg-[#a98f39]">
                Enviar
              </Button>
            </CardContent>
          </Card>
        </form>
      </section>

      <footer className="bg-[#4b5e36] text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Kairós Inteli.tech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
