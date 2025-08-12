export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center">
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519336555923-59661f41bb03?q=80&w=1600&auto=format&fit=crop')",
        }}
        aria-label="Pan artesanal"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/70 to-espresso/20" />
      <div className="max-w-2xl px-4 animate-zoom-in">
        <h1 className="font-serif text-4xl md:text-6xl text-crema">
          Pan artesanal, tradición y sabor
        </h1>
        <p className="mt-4 text-crema/90">
          Más de 20 años horneando calidad en Tres Arroyos.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-oliva text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Hacer pedido por WhatsApp
          </a>
          <a
            href="#ubicacion"
            className="inline-block border border-crema/30 text-crema px-6 py-3 rounded-xl hover:bg-crema/10 transition"
          >
            Ver ubicación
          </a>
        </div>
      </div>
    </section>
  );
}
