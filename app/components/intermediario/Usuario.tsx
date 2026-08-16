"use client";

import { useState } from "react";

const Usuario = () => {
  const [nome, setNome] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome..."
        className="border"
      />
      <p className="text-3xl">
        Olá {nome}
      </p>
    </div>
  );
};

export default Usuario;
