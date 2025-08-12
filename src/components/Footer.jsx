import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-espresso text-crema mt-10">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl">Mio Figlio</div>
          <p className="text-sm text-crema/70 mt-1">
            Panadería &amp; Pastelería — Tres Arroyos
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-crema/80">
          <Link to="/" className="hover:text-white transition">
            Inicio
          </Link>
          <Link to="/productos" className="hover:text-white transition">
            Productos
          </Link>
          <Link to="/nosotros" className="hover:text-white transition">
            Nosotros
          </Link>
          <Link to="/contacto" className="hover:text-white transition">
            Contacto
          </Link>
        </nav>
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-5 md:h-5"
            >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-5 md:h-5"
            >
              <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3h-2.1v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center text-sm text-crema/60 pb-6">
        © {new Date().getFullYear()} Mio Figlio. Todos los derechos reservados.
      </div>
    </footer>
  );
}
