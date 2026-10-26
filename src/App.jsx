
import { useState } from "react"
import Login from "./components/Login"


import MemberDashboard from "./components/MemberDashboard"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Workouts from "./components/Workouts"
import Membership from "./components/Membership"
import Trainers from "./components/Trainers"
import Profile from "./components/Profile"
import WorkoutTracker from "./components/WorkoutTracker"

function App() {
  const [showLogin, setShowLogin] = useState(false)
  if (showLogin) {
  return (
    <Login
      onLogin={() => setShowLogin(false)}
      onBack={() => setShowLogin(false)}
    />
  )
}
  return (
    <>
     <Navbar onLoginClick={() => setShowLogin(true)} />
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