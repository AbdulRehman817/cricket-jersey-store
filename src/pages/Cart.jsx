import { motion } from "framer-motion";
import { shirts } from "../data/shirts";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

// Dummy cart data (simulate items added to cart)
const cartItems = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

const Cart = () => {
  const items = cartItems.map((item) => {
    const product = shirts.find((shirt) => shirt.id === item.id);
    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity,
    };
  });

  const totalPrice = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white px-6 py-[100px]">
      <motion.h2
        className="text-3xl font-bold text-[#FACC15] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Shopping Cart
      </motion.h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#1E293B] rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center gap-6"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-28 h-28 object-contain bg-white p-2 rounded-lg"
              />

              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-semibold text-[#FACC15]">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.type}</p>
                <div className="flex items-center gap-2 text-sm mt-2">
                  Quantity:
                  <span className="bg-[#FACC15] text-black font-semibold px-2 py-1 rounded">
                    {item.quantity}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-green-500 text-lg font-bold">
                  ${item.total.toFixed(2)}
                </p>
                <button className="text-red-500 hover:text-red-600 mt-3 flex items-center gap-1 text-sm">
                  <Trash2 size={16} /> Remove
                </button>
              </div>
            </motion.div>
          ))}

          {/* Cart Summary */}
          <div className="text-right pt-6 border-t border-gray-700 mt-10">
            <p className="text-lg font-semibold text-[#FACC15]">
              Subtotal: ${totalPrice.toFixed(2)}
            </p>
            <Link
              to="/checkout"
              className="inline-block mt-4 bg-[#FACC15] hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Proceed to Shipping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
