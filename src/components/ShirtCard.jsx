import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ShirtCard = ({ shirt }) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg bg-[#0F172A] hover:shadow-2xl transition-transform duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/product/${shirt.id}`}>
        {/* Image Section */}
        <div className="relative bg-[#F1F5F9] p-4 h-60 flex items-center justify-center">
          <img
            src={shirt.image}
            alt={shirt.title}
            className="max-h-full object-contain"
          />

          {/* Tag */}
          {shirt.bestseller && (
            <span className="absolute top-3 left-3 bg-[#FACC15] text-black text-[11px] font-semibold px-3 py-1 rounded-full shadow">
              🔥 Bestseller
            </span>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-[#1E293B] text-white p-4 space-y-2">
          <h3 className="text-lg font-bold text-[#FACC15] line-clamp-2">
            {shirt.title}
          </h3>
          <p className="text-sm text-gray-300 capitalize">{shirt.type}</p>

          <div className="flex justify-between items-center pt-2">
            <p className="text-xl font-bold text-white">${shirt.price}</p>

            {/* Optional: Rating */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ShirtCard;
