const sobre = () => {
  const nome = 'Thiago';
  const idade = 25;
  const a = 10;
  const b = 20;

  const saudacao = () => {
    return 'Olá Thiago'
  }

  return (
    <div>
      <h1>Sobre {nome}</h1>
      <p>idade: {idade}</p>
      <p>
        a soma de {a}+{b}={a + b}
      </p>
      <p>chamando função de saudação: {saudacao()}</p>
      <p>Eu sou o dono do canal Evolugresso</p>
      <p>Estou fazendo um curso completo de React com Next, para vender projetos.</p>
    </div>
  );
};

export default sobre;
