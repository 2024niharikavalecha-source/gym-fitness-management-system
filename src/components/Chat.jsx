
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"

function Chat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

    socketRef.current = io(API_URL)

    socketRef.current.on("chat message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage])
    })

    return () => socketRef.current?.disconnect()
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    if (message.trim() && socketRef.current?.connected) {
      socketRef.current.emit("chat message", message.trim())
      setMessage("")
    }
  }

  return (
    <section className="bg-[#080808] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-[#FF5A00] font-bold tracking-[4px]">
            CONNECT & MOTIVATE
          </p>

          <h2 className="text-4xl font-extrabold mt-3">
            GYMFIT <span className="text-[#FF5A00]">Live Chat.</span>
          </h2>

          <p className="text-gray-400 mt-3">
            Connect with your fitness community.
          </p>
        </div>

        <div className="bg-[#151515] border border-[#FF5A00]/40 rounded-2xl p-6 shadow-[0_0_25px_rgba(255,90,0,0.08)]">

          <div className="flex items-center justify-between mb-5 border-b border-[#333333] pb-4">
            <h3 className="font-bold text-lg">Community Chat</h3>

            <span className="text-[#FF5A00] text-sm font-semibold">
              ● Live Chat
            </span>
          </div>

          <div className="h-64 overflow-y-auto space-y-3 mb-5 pr-2">

            {messages.length === 0 && (
              <p className="text-gray-500 text-center mt-24">
                No messages yet. Start the conversation!
              </p>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-[#292929] border-l-4 border-[#FF5A00] p-3 rounded-xl text-white break-words"
              >
                {msg}
              </div>
            ))}

          </div>

          <form onSubmit={sendMessage} className="flex gap-3">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 min-w-0 bg-[#080808] border border-[#444444] rounded-xl px-4 py-3 text-white outline-none focus:border-[#FF5A00]"
            />

            <button
              type="submit"
              className="bg-[#FF5A00] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#FF7A1A] transition"
            >
              Send
            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Chat
