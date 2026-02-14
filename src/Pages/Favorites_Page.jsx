import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaHeart, FaEllipsisH } from "react-icons/fa";
import { getAllProducts } from "./../tenStack/fakeStoreApi";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Empty from "../components/main/Empty";
import LoaderComp from './../components/main/Loader';

const Favorites_Page = () => {
  const navigate = useNavigate();
  const [favoriteItems, setFavoriteItems] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  /* ================= LOAD FAVORITES ================= */
  useEffect(() => {
    if (!data) return;

    const getFav = localStorage.getItem("favorites");
    const parsedFav = getFav ? JSON.parse(getFav) : [];

    const matched = data.filter((item) => parsedFav.includes(item.id));
    setFavoriteItems(matched);
  }, [data]);

  /* ================= REMOVE FAVORITE ================= */
  const removeFavorite = (id) => {
    const updated = favoriteItems.filter((item) => item.id !== id);
    setFavoriteItems(updated);

    const ids = updated.map((item) => item.id);
    localStorage.setItem("favorites", JSON.stringify(ids));
  };

  if (isLoading) {
    return (
      <LoaderComp />
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 bg-white shadow-sm">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-blue-600 text-lg" />
        </button>

        <h2 className="text-lg sm:text-xl font-semibold">My Favorites</h2>

        <FaEllipsisH className="text-blue-600" />
      </div>

      {/* Favorites Grid */}
      <div className="px-4 sm:px-6 lg:px-12 py-6 max-w-6xl mx-auto">
        {favoriteItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition"
              >
                {/* Image */}
                <div className="bg-gray-100 rounded-2xl h-48 flex items-center justify-center p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="mt-4">
                  <p className="uppercase text-gray-400 text-xs tracking-widest font-semibold">
                    {item.category}
                  </p>

                  <h3 className="font-semibold text-gray-800 mt-1 text-sm sm:text-base line-clamp-2">
                    {item.title}
                  </h3>

                  <div className="flex justify-between items-center mt-3">
                    <p className="text-blue-600 font-bold text-lg">
                      ${item.price}
                    </p>

                    <button
                      onClick={() => removeFavorite(item.id)}
                      className="text-red-500 hover:scale-110 transition"
                    >
                      <FaHeart className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Empty message="No favorite products yet 💔" />
        )}
      </div>
    </div>
  );
};

export default Favorites_Page;
