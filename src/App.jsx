// import { useQuery } from "@tanstack/react-query";
import "./App.css";
import Cetagory from "./components/Cetagory";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/main/Navbar";
// import { getAllProducts } from './tenStack/fakeStoreApi';

function App() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getAllProducts,
  // });

  // if (isLoading) {
  //   console.log("Fetching the products");
  // }
  // console.log("Categories:", data);
  // if (error) {
  //   console.error("Error fetching categories", error);
  // }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content */}
      <main className="flex-1 flex flex-col gap-4 pt-15">
        <HeroSection />
        <Cetagory />
      </main>
    </div>
  );
}

export default App;
