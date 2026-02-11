import { useState } from "react";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/Cetagory";
import AllProductSection from "../components/ProductSection";

const HomePage = () => {
  const [func, setFunc] = useState("All");

  console.log(`"Current Cetagory Data in HomePage", ${func}`);
  return (
    <main className="flex-1 flex flex-col gap-4 pt-15">
      <HeroSection />
      <CategorySection setFunc={setFunc} selected={func} />
      <AllProductSection func={func} />
    </main>
  );
};

export default HomePage;
