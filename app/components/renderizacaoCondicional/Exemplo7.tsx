"use client";

import { useState } from "react";

const Exemplo7 = () => {
  const [logado, setLogado] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {logado ? (
        <>
          <h1 className="text-2xl font-bold">Bem vindo</h1>
          <p>Vc esta conectado</p>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white cursor-pointer"
            onClick={() => setLogado(false)}
          >
            Sair
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold">
            Vc não esta conectado
          </h1>
          <button
            className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer"
            onClick={() => setLogado(true)}
          >
            Entrar
          </button>
        </>
      )}
    </div>
  );
};

export default Exemplo7;
