import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

router.route("/").get(userController.index).post(userController.add);
router.route("/:id").get(userController.findOne).put(userController.update);
export default router;
