import { useState } from "react"

function useWorkoutTracker() {
  const [count, setCount] = useState(0)

  const completeWorkout = () => {
    setCount((previousCount) => previousCount + 1)
  }

  const resetWorkouts = () => {
    setCount(0)
  }

  return {
    count,
    completeWorkout,
    resetWorkouts
  }
}

export default useWorkoutTracker