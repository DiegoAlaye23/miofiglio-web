export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="font-serif text-3xl text-espresso">Contacto</h1>
      <p className="mt-3 text-carbon/80">
        Escribinos por WhatsApp para consultas y pedidos.
      </p>
      <a
        href="https://wa.me/5490000000000"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 bg-ladrillo text-white px-5 py-2 rounded-xl hover:opacity-90"
      >
        WhatsApp
      </a>
    </section>
  );
}
