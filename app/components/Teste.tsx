"use client";

import { useState } from "react";

export const Teste = () => {
  const [nome, setNome] = useState("");
  const [mostrar, setMostrar] = useState(false);
  const [usuario, setUsuario] = useState({
    nome: "Thiago",
    idade: 25,
  });

  const alterarNome = (novoNome: string) => {
    setUsuario({
      ...usuario,
      nome: novoNome,
    });
  };

  return (
    <div className="space-y-4 my-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-4"
      >
        <input
          type="text"
          value={nome}
          onChange={(e) => {
            setNome(e.target.value);
            alterarNome(e.target.value);
          }}
          className="border rounded p-2"
          placeholder="Digite seu nome"
        />
        <button
          onClick={() => {
            setMostrar(!mostrar);
          }}
          className="border cursor-pointer px-4 w-40"
          type="submit"
        >
          {mostrar ? "Sumir" : "Mostrar"}
        </button>
      </form>
      <p className="h-6">{mostrar ? `Olá, ${nome}` : ""}</p>
      {mostrar && (
        <div className="space-y-4">
          <p>Nome: {usuario.nome}</p>
          <p>Idade: {usuario.idade}</p>
        </div>
      )}
    </div>
  );
};
