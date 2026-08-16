interface CardProps {
  titulo: string;
  descricao?: string;
  children?: React.ReactNode;
}

const Card = ({ titulo, descricao = 'Sem descrição', children = 'Sem conteudo' }: CardProps) => {
  return (
    <div className='flex flex-col items-center rounded-lg border p-6 border-gray-200'>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <div className='mt-4'>{children}</div>
    </div>
  );
};

export default Card;
