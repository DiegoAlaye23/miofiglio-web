import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section className="bg-crema">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <Reveal className="h-full">
          <img
            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop"
            alt="Nuestro equipo en la panadería"
            className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <div>
            <h2 className="font-serif text-2xl md:text-3xl text-espresso">Nosotros</h2>
            <p className="mt-3 text-carbon/80 leading-relaxed">
              Somos una panadería de Tres Arroyos con más de dos décadas de
              trabajo artesanal. Cada día horneamos pan, facturas y pastelería
              con ingredientes seleccionados y la pasión de siempre.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
