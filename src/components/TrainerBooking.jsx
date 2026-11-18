
import { useState } from "react"

function TrainerBooking() {
  const [trainer, setTrainer] = useState("Rahul Sharma")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [booked, setBooked] = useState(false)

  const handleBooking = (e) => {
    e.preventDefault()

    if (!date || !time) {
      alert("Please select date and time")
      return
    }

    setBooked(true)
  }

  return (
    <section className="py-20 px-6 bg-[#080808] text-white">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-[#FF5A00] font-bold tracking-[4px]">
            PERSONAL TRAINING
          </p>

          <h2 className="text-4xl font-extrabold mt-3">
            Book Your <span className="text-[#FF5A00]">Trainer.</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Schedule a personal training session with our experts.
          </p>
        </div>

        <form
          onSubmit={handleBooking}
          className="bg-[#151515] border border-[#FF5A00]/40 rounded-2xl p-8 space-y-6 shadow-[0_0_25px_rgba(255,90,0,0.08)]"
        >
          <div>
            <label className="block mb-2 font-semibold">
              Choose Trainer
            </label>

            <select
              value={trainer}
              onChange={(e) => {
                setTrainer(e.target.value)
                setBooked(false)
              }}
              className="w-full p-3 rounded-lg bg-[#080808] border border-[#444] focus:border-[#FF5A00] outline-none text-white"
            >
              <option>Rahul Sharma</option>
              <option>Priya Mehta</option>
              <option>Aman Verma</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Select Date
            </label>

            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
                setBooked(false)
              }}
              className="w-full p-3 rounded-lg bg-[#080808] border border-[#444] focus:border-[#FF5A00] outline-none text-white"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Select Time
            </label>

            <select
              value={time}
              onChange={(e) => {
                setTime(e.target.value)
                setBooked(false)
              }}
              className="w-full p-3 rounded-lg bg-[#080808] border border-[#444] focus:border-[#FF5A00] outline-none text-white"
              required
            >
              <option value="">Choose a time</option>
              <option>08:00 AM</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>04:00 PM</option>
              <option>06:00 PM</option>
              <option>08:00 PM</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF5A00] text-white font-bold py-3 rounded-lg hover:bg-[#FF7A1A] hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] transition-all"
          >
            BOOK APPOINTMENT
          </button>

          {booked && (
            <div className="bg-[#FF5A00]/10 border border-[#FF5A00] p-4 rounded-lg text-center">
              <p className="text-[#FF5A00] font-bold">
                Appointment Request Submitted!
              </p>

              <p className="text-sm mt-2 text-gray-300">
                Trainer: {trainer} | Date: {date} | Time: {time}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default TrainerBooking
