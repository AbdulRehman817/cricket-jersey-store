const Filters = ({ setFilter }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <button
        onClick={() => setFilter("all")}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
      >
        All
      </button>
      <button
        onClick={() => setFilter("bestseller")}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
      >
        Best Sellers
      </button>
      <button
        onClick={() => setFilter("worldcup")}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
      >
        World Cup
      </button>
      <button
        onClick={() => setFilter("ipl")}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
      >
        IPL
      </button>
      <button
        onClick={() => setFilter("psl")}
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-sm rounded"
      >
        PSL
      </button>
    </div>
  );
};

export default Filters;
