interface Usuario {
  nome: string;
  idade: number;
}

interface UserProps {
  usuario: Usuario;
  premium?: boolean;
}

const User = ({ usuario, premium }: UserProps) => {
  return (
    <div>
      <h2>{usuario.nome}</h2>
      <p>Minha idade é {usuario.idade}</p>
      {premium && <span>Usuário Premium</span>}
    </div>
  );
};

export default User;
