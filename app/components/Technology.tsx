import Card from './Card';

const Technology = () => {
  return (
    <div className='flex flex-col gap-4 md:flex-row'>
      <Card titulo='React' descricao='Biblioteca para interface'>
        <p>Aqui vai um conteudo diferente</p>
      </Card>
      <Card titulo='Next' descricao='Framework React.'>
        <p>aqui vai um conteudo legal</p>
      </Card>
      <Card titulo='Typescript' descricao='Um javaScript tipado' />
      <Card titulo='Tailwind' />
    </div>
  );
};

export default Technology;
