import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate(); // ✅ Correct hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    navigate("/orderconfirmation"); // ✅ Redirect to confirmation page
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-12 mt-[60px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto bg-[#1E293B] p-8 rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-[#FACC15] text-center mb-8">
          Shipping Details
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit} // ✅ Form submission handler
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+92 300 1234567"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">City</label>
            <input
              type="text"
              placeholder="Lahore"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-1 text-gray-300">Address</label>
            <input
              type="text"
              placeholder="Street, Area, House No"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Country</label>
            <input
              type="text"
              placeholder="Pakistan"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">Zip Code</label>
            <input
              type="text"
              placeholder="54000"
              className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center pt-4">
            <button
              type="submit"
              className="bg-[#FACC15] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Checkout;
