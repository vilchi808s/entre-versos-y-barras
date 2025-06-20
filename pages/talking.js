import VersoExplicado from '../components/VersoExplicado';

export default function Talking() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Talking – Ritter</h1>
      <p className="text-sm text-gray-500">Análisis verso por verso</p>

      <VersoExplicado 
        verso="Estoy entre tenerte y entretenerte, duele verlo" 
        explicacion="Juego de palabras entre 'tenerte' (amor) y 'entretenerte' (rap / arte). Muestra un conflicto entre el amor y la carrera artística." 
      />
    </div>
  );
}
