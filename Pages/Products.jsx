import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../src/tenStack/fakeStoreApi";
import ProductCard from "../src/components/ProductCard";

const ProductsPage = () => {
  const { data, isLoading } = useQuery({
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

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-bold mb-6">Products</h2>

      {/* ALWAYS 2 CARDS */}
      <div className="grid grid-cols-2 gap-4">
        {data?.map((product) => {
            return(
                <ProductCard
                key={product.id}
                product={product}
                to={`/${product.id}`}
                />
            )
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
