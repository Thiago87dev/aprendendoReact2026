'use client'

const buscar = (formData: FormData) => {
  const nome = formData.get("nome");
  console.log(nome);
};
const TesteAction = () => {
  return (
    <div>
      <form className="flex gap-1.5" action={buscar}>
        <input
          type="text"
          name="nome"
          className="border"
        />
        <button className="border" type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default TesteAction;
