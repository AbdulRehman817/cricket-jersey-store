export default function Contact() {
  return (
    <section className="bg-[#0F172A] min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto bg-[#1F2937] p-10 rounded-xl shadow-xl text-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Contact <span className="text-[#3B82F6]">CricketX</span>
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-400">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-[#111827] border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-[#111827] border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full bg-[#111827] border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-lg transition"
          >
            📩 Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
