import Botao from './components/Botao';
import BotaoAlerta from './components/BotaoAlerta';
import Exercicios from './components/Exercicios';
import Footer from './components/Footer';
import FormularioSimples from './components/FormularioSimples';
import Header from './components/Header';
import Interativo from './components/Interativo';
import Profile from './components/Profile';
import Technology from './components/Technology';
import { Teste } from './components/Teste';
import TesteAction from './components/TesteAction';
import User from './components/User';

export default function Home() {
  return (
    <div className='flex flex-col justify-between min-h-screen max-w-6xl mx-auto px-4'>
      <div>
        <Header />
        <Profile nome='Thiagoooooo' profissoes={['Motorista de app', 'Progrador', 'Produtor de conteúdo']} />
        <Technology />
      </div>
      <User usuario={{ nome: 'Thiago', idade: 25 }} premium />
      <Botao ativo />
      <BotaoAlerta />
      <FormularioSimples/>
      <Interativo/>
      <TesteAction/>
      <Exercicios mensagem='Olá React'/>
      <Teste/>
      <Footer />
    </div>
  );
}
