import { useState } from 'react';

export default function VersoExplicado({ verso, explicacion }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="mb-4">
      <p
        onClick={() => setMostrar(!mostrar)}
        className="cursor-pointer text-black font-medium hover:underline flex items-center gap-2"
      >
        {verso}
        <span className="text-gray-400 text-sm">
          {mostrar ? '▲ ocultar' : '▼ ver explicación'}
        </span>
      </p>
      {mostrar && (
        <p className="text-sm text-gray-500 pl-2 border-l-2 border-gray-300 mt-1">
          {explicacion}
        </p>
      )}
    </div>
  );
}
