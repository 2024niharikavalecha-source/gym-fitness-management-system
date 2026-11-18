
function Navbar({ onLoginClick, onNavigate, activePage }) {
  const navItems = [
    "Home",
    "Workouts",
    "Membership",
    "Trainers",
    "MemberDashboard",
    "DietPlanner",
    "Achievements",
    "Chat",
    "AdminDashboard"
  ]

  const getLabel = (item) => {
    const labels = {
      MemberDashboard: "Dashboard",
      DietPlanner: "Diet Planner",
      AdminDashboard: "Admin"
    }

    return labels[item] || item
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-[#FF5A00]/40 px-5 py-4 shadow-[0_4px_20px_#FF5A0015]">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-between items-center gap-4">

          {/* LOGO */}
          <h1
            onClick={() => onNavigate("Home")}
            className="text-3xl md:text-4xl font-black tracking-widest text-white cursor-pointer"
          >
            GYM<span className="text-[#FF5A00] drop-shadow-[0_0_10px_#FF5A00]">FIT</span>
          </h1>

          {/* JOIN BUTTON */}
          <button
            onClick={onLoginClick}
            className="bg-[#FF5A00] text-white px-6 py-3 rounded-lg font-extrabold tracking-wider hover:bg-[#FF7A24] hover:scale-105 transition-all duration-300 shadow-[0_0_15px_#FF5A0060] hover:shadow-[0_0_25px_#FF5A00]"
          >
            JOIN NOW →
          </button>

        </div>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-wrap gap-2 mt-5">

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                activePage === item
                  ? "bg-[#FF5A00] text-white shadow-[0_0_15px_#FF5A0080]"
                  : "bg-[#151515] text-gray-300 border border-[#292929] hover:border-[#FF5A00] hover:text-[#FF5A00] hover:shadow-[0_0_10px_#FF5A0030]"
              }`}
            >
              {getLabel(item)}
            </button>
          ))}

        </div>

      </div>
    </nav>
  )
}

export default Navbar
