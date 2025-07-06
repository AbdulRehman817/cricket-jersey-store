// components/TrendingNow.jsx
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const trending = products.filter((p) => p.featured).slice(0, 6);

const TrendingNow = () => {
  return (
    <section className="bg-[#0c0c0c] py-10 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        🔥 Trending Now
      </h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {trending.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="min-w-[220px] bg-slate-800 rounded-xl overflow-hidden shadow-md"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-[#D43F52] text-sm mt-1">Rs {item.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;
