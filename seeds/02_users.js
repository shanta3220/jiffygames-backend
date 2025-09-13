/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import bcrypt from "bcrypt";

export async function seed(knex) {
  await knex("users").del();
  const ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || "12", 10);
  const hash = await bcrypt.hash("12345678", ROUNDS);
  await knex("users").insert([
    {
      username: "TerryWong",
      email: "terry.wong@example.com",
      about_me: "Tech enthusiast exploring the latest trends in AI.",
      avatar_path: "images/avatars/user-avatar-example1.jpg",
      password: hash,
    },
    {
      username: "NoahDuncan",
      email: "noah.duncan@example.com",
      about_me: "Lover of nature documentaries and travel videos.",
      avatar_path: "images/avatars/user-avatar-example2.jpg",
      password: hash,
    },
    {
      username: "JaniceRodriguez",
      email: "janice.rodriguez@example.com",
      about_me: "Passionate about mindful living and technology.",
      avatar_path: "images/avatars/user-avatar-example3.jpg",
      password: hash,
    },
    {
      username: "Shanta",
      email: "shanta@example.com",
      about_me: "Excited to watch and comment on amazing content!",
      avatar_path: "images/avatars/user-avatar-example4.jpg",
      password: hash,
    },
    {
      username: "MariaAziz",
      email: "maria.aziz@example.com",
      about_me: "Creative writer and lover of storytelling.",
      avatar_path: "images/avatars/user-avatar-example5.jpg",
      password: hash,
    },
    {
      username: "TaylorNkoshi",
      email: "taylor.nkoshi@example.com",
      about_me: "Foodie exploring new cuisines and recipes.",
      avatar_path: "images/avatars/user-avatar-example6.jpg",
      password: hash,
    },
    {
      username: "AdnanAlFarsi",
      email: "adnan.alfarsi@example.com",
      about_me: "Tech blogger sharing insights on gadgets and innovations.",
      avatar_path: "images/avatars/user-avatar-example7.jpg",
      password: hash,
    },
    {
      username: "GiovanaSilva",
      email: "giovana.silva@example.com",
      about_me: "Fitness enthusiast sharing tips and routines.",
      avatar_path: "images/avatars/user-avatar-example8.jpg",
      password: hash,
    },
    {
      username: "DanielLesage",
      email: "daniel.lesage@example.com",
      about_me: "History buff diving into untold stories.",
      avatar_path: "images/avatars/user-avatar-example9.jpg",
      password: hash,
    },
    {
      username: "SharonSantos",
      email: "sharon.santos@example.com",
      about_me: "Art lover curating beautiful works from around the world.",
      avatar_path: "images/avatars/user-avatar-example10.jpg",
      password: hash,
    },
    {
      username: "CleoPolster",
      email: "cleo.polster@example.com",
      about_me: "Nature photographer capturing the essence of the wild.",
      avatar_path: "images/avatars/user-avatar-example11.jpg",
      password: hash,
    },
    {
      username: "KatyaHorvat",
      email: "katya.horvat@example.com",
      about_me: "Cooking vlogger sharing traditional recipes.",
      avatar_path: "images/avatars/user-avatar-example12.jpg",
      password: hash,
    },
    {
      username: "HanneKarlsen",
      email: "hanne.karlsen@example.com",
      about_me: "Design enthusiast exploring minimalist lifestyles.",
      avatar_path: "images/avatars/user-avatar-example13.jpg",
      password: hash,
    },
    {
      username: "AsayoOohira",
      email: "asayo.oohira@example.com",
      about_me: "Music lover discovering global beats.",
      avatar_path: "images/avatars/user-avatar-example14.jpg",
      password: hash,
    },
    {
      username: "NguyenBon",
      email: "nguyen.bon@example.com",
      about_me: "Documentary filmmaker capturing untold stories.",
      avatar_path: "images/avatars/user-avatar-example15.jpg",
      password: hash,
    },
    {
      username: "AraaGhelamerda",
      email: "araa.ghelamerda@example.com",
      about_me: "Tech geek exploring the AI revolution.",
      avatar_path: "images/avatars/user-avatar-example16.jpg",
      password: hash,
    },
    {
      username: "AmbrusGerzson",
      email: "ambrus.gerzson@example.com",
      about_me: "Engineer passionate about robotics and innovation.",
      avatar_path: "images/avatars/user-avatar-example17.jpg",
      password: hash,
    },
    {
      username: "HannahLaursen",
      email: "hannah.laursen@example.com",
      about_me: "Gardener sharing tips for sustainable living.",
      avatar_path: "images/avatars/user-avatar-example18.jpg",
      password: hash,
    },
  ]);
}
