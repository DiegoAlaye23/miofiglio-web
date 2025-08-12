export default function Hero() {
  return (
    <section className="relative isolate">
      <div
        className="h-[48vh] md:h-[60vh] w-full bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519336555923-59661f41bb03?q=80&w=1600&auto=format&fit=crop')",
        }}
        aria-label="Pan artesanal"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-crema via-crema/10 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 -mt-20 relative">
        <div className="bg-crema/80 backdrop-blur-md border border-espresso/10 rounded-2xl p-6 md:p-8 shadow-lg animate-fade-in-up">
          <h1 className="font-serif text-3xl md:text-5xl text-espresso">
            Pan artesanal, tradición y sabor
          </h1>
          <p className="mt-3 md:mt-4 text-carbon/80">
            Más de 20 años horneando calidad en Tres Arroyos.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-oliva text-white px-5 py-2 rounded-xl hover:opacity-90"
            >
              Hacer pedido por WhatsApp
            </a>
            <a
              href="#ubicacion"
              className="inline-block border border-espresso/20 px-5 py-2 rounded-xl hover:bg-espresso/5"
            >
              Ver ubicación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
