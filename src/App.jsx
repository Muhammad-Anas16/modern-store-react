import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/main/Navbar";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Cart_Page from "./Pages/Cart_Page";
import Checkout_Page from "./Pages/Checkout_Page";
import Favorites_Page from "./Pages/Favorites_Page";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart_Page />} />
          <Route path="/favorites" element={<Favorites_Page />} />
          <Route path="/checkout/:id" element={<Checkout_Page />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
