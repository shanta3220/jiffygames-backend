import express from "express";
import initKnex from "knex";
import configuration from "../knexfile.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const knex = initKnex(configuration);
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username?.trim() || !password?.trim()) {
      return res
        .status(400)
        .json({ message: "username and password are required" });
    }

    const user = await knex("users")
      .select("id", "username", "email", "password")
      .whereRaw("LOWER(username) = ?", [username.trim().toLowerCase()])
      .first();

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { uid: user.id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "1h" }
    );

    res.json({
      token,
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;
