import { FaCheckCircle, FaTruck, FaMoneyBillWave } from "react-icons/fa";

const features = [
  {
    icon: <FaCheckCircle size={32} className="text-[#00FF95]" />,
    title: "100% Original",
    desc: "Authentic jerseys officially licensed. Quality guaranteed.",
  },
  {
    icon: <FaTruck size={32} className="text-[#00FF95]" />,
    title: "Fast Delivery",
    desc: "Get your gear in 2–4 working days, nationwide.",
  },
  {
    icon: <FaMoneyBillWave size={32} className="text-[#00FF95]" />,
    title: "Cash on Delivery",
    desc: "Pay only when it arrives at your doorstep.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#0D1117] py-20 px-4 text-[#F3F4F6]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Why Shop with <span className="text-[#00FF95]">CricketX</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#161B22] p-8 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="mb-4 flex justify-center">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {f.title}
              </h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
