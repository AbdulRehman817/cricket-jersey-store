// pages/TeamPage.jsx
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard"; // Create this component for reusable product cards

const TeamPage = () => {
  const { teamName } = useParams();
  const teamProducts = products.filter(
    (p) => p.team.toLowerCase() === teamName.toLowerCase()
  );

  const [filter, setFilter] = useState({
    color: "",
    minPrice: "",
    maxPrice: "",
  });

  const filteredProducts = teamProducts.filter((product) => {
    const matchesColor = filter.color ? product.color === filter.color : true;
    const matchesMin = filter.minPrice
      ? product.price >= Number(filter.minPrice)
      : true;
    const matchesMax = filter.maxPrice
      ? product.price <= Number(filter.maxPrice)
      : true;
    return matchesColor && matchesMin && matchesMax;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">{teamName} Jerseys</h1>

      {/* Filter Controls */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          value={filter.color}
          onChange={(e) => setFilter({ ...filter, color: e.target.value })}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">All Colors</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>

        <input
          type="number"
          placeholder="Min Price"
          className="border px-4 py-2 rounded-md"
          value={filter.minPrice}
          onChange={(e) => setFilter({ ...filter, minPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="border px-4 py-2 rounded-md"
          value={filter.maxPrice}
          onChange={(e) => setFilter({ ...filter, maxPrice: e.target.value })}
        />
      </div>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <motion.div key={product.id} whileHover={{ scale: 1.03 }}>
              <ProductCard product={product} />
            </motion.div>
          ))
        ) : (
          <p>No jerseys match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default TeamPage;
