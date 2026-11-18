
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

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setError("")
    onLogin()
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-5 py-12 relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-[#FF5A00]/20 blur-[130px] rounded-full top-0 right-0"></div>
      <div className="absolute w-80 h-80 bg-[#FF5A00]/10 blur-[120px] rounded-full bottom-0 left-0"></div>

      <div className="relative z-10 w-full max-w-md bg-[#171717] border border-[#FF5A00]/30 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_#FF5A0015]">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-black tracking-wider">
            GYM<span className="text-[#FF5A00]">FIT</span>
          </h1>

          <p className="text-[#FF7A24] tracking-[4px] text-xs font-bold mt-4">
            WELCOME BACK
          </p>

          <h2 className="text-3xl font-bold mt-3">
            Login to Your Account
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Continue your fitness journey with us.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-[#080808] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#FF5A00] transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Password
            </label>

            <div className="flex bg-[#080808] border border-gray-700 rounded-lg overflow-hidden focus-within:border-[#FF5A00]">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent px-4 py-3 text-white outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="px-4 text-[#FF7A24] text-sm font-semibold"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Login As
            </label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-[#080808] border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-[#FF5A00]"
            >
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-[#FF5A00] w-4 h-4"
            />

            <label className="text-sm text-gray-400">
              Remember me
            </label>
          </div>

          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FF5A00] hover:bg-[#FF7A24] text-white font-extrabold py-3 rounded-lg transition shadow-[0_0_20px_#FF5A0030]"
          >
            LOGIN →
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full border border-gray-700 hover:border-[#FF5A00] text-gray-300 py-3 rounded-lg transition"
          >
            ← BACK TO HOME
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
