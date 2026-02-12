import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaTrash, FaEllipsisH } from "react-icons/fa";
import { getAllProducts } from "./../tenStack/fakeStoreApi";
import { useNavigate } from "react-router";

const Cart_Page = () => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  useEffect(() => {
    const getId = localStorage.getItem("cart");
    const parseID = getId ? JSON.parse(getId) : [];

    const matchedItems = data?.filter((item) => parseID.includes(item.id));
    setCartData(matchedItems);
  }, [data]);

  if (isLoading) {
    return (
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen pb-40">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-blue-600 text-lg" />
        </button>

        <h2 className="text-lg font-semibold">Shopping Cart</h2>

        <FaEllipsisH className="text-blue-600" />
      </div>

      {/* Cart Items */}
      <div className="px-4 py-6 space-y-6">
        {cartData && cartData.length > 0 ? (
          cartData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-4"
            >
              <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center sm:w-32">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-24 object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <p className="uppercase text-gray-400 text-xs tracking-widest font-semibold">
                      {item.category}
                    </p>
                    <button onClick={() => alert("Remove item from cart")}>
                      <FaTrash className="text-gray-400 hover:text-red-500" />
                    </button>
                  </div>

                  <h3 className="font-semibold text-gray-800 mt-1 text-sm sm:text-base">
                    {item.title}
                  </h3>

                  <p className="text-blue-600 font-bold text-lg mt-2">
                    {/* ${(item.price * item.quantity).toFixed(2)} */}
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>

      {/* Bottom Summary */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-6">
        <div className="space-y-3 text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">
              {shipping === 0 ? "Free" : `$${shipping}`}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t my-4"></div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-3xl font-bold text-blue-600">
            ${total.toFixed(2)}
          </span>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-lg font-semibold shadow-md">
          Proceed to Checkout →
        </button>
      </div> */}
    </div>
  );
};

export default Cart_Page;
