import React from "react";
import {
  ShoppingCart,
  MonitorSmartphone,
  Gem,
  Shirt,
  User,
} from "lucide-react";
// import { useQuery } from "@tanstack/react-query";
// import { getAllProducts } from "../tenStack/fakeStoreApi";

// Static category data with icon

const categories = [
  { value: "All", icon: ShoppingCart },
  { value: "electronics", icon: MonitorSmartphone },
  { value: "jewelery", icon: Gem },
  { value: "men's clothing", icon: Shirt },
  { value: "women's clothing", icon: User },
];

const CategorySection = ({ setFunc, selected }) => {
  // const { data } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getAllProducts,
  // });

  // Extract unique categories from API data
  // const allCategories = data
  //   ?.map((item) => item.category)
  //   ?.filter((item, index, array) => array.indexOf(item) === index);

  // console.log("All Categories from API:", allCategories);

  return (
    <section className="flex flex-col gap-6 px-4 py-6">
      {/* Header */}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black">
        Browse Categories
      </h3>

      {/* Categories Grid */}
      <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.value}
              onClick={() => setFunc(cat.value)}
              className="flex flex-col items-center gap-2 min-w-[80px] sm:min-w-[100px] group cursor-pointer transition-transform hover:scale-105"
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${selected == cat.value ? "bg-black/10" : "bg-[#135BEC]/10"} flex items-center justify-center  ${selected == cat.value ? "text-black" : "text-[#135BEC]"} shadow-md`}
              >
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

export default CategorySection;
