import FormularioSimples from "./components/formularios/FormularioSimples";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center min-h-screen max-w-6xl mx-auto px-4">
      <FormularioSimples/>
    </div>
  );
}
