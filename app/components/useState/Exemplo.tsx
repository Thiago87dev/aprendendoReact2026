"use client";

import { useState } from "react";

const Exemplo = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState("");
  const [ativo, setAtivo] = useState(false);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold">Contador</h2>
        <p>{contador}</p>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer active:scale-95"
          onClick={() => setContador((prev) => prev + 1)}
        >
          Aumentar
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Nome</h2>
        <input
          type="text"
          value={nome}
          className="border rounded p-2"
          onChange={(e) => setNome(e.target.value)}
        />
        <p className="text-xl font-semibold">Olá {nome}</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Status</h2>
        <p>{ativo ? "Ativo" : "Inativo"}</p>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer active:scale-95"
          onClick={() => setAtivo(!ativo)}
        >
          Alterar status
        </button>
      </div>
    </div>
  );
};

export default Exemplo;
