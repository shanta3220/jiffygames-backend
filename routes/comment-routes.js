import express from "express";
import * as commentController from "../controllers/comment-controller.js";

const router = express.Router();

router.route("/").get(commentController.index).post(commentController.add);
router
  .route("/:id")
  .get(commentController.findOne)
  .delete(commentController.remove);
export default router;
