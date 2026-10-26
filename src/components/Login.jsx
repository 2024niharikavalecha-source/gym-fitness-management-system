import { useState } from "react"

function Login({ onLogin, onBack }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [role, setRole] = useState("Member")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Please enter both email and password.")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.")
      return
    }

    setError("")
    onLogin()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black via-gray-950 to-red-950 p-16 flex-col justify-between">

        <button
          onClick={onBack}
          className="text-left text-2xl font-bold text-red-500"
        >
          GYMFIT
        </button>

        <div>
          <p className="text-red-500 font-bold tracking-widest mb-4">
            WELCOME BACK
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Stronger Every Day.
            <br />
            Start With One
            <span className="text-red-500"> Login.</span>
          </h1>

          <p className="text-gray-400 mt-6 max-w-lg text-lg">
            Access your workouts, membership plan, fitness progress
            and everything you need to achieve your goals.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10">
            <div>
              <p className="text-2xl font-bold text-red-500">100%</p>
              <p className="text-gray-400 text-sm">Fitness Focused</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-red-500">24/7</p>
              <p className="text-gray-400 text-sm">Access</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-red-500">1 Goal</p>
              <p className="text-gray-400 text-sm">Better You</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm">
          © 2026 GYMFIT — Gym Fitness & Management System
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <button
            onClick={onBack}
            className="lg:hidden text-3xl font-bold text-red-500 mb-10"
          >
            GYMFIT
          </button>

          <p className="text-red-500 font-bold text-sm tracking-widest">
            MEMBER ACCESS
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Login to your account
          </h2>

          <p className="text-gray-400 mt-3 mb-8">
            Enter your details to continue your fitness journey.
          </p>

          {/* ROLE */}
          <div className="grid grid-cols-2 bg-gray-900 p-1 rounded-lg mb-7">

            <button
              type="button"
              onClick={() => setRole("Member")}
              className={`py-2 rounded-md transition ${
                role === "Member"
                  ? "bg-red-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Member
            </button>

            <button
              type="button"
              onClick={() => setRole("Admin")}
              className={`py-2 rounded-md transition ${
                role === "Admin"
                  ? "bg-red-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Admin
            </button>

          </div>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 pr-20 outline-none focus:border-red-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* OPTIONS */}
            <div className="flex justify-between items-center text-sm mb-6">

              <label className="flex items-center gap-2 text-gray-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-red-600"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-red-500 hover:text-red-400"
              >
                Forgot Password?
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <div className="bg-red-950 border border-red-800 text-red-300 p-3 rounded-lg mb-5 text-sm">
                {error}
              </div>
            )}

            {/* LOGIN */}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-bold transition"
            >
              Login as {role}
            </button>

          </form>

          <div className="flex items-center gap-4 my-7">
            <div className="h-px bg-gray-800 flex-1"></div>
            <span className="text-gray-600 text-sm">OR</span>
            <div className="h-px bg-gray-800 flex-1"></div>
          </div>

          <p className="text-center text-gray-400">
            New to GYMFIT?{" "}
            <button className="text-red-500 font-semibold hover:text-red-400">
              Create Account
            </button>
          </p>

          <button
            onClick={onBack}
            className="w-full mt-6 text-gray-500 hover:text-white text-sm"
          >
            ← Back to GYMFIT
          </button>

        </div>
      </div>

    </div>
  )
}

export default Login