"use client";

import { useState } from "react";

interface Usuario {
  nome: string;
  idade: number;
  profissao: string;
}

const Perfil = () => {
  const [novoNome, setNovoNome] = useState("");
  const [usuario, setUsuario] = useState<Usuario | null>({
    nome: "Thiago",
    idade: 25,
    profissao: "Dev",
  });

  const alterarNome = () => {
    if (usuario)
      setUsuario({
        ...usuario,
        nome: novoNome,
      });
    setNovoNome("");
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p>Nome: {usuario?.nome}</p>
        <p>Idade: {usuario?.idade}</p>
        <p>Profissão: {usuario?.profissao}</p>
      </div>

      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
        className="border"
        placeholder="Digite seu novo nome..."
      />
      <button
        onClick={alterarNome}
        className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer"
      >
        Alterar nome
      </button>
    </div>
  );
};

export default Perfil;
