
import { useGym } from "../context/GymContext"

function Profile() {
  const { user } = useGym()

  return (
    <section className="bg-[#151D15] text-white py-20 px-6">

      <div className="max-w-xl mx-auto bg-[#202B20] p-10 rounded-3xl text-center border border-green-900 hover:border-[#9EFF00] transition">

        <div className="w-24 h-24 mx-auto rounded-full bg-[#34452C] flex items-center justify-center text-5xl mb-6">
          👤
        </div>

        <p className="text-[#9EFF00] font-bold tracking-[4px]">
          MEMBER PROFILE
        </p>

        <h2 className="text-3xl font-extrabold mt-3">
          Welcome, {user.name}
        </h2>

        <div className="mt-8 space-y-5 text-gray-300">

          <div className="bg-[#151D15] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Membership</p>
            <p className="text-[#9EFF00] font-bold text-lg mt-1">
              {user.membership}
            </p>
          </div>

          <div className="bg-[#151D15] p-4 rounded-xl">
            <p className="text-sm text-gray-400">Fitness Goal</p>
            <p className="text-white font-bold text-lg mt-1">
              {user.goal}
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Profile
