"use client";
import { useState } from "react";
import CardProduto, { Produto } from "./CardProduto";

const Produtos = () => {
  const [busca, setBusca] = useState("");
  const produtos: Produto[] = [
    {
      id: 1,
      nome: "Caneca",
      preco: 500,
    },
    {
      id: 2,
      nome: "Caneta",
      preco: 20,
    },
    {
      id: 3,
      nome: "Camisa",
      preco: 300,
    },
    {
      id: 4,
      nome: "Camiseta",
      preco: 250,
    },
    {
      id: 5,
      nome: "Camelo de brinquedo",
      preco: 18.99,
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Digite o produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="border w-1/2"
      />
      <div className="flex gap-4 m-10">
        {produtos
          .filter((produto) =>
            produto.nome
              .toLocaleLowerCase()
              .includes(busca.toLocaleLowerCase()),
          )
          .map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
            />
          ))}
      </div>
    </div>
  );
};

export default Produtos;
