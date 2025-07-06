import { Link } from "react-router-dom";

const categories = [
  {
    name: "Pakistan",
    image: "/images/pakistan-jersey.png",
    link: "/teams/pakistan",
  },
  {
    name: "India",
    image: "/public/images/india-jersey.jpg",
    link: "/teams/india",
  },
  {
    name: "Australia",
    image: "/public/images/australia_jersey.jpg",
    link: "/teams/australia",
  },
  {
    name: "England",
    image: "/public/images/england-jersey.png",
    link: "/teams/england",
  },
  {
    name: "South Africa",
    image: "/public/images/africa-jersey.jpg",
    link: "/teams/south-africa",
  },
  {
    name: "New Zealand",
    image: "/public/images/newzeland-jersey.png",
    link: "/teams/new-zealand",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 px-6 bg-[#0D0F12] text-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-tight">
          Shop by <span className="text-[#00FF95]">Team</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((team) => (
            <Link
              to={team.link}
              key={team.name}
              className="group bg-[#1A1C22] border border-gray-800 rounded-2xl shadow-lg hover:shadow-xl hover:border-[#00FF95] transition-transform transform hover:scale-105 duration-300 text-center overflow-hidden"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-full h-40 object-contain bg-white p-3 rounded-t-xl"
              />
              <div className="py-4">
                <h3 className="text-lg font-semibold group-hover:text-[#00FF95] transition">
                  {team.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
