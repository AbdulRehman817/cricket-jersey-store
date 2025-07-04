import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Pakistan World Cup Jersey 2023",
    price: "$35",
    image: "/public/images/pakistan-jersey.png",
  },
  {
    id: 2,
    name: "India T20 Jersey",
    price: "$32",
    image: "/public/images/india-jersey.png",
  },
  {
    id: 3,
    name: "Australia ODI Jersey",
    price: "$30",
    image: "/public/images/australia-jersey.png",
  },
  {
    id: 4,
    name: "England Test Jersey",
    price: "$28",
    image: "/public/images/england-jersey.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#111827] py-20 px-6 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured <span className="text-[#3B82F6]">Jerseys</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#1F2937] rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-contain bg-white p-5 rounded-t-xl"
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <p className="text-[#3B82F6] font-bold text-lg mb-4">
                  {product.price}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium px-6 py-2 rounded-full transition duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
