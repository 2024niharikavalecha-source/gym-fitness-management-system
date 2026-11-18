
import { useEffect, useState } from "react"

function MemberDashboard() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const gymMembers = [
      { id: 1, name: "Aarav", plan: "Premium" },
      { id: 2, name: "Riya", plan: "Basic" },
      { id: 3, name: "Kabir", plan: "Pro" }
    ]

    setMembers(gymMembers)
  }, [])

  const weeklyActivity = [
    { day: "Mon", value: 70 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 90 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 100 },
    { day: "Sat", value: 75 },
    { day: "Sun", value: 35 }
  ]

  const stats = [
    { title: "Workouts Completed", value: "24", icon: "🏋️", detail: "This month" },
    { title: "Calories Burned", value: "4,850", icon: "🔥", detail: "This month" },
    { title: "Active Hours", value: "18.5", icon: "⏱️", detail: "This month" },
    { title: "Current Weight", value: "70 kg", icon: "⚖️", detail: "Sample value" }
  ]

  return (
    <section className="py-20 px-5 md:px-8 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="text-[#FF5A00] font-bold tracking-[4px] text-sm">
            MEMBER OVERVIEW
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold mt-3">
            Welcome Back, <span className="text-[#FF5A00]">Member!</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Track your fitness journey and celebrate your progress.
          </p>
        </div>

        {/* Membership Card */}
        <div className="bg-gradient-to-r from-[#351707] to-[#151515] border border-[#FF5A00]/40 rounded-3xl p-7 md:p-9 mb-8 shadow-[0_0_25px_rgba(255,90,0,0.08)]">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="text-gray-300 font-semibold">YOUR MEMBERSHIP</p>
              <h3 className="text-3xl font-extrabold mt-2">
                Premium Plan
              </h3>
              <p className="text-gray-300 mt-2">
                Enjoy your fitness journey with GYMFIT.
              </p>
            </div>

            <div className="md:text-right">
              <span className="inline-block bg-[#FF5A00] text-white px-5 py-2 rounded-full font-bold">
                ACTIVE MEMBER
              </span>
              <p className="text-gray-300 mt-4 text-sm">
                Sample membership details
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#151515] border border-[#333333] rounded-2xl p-6 hover:border-[#FF5A00] hover:shadow-[0_0_18px_rgba(255,90,0,0.15)] transition"
            >
              <div className="flex justify-between items-center">
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <span className="text-3xl">{stat.icon}</span>
              </div>

              <h3 className="text-3xl font-extrabold mt-5 text-[#FF5A00]">
                {stat.value}
              </h3>

              <p className="text-gray-500 text-xs mt-2">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* Progress and Weekly Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          <div className="bg-[#151515] border border-[#333333] rounded-2xl p-7 hover:border-[#FF5A00]/60 transition">
            <p className="text-[#FF5A00] font-bold tracking-widest text-sm">
              FITNESS GOAL
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Weight Progress
            </h3>

            <div className="flex justify-between items-end mt-8">
              <div>
                <p className="text-gray-400 text-sm">Starting weight</p>
                <p className="text-2xl font-bold">75 kg</p>
              </div>

              <div className="text-right">
                <p className="text-gray-400 text-sm">Current weight</p>
                <p className="text-2xl font-bold text-[#FF5A00]">70 kg</p>
              </div>
            </div>

            <div className="w-full bg-[#333333] h-3 rounded-full mt-6 overflow-hidden">
              <div
                className="bg-[#FF5A00] h-full rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Goal: 65 kg | 50% of your sample progress completed
            </p>
          </div>

          <div className="bg-[#151515] border border-[#333333] rounded-2xl p-7 hover:border-[#FF5A00]/60 transition">
            <p className="text-[#FF5A00] font-bold tracking-widest text-sm">
              YOUR ACTIVITY
            </p>

            <h3 className="text-2xl font-bold mt-3">
              Weekly Workout Activity
            </h3>

            <div className="flex items-end justify-between gap-3 h-40 mt-8">
              {weeklyActivity.map((item) => (
                <div
                  key={item.day}
                  className="flex flex-col items-center justify-end h-full flex-1 gap-3"
                >
                  <div className="w-full flex items-end justify-center h-full">
                    <div
                      className="w-full max-w-10 bg-[#FF5A00] rounded-t-lg hover:bg-[#FF7A1A] transition"
                      style={{ height: `${item.value}%` }}
                    ></div>
                  </div>

                  <span className="text-gray-400 text-xs">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivation */}
        <div className="bg-[#151515] border border-[#FF5A00]/30 rounded-2xl p-7 mb-14 text-center">
          <span className="text-4xl">💪</span>

          <h3 className="text-2xl font-bold mt-4">
            Every Workout Counts!
          </h3>

          <p className="text-gray-400 mt-3">
            Stay consistent, challenge yourself and keep moving towards your goals.
          </p>
        </div>

        {/* Members Community */}
        <div>
          <div className="text-center mb-10">
            <p className="text-[#FF5A00] font-bold tracking-[4px]">
              OUR MEMBERS
            </p>

            <h2 className="text-4xl font-extrabold mt-3">
              Gym <span className="text-[#FF5A00]">Community.</span>
            </h2>

            <p className="text-gray-400 mt-4">
              Meet the members on their fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {members.map((member) => (
              <div
                key={member.id}
                className="bg-[#151515] p-8 rounded-2xl border border-[#333333] text-center hover:border-[#FF5A00] hover:-translate-y-2 transition duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-[#292929] flex items-center justify-center mx-auto mb-5 text-4xl">
                  👤
                </div>

                <h3 className="text-2xl font-bold">{member.name}</h3>

                <p className="text-[#FF5A00] mt-3 font-semibold">
                  {member.plan} Member
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default MemberDashboard
