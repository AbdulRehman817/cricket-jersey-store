import { useParams } from "react-router-dom";
import { shirts } from "../data/shirts";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CheckCircle,
  Star,
  ZoomIn,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const Buynow = (e) => {
    e.preventDefault();
    navigate("/CheckoutPage");
  };
  const Addtocart = (e) => {
    e.preventDefault();
    navigate("/cart");
  };
  const { id } = useParams();
  const shirt = shirts.find((s) => s.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!shirt) {
    return (
      <div className="p-10 text-center text-gray-400 bg-[#0F172A] min-h-screen">
        🛒 Jersey not found.
      </div>
    );
  }

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-4 py-16 flex flex-col lg:flex-row items-start gap-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left - Image with Zoom Hover */}
      <div className="w-full lg:w-1/2 flex justify-center relative group mt-[40px]">
        <img
          src={shirt.image}
          alt={shirt.title}
          className="w-full max-w-md rounded-xl shadow-2xl object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Right - Info */}
      <div className="w-full lg:w-1/2 space-y-6 mt-[40px]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FACC15] relative right-[2px] drop-shadow">
          {shirt.title}
        </h1>
        <p className="text-sm text-gray-300 uppercase tracking-wide">
          {shirt.type}
        </p>
        <p className="text-2xl text-green-500 font-bold">
          ${shirt.price.toFixed(2)}
        </p>

        <p className="text-gray-200 leading-relaxed">
          {shirt.description ||
            "This premium jersey is crafted for true cricket fans. Lightweight, breathable, and designed with official team colors—perfect for game days or casual wear."}
        </p>

        {/* Size Selector */}
        <div className="space-y-2 mt-[2px]">
          <label className="text-sm font-semibold ">Choose Size:</label>
          <div className="flex gap-2 mt-[5px] relative left-[1px]">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="px-3 py-1 border border-white text-white rounded hover:bg-white hover:text-black transition text-sm"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold">Quantity:</label>
          <div className="flex items-center border border-gray-500 rounded overflow-hidden">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 hover:bg-[#FACC15] hover:text-black transition"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 py-1 text-sm">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 hover:bg-[#FACC15] hover:text-black transition"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={Buynow}
            className="flex items-center gap-2 justify-center bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            <CheckCircle size={18} /> Buy Now
          </button>
          <button
            onClick={Addtocart}
            className="flex items-center gap-2 justify-center border border-[#FACC15] text-[#FACC15] px-6 py-3 rounded-full hover:bg-[#FACC15] hover:text-black transition"
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          ✔ 100% Original • 🚚 Fast Delivery • 🔐 Secure Checkout
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
