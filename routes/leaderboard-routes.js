import express from "express";
import * as leaderboardController from "../controllers/leaderboard-controller.js";

const router = express.Router();
router.route("/").get(leaderboardController.index);
router
  .route("/:id")
  .get(leaderboardController.findOne)
  .post(leaderboardController.update);
export default router;
