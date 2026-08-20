export interface Usuario {
  id: number
  nome: string
  idade: number
}

interface UsuarioListaProps {
    usuario: Usuario
}
const UsuarioLista = ({usuario}:UsuarioListaProps) => {
  return (
    <div className="rounded-lg border p-4">
        <h2>{usuario.nome}</h2>
        <p>{usuario.idade}</p>
    </div>
  )
}

export default UsuarioLista