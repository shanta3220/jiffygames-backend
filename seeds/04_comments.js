/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("comments").del();
  await knex("comments").insert([
    {
      game_id: 1,
      user_id: 1,
      message:
        "This game is absolutely amazing! I love the graphics and gameplay.",
      like_count: 0,
      created_at: knex.fn.now(), // or timestamp conversion if needed
      updated_at: knex.fn.now(),
    },
    {
      game_id: 1,
      user_id: 2,
      message: "Challenging levels but super rewarding when you finish them.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 2,
      user_id: 3,
      message: "A bit buggy at times, but overall a fun experience.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 2,
      user_id: 4,
      message: "The storyline really pulls you in. Can't wait for the sequel!",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 3,
      user_id: 5,
      message: "This game reminds me of my childhood! Nostalgic vibes.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 3,
      user_id: 6,
      message: "Too many ads interrupting the flow of the game.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 4,
      user_id: 7,
      message:
        "Multiplayer mode is so much fun! Highly recommend playing with friends.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 4,
      user_id: 8,
      message: "Not a fan of the new update. It feels less intuitive now.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 1,
      user_id: 9,
      message: "The boss battles are epic! Loving every minute of it.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      game_id: 2,
      user_id: 10,
      message: "Pretty average game, but it's a good way to kill time.",
      like_count: 0,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
