import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const index = async (_req, res) => {
  try {
    const leaderboardScores = await knex("leaderboard_scores")
      .select("game_id", "user_id", "score")
      .orderBy("game_id", "asc")
      .orderBy("score", "desc");

    const users = await knex("users").select("id", "username", "avatar_path");
    const findUser = users.reduce((acc, user) => {
      acc[user.id] = { username: user.username, avatar_path: user.avatar_path };
      return acc;
    }, {});

    if (leaderboardScores) {
      const groupScores = leaderboardScores.reduce((acc, curr) => {
        const { game_id } = curr;
        if (!acc[game_id]) {
          acc[game_id] = { game_id, scores: [] };
        }
        const { username, avatar_path } = findUser[curr.user_id];
        acc[game_id].scores.push({
          user_id: curr.user_id,
          score: curr.score,
          username,
          avatar_path,
        });
        return acc;
      }, {});

      res.status(200).json(groupScores);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve leaderboards data" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;

    const leaderboardScores = await knex("leaderboard_scores")
      .select("user_id", "score")
      .where("game_id", id)
      .orderBy("score", "desc");

    if (leaderboardScores) {
      const users = await knex("users").select("id", "username", "avatar_path");
      const findUser = users.reduce((acc, user) => {
        acc[user.id] = {
          username: user.username,
          avatar_path: user.avatar_path,
        };
        return acc;
      }, {});

      const scores = leaderboardScores.reduce((acc, curr) => {
        const { username, avatar_path } = findUser[curr.user_id];
        acc.push({
          user_id: curr.user_id,
          score: curr.score,
          username,
          avatar_path,
        });
        return acc;
      }, []);

      res.status(200).json({ game_id: id, scores });
    } else {
      res
        .status(404)
        .json({
          message: `game item with ID ${id} does not have any leaderboard scores`,
        });
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
