import useWorkoutTracker from "../hooks/useWorkoutTracker"

function WorkoutTracker() {

  const { count, completeWorkout, resetWorkouts } = useWorkoutTracker()

  return (
    <section className="py-16 px-6 bg-gray-100">

      <div className="max-w-xl mx-auto text-center">

        <p className="text-red-600 font-bold">
          FITNESS TRACKER
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Workout Progress
        </h2>

        <div className="bg-white shadow-lg rounded-xl p-8 mt-8">

          <div className="text-5xl mb-4">
            🏋️
          </div>

          <p className="text-gray-600">
            Workouts Completed
          </p>

          <h3 className="text-5xl font-bold text-red-600 my-5">
            {count}
          </h3>

          <div className="flex justify-center gap-3">

            <button
              onClick={completeWorkout}
              className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700"
            >
              Complete Workout
            </button>

            <button
              onClick={resetWorkouts}
              className="bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-black"
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