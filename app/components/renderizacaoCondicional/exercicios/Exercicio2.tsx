"use client";
import { useState } from "react";

const Exercicio2 = () => {
  const [idade, setIdade] = useState<number>(0);
  return (
    <div>
      <input
        className="border"
        type="text"
        value={idade}
        placeholder="Digite sua idade..."
        onChange={(e) => setIdade(Number(e.target.value))}
      />
      {idade >= 18 ? (
        <p>Vc é maior de idade</p>
      ) : (
        <p>Vc é de menor</p>
      )}
    </div>
  );
};

export default Exercicio2;
