import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const OrderConfirmation = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] flex flex-col items-center justify-center px-6 py-20 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Confirmation Message */}
      <div className="text-center mb-12">
        <CheckCircle size={50} className="mx-auto text-[#FACC15]" />
        <h1 className="text-3xl md:text-4xl font-bold mt-4 text-[#FACC15]">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-300 mt-2">
          Your order will arrive within <strong>2–3 business days</strong>.
        </p>
      </div>

      {/* Car Animation */}
      <div className="relative w-full max-w-4xl h-40 mt-6 overflow-hidden">
        {/* Yellow Road Line */}
        <div className="absolute bottom-4 left-0 right-0 h-2 bg-[#FACC15] rounded-full blur-sm" />

        {/* Motion wrapper around the car animation */}
        <motion.div
          className="absolute bottom-6 w-40 h-auto"
          initial={{ x: "-100%" }}
          animate={{ x: "532%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <DotLottieReact
            src="https://lottie.host/6f821f13-7fc7-46d6-a5eb-c477ea2f5ccc/zY9kyDBxGK.json"
            loop
            autoplay
          />
        </motion.div>
      </div>

      {/* Continue Shopping */}
      <Link
        to="/"
        className="mt-12 inline-block bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
      >
        Continue Shopping
      </Link>
    </motion.div>
  );
};

export default OrderConfirmation;
