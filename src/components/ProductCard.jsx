export default function ProductCard({ item }) {
  return (
    <article className="group bg-white rounded-2xl border border-espresso/10 overflow-hidden shadow-sm transition hover:shadow-lg hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{item.name}</h3>
        {item.description && (
          <p className="text-sm text-carbon/70 mt-1">{item.description}</p>
        )}
        {item.price && (
          <p className="mt-3 font-semibold text-espresso">${item.price}</p>
        )}
      </div>
    </article>
  );
}
