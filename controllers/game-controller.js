import initKnex from "knex";
import configuration from "../knexfile.js";
import "dotenv/config";
const knex = initKnex(configuration);

const getBaseUrl = () => {
  const { DB_HOST, NODE_ENV } = process.env;

  if (!DB_HOST) {
    throw new Error("DB_HOST is not defined in environment variables");
  }

  if (NODE_ENV === "production") {
    return `https://${DB_HOST}`;
  }

  const PORT = process.env.PORT || 5050;
  return `http://${DB_HOST}:${PORT}`;
};

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
      "like_count",
      "leaderboard_id"
    );

    const baseUrl = getBaseUrl();
    games = games.map((game) => {
      game.build_path = `${baseUrl}/${game.build_path}`;
      game.image_path = `${baseUrl}/${game.image_path}`;
      game.video_path = `${baseUrl}/${game.video_path}`;
      return game;
    });

    res.status(200).json(games);
  } catch (e) {
    console.error(e);
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
        "build_path",
        "image_path",
        "video_path",
        "like_count",
        "leaderboard_id"
      )
      .where("games.id", id)
      .first();

    const baseUrl = getBaseUrl();
    if (game) {
      game.build_path = `${baseUrl}/${game.build_path}`;
      game.image_path = `${baseUrl}/${game.image_path}`;
      game.video_path = `${baseUrl}/${game.video_path}`;

      let comments = await knex("comments")
        .select(
          "comments.id as comment_id",
          "comments.user_id",
          "comments.message",
          "comments.created_at",
          "users.avatar_path as avatar_path"
        )
        .join("users", "comments.user_id", "=", "users.id")
        .where("comments.game_id", id);
      game.comments = comments ?? [];

      res.status(200).json(game);
    } else {
      res.status(404).json({ message: `game item with ID ${id} not found` });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Unable to retrive game data" });
  }
};

export { index, findOne };
