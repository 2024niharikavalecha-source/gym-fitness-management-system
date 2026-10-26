import { useState } from "react"

function Navbar({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-950 text-white px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-bold text-red-500">
          GYMFIT
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="hover:text-red-500">Home</a>
          <a href="#workouts" className="hover:text-red-500">Workouts</a>
          <a href="#plans" className="hover:text-red-500">Membership</a>
          <a href="#trainers" className="hover:text-red-500">Trainers</a>
        </div>

        <button
  onClick={onLoginClick}
  className="hidden md:block bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700"
>
  Join Now
</button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-5 pb-3">

          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#workouts" onClick={() => setMenuOpen(false)}>
            Workouts
          </a>

          <a href="#plans" onClick={() => setMenuOpen(false)}>
            Membership
          </a>

          <a href="#trainers" onClick={() => setMenuOpen(false)}>
            Trainers
          </a>

          <button
  onClick={() => {
    setMenuOpen(false)
    onLoginClick()
  }}
  className="bg-red-600 py-2 rounded-lg"
>
  Join Now
</button>

        </div>
      )}
    </nav>
  )
}

export default Navbar