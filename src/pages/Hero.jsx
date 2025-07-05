import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TopLeagues from "./TopLeagues";
import About from "./About";

const slides = [
  {
    title: "PSL 2024 Jerseys",
    desc: "Support your team in official PSL kits. Limited edition drops!",
    img: "/public/images/Pakistan-Cricket/PSL-hero.png",
    link: "/teams",
    tag: "🔥 Trending Now",
  },
  {
    title: "IPL 2024 Jerseys",
    desc: "Cheer for your squad in exclusive IPL designs.",
    img: "/public/images/IPL-hero.png",
    link: "/teams",
    tag: "🏏 Hot Drop",
  },
  {
    title: "BBL 2024 Jerseys",
    desc: "Rep your Big Bash League favorites in style.",
    img: "/public/images/Australia-Cricket/BBL-hero.png",
    link: "/teams",
    tag: "🚨 New Arrival",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const autoSlide = setInterval(next, 6000);
    return () => clearInterval(autoSlide);
  }, [index]);

  const slide = slides[index];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full h-[100vh] text-white overflow-x-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${slide.img})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 top-[20px] left-[20px] h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl relative left-[70px]
            "
          >
            <span className="inline-block px-4 py-1 text-[11px] bg-[#FACC15] text-black rounded-full mb-4 font-semibold shadow-md">
              {slide.tag}
            </span>
            <h1 className="text-[45px] md:text-6xl font-extrabold leading-tight text-[#FACC15] drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-[13px] mt-4 text-gray-300 mb-6">{slide.desc}</p>

            <Link
              to={slide.link}
              className="inline-block bg-[#FACC15] hover:bg-yellow-400 text-black font-semibold px-7 py-3 rounded-full text-[12px] shadow-md transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={prev}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            aria-label="Previous Slide"
          >
            <ArrowLeft className="text-white" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={next}
            className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            aria-label="Next Slide"
          >
            <ArrowRight className="text-white" />
          </button>
        </div>

        {/* Gradient Bottom Fade */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-20" />
      </section>

      {/* More Sections */}
      <TopLeagues />
      <About />
    </>
  );
};

export default Hero;
