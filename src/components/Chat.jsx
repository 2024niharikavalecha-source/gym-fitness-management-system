
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"

function Chat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io("http://localhost:5000")

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
    <section className="bg-[#151D15] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-[#9EFF00] font-bold tracking-[4px]">
            CONNECT & MOTIVATE
          </p>
          <h2 className="text-4xl font-extrabold mt-3">
            GYMFIT Live Chat
          </h2>
          <p className="text-gray-400 mt-3">
            Connect with your fitness community.
          </p>
        </div>

        <div className="bg-[#1C261C] border border-[#9EFF00]/30 rounded-2xl p-6">

          <div className="h-64 overflow-y-auto space-y-3 mb-5">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center mt-24">
                No messages yet. Start the conversation!
              </p>
            )}

            {messages.map((msg, index) => (
              <div
                key={index}
                className="bg-[#244A28] p-3 rounded-xl text-white break-words"
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
              className="flex-1 min-w-0 bg-[#101510] border border-[#34452C] rounded-xl px-4 py-3 text-white outline-none focus:border-[#9EFF00]"
            />

            <button
              type="submit"
              className="bg-[#9EFF00] text-black font-bold px-6 py-3 rounded-xl hover:bg-white transition"
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
