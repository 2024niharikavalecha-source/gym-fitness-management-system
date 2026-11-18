
import { useState } from "react"

function AdminDashboard() {
  const [members, setMembers] = useState([
    { id: 1, name: "Aarav Sharma", plan: "Premium", status: "Active" },
    { id: 2, name: "Riya Patel", plan: "Basic", status: "Active" },
    { id: 3, name: "Kabir Mehta", plan: "Pro", status: "Inactive" },
    { id: 4, name: "Ananya Shah", plan: "Premium", status: "Active" }
  ])

  const removeMember = (id) => {
    setMembers(members.filter((member) => member.id !== id))
  }

  const stats = [
    { title: "Total Members", value: members.length, icon: "👥" },
    {
      title: "Active Members",
      value: members.filter((m) => m.status === "Active").length,
      icon: "✅"
    },
    { title: "Total Trainers", value: 3, icon: "🏋️" },
    { title: "Monthly Revenue", value: "₹45,000", icon: "💰" }
  ]

  return (
    <section className="py-20 px-6 bg-[#080808] text-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        <div className="mb-12">
          <p className="text-[#FF5A00] font-bold tracking-[4px]">
            MANAGEMENT PANEL
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Admin <span className="text-[#FF5A00]">Dashboard.</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Manage your gym members and monitor gym activity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#151515] p-6 rounded-2xl border border-[#333333] hover:border-[#FF5A00] hover:shadow-[0_0_18px_rgba(255,90,0,0.15)] transition"
            >
              <p className="text-3xl mb-4">{stat.icon}</p>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <h3 className="text-3xl font-extrabold text-[#FF5A00] mt-2">
                {stat.value}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-[#151515] rounded-2xl border border-[#333333] overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold">Member Management</h3>
            <p className="text-gray-400 text-sm mt-2">
              View and manage registered gym members.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#242424] text-[#FF5A00]">
                <tr>
                  <th className="p-4">Member</th>
                  <th className="p-4">Membership</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-t border-[#333333] hover:bg-[#202020] transition">
                    <td className="p-4 font-semibold">{member.name}</td>
                    <td className="p-4">{member.plan}</td>
                    <td className="p-4">
                      <span className={
                        member.status === "Active"
                          ? "text-[#FF7A1A] font-semibold"
                          : "text-red-400"
                      }>
                        {member.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => removeMember(member.id)}
                        className="text-red-400 hover:text-red-300 font-semibold transition"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {members.length === 0 && (
            <p className="text-center text-gray-400 py-8">
              No members available.
            </p>
          )}
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Note: This is a demo admin panel using sample data.
        </p>

      </div>
    </section>
  )
}

export default AdminDashboard
