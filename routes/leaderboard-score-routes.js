import express from "express";
import * as leaderboardScoreController from "../controllers/leaderboard-score-controller.js";

const router = express.Router();
router.route("/").get(leaderboardScoreController.index);
router
  .route("/:id")
  .get(leaderboardScoreController.findOne)
  .post(leaderboardScoreController.update);
export default router;
