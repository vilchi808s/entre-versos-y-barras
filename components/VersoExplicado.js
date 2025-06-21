export default function VersoExplicado({ verso, explicacion }) {
  return (
    <div className="mb-4">
      <details className="cursor-pointer">
        <summary className="font-semibold text-black">{verso}</summary>
        <p className="text-sm text-gray-500 mt-1">{explicacion}</p>
      </details>
    </div>
  );
}

export const versosTalking = [
  {
    verso: "The slow mod, most wanted",
    explicacion:
      "Se describe como una versión lenta del ‘mod’ (modificación o estilo), pero siendo el más buscado. Habla de su singularidad, diferente pero deseada."
  },
  {
    verso: "quiero que recorra baires y pegue bailes en mi depto",
    explicacion:
      "Una línea cargada de deseo cotidiano, mezcla lo romántico y lo urbano: la imagen íntima de alguien bailando en su departamento en Buenos Aires (‘Baires’)."
  },
  {
    verso: "ritter no tiene ghostwriter como Tyler the Creator",
    explicacion:
      "Afirma con orgullo que escribe sus propias letras, como Tyler, conocido por su autenticidad y creatividad sin ayuda externa."
  },
  {
    verso: "fue unánime cuando me animé a hacer lo correcto",
    explicacion:
      "La estructura rítmica es clave: ‘unánime’, ‘animé’, ‘correcto’. Y el fondo, más aún: cuando se atrevió a seguir el camino correcto, todos lo apoyaron."
  },
  {
    verso: "cyphers en directo",
    explicacion:
      "El término ‘cypher’ refiere a encuentros de freestyle. Decir que está en ‘cyphers en directo’ habla de autenticidad, habilidad y presencia real en el juego."
  },
  {
    verso: "jaggermeister, blacklabel otro level en tracks",
    explicacion:
      "La mención de dos bebidas fuertes como Jägermeister y Black Label no es solo por estilo: habla de nivel, intensidad. Sus ‘tracks’ están en otro ‘level’, como un brindis oscuro."
  },
  {
    verso: "a lo Hacksaw saco Chainsaws",
    explicacion:
      "‘Hacksaw’ hace referencia a la película 'Hacksaw Ridge', sobre un soldado que salva vidas sin disparar un solo tiro. Pero Ritter da el giro: él saca 'chainsaws', sierras eléctricas, sugiriendo agresividad artística. Está listo para cortar con todo, para destruir estructuras. Es una declaración de guerra poética."
  },
  {
    verso: "’ey suck’ a lo asap rocky",
    explicacion:
      "Imita el flow y dicción de A$AP Rocky, conocido por su estilo arrastrado y melódico. 'Ey suck' suena como una crítica disimulada (‘you suck’), dicho con gracia. Juega con la forma y el fondo: una burla escondida en un homenaje estilístico. Sutil, pero afilado."
  },
  {
    verso: "les falta las guirnaldas del shopping y ya tienen hecho el videoclip y el outfit",
    explicacion:
      "Una joya de crítica. Dice que muchos tienen ya el look de videoclip con solo comprarse adornos del shopping. No tienen contenido, pero lucen como estrellas. Ridiculiza el consumismo superficial en el rap actual. Y la musicalidad de ‘guirnaldas del shopping’ alarga la ironía con ritmo."
  },
  {
    verso: "caminando por libertadores craneando la épica",
    explicacion:
      "Camina por una calle (Libertadores) mientras piensa en lograr algo grande (‘la épica’). Lo cotidiano y lo histórico se cruzan en su mente mientras avanza."
  },
  {
    verso: "soñando con la copa en el libertador de américa",
    explicacion:
      "Clarísima referencia a la Copa Libertadores. Pero más que fútbol, sueña con un trofeo simbólico en un continente de lucha. Ambición en clave latina."
  },
  {
    verso: "denis rodman",
    explicacion:
      "Un nombre suelto que dice mucho. Rodman fue rebelde, polémico, excéntrico y, aún así, clave en la cancha. Ritter se compara con figuras que no siguen las reglas, pero rinden."
  },
  {
    verso: "babys in my toes",
    explicacion:
      "Una imagen tierna y extraña. Puede aludir a niños (o ternura) cerca de él, pero desde un ángulo poético confuso. Probablemente una licencia estética o código interno."
  },
  {
    verso: "TENIS SPORT",
    explicacion:
      "Puede interpretarse como una marca o simplemente una forma de vestir. Si lo grita o lo nombra con énfasis, está jugando con la forma más que con el contenido."
  },
  {
    verso: "fumo en el paso de cebra mientras dobla la esquina",
    explicacion:
      "Imagen de película. Fuma relajado en una escena urbana mientras alguien (o él mismo) dobla la esquina. Una atmósfera de pausa y estilo."
  }
];
