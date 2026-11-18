
import { useState } from "react"

function DietPlanner() {
  const [water, setWater] = useState(0)

  const meals = [
    {
      name: "Breakfast",
      time: "8:00 AM",
      food: "Oats, banana and boiled eggs",
      icon: "🍳"
    },
    {
      name: "Lunch",
      time: "1:00 PM",
      food: "Roti, dal, rice and salad",
      icon: "🥗"
    },
    {
      name: "Evening Snack",
      time: "5:00 PM",
      food: "Fruit bowl and handful of nuts",
      icon: "🍎"
    },
    {
      name: "Dinner",
      time: "8:00 PM",
      food: "Paneer, vegetables and roti",
      icon: "🍽️"
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#FF5A00] font-bold tracking-[4px]">
            EAT HEALTHY
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Diet & <span className="text-[#FF5A00]">Nutrition.</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Fuel your body with healthy food choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* Daily Meal Plan */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-[#333333] hover:border-[#FF5A00]/60 transition">
            <h3 className="text-2xl font-bold mb-6">
              Your Daily Meal Plan
            </h3>

            <div className="space-y-5">
              {meals.map((meal, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-[#080808] border border-[#292929] p-4 rounded-xl hover:border-[#FF5A00]/50 transition"
                >
                  <div className="text-3xl">{meal.icon}</div>

                  <div className="flex-1">
                    <h4 className="font-bold">{meal.name}</h4>
                    <p className="text-gray-400 text-sm">{meal.food}</p>
                  </div>

                  <span className="text-[#FF5A00] text-sm font-semibold">
                    {meal.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-7">

            {/* Water Tracker */}
            <div className="bg-[#151515] p-8 rounded-2xl border border-[#333333] hover:border-[#FF5A00]/60 transition">
              <h3 className="text-2xl font-bold mb-3">
                💧 Water Tracker
              </h3>

              <p className="text-gray-400 mb-5">
                Track your glasses of water today.
              </p>

              <p className="text-4xl font-extrabold text-[#FF5A00]">
                {water} / 8
              </p>

              <div className="w-full bg-[#333333] h-3 rounded-full mt-4 overflow-hidden">
                <div
                  className="bg-[#FF5A00] h-3 rounded-full transition-all"
                  style={{ width: `${(water / 8) * 100}%` }}
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setWater(Math.max(0, water - 1))}
                  className="flex-1 border border-[#FF5A00] text-[#FF5A00] py-3 rounded-lg hover:bg-[#FF5A00]/10 transition"
                >
                  - Remove
                </button>

                <button
                  onClick={() => setWater(Math.min(8, water + 1))}
                  className="flex-1 bg-[#FF5A00] text-white font-bold py-3 rounded-lg hover:bg-[#FF7A1A] transition"
                >
                  + Add Glass
                </button>
              </div>
            </div>

            {/* Nutrition Tips */}
            <div className="bg-[#151515] p-8 rounded-2xl border border-[#333333] hover:border-[#FF5A00]/60 transition">
              <h3 className="text-2xl font-bold mb-4">
                🌱 Nutrition Tips
              </h3>

              <ul className="text-gray-300 space-y-3">
                <li><span className="text-[#FF5A00]">✓</span> Include protein in every meal.</li>
                <li><span className="text-[#FF5A00]">✓</span> Eat fruits and vegetables daily.</li>
                <li><span className="text-[#FF5A00]">✓</span> Stay hydrated throughout the day.</li>
                <li><span className="text-[#FF5A00]">✓</span> Maintain a balanced diet.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default DietPlanner
