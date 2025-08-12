export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-24">
      <h1 className="font-serif text-3xl text-espresso">Contacto</h1>
      <p className="mt-3 text-carbon/80">
        Escribinos por WhatsApp para consultas y pedidos.
      </p>
      <a
        href="https://wa.me/5490000000000"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-oliva text-white px-6 py-3 rounded-xl shadow hover:bg-oliva/90 transition"
      >
        WhatsApp
      </a>
    </section>
  );
}
