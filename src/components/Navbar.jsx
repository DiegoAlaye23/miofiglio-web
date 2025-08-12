import { Link, NavLink } from "react-router-dom";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-xl transition ${
        isActive ? "bg-oliva text-white" : "hover:bg-oliva/15"
      }`
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-crema/90 backdrop-blur border-b border-espresso/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl text-espresso">Mio Figlio</span>
          <span className="uppercase tracking-widest text-sm text-carbon/70">Panadería & Pastelería</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/productos">Productos</NavItem>
          <NavItem to="/nosotros">Nosotros</NavItem>
          <NavItem to="/contacto">Contacto</NavItem>
        </nav>
      </div>
    </header>
  );
}
