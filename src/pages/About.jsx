import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-[#1e293b] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#FACC15] mb-6">
            Your Jersey, Your Pride
          </h2>
          <p className="text-lg text-gray-200 mb-4 leading-relaxed">
            At <strong>CricketJerseys</strong>, we bring the passion of the
            pitch to your wardrobe. From Pakistan to India, England to Australia
            — find official jerseys for your favorite teams.
          </p>
          <p className="text-gray-400 mb-6">
            PSL, IPL, BBL, World Cup kits — all under one roof. We make sure
            every cricket fan wears their pride with style and authenticity.
          </p>

          <Link
            to="/teams"
            className="inline-block bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            Browse All Teams
          </Link>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/england-jersey.png"
            alt="England Cricket Jersey"
            className="w-full h-auto object-contain max-h-[400px] rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
