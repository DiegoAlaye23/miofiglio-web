import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Reveal className="h-full">
          <img
            src="https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1600&auto=format&fit=crop"
            alt="Nuestro local"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </Reveal>
        <Reveal>
          <div>
            <h1 className="font-serif text-3xl text-espresso">Nuestra historia</h1>
            <p className="mt-3 text-carbon/80 leading-relaxed">
              Desde hace más de 20 años, Mio Figlio combina técnicas artesanales
              con ingredientes de calidad para ofrecer pan y pastelería de
              primera. Cada pieza está hecha con dedicación para compartir con
              nuestra comunidad el sabor de la tradición.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
