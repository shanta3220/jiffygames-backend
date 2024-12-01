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

const index = async (req, res) => {
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

export { index };
