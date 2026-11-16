
function Home() {
  return (
    <section
      id="home"
      className="min-h-[650px] bg-[#101510] text-white flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="absolute w-80 h-80 bg-[#9EFF00]/10 blur-3xl rounded-full top-10 right-10"></div>

      <div className="text-center max-w-4xl relative z-10">

        <p className="text-[#9EFF00] font-bold tracking-[5px] mb-5">
          WELCOME TO GYMFIT
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          PUSH YOUR <span className="text-[#9EFF00]">LIMITS.</span>
          <br />
          OWN YOUR <span className="text-[#9EFF00]">STRENGTH.</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-9 max-w-2xl mx-auto">
          Train smarter, stay consistent and transform your fitness journey
          with GYMFIT.
        </p>

        <a
          href="#workouts"
          className="inline-block bg-[#9EFF00] text-black px-9 py-4 rounded-xl font-extrabold hover:bg-[#b5ff4d] hover:scale-105 transition"
        >
          EXPLORE WORKOUTS →
        </a>

        <div className="flex justify-center gap-10 mt-14 flex-wrap">
          <div>
            <h3 className="text-3xl font-bold text-[#9EFF00]">06+</h3>
            <p className="text-gray-400 text-sm">Workout Programs</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#9EFF00]">03</h3>
            <p className="text-gray-400 text-sm">Membership Plans</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#9EFF00]">100%</h3>
            <p className="text-gray-400 text-sm">Your Potential</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
