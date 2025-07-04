import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Pakistan World Cup Jersey 2024",
    image: "/images/Pakistan Cricket/pakistan-jersey.png",
    price: "Rs. 2,999",
    tag: "World Cup",
    link: "/product/pakistan-world-cup-jersey",
  },
  {
    id: 2,
    name: "India T20 Jersey 2024",
    image: "/images/india-jersey.jpg",
    price: "Rs. 3,200",
    tag: "T20",
    link: "/product/india-t20-jersey",
  },
  {
    id: 3,
    name: "Australia ODI Jersey",
    image: "/images/Australia Cricket/australia_jersey.jpg",
    price: "Rs. 3,500",
    tag: "ODI",
    link: "/product/australia-odi-jersey",
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-[#0F172A] text-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC15] mb-10 text-center">
          Featured Jerseys
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain bg-gray-100 p-4"
              />

              <div className="p-5 text-black">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm px-2 py-1 bg-[#FACC15] text-black rounded-full font-semibold">
                    {product.tag}
                  </span>
                  <span className="text-lg font-bold">{product.price}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>

                <Link
                  to={product.link}
                  className="inline-block w-full text-center bg-[#FACC15] text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
