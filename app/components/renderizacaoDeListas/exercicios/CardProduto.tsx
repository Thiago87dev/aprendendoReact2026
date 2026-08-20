export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface CardProdutoProps {
    produto: Produto
}

const CardProduto = ({produto}:CardProdutoProps) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 border w-30 h-30 p-5">
        <h1>{produto.nome}</h1>
        <p>{produto.preco}</p>
    </div>
  )
}

export default CardProduto