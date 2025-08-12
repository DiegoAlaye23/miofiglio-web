import ProductsGrid from "../components/ProductsGrid";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className="pt-6">
      <ProductsGrid
        items={products}
        title="Catálogo"
        subtitle="Panes, facturas y pastelería fresca todos los días."
      />
    </div>
  );
}
