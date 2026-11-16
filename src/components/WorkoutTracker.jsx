
import useWorkoutTracker from "../hooks/useWorkoutTracker"

function WorkoutTracker() {
  const { count, completeWorkout, resetWorkouts } = useWorkoutTracker()

  return (
    <section className="bg-[#101510] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[#9EFF00] font-bold tracking-[4px]">
          STAY CONSISTENT
        </p>

        <h2 className="text-4xl font-extrabold mt-3 mb-10">
          Workout Tracker
        </h2>

        <div className="bg-[#1C261C] border border-[#9EFF00]/30 rounded-3xl p-10">

          <p className="text-gray-300 text-lg">
            Workouts Completed
          </p>

          <h3 className="text-7xl font-extrabold text-[#9EFF00] my-6">
            {count}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">

            <button
              onClick={completeWorkout}
              className="bg-[#9EFF00] text-black font-bold px-7 py-3 rounded-xl hover:bg-white transition"
            >
              + Complete Workout
            </button>

            <button
              onClick={resetWorkouts}
              className="bg-[#244A28] text-white font-bold px-7 py-3 rounded-xl hover:bg-[#34452C] transition"
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
