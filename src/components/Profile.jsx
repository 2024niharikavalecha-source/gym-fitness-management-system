import { useGym } from "../context/GymContext"

function Profile() {
  const { user } = useGym()

  return (
    <section className="bg-gray-950 text-white py-16 px-6">

      <div className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl text-center border border-gray-700">

        <div className="text-5xl mb-4">
          👤
        </div>

        <p className="text-red-500 font-bold">
          MEMBER PROFILE
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Welcome, {user.name}
        </h2>

        <div className="mt-6 space-y-3 text-gray-300">

          <p>
            Membership:
            <span className="text-white font-semibold">
              {" "}{user.membership}
            </span>
          </p>

          <p>
            Fitness Goal:
            <span className="text-white font-semibold">
              {" "}{user.goal}
            </span>
          </p>

        </div>

      </div>

    </section>
  )
}

export default Profile