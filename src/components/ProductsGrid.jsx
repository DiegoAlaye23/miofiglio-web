import ProductCard from "./ProductCard";
import Reveal from "./Reveal";

export default function ProductsGrid({ items, title, subtitle }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <Reveal>
        <header className="mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso flex items-center gap-2">
            <span role="img" aria-label="Pan">
              🥖
            </span>
            {title}
          </h2>
          {subtitle && <p className="text-carbon/70 mt-1">{subtitle}</p>}
        </header>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <Reveal key={it.id}>
            <ProductCard item={it} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
