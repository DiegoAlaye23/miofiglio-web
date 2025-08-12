export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-crema">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
        <div>
          <div className="font-serif text-xl text-espresso">Mio Figlio</div>
          <div className="text-sm text-carbon/70">
            Panadería & Pastelería — Tres Arroyos
          </div>
        </div>
        <div className="text-sm text-carbon/70">
          © {new Date().getFullYear()} Mio Figlio. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
