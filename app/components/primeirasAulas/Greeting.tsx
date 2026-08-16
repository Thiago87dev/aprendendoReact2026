interface GreetingProps {
  nome: string;
  idade: number;
  profissao: string;
}

const Greeting = ({ nome, idade, profissao }: GreetingProps) => {
  return (
    <div>
      <h1>Olá, {nome}</h1>
      <p>Eu tenho {idade} anos</p>
      <p>Eu sou {profissao}</p>
    </div>
  );
};

export default Greeting;
