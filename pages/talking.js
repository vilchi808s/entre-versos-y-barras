import VersoExplicado from '../components/VersoExplicado';

export default function Talking() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">"Talking" — Ritter</h1>
      <p className="text-sm text-gray-500">Análisis verso por verso</p>

      <VersoExplicado
        verso="The slow mod, most wanted"
        explicacion="Se describe como una versión lenta del 'modo dios' y el más buscado: se presenta como alguien calmado pero poderoso y peligroso al mismo tiempo."
      />
      <VersoExplicado
        verso="quiero que recorra baires y pegue bailes en mi depto"
        explicacion="Una línea cargada de deseo y nostalgia. 'Baires' es Buenos Aires, y quiere que alguien viaje hasta allá para compartir algo íntimo en su departamento."
      />
      <VersoExplicado
        verso="ritter no tiene ghostwriter como Tyler the Creator"
        explicacion="Afirma con orgullo que escribe sus propias letras, a diferencia de quienes usan escritores fantasma, haciendo referencia a un rumor sobre Tyler."
      />
      <VersoExplicado
        verso="fue unánime cuando me animé a hacer lo correcto"
        explicacion="La estructura rítmica remarca la seguridad de sus decisiones. No fue casual, fue una decisión avalada por todos (o por su conciencia)."
      />
      <VersoExplicado
        verso="cyphers en directo"
        explicacion="El término 'cypher' refiere a encuentros de freestyle donde varios MCs improvisan. Habla de su capacidad para rapear en vivo, sin filtros."
      />
      <VersoExplicado
        verso="jaggermeister, blacklabel otro level en tracks"
        explicacion="La mención de dos bebidas alcohólicas de alto nivel refuerza la idea de calidad y madurez. Él rapea en otro nivel, como quien toma lo mejor."
      />
      <VersoExplicado
        verso="a lo Hacksaw saco Chainsaws"
        explicacion="'Hacksaw' hace referencia a la película 'Hacksaw Ridge', sobre un soldado que salva vidas sin disparar un solo tiro. Pero Ritter da el giro: él saca 'chainsaws', sierras eléctricas, sugiriendo agresividad artística. Está listo para cortar con todo, para destruir estructuras. Es una declaración de guerra poética."
      />
      <VersoExplicado
        verso='"ey suck" a lo asap rocky'
        explicacion="Imita el flow y dicción de A$AP Rocky, conocido por su estilo arrastrado y melódico. 'Ey suck' suena como una crítica disimulada ('you suck'), dicho con gracia. Juega con la forma y el fondo: una burla escondida en un homenaje estilístico. Sutil, pero afilado."
      />
      <VersoExplicado
        verso="les falta las guirnaldas del shopping y ya tienen hecho el videoclip y el outfit"
        explicacion="Una joya de crítica. Dice que muchos tienen ya el look de videoclip con solo comprarse adornos del shopping. No tienen contenido, pero lucen como estrellas. Ridiculiza el consumismo superficial en el rap actual. Y la musicalidad de ‘guirnaldas del shopping’ alarga la ironía con ritmo."
      />
      <VersoExplicado
        verso="fumo en el paso por si preguntan"
        explicacion="Una línea directa, como quien anticipa juicios o acusaciones. Está diciendo que fuma —quizá marihuana— y no lo oculta: es parte de su identidad y no se disculpa por ello."
      />
    </div>
  );
}
