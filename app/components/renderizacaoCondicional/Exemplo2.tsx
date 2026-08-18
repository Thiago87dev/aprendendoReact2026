interface UsuarioProps {
  logado: boolean;
}
const Exemplo2 = ({ logado }: UsuarioProps) => {
  if (logado) {
    return <h1>Bem vindo</h1>;
  }
  return (
    <div>
      <h1>Faça login para continuar</h1>
    </div>
  );
};

export default Exemplo2;
