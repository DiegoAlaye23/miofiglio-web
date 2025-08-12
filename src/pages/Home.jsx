import Hero from "../components/Hero";
import ProductsGrid from "../components/ProductsGrid";
import MapSection from "../components/MapSection";
import { products } from "../data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsGrid
        items={products.slice(0, 4)}
        title="Productos destacados"
        subtitle="Una muestra de lo que horneamos a diario."
      />
      <MapSection />
    </>
  );
}
