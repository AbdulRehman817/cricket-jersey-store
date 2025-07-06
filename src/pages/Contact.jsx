export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E293B] py-20 px-6 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-[#1E293B] border border-[#334155] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Info Panel */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#0F172A] w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-[#FACC15] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-center">
            We'd love to hear from you! Send us your message and we’ll respond
            as soon as possible.
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2 bg-[#1E293B] p-8 md:p-10 text-white">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Contact <span className="text-[#facc15]">CricketX</span>
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-300">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-[#0F172A] border border-gray-600 px-4 py-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#0F172A] border border-gray-600 px-4 py-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full bg-[#0F172A] border border-gray-600 px-4 py-3 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#facc15] hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
            >
              📩 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
