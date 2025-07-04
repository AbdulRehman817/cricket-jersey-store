import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex items-center justify-center px-6 py-16 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-5xl bg-[#1E293B] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#334155]">
        {/* Left Section - Info Panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#0F172A] w-1/2 p-10">
          <h2 className="text-3xl font-bold text-[#FACC15] mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-400 text-center">
            Sign up to get access to exclusive offers, new arrivals, and updates
            on your favorite styles.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 bg-[#1E293B] p-8 md:p-10">
          <h3 className="text-2xl font-bold text-[#FACC15] mb-6 text-center">
            Create Your Account
          </h3>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#0F172A] border border-gray-600 px-4 py-2 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#E11D48] hover:bg-pink-600 transition text-white py-2 rounded-lg font-semibold"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FACC15] font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
