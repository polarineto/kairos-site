"use client";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function FormContato() {
  return (
    <form id="contato" className="bg-white rounded-xl shadow-md p-8 w-full max-w-xl mx-auto mt-12 space-y-4">
      <h2 className="text-center text-lg font-semibold text-green-900">Solicite um Aconselhamento</h2>

      <Input type="text" placeholder="Nome completo" required />
      <Input type="text" placeholder="Cargo" />
      <Input type="text" placeholder="Nome da empresa" />
      <Input type="text" placeholder="CNPJ da empresa" />
      <Input type="text" placeholder="Setor de atuação" />
      <Textarea placeholder="Descreva o aconselhamento desejado" rows={4} />

      <div className="text-center">
        <Button type="submit" className="bg-gold text-white px-6 py-2 rounded-md hover:opacity-90 transition-all">
          Enviar Solicitação
        </Button>
      </div>
    </form>
  );
}
