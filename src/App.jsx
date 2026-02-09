import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/main/Navbar";
import HomePage from "../Pages/Home";
import ProductsPage from "../Pages/products";
import DetailsPage from "../Pages/DetailsPAge";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
