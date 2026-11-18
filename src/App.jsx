
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
import AdminDashboard from "./components/AdminDashboard"
import TrainerBooking from "./components/TrainerBooking"
import DietPlanner from "./components/DietPlanner"
import Achievements from "./components/Achievements"

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [activePage, setActivePage] = useState("Home")

  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />

      case "Workouts":
        return (
          <>
            <Workouts />
            <WorkoutTracker />
          </>
        )

      case "Membership":
        return <Membership />

      case "Trainers":
        return (
          <>
            <Trainers />
            <TrainerBooking />
          </>
        )

      case "MemberDashboard":
        return (
          <>
            <MemberDashboard />
            <Profile />
          </>
        )

      case "DietPlanner":
        return <DietPlanner />

      case "TrainerBooking":
        return <TrainerBooking />

      case "Achievements":
        return <Achievements />

      case "AdminDashboard":
        return <AdminDashboard />

      case "Chat":
        return <Chat />

      default:
        return <Home />
    }
  }

  if (showLogin) {
    return (
      <Login
        onLogin={() => setShowLogin(false)}
        onBack={() => setShowLogin(false)}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onNavigate={setActivePage}
        activePage={activePage}
      />

      <main className="min-h-[75vh]">
        {renderPage()}
      </main>

      <footer className="bg-[#080808] text-gray-400 text-center py-6 border-t border-[#FF5A00]/30">
        <p className="font-bold text-white text-xl">
          GYM<span className="text-[#FF5A00]">FIT</span>
        </p>

        <p className="text-sm mt-2">
          © 2026 GYMFIT. All Rights Reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
