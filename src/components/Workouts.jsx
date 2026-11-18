
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
      desc: "Build muscle and develop full-body strength."
    },
    {
      name: "Fat Burn Cardio",
      category: "Cardio",
      icon: "🏃",
      duration: 25,
      level: "Beginner",
      calories: 220,
      desc: "Boost stamina and burn calories with fun cardio."
    },
    {
      name: "HIIT Explosion",
      category: "HIIT",
      icon: "🔥",
      duration: 20,
      level: "Advanced",
      calories: 300,
      desc: "High-intensity intervals to challenge your limits."
    },
    {
      name: "Mindful Yoga",
      category: "Yoga",
      icon: "🧘",
      duration: 30,
      level: "Beginner",
      calories: 120,
      desc: "Improve flexibility, balance and inner calm."
    },
    {
      name: "Dance Zumba",
      category: "Zumba",
      icon: "💃",
      duration: 45,
      level: "Intermediate",
      calories: 350,
      desc: "Dance, move and make your fitness journey fun."
    },
    {
      name: "Core Crusher",
      category: "Strength",
      icon: "💪",
      duration: 15,
      level: "Advanced",
      calories: 180,
      desc: "Strengthen your core with focused exercises."
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
      className="min-h-screen bg-[#080808] text-white px-5 md:px-12 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-10">
          <p className="text-[#FF6A1A] font-bold tracking-[4px] text-sm mb-3">
            DISCOVER YOUR POTENTIAL
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-4">
            Workout <span className="text-[#FF5A00] drop-shadow-[0_0_12px_#FF5A0060]">Universe.</span>
          </h1>

          <p className="text-gray-400 max-w-xl text-lg">
            Explore workouts, challenge yourself and become stronger
            every single day.
          </p>
        </div>

        {/* FEATURE BANNER */}
        <div className="rounded-3xl p-7 md:p-10 mb-12 bg-gradient-to-r from-[#171717] via-[#211008] to-[#080808] border border-[#FF5A00]/50 shadow-[0_0_25px_#FF5A0018] relative overflow-hidden">
          <div className="absolute w-64 h-64 bg-[#FF5A00]/20 blur-[100px] rounded-full right-0 top-0"></div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-[#FF8A24] font-bold tracking-wider mb-2">
                YOUR FITNESS JOURNEY STARTS HERE
              </p>

              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Find Your Next Challenge.
              </h2>

              <p className="text-gray-300">
                Choose your workout. Set your goal. Make it happen.
              </p>
            </div>

            <div className="text-7xl md:text-8xl drop-shadow-[0_0_20px_#FF5A00]">
              ⚡
            </div>
          </div>
        </div>

        {/* SEARCH AND LEVEL FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="🔍  Search workouts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-[#151515] border border-[#333333] rounded-xl px-5 py-4 text-white outline-none focus:border-[#FF5A00] focus:ring-2 focus:ring-[#FF5A00]/20 transition"
          />

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="bg-[#151515] border border-[#333333] rounded-xl px-5 py-4 text-white outline-none focus:border-[#FF5A00]"
          >
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full whitespace-nowrap font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#FF5A00] text-white shadow-[0_0_18px_#FF5A0060]"
                  : "bg-[#151515] text-gray-300 border border-[#333333] hover:border-[#FF5A00] hover:text-[#FF7A24]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* WORKOUT COUNT */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-black">
            Explore <span className="text-[#FF5A00]">Workouts</span>
          </h2>

          <p className="text-gray-400 text-sm">
            {filteredWorkouts.length} workouts found
          </p>
        </div>

        {/* WORKOUT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredWorkouts.map((workout) => (
            <div
              key={workout.name}
              className="bg-[#121212] rounded-3xl overflow-hidden border border-[#292929] hover:border-[#FF5A00] hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_#FF5A0025]"
            >
              <div className="h-44 bg-gradient-to-br from-[#FF5A00] via-[#852D09] to-[#101010] flex items-center justify-center relative">
                <span className="text-8xl drop-shadow-lg">
                  {workout.icon}
                </span>

                <span className="absolute top-4 right-4 bg-black/70 border border-[#FF8A24]/40 px-3 py-1 rounded-full text-sm text-white">
                  {workout.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black mb-2">
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
                  <span className="text-[#FF8A24] text-sm font-semibold">
                    {workout.level}
                  </span>

                  <button
                    onClick={() => setSelectedWorkout(workout)}
                    className="bg-[#FF5A00] text-white hover:bg-[#FF7A24] px-5 py-2 rounded-full font-bold transition-all shadow-[0_0_12px_#FF5A0030] hover:shadow-[0_0_18px_#FF5A0080]"
                  >
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NO RESULTS */}
        {filteredWorkouts.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-5xl mb-4">🔎</p>
            <h3 className="text-xl font-bold text-white">
              No workouts found
            </h3>
            <p>Try another search or category.</p>
          </div>
        )}

        <p className="text-gray-500 text-xs mt-6">
          *Calorie figures are approximate examples and vary by person.
        </p>

        {/* WORKOUT DETAILS POPUP */}
        {selectedWorkout && (
          <div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-5"
            onClick={() => setSelectedWorkout(null)}
          >
            <div
              className="bg-[#151515] border border-[#FF5A00]/60 rounded-3xl p-8 max-w-md w-full shadow-[0_0_35px_#FF5A0030]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-6xl mb-4 text-center">
                {selectedWorkout.icon}
              </div>

              <p className="text-[#FF8A24] text-center text-sm font-bold tracking-widest mb-2">
                {selectedWorkout.category.toUpperCase()}
              </p>

              <h2 className="text-2xl font-black text-center mb-3">
                {selectedWorkout.name}
              </h2>

              <p className="text-gray-300 text-center mb-6">
                {selectedWorkout.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 text-center mb-7">
                <div className="bg-[#080808] border border-[#292929] rounded-xl p-4">
                  <p className="text-[#FF7A24] text-sm">Duration</p>
                  <p className="font-bold">{selectedWorkout.duration} min</p>
                </div>

                <div className="bg-[#080808] border border-[#292929] rounded-xl p-4">
                  <p className="text-[#FF7A24] text-sm">Difficulty</p>
                  <p className="font-bold">{selectedWorkout.level}</p>
                </div>
              </div>

              <button
                onClick={() => setSelectedWorkout(null)}
                className="w-full bg-[#FF5A00] text-white hover:bg-[#FF7A24] py-3 rounded-xl font-bold transition shadow-[0_0_15px_#FF5A0040]"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Workouts;
