
function Home() {
  return (
    <section
      id="home"
      className="min-h-[700px] bg-[#080808] text-white flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Neon glow */}
      <div className="absolute w-96 h-96 bg-[#FF5A00]/20 blur-[130px] rounded-full top-0 right-0"></div>
      <div className="absolute w-80 h-80 bg-[#FF5A00]/10 blur-[120px] rounded-full bottom-0 left-0"></div>

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#FF5A00 1px, transparent 1px), linear-gradient(90deg, #FF5A00 1px, transparent 1px)",
          backgroundSize: "55px 55px"
        }}
      ></div>

      <div className="text-center max-w-5xl relative z-10">

        <p className="text-[#FF6A1A] font-bold tracking-[6px] mb-6 text-sm">
          WELCOME TO GYMFIT
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-7 leading-tight">
          PUSH YOUR <span className="text-[#FF5A00]">LIMITS.</span>
          <br />
          OWN YOUR <span className="text-white">STRENGTH.</span>
        </h1>

        <div className="w-24 h-1 bg-[#FF5A00] mx-auto mb-7 shadow-[0_0_20px_#FF5A00]"></div>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Train smarter, stay consistent and transform your fitness journey
          with GYMFIT.
        </p>

        <a
          href="#workouts"
          className="inline-block bg-[#FF5A00] text-white px-10 py-4 rounded-lg font-extrabold tracking-wider hover:bg-[#FF7A24] hover:scale-105 transition duration-300 shadow-[0_0_25px_#FF5A0060]"
        >
          EXPLORE WORKOUTS →
        </a>

        <div className="flex justify-center gap-12 mt-16 flex-wrap">

          <div>
            <h3 className="text-4xl font-black text-[#FF5A00]">06+</h3>
            <p className="text-gray-500 text-sm mt-2">WORKOUT PROGRAMS</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#FF5A00]">03</h3>
            <p className="text-gray-500 text-sm mt-2">MEMBERSHIP PLANS</p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-[#FF5A00]">100%</h3>
            <p className="text-gray-500 text-sm mt-2">YOUR POTENTIAL</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Home
