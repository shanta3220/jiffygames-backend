import initKnex from "knex";
import configuration from "../knexfile.js";
import { getAvatarPath } from "../scripts/PathUtils.js";
import "dotenv/config";
const knex = initKnex(configuration);

const index = async (req, res) => {
  try {
    let comments = await knex("comments")
      .select(
        "comments.id",
        "comments.game_id",
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
        "comments.id",
        "comments.game_id",
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

const add = async (req, res) => {
  try {
    let { game_id, user_id, message } = req.body;

    const parsedUserId = parseInt(user_id, 10);

    if (isNaN(parsedUserId)) {
      return res.status(400).json({
        message: "'user_id' must be a valid number",
      });
    }
    user_id = parsedUserId;
    const parsedGameId = parseInt(game_id, 10);
    if (isNaN(parsedGameId)) {
      return res.status(400).json({
        message: "'game_id' must be a valid number",
      });
    }
    game_id = parsedGameId;

    if (message?.trim() == "") {
      return res.status(400).json({
        message: "message can't be empty or have whitespace",
      });
    }
    const addedComment = await knex("comments").insert({
      game_id,
      user_id,
      message,
    });

    const id = addedComment[0];
    const { updated_at, ...newComment } = await knex("comments")
      .where({ id })
      .first();
    res.status(201).json(newComment);
    if (newComment) {
      newComment.avatar_path = getAvatarPath(comment.avatar_path);
      res.status(200).json(newComment);
    } else {
      res.status(404).json({ message: `Comment with ID ${id} doesn't exist` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrive comments data" });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedComment = await knex("comments").where({ id });

    if (selectedComment.length > 0) {
      await knex("comments").where({ id }).del();
      res.sendStatus(204);
    } else {
      return res.status(404).json({ message: "Comment does not exist" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};
export { index, findOne, add, remove };
