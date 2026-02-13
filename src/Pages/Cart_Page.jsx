import { useQuery } from "@tanstack/react-query";
import { FaArrowLeft, FaTrash, FaEllipsisH } from "react-icons/fa";
import { getAllProducts } from "./../tenStack/fakeStoreApi";
import { Link, useNavigate } from "react-router";
import { IoMdArrowRoundForward } from "react-icons/io";

const Cart_Page = () => {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const getId = localStorage.getItem("cart");
  const parseID = getId ? JSON.parse(getId) : [];

  const cartData = data?.filter((item) => parseID.includes(item.id));

  if (isLoading) {
    return (
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-32">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 bg-white shadow-sm">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-blue-600 text-lg" />
        </button>

        <h2 className="text-lg sm:text-xl font-semibold">Shopping Cart</h2>

        <FaEllipsisH className="text-blue-600" />
      </div>

      {/* Cart Items */}
      <div className="px-4 sm:px-6 lg:px-12 py-6 space-y-6 max-w-6xl mx-auto">
        {cartData && cartData.length > 0 ? (
          cartData.map((item) => (
            <div
              key={item.id}
              className="
                bg-white rounded-3xl p-4 sm:p-6 shadow-sm
                flex flex-col sm:flex-row
                gap-4 sm:gap-6
                items-center sm:items-start
              "
            >
              {/* Image */}
              <div
                className="
                  bg-gray-100 rounded-2xl
                  flex items-center justify-center
                  w-full sm:w-32
                  h-40 sm:h-32
                  p-4
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <p className="uppercase text-gray-400 text-xs tracking-widest font-semibold">
                    {item.category}
                  </p>

                  <button>
                    <FaTrash className="text-gray-400 hover:text-red-500 text-lg" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 mt-1 text-sm sm:text-base md:text-lg">
                  {item.title}
                </h3>

                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4 gap-4">
                  {/* Price */}
                  <p className="text-blue-600 font-bold text-xl sm:text-2xl">
                    ${item.price}
                  </p>

                  <Link
                    to={`/checkout/${item.id}`}
                    className="flex items-center justify-center rounded-md px-2 py-3 gap-2 bg-blue-600 text-white hover:bg-blue-700 transition font-bold"
                  >
                    Proceed to Checkout <IoMdArrowRoundForward size={25} />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart_Page;
