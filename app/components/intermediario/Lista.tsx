"use client";

import { useState } from "react";

const Lista = () => {
  const [nomes, setNomes] = useState(["Thiago", "Ana", "Susy"]);
  const adicionarNome = () => {
    setNomes(["Maria", ...nomes ]);
  };
  return (
    <div className="flex flex-col gap-2 items-center">
      <div>
        {nomes.map((nome, index) => (
          <p key={index}>{nome}</p>
        ))}
      </div>
      <button
        className="rounded bg-green-500 px-4 py-2 text-white cursor-pointer"
        onClick={adicionarNome}
      >
        Adicionar
      </button>
    </div>
  );
};

export default Lista;
