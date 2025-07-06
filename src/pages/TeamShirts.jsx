import { useParams } from "react-router-dom";
import { shirts } from "../data/shirts";
import { useState } from "react";
import ShirtCard from "../components/ShirtCard";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

const TeamShirts = () => {
  const { teamName } = useParams();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredShirts = shirts.filter((shirt) => {
    if (shirt.team !== teamName) return false;

    const matchesFilter =
      filter === "all" ||
      (filter === "bestseller" && shirt.bestseller) ||
      (shirt.type &&
        shirt.type
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(filter.toLowerCase().replace(/\s/g, "")));

    const matchesSearch = shirt.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 p-6 bg-[#1E293B] space-y-10 border-r border-gray-700">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold text-[#FACC15] flex items-center gap-2 mb-4">
            <Filter size={18} /> Filters
          </h2>
          <div className="flex flex-col gap-3 mt-[40px]">
            {["all", "bestseller", "worldcup"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 ${
                  filter === f
                    ? "bg-[#FACC15] text-black shadow"
                    : "bg-[#334155] hover:bg-[#475569] text-white"
                }`}
              >
                {f === "all"
                  ? "All Jerseys"
                  : f === "bestseller"
                  ? "Best Sellers"
                  : "World Cup"}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium mb-2">
            Search Jerseys
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-[#0F172A] border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              placeholder="Search by name..."
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </motion.div>
      </aside>

      {/* Product Grid Section */}
      <main className="flex-1 px-6 py-[90px]">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FACC15] uppercase drop-shadow-md">
            {teamName} Jerseys
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            {filteredShirts.length} results · Official 2024 Kits
          </p>
        </motion.div>

        {/* Product Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {filteredShirts.length > 0 ? (
            filteredShirts.map((shirt, i) => (
              <motion.div
                key={shirt.id || i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <ShirtCard shirt={shirt} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 text-lg mt-10">
              🛒 No jerseys found for "{searchTerm || filter}"
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default TeamShirts;
