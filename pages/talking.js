import VersoExplicado from '@/components/VersoExplicado';

export default function Talking() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">"Talking" — Ritter</h1>

      <VersoExplicado
        verso="a lo Hacksaw saco Chainsaws"
        explicacion="‘Hacksaw’ hace referencia a la película 'Hacksaw Ridge', sobre un soldado que salva vidas sin disparar un solo tiro. Pero Ritter da el giro: él saca 'chainsaws', sierras eléctricas, sugiriendo agresividad artística. Está listo para cortar con todo, para destruir estructuras. Es una declaración de guerra poética."
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
        explicacion="‘Fumo en El Paso’ puede tener doble sentido. Por un lado, hace referencia literal a fumar en El Paso, Texas, lugar fronterizo con fuerte presencia mexicana. Por otro, ‘fumo en el paso’ es una metáfora del movimiento continuo: está en tránsito, sigue avanzando. También puede sugerir rebeldía o relajación en medio del viaje."
      />
    </div>
  );
}
