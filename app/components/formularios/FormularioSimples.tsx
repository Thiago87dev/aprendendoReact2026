"use client";

import { useState } from "react";

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

const FormularioSimples = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const [aberto, setAberto] = useState(false);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome) {
      alert("Digite seu nome");
      return;
    }
    if (!email) {
      alert("Digite seu email");
      return;
    }
    if (!senha) {
      alert("Digite sua senha");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve conter pelo menos 6 caracteres");
      return;
    }

    if (senha !== senha2) {
      alert("As senhas devem ser iguais");
      return;
    }

    setUsuario({ nome, email, senha });
    setNome("");
    setEmail("");
    setSenha("");
    setSenha2("");
    setAberto(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        placeholder="Digite seu nome"
        className="rounded border p-2"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Digite seu email"
        className="rounded border p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        className="rounded border p-2"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar senha"
        className="rounded border p-2"
        value={senha2}
        onChange={(e) => setSenha2(e.target.value)}
      />
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white cursor-pointer"
      >
        Enviar
      </button>
      {aberto && (
        <div>
          <p>Nome: {usuario?.nome}</p>
          <p>Email: {usuario?.email}</p>
          <p>Senha: {usuario?.senha}</p>
        </div>
      )}
    </form>
  );
};

export default FormularioSimples;
