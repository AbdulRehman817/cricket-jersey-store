import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#0F172A] text-white border-t border-gray-700 pt-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto gap-[40px]  grid grid-cols-3 sm:grid-cols-2 sm:relative sm:my-auto lg:grid-cols-4 gap-10 pb-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold text-[#FACC15] mb-4">
            CricketJerseys
          </h3>
          <p className="text-sm text-gray-400">
            Your one-stop shop for international & league cricket jerseys.
            Trusted & 100% authentic gear.
          </p>
        </div>

        {/* Quick Links */}
        <div className=" pl-[35px]">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#FACC15]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/teams" className="hover:text-[#FACC15]">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-[#FACC15]">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-[#FACC15]">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-[#FACC15]">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FACC15]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FACC15]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#FACC15]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex items-center gap-4 text-[#FACC15]">
            <a href="#">
              <Facebook className="hover:scale-110 transition" />
            </a>
            <a href="#">
              <Twitter className="hover:scale-110 transition" />
            </a>
            <a href="#">
              <Instagram className="hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 py-4">
        &copy; {new Date().getFullYear()} CricketJerseys. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
