"use client";

import Botao from "./Botao";

const Interativo = () => {
  const handleClick = () => {
    alert("Botão clicado");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado");
  };
  return (
    <div className="flex flex-col gap-4 p-8">
      <div onClick={handleClick}>
        <Botao
          ativo
          titulo="Clique aqui"
        />
      </div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Digite alguma coisa"
        className="rounded border p-2"
      />
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Seu nome"
          className=" mr-2 rounded border p-2"
        />

        <Botao
          type="submit"
          ativo
          titulo="Enviar"
        />
      </form>
    </div>
  );
};

export default Interativo;
