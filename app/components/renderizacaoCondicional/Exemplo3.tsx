"use client";

import { useState } from "react";

const Exemplo3 = () => {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      {logado ? <p>Vc esta logado</p> : <p>Vc precisa fazer login</p>}
      <button className="border px-4 cursor-pointer" onClick={() => setLogado(!logado)}>
        Alterar estado
      </button>
    </div>
  );
};

export default Exemplo3;
