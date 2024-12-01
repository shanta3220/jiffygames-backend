import express from "express";
import * as gameController from "../controllers/game-controller.js";

const router = express.Router();

router.route("/").get(gameController.index);

export default router;
