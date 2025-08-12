export default function ProductCard({ item }) {
  return (
    <article className="bg-white rounded-2xl border border-espresso/10 overflow-hidden shadow-sm hover:shadow-md transition">
      <img
        src={item.image}
        alt={item.name}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
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
