function Trainers() {
  const trainers = [
    { name: "Rahul Sharma", role: "Strength Trainer", icon: "💪" },
    { name: "Priya Mehta", role: "Yoga Trainer", icon: "🧘‍♀️" },
    { name: "Aman Verma", role: "Cardio Trainer", icon: "🏃‍♂️" }
  ]

  return (
    <section id="trainers" className="py-16 px-6 bg-gray-100">

      <div className="text-center mb-10">
        <p className="text-red-600 font-bold">OUR TEAM</p>
        <h2 className="text-4xl font-bold">Expert Trainers</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-4xl mx-auto">

        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md text-center hover:-translate-y-2 transition"
          >
            <div className="text-6xl mb-5">
              {trainer.icon}
            </div>

            <h3 className="text-xl font-bold">
              {trainer.name}
            </h3>

            <p className="text-red-600 mt-2">
              {trainer.role}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Trainers