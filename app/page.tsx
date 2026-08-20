import ListaDeTarefas from "./components/renderizacaoDeListas/desafio/ListaDeTarefas";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center min-h-screen max-w-6xl mx-auto px-4">
    <ListaDeTarefas/>
    </div>
  );
}
