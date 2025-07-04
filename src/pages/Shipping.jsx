// pages/Shipping.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const Shipping = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
    // Here, integrate your backend shipping/order logic
  };

  return (
    <motion.div
      className="max-w-xl mx-auto px-6 py-10 bg-white rounded-lg shadow-md"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Shipping Details</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Address</label>
          <input
            type="text"
            name="address"
            required
            value={form.address}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block font-semibold mb-1">City</label>
            <input
              type="text"
              name="city"
              required
              value={form.city}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <label className="block font-semibold mb-1">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              required
              value={form.postalCode}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Phone Number</label>
          <input
            type="text"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#006400] text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </form>
    </motion.div>
  );
};

export default Shipping;
