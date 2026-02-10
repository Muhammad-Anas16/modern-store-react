import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../tenStack/fakeStoreApi";

const ProductSection = ({ func }) => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return (
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  const limitedProducts =
    func === "All"
      ? products.slice(0, 10)
      : products?.filter((item) => item.category == func);

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold mb-6">Products</h2>

      {/* ALWAYS 2 CARDS */}
      <div className="grid grid-cols-2 gap-4">
        {limitedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            to={`/products/${product.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
