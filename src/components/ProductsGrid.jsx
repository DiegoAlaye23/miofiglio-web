import ProductCard from "./ProductCard";

export default function ProductsGrid({ items, title, subtitle }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-6">
        <h2 className="font-serif text-2xl md:text-3xl text-espresso">{title}</h2>
        {subtitle && <p className="text-carbon/70 mt-1">{subtitle}</p>}
      </header>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <ProductCard key={it.id} item={it} />
        ))}
      </div>
    </section>
  );
}
