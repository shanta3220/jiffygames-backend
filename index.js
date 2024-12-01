import express from "express";
import "dotenv/config";
import cors from "cors";
import initKnex from "knex";
import configuration from "./knexfile.js";
import gameRoutes from "./routes/game-routes.js";
import userRoutes from "./routes/user-routes.js";
import leaderboardRoutes from "./routes/leaderboard-routes.js";
import commentRoutes from "./routes/comment-routes.js";

const knex = initKnex(configuration);

const app = express();
app.use(cors());
app.use(express.json());

const { PORT, DB_HOST } = process.env;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to GiffyGamesApi" });
});

app.use("/games", gameRoutes);
app.use("/users", userRoutes);
app.use("/leaderboards", gameRoutes);
app.use("/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://${DB_HOST}:${PORT}`);
});
