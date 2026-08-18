const Exemplo6 = () => {
  const ativo = true;
  return (
    <div>
      <h1
        className={
          ativo
            ? "bg-green-500 text-white p-4 cursor-pointer"
            : " bg-gray-300 text-black p-4"
        }
      >
        Status
      </h1>
    </div>
  );
};

export default Exemplo6;
