export default function Talking() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Talking – Ritter</h1>
      <p className="text-sm text-gray-500">Análisis verso por verso</p>

      {/* Aquí van los versos */}
      <VersoExplicado 
        verso="Estoy entre tenerte y entretenerte, duele verlo"
        explicacion="Juego de palabras entre 'tenerte' (amor) y 'entretenerte' (rap / arte). Doble sentido emocional y artístico. Además, el verso tiene homofonía con 'entretenerte' y 'tenerte'." 
      />
    </div>
  )
}

function VersoExplicado({ verso, explicacion }) {
  const [mostrar, setMostrar] = React.useState(false);
  return (
    <div onClick={() => setMostrar(!mostrar)} className="cursor-pointer">
      <p className="text-black font-medium">{verso}</p>
      {mostrar && (
        <p className="text-gray-500 text-sm mt-1">{explicacion}</p>
      )}
    </div>
  );
}
