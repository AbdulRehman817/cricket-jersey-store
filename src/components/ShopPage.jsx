import { useState } from "react";

const allProducts = [
  {
    id: 1,
    name: "Pakistan Jersey",
    team: "Pakistan",
    price: 35,
    image: "/public/images/pakistan-jersey.png",
  },
  {
    id: 2,
    name: "India Jersey",
    team: "India",
    price: 32,
    image: "/public/images/india-jersey.jpg",
  },
  {
    id: 3,
    name: "Australia Jersey",
    team: "Australia",
    price: 30,
    image: "/public/images/australia-jersey.jpg",
  },
  {
    id: 4,
    name: "England Jersey",
    team: "England",
    price: 28,
    image: "/public/images/england-jersey.png",
  },
];

const teams = ["Pakistan", "India", "Australia", "England"];

export default function ShopPage() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [maxPrice, setMaxPrice] = useState(50);

  const filtered = allProducts.filter((p) => {
    return (
      (selectedTeam === "" || p.team === selectedTeam) && p.price <= maxPrice
    );
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-white py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-14">
        Shop <span className="text-[#00FF95]">Jerseys</span>
      </h1>

      <div className="grid md:grid-cols-4 gap-10 max-w-screen-xl mx-auto">
        {/* Sidebar Filters */}
        <div className="bg-[#1F2937] p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-5">Team Filter</h2>
          <div className="space-y-2 mb-6">
            <button
              onClick={() => setSelectedTeam("")}
              className={`w-full text-left px-3 py-2 rounded-lg transition ${
                selectedTeam === ""
                  ? "bg-[#00FF95] text-black font-bold"
                  : "hover:bg-[#2C3346] text-gray-300"
              }`}
            >
              All
            </button>
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setSelectedTeam(team)}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${
                  selectedTeam === team
                    ? "bg-[#00FF95] text-black font-bold"
                    : "hover:bg-[#2C3346] text-gray-300"
                }`}
              >
                {team}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-2">
            Max Price:{" "}
            <span className="text-[#00FF95] font-bold">${maxPrice}</span>
          </h2>
          <input
            type="range"
            min="20"
            max="50"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#00FF95] mt-2"
          />
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <div
                key={product.id}
                className="bg-[#1F2937] rounded-xl overflow-hidden shadow hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-56 w-full object-contain bg-white p-4"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                  <p className="text-[#00FF95] font-bold mb-4">
                    ${product.price}
                  </p>
                  <button className="bg-[#00FF95] hover:bg-[#00E68A] text-black px-5 py-2 rounded-lg font-semibold transition">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No products found for selected filters.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
