import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const index = async (_req, res) => {
  try {
    const leaderboards = await knex("leaderboards").select(
      "id",
      "game_id",
      "user_id",
      "score"
    );
    if (leaderboards) {
      res.status(200).json(leaderboards);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve leaderboards data" });
  }
};
const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const leaderboard = await knex("leaderboards")
      .select("id", "game_id", "user_id", "score")
      .where("id", id);
    if (leaderboard) {
      res.status(200).json(leaderboard);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve leaderboard data" });
  }
};

const update = async (_req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve update score" });
  }
};

export { index, findOne, update };
