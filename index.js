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

// Serve gzipped Unity files with correct headers
app.get("*.js.gz", (req, res, next) => {
  res.set("Content-Encoding", "gzip"); // Inform the browser the file is gzipped
  res.set("Content-Type", "application/javascript"); // Set the JavaScript MIME type
  next();
});

app.get("*.data.gz", (req, res, next) => {
  res.set("Content-Encoding", "gzip"); // Inform the browser the file is gzipped
  res.set("Content-Type", "application/octet-stream"); // Correct MIME type for .data files
  next();
});

app.get("*.wasm.gz", (req, res, next) => {
  res.set("Content-Encoding", "gzip"); // Inform the browser the file is gzipped
  res.set("Content-Type", "application/wasm"); // Correct MIME type for WebAssembly
  next();
});

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
