// components/HeroCarousel.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/public/images/Pakistan Team-hero.jpg",
    title: "Support Pakistan in Style",
    subtitle: "Official Pakistan jerseys now available!",
  },
  {
    image: "/public/images/India Team-hero.png",
    title: "Cheer for India",
    subtitle: "Get your 2024 Indian team jersey today!",
  },
  {
    image: "/public/images/PSL-hero.png",
    title: "PSL Fever is On!",
    subtitle: "All PSL team jerseys – Limited stock!",
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-16">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.a
              href="#teams"
              className="bg-[#D43F52] hover:bg-[#b72c40] transition px-6 py-3 rounded-full font-semibold"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Shop Now
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroCarousel;
