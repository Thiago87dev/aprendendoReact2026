'use client';

import Botao from './Botao';

const BotaoAlerta = () => {
  const handleClick = (nome: string) => {
    console.log(`Olá ${nome} vc apertou o btn`);
  };

  return (
    <div
      onClick={() => {
        handleClick('Evolugresso');
        alert('Vc clicou no botão');
      }}
    >
      <Botao ativo titulo='Aperte aqui' />
    </div>
  );
};

export default BotaoAlerta;
