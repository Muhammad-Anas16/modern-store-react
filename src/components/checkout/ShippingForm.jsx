import { FaTruck } from "react-icons/fa";
import InputField from "./InputField";

const ShippingForm = ({ formData, handleChange }) => {
  return (
    <div className="px-6 py-6 bg-white mt-4 rounded-t-3xl">
      <div className="flex items-center gap-3 mb-6">
        <FaTruck className="text-blue-600 text-lg" />
        <h3 className="text-xl font-semibold">Shipping Address</h3>
      </div>

      <div className="space-y-4">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          type="email"
        />

        <InputField
          label="Street Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />

          <InputField
            label="Zip Code"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            placeholder="Zip Code"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
