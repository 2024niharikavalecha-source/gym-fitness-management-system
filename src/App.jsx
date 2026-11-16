
import { useState } from "react"

import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Home from "./components/Home"
import Workouts from "./components/Workouts"
import Membership from "./components/Membership"
import Trainers from "./components/Trainers"
import MemberDashboard from "./components/MemberDashboard"
import Profile from "./components/Profile"
import WorkoutTracker from "./components/WorkoutTracker"
import Chat from "./components/Chat"

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
    <div className="min-h-screen bg-[#100D24]">

      <Navbar onLoginClick={() => setShowLogin(true)} />

      <Home />

      <Workouts />

      <WorkoutTracker />

      <Membership />

      <MemberDashboard />

      <Profile />

      <Trainers />

      <Chat />

      <footer className="bg-black text-gray-400 text-center py-6">
        © 2026 GYMFIT. All Rights Reserved.
      </footer>

    </div>
  )
}

export default App
