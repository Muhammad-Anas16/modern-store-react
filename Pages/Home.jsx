import React from "react";
import HeroSection from "../src/components/HeroSection";
import CategorySection from "../src/components/Cetagory";
import ProductSection from "../src/components/ProductSection";

const HomePage = () => {
  return (
    <main className="flex-1 flex flex-col gap-4 pt-15">
      <HeroSection />
      <CategorySection />
      <ProductSection />
    </main>
  );
};

export default HomePage;
