import JerseyCard from "../components/JerseyCard";

export default function Shop() {
  const allJerseys = [
    { name: "Pakistan", image: "/images/pakistan-jersey.png" },
    { name: "India", image: "/images/india-jersey.jpg" },
    { name: "Australia", image: "/images/australia-jersey.jpg" },
    { name: "England", image: "/images/england-jersey.png" },
  ];

  return (
    <div className="bg-[#0F172A] text-white min-h-screen py-16 px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-14">
        All <span className="text-[#3B82F6]">Jerseys</span>
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
        {allJerseys.map((jersey, index) => (
          <JerseyCard key={index} jersey={jersey} />
        ))}
      </div>
    </div>
  );
}
