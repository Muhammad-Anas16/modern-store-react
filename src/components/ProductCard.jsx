import { useState } from "react";
import { FaHeart, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const { id, title, image, price, rating } = product;

  /* ---------- Helpers ---------- */
  const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

  const setStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

  /* ---------- State (derived correctly) ---------- */
  const [isFavorite, setIsFavorite] = useState(() =>
    getStorage("favorites").some((p) => p.id === id),
  );

  const [inCart, setInCart] = useState(() =>
    getStorage("cart").some((p) => p.id === id),
  );

  /* ---------- Favorite ---------- */
  const toggleFavorite = () => {
    let favorites = getStorage("favorites");

    if (isFavorite) {
      favorites = favorites.filter((p) => p.id !== id);
    } else {
      favorites.push(product);
    }

    setStorage("favorites", favorites);
    setIsFavorite(!isFavorite);
  };

  /* ---------- Cart ---------- */
  const toggleCart = () => {
    let cart = getStorage("cart");

    if (inCart) {
      cart = cart.filter((p) => p.id !== id);
    } else {
      cart.push({ ...product, qty: 1 });
    }

    setStorage("cart", cart);
    setInCart(!inCart);
  };

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-gray-50 p-4">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
        />

        {/* Favorite */}
        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Rating */}
        <div className="flex items-center gap-1 text-sm font-semibold text-yellow-500">
          <IoStar />
          <span>{rating?.rate || 4.5}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-medium line-clamp-2">
          {title}
        </h3>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-[#135BEC]">${price}</span>

          <button
            onClick={toggleCart}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-white transition
            ${inCart ? "bg-green-600" : "bg-[#135BEC] hover:bg-[#0f4bcc]"}`}
          >
            <FaCartArrowDown />
            {inCart ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
