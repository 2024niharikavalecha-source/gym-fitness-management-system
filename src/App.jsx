import MemberDashboard from "./components/MemberDashboard"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Workouts from "./components/Workouts"
import Membership from "./components/Membership"
import Trainers from "./components/Trainers"
import Profile from "./components/Profile"
import WorkoutTracker from "./components/WorkoutTracker"

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Profile />
      <WorkoutTracker />
      <Workouts />
      <Membership />
      <Trainers />
      <MemberDashboard />
    </>
  )
}

export default App