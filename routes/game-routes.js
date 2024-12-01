import express from "express";
import * as gameController from "../controllers/game-controller.js";

const router = express.Router();

router.route("/").get(gameController.index);
router.route("/:id").get(gameController.findOne);
export default router;
