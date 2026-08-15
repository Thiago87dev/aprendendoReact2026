"use client";

interface BotaoExercicioProps {
    mensagem: string
}
const Exercicios = ({mensagem}:BotaoExercicioProps) => {
  const handleClick = () => {
    alert(`Botão clicado!... sua msg: ${mensagem}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-6xl">Exercicios</h1>
      <button
        onClick={handleClick}
        className="border w-1/6 cursor-pointer"
      >
        Clique aqui
      </button>
      <input
        type="text"
        placeholder="Digite seu nome..."
        className="border w-2/6"
        onChange={handleChange}
      />
      <form
        className="flex flex-col gap-2 border p-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome..."
          className="border w-2/6"
        />
        <input
          type="email"
          name="email"
          placeholder="Digite seu email..."
          className="border w-2/6"
        />
        <button
          type="submit"
          className="border w-1/6 cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Exercicios;
