"use client";
const FormularioSimples = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const enviarFormulario = (
    e: React.SubmitEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    alert("Formulario enviado");
  };
  return (
    <div>
      <form
        className="flex gap-2"
        onSubmit={enviarFormulario}
      >
        <input
          className="border"
          type="text"
          onChange={handleChange}
          placeholder="Digite seu nome"
        />
        <button
          className="border"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioSimples;
