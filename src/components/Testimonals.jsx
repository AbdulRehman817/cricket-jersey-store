import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed",
    quote: "Loved the quality and fast delivery!",
  },
  {
    name: "Sana",
    quote: "The jersey fit perfectly and arrived on time.",
  },
  {
    name: "Bilal",
    quote: "Amazing service and top-notch products!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0D1117] py-20 px-4 text-gray-400">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          What <span className="text-[#00FF95]">Fans</span> Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#161B22] p-8 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">
                <FaQuoteLeft size={24} className="text-[#00FF95]" />
              </div>
              <p className="italic text-gray-300 mb-4">"{t.quote}"</p>
              <p className="font-semibold text-[#00FF95]">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
