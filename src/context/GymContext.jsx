import { createContext, useContext, useState } from "react"

const GymContext = createContext()

export function GymProvider({ children }) {

  const [user, setUser] = useState({
    name: "Niharika",
    membership: "Basic",
    goal: "Fitness & Weight Loss"
  })

  const [selectedPlan, setSelectedPlan] = useState("Basic")

  const changeMembership = (plan) => {
    setSelectedPlan(plan)

    setUser((previousUser) => ({
      ...previousUser,
      membership: plan
    }))
  }

  return (
    <GymContext.Provider
      value={{
        user,
        selectedPlan,
        changeMembership
      }}
    >
      {children}
    </GymContext.Provider>
  )
}

export function useGym() {
  return useContext(GymContext)
}