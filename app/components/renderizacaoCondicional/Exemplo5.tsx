const Exemplo5 = () => {
  const carrenda = false;
  const erro = false;
  const usuarios = ["Jão", "Maria"];
  return (
    <div>
      {carrenda ? (
        <p>Carregando...</p>
      ) : erro ? (
        <p>Ocorreu um erro</p>
      ) : usuarios.length === 0 ? (
        <p>Nenhum usuario encontrado</p>
      ) : (
        <p>Usuarios encontrados</p>
      )}
    </div>
  );
};

export default Exemplo5;
