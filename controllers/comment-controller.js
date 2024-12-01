import initKnex from "knex";
import configuration from "../knexfile.js";
import { getFullPath, getAvatarPath } from "../scripts/PathUtils.js";
import "dotenv/config";
const knex = initKnex(configuration);

const index = async (req, res) => {
  try {
    let comments = await knex("comments")
      .select(
        "comments.id as comment_id",
        "comments.user_id",
        "comments.message",
        "comments.created_at",
        "users.avatar_path as avatar_path"
      )
      .join("users", "comments.user_id", "=", "users.id");

    comments =
      comments.map((comment) => {
        comment.avatar_path = getAvatarPath(comment.avatar_path);
        return comment;
      }) ?? [];

    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrive comments data" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    let comment = await knex("comments")
      .select(
        "comments.id as comment_id",
        "comments.user_id",
        "comments.message",
        "comments.created_at",
        "users.avatar_path as avatar_path"
      )
      .join("users", "comments.user_id", "=", "users.id")
      .where("comments.id", id)
      .first();

    if (comment) {
      comment.avatar_path = getAvatarPath(comment.avatar_path);
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: `Comment with ID ${id} doesn't exist` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrive comments data" });
  }
};
export { index, findOne };
