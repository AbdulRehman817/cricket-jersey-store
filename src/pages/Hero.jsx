import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import TopLeagues from "./TopLeagues";
import About from "./About";
import "./hero.css";

const slides = [
  {
    title: "PSL 2024 Jerseys",
    desc: "Support your team in official PSL kits. Limited edition drops!",
    img: "/images/Pakistan-Cricket/PSL-hero.png",
    link: "/teams",
    tag: "🔥 Trending Now",
  },
  {
    title: "IPL 2024 Jerseys",
    desc: "Cheer for your squad in exclusive IPL designs.",
    img: "/images/IPL-hero.png",
    link: "/teams",
    tag: "🏏 Hot Drop",
  },
  {
    title: "BBL 2024 Jerseys",
    desc: "Rep your Big Bash League favorites in style.",
    img: "/images/Australia-Cricket/BBL-hero.png",
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
      <section className="hero-section">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-text"
          >
            <span className="hero-tag">{slide.tag}</span>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-desc">{slide.desc}</p>
            <Link to={slide.link} className="hero-btn">
              Shop Now
            </Link>
          </motion.div>
        </div>

        <div className="arrow left" onClick={prev}>
          <ArrowLeft className="arrow-icon" />
        </div>
        <div className="arrow right" onClick={next}>
          <ArrowRight className="arrow-icon" />
        </div>

        <div className="bottom-fade" />
      </section>

      <TopLeagues />
      <About />
    </>
  );
};

export default Hero;
