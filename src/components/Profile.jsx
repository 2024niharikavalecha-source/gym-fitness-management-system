
import { useGym } from "../context/GymContext"

function Profile() {
  const { user } = useGym()

  return (
    <section className="bg-[#080808] text-white py-20 px-6 min-h-[500px]">

      <div className="max-w-xl mx-auto bg-[#151515] p-10 rounded-3xl text-center border border-[#FF5A00]/40 hover:border-[#FF5A00] hover:shadow-[0_0_25px_rgba(255,90,0,0.15)] transition">

        <div className="w-24 h-24 mx-auto rounded-full bg-[#292929] border-2 border-[#FF5A00] flex items-center justify-center text-5xl mb-6">
          👤
        </div>

        <p className="text-[#FF5A00] font-bold tracking-[4px]">
          MEMBER PROFILE
        </p>

        <h2 className="text-3xl font-extrabold mt-3">
          Welcome, <span className="text-[#FF5A00]">{user.name}</span>
        </h2>

        <p className="text-gray-400 mt-2">
          Your fitness journey, your identity.
        </p>

        <div className="mt-8 space-y-5 text-gray-300">

          <div className="bg-[#080808] border border-[#333333] p-5 rounded-xl hover:border-[#FF5A00]/60 transition">
            <p className="text-sm text-gray-400">Membership</p>
            <p className="text-[#FF5A00] font-bold text-lg mt-1">
              {user.membership}
            </p>
          </div>

          <div className="bg-[#080808] border border-[#333333] p-5 rounded-xl hover:border-[#FF5A00]/60 transition">
            <p className="text-sm text-gray-400">Fitness Goal</p>
            <p className="text-white font-bold text-lg mt-1">
              {user.goal}
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-[#333333] pt-6">
          <p className="text-gray-500 text-sm">
            STRONGER EVERY DAY. BETTER EVERY VERSION.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Profile
