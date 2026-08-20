"use client";
import { useState } from "react";
import UsuarioLista, { Usuario } from "./UsuarioLista";

const Exemplo1Lista = () => {
  const [busca, setBusca] = useState("");
  
  const usuarios: Usuario[] = [
    {
      id: 1,
      nome: "Thiago",
      idade: 25,
    },
    {
      id: 2,
      nome: "Ana",
      idade: 29,
    },
    {
      id: 3,
      nome: "Susy",
      idade: 17,
    },
    {
      id: 4,
      nome: "Bob",
      idade: 25,
    },
    {
      id: 5,
      nome: "Bruna",
      idade: 18,
    },
    {
      id: 6,
      nome: "Raquel",
      idade: 21,
    },
  ];

  const usuariosFiltrados = usuarios.filter((usuario) =>
    usuario.nome
      .toLocaleLowerCase()
      .includes(busca.toLocaleLowerCase()),
  );

  return (
    <div className="flex flex-col gap-5">
      <h1>Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar usuarios..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full rounded border p-2"
      />
      <div className="flex gap-6">
        {usuarios
          .filter((usuario) => usuario.idade >= 18)
          .sort((a, b) => a.idade - b.idade)
          .map((usuario) => (
            <UsuarioLista
              key={usuario.id}
              usuario={usuario}
            />
          ))}
      </div>
      <div>
        <h2>Usuarios filtrados</h2>
        {usuariosFiltrados.map((usuario) => (
          <div key={usuario.id}>
            <UsuarioLista usuario={usuario} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exemplo1Lista;
