// src/pages/Home.jsx
import React from "react";
import HeroBanner from "./Hero";
import TrendingNow from "../components/TrendingNow";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const teams = [
  { name: "Pakistan", image: "/images/pakistan-jersey.png" },
  { name: "India", image: "/images/india-jersey.jpg" },
  { name: "Australia", image: "/images/australia_jersey.jpg" },
  { name: "England", image: "/images/england-jersey.png" },
  { name: "PSL", image: "/images/PSL-hero.png" },
  { name: "IPL", image: "/images/IPL-hero.png" },
  { name: "BBL", image: "/images/BBL-hero.png" },
];

const Home = () => {
  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen">
      <HeroBanner />
      <TrendingNow />

      {/* Shop By Team Section */}
      <section className="py-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#D43F52]">
          🏏 Shop by Team
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teams.map((team) => (
            <motion.div
              key={team.name}
              whileHover={{ scale: 1.05 }}
              className="relative group rounded-xl overflow-hidden shadow-md border border-slate-800 bg-gradient-to-br from-[#1a1a1a] to-[#111]"
            >
              <Link to={`/team/${team.name}`}>
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center">
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    {team.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
