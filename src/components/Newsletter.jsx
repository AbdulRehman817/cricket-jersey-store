export function Newsletter() {
  return (
    <section className="bg-[#0d0f12] py-20 px-4 text-gray-400">
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Join Our <span className="text-[#00FF95]">Newsletter</span>
        </h2>
        <p className="mb-8 text-lg text-gray-400">
          Be the first to know about exclusive drops, discounts, and team gear.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 bg-[#161B22] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#00FF95] hover:bg-[#00e285] text-black font-semibold rounded-lg transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
