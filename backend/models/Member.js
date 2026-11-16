const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must contain at least 2 characters"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: "Please enter a valid email address"
      }
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"]
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Age must be at least 16"],
      max: [100, "Please enter a valid age"]
    },

    membership: {
      type: String,
      enum: ["Basic", "Premium", "Pro"],
      default: "Basic"
    },
fitnessGoal: {
  type: String,
  required: [true, "Fitness ,goal is required"]
},

role: {
  type: String,
  enum: ["member", "admin"],
  default: "member"
}
  },
  {
    timestamps: true
  }
);

// Hash password before saving
memberSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;