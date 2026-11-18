
function Trainers() {
  const trainers = [
    { name: "Rahul Sharma", role: "Strength Trainer", icon: "💪" },
    { name: "Priya Mehta", role: "Yoga Trainer", icon: "🧘‍♀️" },
    { name: "Aman Verma", role: "Cardio Trainer", icon: "🏃‍♂️" }
  ]

  return (
    <section id="trainers" className="py-20 px-6 bg-[#080808] text-white">

      <div className="text-center mb-14">
        <p className="text-[#FF5A00] font-bold tracking-[4px]">
          OUR TEAM
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
          Meet Our <span className="text-[#FF5A00]">Trainers.</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Learn from experts who help you become stronger every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-[#151515] p-9 rounded-2xl border border-[#333333] text-center hover:border-[#FF5A00] hover:shadow-[0_0_22px_rgba(255,90,0,0.2)] hover:-translate-y-2 transition duration-300"
          >
            <div className="w-24 h-24 mx-auto rounded-full bg-[#292929] border border-[#FF5A00]/40 flex items-center justify-center text-5xl mb-6">
              {trainer.icon}
            </div>

            <h3 className="text-xl font-bold">
              {trainer.name}
            </h3>

            <p className="text-[#FF5A00] mt-3 font-semibold">
              {trainer.role}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Trainers
