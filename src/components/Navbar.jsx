
import { useState } from "react"

function Navbar({ onLoginClick }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ["Home", "#home"],
    ["Workouts", "#workouts"],
    ["Membership", "#plans"],
    ["Trainers", "#trainers"],
  ]

  return (
    <nav className="bg-[#101510] text-white px-6 md:px-12 py-5 border-b border-[#9EFF00]/20">
      <div className="flex items-center justify-between">

        <h1 className="text-2xl font-extrabold">
          GYM<span className="text-[#9EFF00]">FIT</span>
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map(([name, link]) => (
            <a key={name} href={link}
              className="hover:text-[#9EFF00] transition">
              {name}
            </a>
          ))}
        </div>

        <button
          onClick={onLoginClick}
          className="hidden md:block bg-[#9EFF00] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#b5ff4d] transition"
        >
          Join Now
        </button>

        <button
          className="md:hidden text-3xl text-[#9EFF00]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 mt-6 pb-3">
          {links.map(([name, link]) => (
            <a key={name} href={link}
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#9EFF00]">
              {name}
            </a>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false)
              onLoginClick()
            }}
            className="bg-[#9EFF00] text-black py-3 rounded-lg font-bold"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
