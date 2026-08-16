interface BotaoProps {
  ativo: boolean;
  titulo?: string;
  type?: "button" | "submit" | "reset";
}

const Botao = ({
  ativo,
  titulo = "Padrão",
  type = "button",
}: BotaoProps) => {
  return (
    <div>
      <button
        type={type}
        className="bg-blue-500 sm:bg-amber-300 active:bg-black md:bg-blue-300 hover:bg-red-600 cursor-pointer text-white px-5 py-3 rounded-lg font-bold"
      >
        {ativo ? `${titulo}` : "Desativado"}
      </button>
    </div>
  );
};

export default Botao;
