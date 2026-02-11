import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../tenStack/fakeStoreApi";
import { useState } from "react";
import CategorySection from "../components/Cetagory";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [func, setFunc] = useState("All");

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

  const filteredProducts =
    func === "All" ? data : data?.filter((item) => item.category == func);

  return (
    <section className="flex flex-col gap-6 px-4 py-16">
      <CategorySection setFunc={setFunc} selected={func} />

      {/* ALWAYS 2 CARDS */}
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              to={`/${product.id}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductsPage;
