import VersoExplicado from '../components/VersoExplicado';

export default function Talking() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Talking – Ritter</h1>
      <p className="text-sm text-gray-500">Análisis verso por verso</p>

      <VersoExplicado 
        verso="The slow mod, most wanted"
        explicacion="Juego fonético y autorreferencial. 'Slow mod' podría ser una forma poética de autodefinirse como alguien que va a su ritmo, y 'most wanted' remite a la estética de buscado por su estilo único." 
      />

      <VersoExplicado 
        verso="quiero que recorra baires y pegue bailes en mi depto"
        explicacion="Referencia local a Buenos Aires ('baires'), deseando una conexión emocional o artística que lo acompañe en su espacio íntimo ('depto')." 
      />

      <VersoExplicado 
        verso="ritter no tiene ghostwriter como Tyler the Creator"
        explicacion="Asegura que él escribe sus propias letras, aludiendo al rumor de que Tyler tiene co-escritores. Se posiciona como auténtico." 
      />

      <VersoExplicado 
        verso="fue unánime cuando me animé a hacer lo correcto"
        explicacion="Juega con la homofonía: 'me animé' y 'unánime', mostrando cómo tomar una buena decisión fue aprobado por todos (o por su conciencia)." 
      />

      <VersoExplicado 
        verso="cyphers en directo"
        explicacion="Participación en sesiones de freestyle ('cyphers') en vivo, reafirmando su autenticidad en la escena." 
      />

      <VersoExplicado 
        verso="jaggermeister, blacklabel otro level en tracks"
        explicacion="Referencia a bebidas fuertes como símbolo de su nivel en los temas ('otro level en tracks')." 
      />

      <VersoExplicado 
        verso="a lo Hacksaw saco Chainsaws"
        explicacion="Juego con el personaje 'Hacksaw' y 'Chainsaws' (sierras), implicando que 'corta' con fuerza en sus raps." 
      />

      <VersoExplicado 
        verso="'ey suck' a lo asap rocky"
        explicacion="Referencia a un adlib estilo A$AP Rocky. También puede sonar como 'ASAP', conectando fonéticamente." 
      />

      <VersoExplicado 
        verso="les falta las guirnaldas del shopping y ya tienen hecho el videoclip y el outfit"
        explicacion="Crítica a lo superficial: algunos raperos solo tienen la imagen (como decoración de shopping), pero no el contenido." 
      />

      {/* Continúa el resto aquí... */}

    </div>
  );
}
