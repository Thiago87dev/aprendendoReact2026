"use client";

import { useState } from "react";

const Menu = () => {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setAberto(!aberto)}
        className="rounded bg-gray-800 px-4 py-2 text-white cursor-pointer"
      >
        Menu
      </button>
      {aberto && (
        <div className="mt-4 rounded border p-4">Menu aberto</div>
      )}
    </div>
  );
};

export default Menu;
