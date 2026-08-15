interface ProfileProps {
  nome: string
  profissoes: string[]
}

const Profile = ({nome, profissoes}: ProfileProps) => {
  
  return (
    <div className="my-4">
      <p className='text-red-600 bg-amber-100 p-6'>Meu nome é: {nome}</p>
      <p className='px-2 py-12 font-stretch-semi-expanded'>Minhas profissões são: {profissoes.join(', ')}</p>
      <p className='bg-black p-4 text-purple-600'>Aqui esta uma breve descrição: bla bla bla</p>
    </div>
  );
};

export default Profile;
