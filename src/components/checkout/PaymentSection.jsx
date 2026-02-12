import { FaMoneyBillWave } from "react-icons/fa";
import PaymentOption from "./PaymentOption";
import InputField from "./InputField";

const PaymentSection = ({
  paymentMethod,
  setPaymentMethod,
  formData,
  handleChange,
}) => {
  return (
    <div className="px-6 py-6 bg-white mt-4">
      <div className="flex items-center gap-3 mb-6">
        <FaMoneyBillWave className="text-blue-600 text-lg" />
        <h3 className="text-xl font-semibold">Payment Method</h3>
      </div>

      <div className="space-y-4">
        <PaymentOption
          title="Apple Pay"
          description="Pay instantly using Apple Wallet"
          active={paymentMethod === "apple"}
          onClick={() => setPaymentMethod("apple")}
        />

        <PaymentOption
          title="Credit Card"
          description="Visa, Mastercard, Amex"
          active={paymentMethod === "card"}
          onClick={() => setPaymentMethod("card")}
        />
      </div>

      {paymentMethod === "card" && (
        <div className="mt-6 space-y-4">
          <InputField
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
          />

          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Expiry Date"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
            />

            <InputField
              label="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSection;
