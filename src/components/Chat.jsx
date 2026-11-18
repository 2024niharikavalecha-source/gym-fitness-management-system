
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"

function Chat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState("")
  const socketRef = useRef(null)

  useEffect(() => {
    const API_URL =
      import.meta.env.VITE_API_URL || "http://localhost:5000"

    const socket = io(API_URL)
    socketRef.current = socket

    socket.on("connect", () => {
      setConnected(true)
      setError("")
    })

    socket.on("disconnect", () => {
      setConnected(false)
    })

    socket.on("connect_error", () => {
      setConnected(false)
      setError("Unable to connect. Please try again.")
    })

    socket.on("chat message", (newMessage) => {
      setMessages((prev) => [...prev, newMessage])
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()

    const trimmedMessage = message.trim()

    if (!trimmedMessage) return

    if (!socketRef.current?.connected) {
      setError("Chat is connecting. Please try again in a moment.")
      return
    }

    socketRef.current.emit("chat message", trimmedMessage)
    setMessage("")
    setError("")
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

        <div className="bg-[#151515] border border-[#FF5A00]/40 rounded-2xl p-6">

          <div className="flex justify-between items-center mb-5 border-b border-[#333] pb-4">
            <h3 className="font-bold text-lg">Community Chat</h3>

            <span className={connected ? "text-green-400 text-sm" : "text-red-400 text-sm"}>
              {connected ? "● Connected" : "● Connecting..."}
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
                className="bg-[#292929] border-l-4 border-[#FF5A00] p-3 rounded-xl break-words"
              >
                {msg}
              </div>
            ))}

          </div>

          {error && (
            <p className="text-red-400 text-sm mb-3">{error}</p>
          )}

          <form onSubmit={sendMessage} className="flex gap-3">

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 min-w-0 bg-[#080808] border border-[#444] rounded-xl px-4 py-3 text-white outline-none focus:border-[#FF5A00]"
            />

            <button
              type="submit"
              className="bg-[#FF5A00] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#FF7A1A] transition cursor-pointer"
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
