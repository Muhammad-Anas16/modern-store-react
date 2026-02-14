import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../tenStack/fakeStoreApi";
import { useState } from "react";
import CategorySection from "../components/Cetagory";
import ProductCard from "../components/ProductCard";
import LoaderComp from "../components/main/Loader";

const ProductsPage = () => {
  const [func, setFunc] = useState("All");

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return (
      <LoaderComp />
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
