"use client";

import React from "react";
import { Card, CardContent } from "./card";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

export default function FormContato() {
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
    <section id="contato" className="py-20 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-olive mb-6">
          Informe seus Dados
        </h2>
        <form onSubmit={handleSubmit}>
          <Card className="shadow-lg">
            <CardContent className="grid gap-4 p-6">
              <Input name="nome" placeholder="Nome Completo" required />
              <Input name="cargo" placeholder="Cargo" required />
              <Input name="empresa" placeholder="Nome da Empresa" required />
              <Input name="cnpj" placeholder="CNPJ da Empresa" required />
              <Input name="setor" placeholder="Setor de Atuação" required />
              <Textarea
                name="aconselhamento"
                placeholder="Descreva o Aconselhamento Desejado"
                rows={5}
                required
              />
              <Button
                type="submit"
                className="bg-[#bfa144] text-white hover:bg-[#a98f39]"
              >
                Enviar
              </Button>
            </CardContent>
          </Card>
        </form>
      </div>
    </section>
  );
}
