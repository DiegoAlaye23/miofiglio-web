export default function MapSection() {
  return (
    <section id="ubicacion" className="border-t border-espresso/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso">Dónde estamos</h2>
        <p className="text-carbon/70 mt-1">
          Tres Arroyos, Buenos Aires. Horarios y dirección exacta a confirmar.
        </p>
        <div className="mt-5 rounded-2xl overflow-hidden border border-espresso/10">
          <iframe
            title="Mapa de Panadería Mio Figlio Tres Arroyos"
            src={`https://www.google.com/maps?q=Panaderia%20Mio%20Figlio%20Tres%20Arroyos&output=embed`}
            className="w-full h-[360px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
