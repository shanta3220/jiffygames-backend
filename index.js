import express from "express";
import "dotenv/config";
import cors from "cors";
import gameRoutes from "./routes/game-routes.js";
import userRoutes from "./routes/user-routes.js";
import leaderboardRoutes from "./routes/leaderboard-routes.js";
import commentRoutes from "./routes/comment-routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to GiffyGamesApi" });
});

app.use("/games", gameRoutes);
app.use("/users", userRoutes);
app.use("/leaderboards", leaderboardRoutes);
app.use("/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
