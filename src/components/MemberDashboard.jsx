
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
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-red-600 font-bold">MEMBERS</p>
          <h2 className="text-4xl font-bold">Gym Members</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-gray-100 p-6 rounded-xl shadow text-center"
            >
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-red-600 mt-2">
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