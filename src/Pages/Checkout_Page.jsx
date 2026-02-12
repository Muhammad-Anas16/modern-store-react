import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentSection from "../components/checkout/PaymentSection";
import OrderSummary from "../components/checkout/OrderSummary";

const Checkout_Page = () => {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("apple");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = 124.5;
  const shipping = 0;
  const tax = 10.2;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-44">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <button onClick={() => navigate(-1)}>
          <FaArrowLeft className="text-blue-600 text-lg" />
        </button>
        <h2 className="text-lg font-semibold">Checkout</h2>
        <div className="w-6" />
      </div>

      <ShippingForm formData={formData} handleChange={handleChange} />

      <PaymentSection
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        formData={formData}
        handleChange={handleChange}
      />

      <OrderSummary subtotal={subtotal} shipping={shipping} tax={tax} />

      {/* Sticky Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-6 shadow-lg">
        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl text-lg font-semibold shadow-md">
          Place Order →
        </button>
      </div>
    </div>
  );
};

export default Checkout_Page;
