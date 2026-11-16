
const http = require("http");
const { Server } = require("socket.io");

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const memberRoutes = require("./routes/memberRoutes");

const app = express();
const server = http.createServer(app);

// Frontend URL
const CLIENT_URL =
  process.env.CLIENT_URL || "http://localhost:5173";

// Socket.IO Setup
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ["GET", "POST"]
  }
});

// Middleware
app.use(cors({
  origin: CLIENT_URL
}));

app.use(express.json());
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    message: "Too many requests. Please try again later."
  }
});

app.use("/api", limiter);
app.use("/api/members", memberRoutes);

// Test API
app.get("/", (req, res) => {
  res.send("GYMFIT REST API is running successfully");
});

// Socket.IO Connection
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error.message);
  });

// Start Server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`GYMFIT Server running on port ${PORT}`);
});
