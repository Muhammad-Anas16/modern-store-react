import { useState } from "react";
import HeroSection from "../src/components/HeroSection";
import CategorySection from "../src/components/Cetagory";
import ProductSection from "../src/components/ProductSection";

const HomePage = () => {
  const [func, setFunc] = useState("All");

  console.log(`"Current Cetagory Data in HomePage", ${func}`);
  return (
    <main className="flex-1 flex flex-col gap-4 pt-15">
      <HeroSection />
      <CategorySection setFunc={setFunc} selected={func} />
      <ProductSection func={func} />
    </main>
  );
};

export default HomePage;
