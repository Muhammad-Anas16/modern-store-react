import React from "react";
import { MonitorSmartphone, Gem, Shirt, User } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../tenStack/fakeStoreApi";

// Static category data with icon
const categories = [
  { value: "electronics", icon: MonitorSmartphone },
  { value: "jewelery", icon: Gem },
  { value: "men's clothing", icon: Shirt },
  { value: "women's clothing", icon: User },
];

const Category = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) {
    return (
      <section className="flex justify-center items-center py-10">
        <p className="text-gray-500">Loading categories...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="flex justify-center items-center py-10">
        <p className="text-red-500">Failed to load categories!</p>
      </section>
    );
  }

  // Extract unique categories from API data
  const allCategories = data
    ?.map((item) => item.category)
    ?.filter((item, index, array) => array.indexOf(item) === index);

  console.log("All Categories from API:", allCategories);

  return (
    <section className="flex flex-col gap-6 px-4 py-6">
      {/* Header */}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800">
        Browse Categories
      </h3>

      {/* Categories Grid */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.value}
              className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-[100px] group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary shadow-md">
                <Icon size={24} />
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center text-gray-700 opacity-80">
                {cat.value}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
