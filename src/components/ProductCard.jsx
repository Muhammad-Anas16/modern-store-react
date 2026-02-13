import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { BsCartX, BsCartPlus } from "react-icons/bs";
import { Link } from "react-router";

const ProductCard = ({ product, to }) => {
  const { id, title, image, price, rating } = product;

  const getFromStorage = (key) => {
    // get data from localStorage
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };

  const saveToStorage = (key, value) => {
    // save data to  localStorage
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [isFavorite, setIsFavorite] = useState(() => {
    // Check product with favorites key in localStorage
    const favorites = getFromStorage("favorites");
    return favorites.includes(id);
  });

  const [inCart, setInCart] = useState(() => {
    // Check product with cart key in localStorage
    const cart = getFromStorage("cart");
    return cart.includes(id);
  });

  /* ==============================
     Toggle Favorite
  ============================== */
  const toggleFavorite = (e) => {
    e.stopPropagation();

    let favorites = getFromStorage("favorites");

    if (favorites.includes(id)) {
      // Remove from favorites
      favorites = favorites.filter((itemId) => itemId !== id);
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(id);
      setIsFavorite(true);
    }

    saveToStorage("favorites", favorites);
  };

  /* ==============================
     Toggle Cart
  ============================== */
  const toggleCart = (e) => {
    e.stopPropagation();

    let cart = getFromStorage("cart");

    if (cart.includes(id)) {
      // Remove from cart
      cart = cart.filter((itemId) => itemId !== id);
      setInCart(false);
    } else {
      // Add to cart
      cart.push(id);
      setInCart(true);
    }

    saveToStorage("cart", cart);
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative aspect-square bg-gray-50 p-4">
        <Link to={to} className="block h-full w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow hover:scale-105 transition"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500 text-lg" />
          ) : (
            <FaRegHeart className="text-gray-500 text-lg" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Rating */}
        <div className="flex items-center gap-1 text-lg font-semibold text-yellow-500">
          <IoStar />
          <span>{rating?.rate || 4.5}</span>
        </div>

        {/* Title */}
        <Link
          to={to}
          className="text-sm sm:text-base font-medium line-clamp-2 hover:underline"
        >
          {title}
        </Link>

        {/* Price + Cart Button */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-[#135BEC]">${price}</span>

          <button
            onClick={toggleCart}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xl font-bold transition
              ${
                inCart
                  ? "text-green-600 hover:text-red-500"
                  : "text-[#135BEC] hover:text-green-600"
              }`}
          >
            {inCart ? <BsCartX /> : <BsCartPlus />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
