"use client";
import { useState } from "react";

interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [popupNovaTarefa, setPopupNovaTarefa] = useState(false);
  const [busca, setBusca] = useState("");
  const [termoFiltro, setTermoFiltro] = useState("");
  const [status, setStatus] = useState<
    "todas" | "concluidas" | "pendentes"
  >("todas");

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    const bateTexto = tarefa.titulo
      .toLocaleLowerCase()
      .startsWith(termoFiltro.toLocaleLowerCase());

    if (status === "concluidas") {
      return bateTexto && tarefa.concluida;
    }

    if (status === "pendentes") {
      return bateTexto && !tarefa.concluida;
    }

    return bateTexto;
  });

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTermoFiltro(busca);
  };

  const criarNovaTarefa = (tarafa: string) => {
    if (!tarafa.trim()) return;

    const tarefa: Tarefa = {
      id: Date.now(),
      titulo: tarafa.trim(),
      concluida: false,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
    setPopupNovaTarefa(false);
  };

  const alterarConcluido = (id: number) => {
    setTarefas((prev) =>
      prev.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    );
  };

  return (
    <div className="flex flex-col  min-h-screen gap-5 my-10 relative">
      <div className=" flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Lista de tarefas</h1>
        <div>
          <button
            onClick={() => setPopupNovaTarefa(true)}
            className="border cursor-pointer bg-blue-500 px-4 py-2 hover:bg-blue-600 active:scale-95 text-white"
          >
            Nova tarefa
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Digite a tarefa"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="border p-2"
            />
            {busca && (
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 cursor-pointer"
                onClick={() => {
                  setBusca("");
                  setTermoFiltro("");
                }}
              >
                X
              </button>
            )}
          </div>
          <button
            className="border cursor-pointer bg-green-400 px-4 py-2 hover:bg-green-600 active:scale-95"
            type="submit"
          >
            Buscar
          </button>
        </form>

        {popupNovaTarefa && (
          <div className="absolute p-10 bg-gray-400">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setPopupNovaTarefa(false)}
                className="cursor-pointer text-2xl hover:text-red-500"
              >
                X
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                criarNovaTarefa(novaTarefa);
              }}
              className="flex flex-col gap-4 p-4"
            >
              <label
                className="font-semibold text-xl"
                htmlFor="novaTarefa"
              >
                Digite a nova tarefa
              </label>
              <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                className="border p-2 text-lg font-semibold"
                placeholder="Digite a tarefa..."
                id="novaTarefa"
              />
              <button
                className=" cursor-pointer bg-blue-500 px-4 py-2 hover:bg-blue-600 active:scale-95 text-white"
                type="submit"
              >
                Criar
              </button>
            </form>
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => setStatus("todas")}
            className={`border cursor-pointer bg-yellow-300 px-4 py-2 hover:bg-yellow-600 active:scale-95 ${status === "todas" ? "border-4" : ""}`}
          >
            Todas
          </button>
          <button
            onClick={() => setStatus("concluidas")}
            className={`border cursor-pointer bg-green-400 px-4 py-2 hover:bg-green-600 active:scale-95 ${status === "concluidas" ? "border-4" : ""}`}
          >
            Concluidas
          </button>
          <button
            onClick={() => setStatus("pendentes")}
            className={`border cursor-pointer bg-red-400 px-4 py-2 hover:bg-red-600 active:scale-95 ${status === "pendentes" ? "border-4" : ""}`}
          >
            Pendentes
          </button>
        </div>
      </div>
      <div>
        {tarefasFiltradas.length > 0 ? (
          <div className="flex flex-col gap-5">
            {tarefasFiltradas.map((tarefa) => (
              <div
                className="flex items-center justify-center border p-4 min-w-50"
                key={tarefa.id}
              >
                <div>
                  <input
                    className="w-5 h-5 cursor-pointer"
                    type="checkbox"
                    checked={tarefa.concluida}
                    onChange={() => alterarConcluido(tarefa.id)}
                  />
                </div>
                <div className="flex flex-col items-center p-4 min-w-50">
                  <h2
                    className={`${tarefa.concluida ? "line-through decoration-2" : ""} text-lg font-semibold`}
                  >
                    {tarefa.titulo}
                  </h2>
                  <p
                    className={
                      tarefa.concluida
                        ? "text-green-500"
                        : "text-red-500"
                    }
                  >
                    {tarefa.concluida ? "Feito" : "Falta fazer"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : status === "todas" ? (
          <p>
            Sem tarefas
            {termoFiltro ? `que começam com ${termoFiltro}` : ""}
          </p>
        ) : (
          <p>
            Sem tarefas {status}{" "}
            {termoFiltro ? `que começam com ${termoFiltro}` : ""}
          </p>
        )}
      </div>
    </div>
  );
};

export default ListaDeTarefas;
