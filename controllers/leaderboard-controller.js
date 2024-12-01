import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import { getAvatarPath } from "../scripts/PathUtils.js";

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
          avatar_path: getAvatarPath(avatar_path),
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
      const { game_name } = await knex("games")
        .select("game_name")
        .where("id", id)
        .first();

      const findUser = users.reduce((acc, user) => {
        acc[user.id] = {
          username: user.username,
          avatar_path: user.avatar_path,
        };
        return acc;
      }, {});

      const scores = leaderboardScores.reduce((acc, curr) => {
        const { username } = findUser[curr.user_id];
        acc.push({
          user_id: curr.user_id,
          score: curr.score,
          username,
          avatar_path: getAvatarPath(curr.avatar_path),
        });
        return acc;
      }, []);

      res.status(200).json({ game_id: id, game_name, scores });
    } else {
      res.status(404).json({
        message: `game item with ID ${id} does not have any leaderboard scores`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve leaderboard data" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;

    let { user_id, score } = req.body;

    const parsedUserId = parseInt(user_id, 10);

    if (isNaN(parsedUserId)) {
      return res.status(400).json({
        message: "'user_id' must be a valid number",
      });
    }
    user_id = parsedUserId;

    if (!score || typeof score !== "number" || score <= 0) {
      return res.status(400).json({
        message:
          "Missing or invalid required fields. 'user_id' and 'score' must be provided and score must be a positive number",
      });
    }

    const leaderboardScores = await knex("leaderboard_scores")
      .select("user_id", "score")
      .where({ user_id })
      .where("game_id", id);

    if (leaderboardScores.length > 0) {
      const updateCount = await knex("leaderboard_scores")
        .where("game_id", id)
        .where({ user_id })
        .update({
          user_id,
          score,
          game_id: id,
        });

      if (updateCount === 0) {
        return res.status(404).json({
          message: `LeaderboardScore item with Game ID ${id} and ${user_id} not found`,
        });
      }

      const { created_at, updated_at, ...updatedScore } = await knex(
        "leaderboard_scores"
      )
        .where("game_id", id)
        .where({ user_id })
        .first();

      res.status(200).json(updatedScore);
    } else {
      await knex("leaderboard_scores").insert({
        game_id: id,
        user_id: user_id,
        score: score,
      });

      const { created_at, updated_at, ...newUserScore } = await knex(
        "leaderboard_scores"
      )
        .where("user_id", user_id)
        .first();

      res.status(201).json(newUserScore);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve add or update score" });
  }
};

export { index, findOne, update };
