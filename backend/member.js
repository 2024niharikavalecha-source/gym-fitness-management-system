
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      min: 16,
      max: 100
    },

    membership: {
      type: String,
      enum: ["Basic", "Premium", "Pro"],
      default: "Basic"
    },

    fitnessGoal: {
      type: String,
      default: "General Fitness"
    },

    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member"
    }
  },
  { timestamps: true }
);

// Hash password before saving
memberSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("Member", memberSchema);
