import initKnex from "knex";
import configuration from "../knexfile.js";
import { getAvatarPath } from "../scripts/PathUtils.js";
import "dotenv/config";
import bcrypt from "bcrypt";

const knex = initKnex(configuration);

const ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || "12", 10);

const index = async (_req, res) => {
  try {
    let users = await knex("users").select(
      "id",
      "username",
      "email",
      "about_me",
      "avatar_path"
    );

    users = users.map((user) => {
      user.avatar_path = getAvatarPath(user.avatar_path);
      return user;
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve games data" });
  }
};

const add = async (req, res) => {
  try {
    let { username, email, password, about_me, avatar_path } = req.body;

    if (!username?.trim() || !password?.trim() || !email?.trim()) {
      return res.status(400).json({
        message:
          "All fields are required - Username, password, and email. These fields also can't be empty or have whitespace",
      });
    }

    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email);

    if (!isEmailValid) {
      return res.status(400).json({
        message: "email is invalid",
      });
    }

    const userExists = await knex("users")
      .select("id")
      .whereRaw("LOWER(username) = ?", [username.trim().toLowerCase()])
      .first();
    if (userExists) {
      return res.status(400).json({
        message: "username already exists",
      });
    }

    const emailExists = await knex("users")
      .select("id")
      .whereRaw("LOWER(email) = ?", [email.trim().toLowerCase()])
      .first();
    if (emailExists) {
      return res.status(400).json({
        message: "email already exists",
      });
    }
    if (about_me?.trim() === "") about_me = "";
    if (avatar_path?.trim() === "") avatar_path = "";

    const passwordHash = await bcrypt.hash(password, ROUNDS);

    const [id] = await knex("users").insert({
      username,
      email,
      password: passwordHash,
      about_me,
      avatar_path,
    });

    const {
      created_at,
      updated_at,
      password: _ignore,
      ...newUser
    } = await knex("users").where({ id }).first();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to create user" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await knex("users")
      .select("id", "username", "email", "about_me", "avatar_path")
      .where("id", id)
      .first();
    if (!user) {
      return res
        .status(404)
        .json({ message: `user item with ID ${id} not found` });
    }
    user.avatar_path = getAvatarPath(user.avatar_path);

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve user data" });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    let { username, email, password, about_me, avatar_path } = req.body;
    const avatarFile = req.file;
    const imagePath = avatarFile
      ? `images/avatars/${avatarFile.filename}`
      : undefined;

    if (!username?.trim() || !email?.trim()) {
      return res.status(400).json({
        message:
          "Username and email are required and cannot be empty/whitespace",
      });
    }

    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g.test(email);
    if (!isEmailValid)
      return res.status(400).json({ message: "email is invalid" });

    if (about_me?.trim() === "") about_me = "";

    const patch = { username, email, about_me };

    if (imagePath !== undefined) {
      patch.avatar_path = imagePath;
    } else if (avatar_path !== undefined) {
      patch.avatar_path = avatar_path.trim();
    }

    if (password?.trim()) {
      patch.password = await bcrypt.hash(password, ROUNDS);
    }

    const updated = await knex("users").update(patch).where("id", id);

    if (updated > 0) {
      const {
        created_at,
        updated_at,
        password: _ignore,
        ...newUser
      } = await knex("users").where({ id }).first();
      newUser.avatar_path = getAvatarPath(newUser.avatar_path);
      res.status(200).json(newUser);
    } else {
      res.status(404).json({ message: `User with ID ${id} doesn't exist` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to update user" });
  }
};

const games = async (req, res) => {
  try {
    const { id } = req.params;

    let leaderboardScores = await knex("leaderboard_scores")
      .select(
        "leaderboard_scores.user_id",
        "leaderboard_scores.score",
        "users.username",
        "users.avatar_path",
        "games.game_name",
        "games.image_path",
        "leaderboard_scores.game_id"
      )
      .where("leaderboard_scores.user_id", id)
      .join("users", "leaderboard_scores.user_id", "users.id")
      .join("games", "leaderboard_scores.game_id", "games.id")
      .orderBy("leaderboard_scores.score", "desc");

    leaderboardScores = leaderboardScores.map((leaderboardScore) => {
      leaderboardScore.avatar_path = getAvatarPath(
        leaderboardScore.avatar_path
      );
      leaderboardScore.image_path = getAvatarPath(leaderboardScore.image_path);
      return leaderboardScore;
    });
    res.status(200).json(leaderboardScores);
  } catch (error) {
    console.error("Error fetching leaderboard data:", error);
    res.status(500).json({ message: "Unable to retrieve leaderboard data" });
  }
};

export { index, add, findOne, update, games };
