
import React, { useState } from "react";

function Workouts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const categories = [
    "All", "Strength", "Cardio", "HIIT", "Yoga", "Zumba"
  ];

  const workouts = [
    {
      name: "Power Strength",
      category: "Strength",
      icon: "🏋️",
      duration: 30,
      level: "Intermediate",
      calories: 250,
      desc: "Build muscle and develop full-body strength.",
      color: "from-[#315A3A] to-[#101510]"
    },
    {
      name: "Fat Burn Cardio",
      category: "Cardio",
      icon: "🏃",
      duration: 25,
      level: "Beginner",
      calories: 220,
      desc: "Boost stamina and burn calories with fun cardio.",
      color: "from-[#557B31] to-[#182719]"
    },
    {
      name: "HIIT Explosion",
      category: "HIIT",
      icon: "🔥",
      duration: 20,
      level: "Advanced",
      calories: 300,
      desc: "High-intensity intervals to challenge your limits.",
      color: "from-[#9EFF00] to-[#244A28]"
    },
    {
      name: "Mindful Yoga",
      category: "Yoga",
      icon: "🧘",
      duration: 30,
      level: "Beginner",
      calories: 120,
      desc: "Improve flexibility, balance and inner calm.",
      color: "from-[#315A3A] to-[#101510]"
    },
    {
      name: "Dance Zumba",
      category: "Zumba",
      icon: "💃",
      duration: 45,
      level: "Intermediate",
      calories: 350,
      desc: "Dance, move and make your fitness journey fun.",
      color: "from-[#557B31] to-[#244A28]"
    },
    {
      name: "Core Crusher",
      category: "Strength",
      icon: "💪",
      duration: 15,
      level: "Advanced",
      calories: 180,
      desc: "Strengthen your core with focused exercises.",
      color: "from-[#34452C] to-[#101510]"
    }
  ];

  const filteredWorkouts = workouts.filter((workout) => {
    const matchesCategory =
      activeCategory === "All" || workout.category === activeCategory;

    const matchesLevel =
      level === "All Levels" || workout.level === level;

    const matchesSearch =
      workout.name.toLowerCase().includes(search.toLowerCase()) ||
      workout.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <section
      id="workouts"
      className="min-h-screen bg-[#101510] text-white px-5 md:px-12 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-[#9EFF00] font-bold tracking-[4px] text-sm mb-3">
            DISCOVER YOUR POTENTIAL
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Workout <span className="text-[#9EFF00]">Universe.</span>
          </h1>

          <p className="text-gray-400 max-w-xl text-lg">
            Explore workouts, challenge yourself and become stronger
            every single day.
          </p>
        </div>

        {/* Highlight banner */}
        <div className="rounded-3xl p-7 md:p-10 mb-12 bg-gradient-to-r from-[#1D2A16] via-[#244A28] to-[#101510] border border-[#9EFF00]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-[#9EFF00] font-semibold mb-2">
                YOUR FITNESS JOURNEY STARTS HERE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Find Your Next Challenge.
              </h2>
              <p className="text-gray-200">
                Choose your workout. Set your goal. Make it happen.
              </p>
            </div>

            <div className="text-7xl md:text-8xl">
              ⚡
            </div>
          </div>
        </div>

        {/* Search and difficulty */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="🔍  Search workouts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-[#1C261C] border border-[#9EFF00]/30 rounded-xl px-5 py-4 outline-none focus:border-[#9EFF00]"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-[#1C261C] border border-[#9EFF00]/30 rounded-xl px-5 py-4 outline-none text-white"
          >
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Category filters */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold transition ${
                activeCategory === category
                  ? "bg-[#9EFF00] text-black shadow-lg shadow-[#9EFF00]/20"
                  : "bg-[#202B20] text-gray-300 hover:bg-[#34452C]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Workout cards */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Explore Workouts</h2>
          <p className="text-gray-400 text-sm">
            {filteredWorkouts.length} workouts found
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredWorkouts.map((workout) => (
            <div
              key={workout.name}
              className="bg-[#1C261C] rounded-3xl overflow-hidden border border-[#9EFF00]/10 hover:border-[#9EFF00]/70 hover:-translate-y-2 transition duration-300"
            >
              <div className={`h-44 bg-gradient-to-br ${workout.color} flex items-center justify-center relative`}>
                <span className="text-8xl drop-shadow-lg">
                  {workout.icon}
                </span>
                <span className="absolute top-4 right-4 bg-black/40 px-3 py-1 rounded-full text-sm">
                  {workout.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {workout.name}
                </h3>

                <p className="text-gray-400 text-sm mb-5">
                  {workout.desc}
                </p>

                <div className="flex justify-between text-sm text-gray-300 mb-5">
                  <span>⏱ {workout.duration} min</span>
                  <span>🔥 {workout.calories} kcal*</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[#9EFF00] text-sm">
                    {workout.level}
                  </span>

                  <button
                    onClick={() => setSelectedWorkout(workout)}
                    className="bg-[#9EFF00] text-black hover:bg-white px-5 py-2 rounded-full font-semibold transition"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">🔎</p>
            <h3 className="text-xl font-bold">No workouts found</h3>
            <p>Try another search or category.</p>
          </div>
        )}

        <p className="text-gray-500 text-xs mt-6">
          *Calorie figures are approximate examples and vary by person.
        </p>

        {/* Workout details popup */}
        {selectedWorkout && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-5">
            <div className="bg-[#1C261C] border border-[#9EFF00]/40 rounded-3xl p-8 max-w-md w-full">
              <div className="text-6xl mb-4 text-center">
                {selectedWorkout.icon}
              </div>

              <h2 className="text-2xl font-bold text-center mb-3">
                {selectedWorkout.name}
              </h2>

              <p className="text-gray-300 text-center mb-6">
                {selectedWorkout.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 text-center mb-7">
                <div className="bg-[#101510] rounded-xl p-4">
                  <p className="text-[#9EFF00] text-sm">Duration</p>
                  <p className="font-bold">{selectedWorkout.duration} min</p>
                </div>

                <div className="bg-[#101510] rounded-xl p-4">
                  <p className="text-[#9EFF00] text-sm">Difficulty</p>
                  <p className="font-bold">{selectedWorkout.level}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedWorkout(null)}
                className="w-full bg-[#9EFF00] text-black hover:bg-white py-3 rounded-xl font-bold transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Workouts;
