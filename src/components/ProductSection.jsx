import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../tenStack/fakeStoreApi";

const ProductSection = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    console.log("filterData => ", products.slice(0, 10));
    return (
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  // ✅ show only first 10 products
  const limitedProducts = products.slice(0, 10);
  console.log("limitedProducts => ", limitedProducts)

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold mb-6">Products</h2>

      {/* ALWAYS 2 CARDS */}
      <div className="grid grid-cols-2 gap-4">
        {limitedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
