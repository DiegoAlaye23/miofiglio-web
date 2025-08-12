export default function Hero() {
  return (
    <section className="relative flex items-center justify-center text-center min-h-[45vh] sm:min-h-[50vh] md:min-h-[60vh]">
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519336555923-59661f41bb03?q=80&w=1600&auto=format&fit=crop')",
        }}
        aria-label="Pan artesanal"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/80 via-espresso/50 to-espresso/20" />
      <div className="max-w-2xl px-4 animate-zoom-in">
        <h1 className="font-serif text-5xl md:text-7xl text-crema drop-shadow">
          Pan artesanal, tradición y sabor
        </h1>
        <p className="mt-4 text-crema/90">
          Más de 20 años horneando calidad en Tres Arroyos.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-oliva text-white px-6 py-3 rounded-xl shadow hover:bg-oliva/90 transition"
          >
            Hacer pedido por WhatsApp
          </a>
          <a
            href="#ubicacion"
            className="inline-block border-2 border-crema text-crema px-6 py-3 rounded-xl hover:bg-crema/10 transition"
          >
            Ver ubicación
          </a>
        </div>
      </div>
    </section>
  );
}
