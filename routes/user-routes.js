import express from "express";
import * as userController from "../controllers/user-controller.js";
import path from "path";

const router = express.Router();

import multer from "multer";
router.route("/").get(userController.index).post(userController.add);
router.route("/:id").get(userController.findOne);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images/avatars");
  },
  filename: (req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const name = `image${req.body.username || "default"}`; // Use username or default
    cb(null, `${name}${fileExtension}`);
  },
});
const uploadImage = multer({ storage });

router.route("/:id").put(
  uploadImage.single("avatar_path"),
  (req, res, next) => {
    next();
  },
  userController.update
);

router.route("/:id/games").get(userController.games);

export default router;
