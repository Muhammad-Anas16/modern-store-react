import { useState } from "react";
import { FaArrowLeft, FaTrash, FaEllipsisH } from "react-icons/fa";
import { useNavigate } from "react-router";

const Cart_Page = () => {
  const navigate = useNavigate();

  // Demo cart data (replace with Redux later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      category: "men's clothing",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      category: "men's clothing",
      price: 22.3,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
      quantity: 2,
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      category: "men's clothing",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      quantity: 1,
    },
  ]);

  // Quantity update
  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                    ? item.quantity - 1
                    : 1,
            }
          : item,
      ),
    );
  };

  // Delete item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 0;
  const tax = subtotal * 0.06;
  const total = subtotal + tax + shipping;

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
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row gap-4"
          >
            {/* Image */}
            <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center sm:w-32">
              <img
                src={item.image}
                alt={item.title}
                className="h-24 object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <p className="uppercase text-gray-400 text-xs tracking-widest font-semibold">
                    {item.category}
                  </p>
                  <button onClick={() => removeItem(item.id)}>
                    <FaTrash className="text-gray-400 hover:text-red-500" />
                  </button>
                </div>

                <h3 className="font-semibold text-gray-800 mt-1 text-sm sm:text-base">
                  {item.title}
                </h3>

                <p className="text-blue-600 font-bold text-lg mt-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex justify-end mt-3">
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 gap-4">
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="text-blue-600 text-xl"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="text-blue-600 text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-lg p-6">
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
      </div>
    </div>
  );
};

export default Cart_Page;
