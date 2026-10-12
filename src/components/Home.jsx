function Home() {
  return (
    <section
      id="home"
      className="min-h-[600px] bg-gray-900 text-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-3xl">

        <p className="text-red-500 font-semibold mb-3">
          WELCOME TO GYMFIT
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Build Your Body.
          <br />
          Transform Your Life.
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          Track your workouts, manage your fitness journey and achieve
          your goals with GymFit.
        </p>

        <button className="bg-red-600 px-7 py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition">
          Start Your Journey
        </button>

      </div>
    </section>
  )
}

export default Home