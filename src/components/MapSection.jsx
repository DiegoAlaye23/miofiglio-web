import Reveal from "./Reveal";

export default function MapSection() {
  return (
    <section id="ubicacion" className="border-t border-espresso/10 bg-crema/60">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso">Dónde estamos</h2>
        </Reveal>
        <Reveal>
          <p className="text-carbon/70 mt-1">
            Tres Arroyos, Buenos Aires. Horarios y dirección exacta a confirmar.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <div className="rounded-2xl overflow-hidden border border-espresso/10 shadow-lg">
            <iframe
              title="Mapa de Panadería Mio Figlio Tres Arroyos"
              src={`https://www.google.com/maps?q=Panaderia%20Mio%20Figlio%20Tres%20Arroyos&output=embed`}
              className="w-full h-[360px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
