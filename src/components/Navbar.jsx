import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-xl transition ${
        isActive ? "bg-oliva text-white" : "hover:bg-oliva/15"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-crema/95 backdrop-blur border-b border-espresso/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-espresso">Mio Figlio</span>
          <span className="uppercase tracking-widest text-sm text-carbon/70">Panadería & Pastelería</span>
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg transition hover:bg-oliva/15"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-espresso"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/productos">Productos</NavItem>
          <NavItem to="/nosotros">Nosotros</NavItem>
          <NavItem to="/contacto">Contacto</NavItem>
        </nav>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-1 animate-fade-in-up">
          <NavItem to="/" onClick={() => setOpen(false)}>
            Inicio
          </NavItem>
          <NavItem to="/productos" onClick={() => setOpen(false)}>
            Productos
          </NavItem>
          <NavItem to="/nosotros" onClick={() => setOpen(false)}>
            Nosotros
          </NavItem>
          <NavItem to="/contacto" onClick={() => setOpen(false)}>
            Contacto
          </NavItem>
        </nav>
      )}
    </header>
  );
}
