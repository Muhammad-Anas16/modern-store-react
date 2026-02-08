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
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Cetagory />
      </main>
    </>
  );
}

export default App;
