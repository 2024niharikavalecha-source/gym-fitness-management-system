import { useGym } from "../context/GymContext"

function Membership() {

  const { selectedPlan, changeMembership } = useGym()

  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: ["Gym Access", "Basic Workouts", "Locker Facility"]
    },
    {
      name: "Premium",
      price: "₹1499",
      features: ["Gym Access", "Personal Trainer", "Diet Plan"]
    },
    {
      name: "Pro",
      price: "₹1999",
      features: ["All Facilities", "Personal Trainer", "Advanced Tracking"]
    }
  ]

  return (
    <section id="plans" className="bg-gray-950 text-white py-16 px-6">

      <div className="text-center mb-10">
        <p className="text-red-500 font-bold">PRICING</p>
        <h2 className="text-4xl font-bold">Membership Plans</h2>

        <p className="text-gray-400 mt-3">
          Current Plan:
          <span className="text-red-500 font-bold">
            {" "}{selectedPlan}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`p-8 rounded-xl text-center border transition
              ${
                selectedPlan === plan.name
                  ? "bg-gray-800 border-red-500 scale-105"
                  : "bg-gray-900 border-gray-700"
              }`}
          >

            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <p className="text-4xl text-red-500 font-bold my-5">
              {plan.price}
              <span className="text-sm text-gray-400">
                {" "}/month
              </span>
            </p>

            {plan.features.map((feature, i) => (
              <p key={i} className="my-3 text-gray-300">
                ✓ {feature}
              </p>
            ))}

            <button
              onClick={() => changeMembership(plan.name)}
              className="mt-5 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700"
            >
              {selectedPlan === plan.name
                ? "Selected ✓"
                : "Choose Plan"}
            </button>

          </div>

        ))}

      </div>
    </section>
  )
}

export default Membership