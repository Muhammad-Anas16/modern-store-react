import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";
import { getProductById, getAllProducts } from "../tenStack/fakeStoreApi";
import { IoStar } from "react-icons/io5";
import { FaArrowLeft, FaHeart } from "react-icons/fa";
import { useState } from "react";
import OrderSuccessModal from "../components/checkout/OrderSuccessModal";
import LoaderComp from "../components/main/Loader";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  /* ---------------- Main Product ---------------- */
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  /* ---------------- Recommended Products ---------------- */
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  /* ---------------- Loading & Error ---------------- */
  if (isLoading) {
    return (
      <LoaderComp />
    );
  }

  if (isError || !data) {
    return (
      <Empty message="Product not found 😢" />
    );
  }

  const { category, description, image, price, title, rating } = data;
  const { count, rate } = rating;

  /* ---------------- Handle Add To Cart ---------------- */
  const handleAddToCart = () => {
    setShowModal(true);
    console.log("Added to cart:", {
      id,
      title,
      price,
      image,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-28">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-xl" />
        </button>
        <h2 className="font-semibold text-lg">Product Details</h2>
        <div className="w-6" />
      </div>

      {/* Image Section */}
      <div className="p-4">
        <div className="bg-white rounded-2xl p-6 relative">
          <img
            src={image}
            alt={title}
            className="mx-auto h-72 object-contain"
          />
          <button className="absolute top-4 right-4 bg-gray-100 p-3 rounded-full shadow">
            <FaHeart className="text-gray-400" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          <span className="w-2 h-2 bg-blue-600 rounded-full" />
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* Details */}
      <div className="px-4">
        <p className="text-blue-600 tracking-widest text-sm font-semibold uppercase">
          {category}
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          {title}
        </h1>

        {/* Price & Rating */}
        <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-blue-600">
              ${price.toFixed(2)}
            </span>
            <span className="line-through text-gray-400">
              ${(price + 50).toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
            <IoStar />
            {rate} ({count} reviews)
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg text-gray-900 mb-3">
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>

      {/* Recommended */}
      <div className="mt-10 px-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">You Might Also Like</h3>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {products
            ?.filter((item) => item.id !== data.id)
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="min-w-[160px] bg-white p-4 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-28 mx-auto object-contain"
                />
                <h4 className="text-sm mt-3 font-medium truncate">
                  {item.title}
                </h4>
                <p className="text-blue-600 font-bold mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 flex items-center gap-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
        >
          Add to Cart
        </button>
      </div>

      {/* Success Modal */}
      <OrderSuccessModal isOpen={showModal} />
    </div>
  );
};

export default ProductDetailsPage;
