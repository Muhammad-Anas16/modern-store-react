const PaymentOption = ({ title, description, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition ${
        active ? "border-blue-600 bg-blue-50" : "border-gray-200"
      }`}
    >
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
          active ? "border-blue-600" : "border-gray-400"
        }`}
      >
        {active && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
      </div>
    </div>
  );
};

export default PaymentOption;
