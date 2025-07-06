import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const leagues = [
  {
    name: "Pakistan Super League",
    short: "PSL",
    image: "/images/Pakistan-Cricket/Islamabad-United-Home-Jersey.png",
    link: "/teams/PSL",
    desc: "Official jerseys of all PSL teams — Islamabad, Karachi, Lahore, and more.",
  },
  {
    name: "Indian Premier League",
    short: "IPL",
    image: "/images/CSK-jersey.png",
    link: "/teams/IPL",
    desc: "Support your IPL team with authentic jerseys from 2024 season.",
  },
  {
    name: "Big Bash League",
    short: "BBL",
    image: "/images/Australia-Cricket/Melbourne-Stars-jersey.png",
    link: "/teams/BBL",
    desc: "From Sydney to Melbourne — get your favorite BBL kits now.",
  },
];

const TopLeagues = () => {
  return (
    <section className="bg-[#0F172A] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FACC15]">
          Explore Cricket Leagues
        </h2>
        <p className="text-gray-400 mt-3 text-lg max-w-xl mx-auto">
          Shop official jerseys and exclusive team kits from the most iconic
          leagues.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {leagues.map((league, index) => (
          <motion.div
            key={league.short}
            className="bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-white p-4">
              <img
                src={league.image}
                alt={league.short}
                className="w-full h-52 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-[#FACC15]">
                {league.name}
              </h3>
              <p className="text-gray-300 text-sm mt-3">{league.desc}</p>
              <Link
                to={league.link}
                className="inline-block mt-5 bg-[#FACC15] text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
              >
                Explore {league.short}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopLeagues;
