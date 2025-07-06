import { Link } from "react-router-dom";
import { ShoppingCart, LogIn, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#FACC15] tracking-wide"
        >
          JerseyBazaar
        </Link>

        {/* Center: Links (hidden on small screens) */}
        <div className="hidden lg:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-[#FACC15] transition">
            Home
          </Link>
          <Link to="/teams" className="hover:text-[#FACC15] transition">
            Teams
          </Link>
          <Link to="/about" className="hover:text-[#FACC15] transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#FACC15] transition">
            Contact
          </Link>
        </div>

        {/* Right: Search + Icons */}
        <div className="hidden lg:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search shirts..."
            className="px-4 py-1 rounded-lg bg-[#1E293B] text-sm text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
          />
          <Link to="/cart">
            <ShoppingCart
              className="text-white hover:text-[#FACC15] transition"
              size={22}
            />
          </Link>
          <Link to="/login">
            <LogIn
              className="text-white hover:text-[#FACC15] transition"
              size={22}
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0F172A] px-6 pb-6 pt-4 space-y-4 border-t border-gray-700">
          <Link to="/" className="block text-white hover:text-[#FACC15]">
            Home
          </Link>
          <Link to="/teams" className="block text-white hover:text-[#FACC15]">
            Teams
          </Link>
          <Link to="/about" className="block text-white hover:text-[#FACC15]">
            About
          </Link>
          <Link to="/contact" className="block text-white hover:text-[#FACC15]">
            Contact
          </Link>
          <input
            type="text"
            placeholder="Search shirts..."
            className="w-full px-4 py-2 rounded bg-[#1E293B] text-white placeholder-gray-400 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
          />
          <div className="flex gap-4 pt-2">
            <Link to="/cart">
              <ShoppingCart
                className="text-white hover:text-[#FACC15]"
                size={22}
              />
            </Link>
            <Link to="/login">
              <LogIn className="text-white hover:text-[#FACC15]" size={22} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
