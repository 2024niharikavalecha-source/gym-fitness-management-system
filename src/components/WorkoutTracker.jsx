
import useWorkoutTracker from "../hooks/useWorkoutTracker"

function WorkoutTracker() {
  const { count, completeWorkout, resetWorkouts } = useWorkoutTracker()

  return (
    <section className="bg-[#080808] text-white py-20 px-6 min-h-[450px]">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#FF5A00] font-bold tracking-[4px]">
          STAY CONSISTENT
        </p>

        <h2 className="text-4xl font-extrabold mt-3 mb-10">
          Workout <span className="text-[#FF5A00]">Tracker</span>
        </h2>

        <div className="bg-[#151515] border border-[#FF5A00]/40 rounded-3xl p-10 hover:border-[#FF5A00] hover:shadow-[0_0_25px_rgba(255,90,0,0.15)] transition">

          <p className="text-gray-300 text-lg">
            Workouts Completed
          </p>

          <h3 className="text-7xl font-extrabold text-[#FF5A00] my-6">
            {count}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={completeWorkout}
              className="bg-[#FF5A00] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#FF7A1A] hover:shadow-[0_0_18px_rgba(255,90,0,0.5)] transition"
            >
              + Complete Workout
            </button>

            <button
              onClick={resetWorkouts}
              className="bg-[#292929] border border-[#444444] text-white font-bold px-7 py-3 rounded-xl hover:border-[#FF5A00] transition"
            >
              Reset
            </button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkoutTracker
