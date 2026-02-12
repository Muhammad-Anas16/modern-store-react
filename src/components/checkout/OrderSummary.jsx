import { FaLock } from "react-icons/fa";

const OrderSummary = ({ subtotal, shipping, tax }) => {
  const total = subtotal + shipping + tax;

  return (
    <div className="px-6 py-6 bg-white mt-4 rounded-b-3xl">
      <div className="space-y-3 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">FREE</span>
        </div>

        <div className="flex justify-between">
          <span>Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t my-4"></div>

      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-2xl font-bold text-blue-600">
          ${total.toFixed(2)}
        </span>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-xl flex items-center gap-3 text-sm text-gray-600">
        <FaLock className="text-green-600" />
        Your payment information is encrypted and secure.
      </div>
    </div>
  );
};

export default OrderSummary;
