import initKnex from "knex";
import configuration from "../knexfile.js";
import { getFullPath, getAvatarPath } from "../scripts/PathUtils.js";
import "dotenv/config";
const knex = initKnex(configuration);

const index = async (_req, res) => {
  try {
    let games = await knex("games").select(
      "id",
      "game_name",
      "project_name",
      "description",
      "instruction",
      "build_path",
      "image_path",
      "video_path",
      "like_count"
    );

    games = games.map((game) => {
      game.build_path = getFullPath(game.build_path);
      game.image_path = getFullPath(game.image_path);
      game.video_path = getFullPath(game.video_path);
      return game;
    });

    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve games data" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    let game = await knex("games")
      .select(
        "id",
        "game_name",
        "project_name",
        "description",
        "instruction",
        "category",
        "build_path",
        "image_path",
        "video_path",
        "like_count"
      )
      .where("games.id", id)
      .first();

    if (game) {
      game.build_path = getFullPath(game.build_path);
      game.image_path = getFullPath(game.image_path);
      game.video_path = getFullPath(game.video_path);

      let comments = await knex("comments")
        .select(
          "comments.id",
          "comments.user_id",
          "comments.message",
          "comments.like_count",
          "users.username",
          "comments.created_at",
          "users.avatar_path as avatar_path"
        )
        .join("users", "comments.user_id", "=", "users.id")
        .where("comments.game_id", id)
        .orderBy("comments.created_at", "desc");

      game.comments =
        comments.map((comment) => {
          comment.avatar_path = getAvatarPath(comment.avatar_path);
          return comment;
        }) ?? [];

      res.status(200).json(game);
    } else {
      res.status(404).json({ message: `game item with ID ${id} not found` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrive game data" });
  }
};

const like = async (req, res) => {
  try {
    const { id } = req.params;

    const updateCount = await knex("games")
      .where("id", id)
      .increment("like_count", 1);

    if (updateCount === 0) {
      return res
        .status(404)
        .json({ message: `Game item with ID ${id} not found` });
    }

    const { updated_at, created_at, ...updatedGame } = await knex("games")
      .select("id", "like_count")
      .where("id", id)
      .first();

    res.status(200).json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update like count" });
  }
};

export { index, findOne, like };
