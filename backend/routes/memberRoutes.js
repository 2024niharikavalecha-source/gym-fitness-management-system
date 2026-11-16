
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Member = require("../models/Member");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// LOGIN - Generate JWT token
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      });
    }

    const member = await Member.findOne({ email });

    if (!member) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      member.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      {
        id: member._id,
        email: member.email,
        role: member.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      role: member.role
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
});

// CREATE - Register new member
router.post("/", async (req, res) => {
  try {
    const { role, ...memberData } = req.body;

    const member = new Member({
      ...memberData,
      role: "member"
    });

    const savedMember = await member.save();

    const memberResponse = savedMember.toObject();
    delete memberResponse.password;

    res.status(201).json(memberResponse);

  } catch (error) {
    res.status(400).json({
      message: "Unable to create member",
      error: error.message
    });
  }
});

// READ - Get all members (Admin only)
router.get("/", protect, adminOnly, async (req, res) => {
  try {
    const members = await Member.find().select("-password");

    res.status(200).json(members);

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch members",
      error: error.message
    });
  }
});

// READ - Get one member (Admin only)
router.get("/:id", protect, adminOnly, async (req, res) => {
  try {
    const member = await Member.findById(req.params.id).select("-password");

    if (!member) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json(member);

  } catch (error) {
    res.status(400).json({
      message: "Invalid member ID",
      error: error.message
    });
  }
});

// PROTECTED - Get logged-in member profile
router.get("/profile/me", protect, async (req, res) => {
  try {
    const member = await Member.findById(req.user.id).select("-password");

    if (!member) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json({
      message: "Protected profile accessed successfully",
      member
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch profile",
      error: error.message
    });
  }
});

// UPDATE - Update member (Admin only)
router.put("/:id", protect, adminOnly, async (req, res) => {
  try {
    const { password, role, _id, ...updateData } = req.body;

    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    ).select("-password");

    if (!updatedMember) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json(updatedMember);

  } catch (error) {
    res.status(400).json({
      message: "Unable to update member",
      error: error.message
    });
  }
});

// DELETE - Delete member (Admin only)
router.delete("/:id", protect, adminOnly, async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);

    if (!deletedMember) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.status(200).json({
      message: "Member deleted successfully"
    });

  } catch (error) {
    res.status(400).json({
      message: "Invalid member ID",
      error: error.message
    });
  }
});

// ADMIN ONLY - View all members
router.get("/admin/all", protect, adminOnly, async (req, res) => {
  try {
    const members = await Member.find().select("-password");

    res.status(200).json({
      message: "Admin access granted",
      members
    });

  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch members",
      error: error.message
    });
  }
});

module.exports = router;
