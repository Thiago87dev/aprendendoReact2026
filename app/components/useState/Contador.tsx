"use client";

import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-3xl font-bold">{contador}</p>
      <div className="flex gap-4">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer active:scale-95"
          onClick={aumentar}
        >
          +
        </button>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer active:scale-95"
          onClick={() => setContador( prev => prev - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Contador;
