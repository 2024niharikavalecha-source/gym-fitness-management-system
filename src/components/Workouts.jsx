function Workouts() {
  const workouts = [
    { name: "Strength Training", icon: "🏋️", desc: "Build strength and muscle with effective exercises." },
    { name: "Cardio Training", icon: "🏃", desc: "Improve stamina and burn calories with cardio." },
    { name: "Yoga & Flexibility", icon: "🧘", desc: "Improve flexibility, balance and mental wellness." },
    { name: "Weight Loss", icon: "🔥", desc: "Special workouts designed to help burn body fat." }
  ]

  return (
    <section id="workouts" className="py-16 px-6 bg-white">

      <div className="text-center mb-10">
        <p className="text-red-600 font-bold">OUR PROGRAMS</p>
        <h2 className="text-4xl font-bold">Workout Programs</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {workouts.map((workout, index) => (
          <div
            key={index}
            className="bg-gray-100 p-7 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition text-center"
          >
            <div className="text-5xl mb-4">
              {workout.icon}
            </div>

            <h3 className="text-xl font-bold mb-3">
              {workout.name}
            </h3>

            <p className="text-gray-600">
              {workout.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Workouts