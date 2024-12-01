import initKnex from "knex";
import configuration from "../knexfile.js";
import { getAvatarPath } from "../scripts/PathUtils.js";
import "dotenv/config";
const knex = initKnex(configuration);

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
    const { username, email, password, about_me, avatar_path } = req.body;

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

    if (about_me?.trim() == "") {
      about_me = "";
    }

    if (avatar_path?.trim() == "") {
      avatar_path = "";
    }

    const addedUser = await knex("users").insert({
      username,
      email,
      password,
      about_me,
      avatar_path,
    });

    const id = addedUser[0];
    const { created_at, updated_at, ...newUser } = await knex("users")
      .where({ id })
      .first();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve users data" });
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await knex("users")
      .select("id", "username", "email", "password", "about_me", "avatar_path")
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
    console.log(id);
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

    if (about_me?.trim() == "") {
      about_me = "";
    }

    if (avatar_path?.trim() == "") {
      avatar_path = "";
    }

    const updatedUser = await knex("users")
      .update({
        username,
        email,
        about_me,
        avatar_path,
        password,
      })
      .where("id", id);

    if (updatedUser > 0) {
      const { created_at, updated_at, ...newUser } = await knex("users")
        .where({ id })
        .first();

      newUser.avatar_path = getAvatarPath(avatar_path);

      res.status(201).json(newUser);
    } else {
      res.status(404).json({
        message: `User with ID ${id} doesn't exit, failed to update the user`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to retrieve users data" });
  }
};

export { index, add, findOne, update };
