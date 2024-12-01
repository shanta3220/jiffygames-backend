import express from "express";
import * as commentController from "../controllers/comment-controller.js";

const router = express.Router();

router.route("/").get(commentController.index);
router.route("/:id").get(commentController.findOne);
export default router;
