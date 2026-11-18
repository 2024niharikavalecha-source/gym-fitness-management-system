
import { useState } from "react"

function Achievements() {
  const [completed, setCompleted] = useState([1])

  const challenges = [
    { id: 1, title: "First Workout", description: "Complete your first workout.", icon: "🏋️", points: 50 },
    { id: 2, title: "Water Warrior", description: "Drink 8 glasses of water.", icon: "💧", points: 30 },
    { id: 3, title: "7-Day Streak", description: "Work out for 7 days.", icon: "🔥", points: 100 },
    { id: 4, title: "Cardio Champion", description: "Complete 30 minutes of cardio.", icon: "🏃", points: 75 }
  ]

  const toggleChallenge = (id) => {
    setCompleted((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    )
  }

  const totalPoints = challenges
    .filter((challenge) => completed.includes(challenge.id))
    .reduce((total, challenge) => total + challenge.points, 0)

  const badges = [
    { title: "Beginner", icon: "🌟", description: "Your fitness journey begins." },
    { title: "Consistency Star", icon: "🔥", description: "Build a regular workout habit." },
    { title: "Fitness Hero", icon: "🏆", description: "Keep achieving your goals." }
  ]

  return (
    <section className="py-20 px-6 bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-[#FF5A00] font-bold tracking-[4px]">
            KEEP PUSHING
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Achievements & <span className="text-[#FF5A00]">Challenges.</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Set goals, complete challenges and celebrate progress.
          </p>
        </div>

        {/* Points Card */}
        <div className="bg-gradient-to-r from-[#351707] to-[#151515] border border-[#FF5A00]/40 rounded-2xl p-8 mb-10 text-center">
          <p className="text-gray-400 font-semibold">YOUR TOTAL POINTS</p>

          <h3 className="text-5xl font-extrabold text-[#FF5A00] mt-3">
            {totalPoints}
          </h3>

          <p className="text-gray-400 mt-2">
            {completed.length} of {challenges.length} challenges completed
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-6">
          Fitness Challenges
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {challenges.map((challenge) => {
            const isDone = completed.includes(challenge.id)

            return (
              <div
                key={challenge.id}
                className="bg-[#151515] border border-[#333333] rounded-2xl p-6 flex items-center gap-5 hover:border-[#FF5A00] hover:shadow-[0_0_18px_rgba(255,90,0,0.12)] transition"
              >
                <div className="text-4xl">{challenge.icon}</div>

                <div className="flex-1">
                  <h4 className="font-bold text-lg">
                    {challenge.title}
                  </h4>

                  <p className="text-gray-400 text-sm mt-1">
                    {challenge.description}
                  </p>

                  <p className="text-[#FF5A00] text-sm mt-2">
                    +{challenge.points} points
                  </p>
                </div>

                <button
                  onClick={() => toggleChallenge(challenge.id)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition ${
                    isDone
                      ? "bg-[#FF5A00] text-white"
                      : "border border-[#FF5A00] text-[#FF5A00] hover:bg-[#FF5A00] hover:text-white"
                  }`}
                >
                  {isDone ? "Completed ✓" : "Complete"}
                </button>
              </div>
            )
          })}
        </div>

        <h3 className="text-2xl font-bold mb-6">
          Achievement Badges
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-[#151515] border border-[#333333] rounded-2xl p-7 text-center hover:border-[#FF5A00] hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl mb-4">{badge.icon}</div>

              <h4 className="font-bold text-xl text-[#FF5A00]">
                {badge.title}
              </h4>

              <p className="text-gray-400 text-sm mt-2">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements
