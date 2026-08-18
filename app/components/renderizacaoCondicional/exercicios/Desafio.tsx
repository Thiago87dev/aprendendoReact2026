"use client";

import { useState } from "react";

type Status = "pendente" | "pago" | "enviado" | "entregue";

const Desafio = () => {
  const [status, setStatus] = useState<Status>("pendente");
  const [valorPagamento, setValorPagamento] = useState<number>(0);
  return (
    <div>
      <div>
        {status === "pendente" && (
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-6xl font-bold">
              Aguardando pagamento...
            </h2>
            <input
              className="border p-2"
              placeholder="Digite o valor a ser pago"
              type="number"
              onChange={(e) =>
                setValorPagamento(Number(e.target.value))
              }
            />
            <button
              disabled={valorPagamento <= 0}
              onClick={() => setStatus("pago")}
              className="border px-4 py-2 bg-green-500 text-white cursor-pointer active:scale-95 disabled:bg-gray-500 disabled:text-black disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Fazer pagamento
            </button>
          </div>
        )}
        {status === "pago" && (
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-6xl font-bold">
              Pagamento aprovado!
            </h2>
            <p>Valor pago: R${valorPagamento},00</p>
            <button
              onClick={() => setStatus("enviado")}
              className="border px-4 py-2 bg-green-500 text-white cursor-pointer active:scale-95"
            >
              Enviar pedido
            </button>
          </div>
        )}
        {status === "enviado" && (
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-6xl font-bold">Pedido enviado!</h2>
            <button
              onClick={() => setStatus("entregue")}
              className="border px-4 py-2 bg-green-500 text-white cursor-pointer active:scale-95"
            >
              Entregar pedido
            </button>
          </div>
        )}
        {status === "entregue" && (
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-6xl font-bold">Pedido entregue!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Desafio;
