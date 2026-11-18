import { useGym } from "../context/GymContext"

function Membership() {
  const { selectedPlan, changeMembership } = useGym()

  const plans = [
    {
      name: "Basic",
      price: "999",
      features: [
        "Gym Access",
        "Basic Workouts",
        "Locker Facility",
      ],
    },
    {
      name: "Premium",
      price: "1499",
      features: [
        "Gym Access",
        "Personal Trainer",
        "Diet Plan",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: "1999",
      features: [
        "All Facilities",
        "Personal Trainer",
        "Advanced Tracking",
      ],
    },
  ]

  return (
    <section
      id="plans"
      className="min-h-screen bg-[#080808] text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-[#FF5A00] font-bold tracking-[4px] mb-3">
            MEMBERSHIP PLANS
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-4">
            CHOOSE YOUR <span className="text-[#FF5A00]">PLAN.</span>
          </h2>

          <p className="text-gray-400">
            Invest in yourself. Your fitness journey starts here.
          </p>

          <div className="mt-6 inline-block bg-[#151515] border border-[#FF5A00]/40 rounded-full px-6 py-3">
            <span className="text-gray-400">Your Current Plan: </span>
            <span className="text-[#FF5A00] font-bold">
              {selectedPlan || "No Plan Selected"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2
                ${
                  selectedPlan === plan.name
                    ? "border-[#FF5A00] shadow-[0_0_25px_rgba(255,90,0,0.3)]"
                    : "border-[#333333] hover:border-[#FF5A00]"
                }
                bg-[#151515]`}
            >

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF5A00] text-white text-xs font-bold px-5 py-2 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-black text-center mb-4">
                {plan.name}
              </h3>

              <div className="text-center mb-8">
                <span className="text-5xl font-black text-[#FF5A00]">
                  ₹{plan.price}
                </span>
                <span className="text-gray-400"> / month</span>
              </div>

              <div className="border-t border-gray-700 mb-6"></div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <span className="text-[#FF5A00] font-bold text-xl">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => changeMembership(plan.name)}
                className={`w-full py-3 rounded-lg font-bold tracking-wider transition-all duration-300
                  ${
                    selectedPlan === plan.name
                      ? "bg-[#292929] text-[#FF5A00] border border-[#FF5A00]"
                      : "bg-[#FF5A00] text-white hover:bg-[#FF7A1A] hover:shadow-[0_0_20px_rgba(255,90,0,0.4)]"
                  }`}
              >
                {selectedPlan === plan.name
                  ? "SELECTED ✓"
                  : "CHOOSE PLAN"}
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Membership