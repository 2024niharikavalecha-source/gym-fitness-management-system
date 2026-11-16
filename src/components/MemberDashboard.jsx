
import { useEffect, useState } from "react"

function MemberDashboard() {
  const [members, setMembers] = useState([])

  useEffect(() => {
    const gymMembers = [
      { id: 1, name: "Aarav", plan: "Premium" },
      { id: 2, name: "Riya", plan: "Basic" },
      { id: 3, name: "Kabir", plan: "Pro" }
    ]

    setMembers(gymMembers)
  }, [])

  return (
    <section className="py-20 px-6 bg-[#101510] text-white">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#9EFF00] font-bold tracking-[4px]">
            OUR MEMBERS
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Gym <span className="text-[#9EFF00]">Community.</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Meet the members on their fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

          {members.map((member) => (
            <div
              key={member.id}
              className="bg-[#1C261C] p-8 rounded-2xl border border-green-900 text-center hover:border-[#9EFF00] hover:-translate-y-2 transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-[#34452C] flex items-center justify-center mx-auto mb-5 text-4xl">
                👤
              </div>

              <h3 className="text-2xl font-bold">
                {member.name}
              </h3>

              <p className="text-[#9EFF00] mt-3 font-semibold">
                {member.plan} Member
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default MemberDashboard
