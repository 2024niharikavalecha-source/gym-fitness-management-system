
function Trainers() {
  const trainers = [
    { name: "Rahul Sharma", role: "Strength Trainer", icon: "💪" },
    { name: "Priya Mehta", role: "Yoga Trainer", icon: "🧘‍♀️" },
    { name: "Aman Verma", role: "Cardio Trainer", icon: "🏃‍♂️" }
  ]

  return (
    <section id="trainers" className="py-20 px-6 bg-[#151D15] text-white">

      <div className="text-center mb-14">
        <p className="text-[#9EFF00] font-bold tracking-[4px]">
          OUR TEAM
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
          Meet Our <span className="text-[#9EFF00]">Trainers.</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Learn from experts who help you become stronger every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-[#202B20] p-9 rounded-2xl border border-green-900 text-center hover:border-[#9EFF00] hover:-translate-y-2 transition duration-300"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-[#34452C] flex items-center justify-center text-5xl mb-6">
              {trainer.icon}
            </div>

            <h3 className="text-xl font-bold">
              {trainer.name}
            </h3>

            <p className="text-[#9EFF00] mt-3 font-semibold">
              {trainer.role}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Trainers
