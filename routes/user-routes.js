import express from "express";
import * as userController from "../controllers/user-controller.js";
import path from "path";

const router = express.Router();

import multer from "multer";
router.route("/").get(userController.index).post(userController.add);
router.route("/:id").get(userController.findOne);
//   .put(uploadImage.single("image"), userController.update);

// Configure Multer storage
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
// Multer instance
const uploadImage = multer({ storage });

// Route for updating user with file upload
router.route("/:id").put(
  uploadImage.single("avatar_path"), // Process file upload
  (req, res, next) => {
    // Debug logs for request data
    console.log("Body:", req.body); // Should contain text fields
    console.log("File:", req.file); // Should contain file info

    // Pass to controller
    next();
  },
  userController.update
);

router.route("/:id/games").get(userController.games);

export default router;
