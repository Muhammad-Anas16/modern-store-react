import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const OrderSuccessModal = ({ isOpen }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, navigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center w-80 animate-scale">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Order Placed!</h2>
        <p className="text-gray-500 text-sm">Redirecting to homepage...</p>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
