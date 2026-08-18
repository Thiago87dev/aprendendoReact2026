"use client";
import { useState } from "react";

type Status = "Inicio" | "Meio" | "Fim";
const Exemplo8 = () => {
  const [status, setStatus] = useState<Status>("Inicio");
  return (
    <div>
      <div>
        {status === "Inicio" && (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">Fase inicial</h2>
            <button
              onClick={() => setStatus("Meio")}
              className="border p-4 bg-green-500 cursor-pointer"
            >
              Ir para a fase do meio
            </button>
          </div>
        )}
        {status === "Meio" && (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold">Fase do meio</h2>
            <button
              onClick={() => setStatus("Fim")}
              className="border p-4 bg-green-500 cursor-pointer"
            >
              Ir para a fase final
            </button>
          </div>
        )}
        {status === "Fim" && (
          <div>
            <h2 className="text-2xl font-bold">Fase Final</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exemplo8;
