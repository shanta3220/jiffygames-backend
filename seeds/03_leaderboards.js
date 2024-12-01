/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function seed(knex) {
  await knex("leaderboards").del();

  const leaderboard1 = [
    { game_id: 1, user_id: 1, score: 60 },
    { game_id: 1, user_id: 2, score: 70 },
    { game_id: 1, user_id: 3, score: 80 },
    { game_id: 1, user_id: 4, score: 90 },
    { game_id: 1, user_id: 5, score: 50 },
    { game_id: 1, user_id: 6, score: 30 },
    { game_id: 1, user_id: 7, score: 100 },
    { game_id: 1, user_id: 8, score: 110 },
    { game_id: 1, user_id: 9, score: 75 },
    { game_id: 1, user_id: 10, score: 120 },
    { game_id: 1, user_id: 11, score: 135 },
    { game_id: 1, user_id: 12, score: 60 },
    { game_id: 1, user_id: 13, score: 70 },
    { game_id: 1, user_id: 14, score: 75 },
    { game_id: 1, user_id: 15, score: 85 },
    { game_id: 1, user_id: 16, score: 40 },
    { game_id: 1, user_id: 17, score: 30 },
    { game_id: 1, user_id: 18, score: 90 },
  ];

  const leaderboard2 = [
    { game_id: 2, user_id: 1, score: 60 },
    { game_id: 2, user_id: 2, score: 75 },
    { game_id: 2, user_id: 3, score: 85 },
    { game_id: 2, user_id: 4, score: 90 },
    { game_id: 2, user_id: 5, score: 55 },
    { game_id: 2, user_id: 6, score: 30 },
    { game_id: 2, user_id: 7, score: 100 },
    { game_id: 2, user_id: 8, score: 105 },
    { game_id: 2, user_id: 9, score: 80 },
    { game_id: 2, user_id: 10, score: 120 },
    { game_id: 2, user_id: 11, score: 140 },
    { game_id: 2, user_id: 12, score: 65 },
    { game_id: 2, user_id: 13, score: 80 },
    { game_id: 2, user_id: 14, score: 85 },
    { game_id: 2, user_id: 15, score: 95 },
    { game_id: 2, user_id: 16, score: 45 },
    { game_id: 2, user_id: 17, score: 35 },
    { game_id: 2, user_id: 18, score: 100 },
  ];

  const leaderboard3 = [
    { game_id: 3, user_id: 1, score: 70 },
    { game_id: 3, user_id: 2, score: 65 },
    { game_id: 3, user_id: 3, score: 55 },
    { game_id: 3, user_id: 4, score: 90 },
    { game_id: 3, user_id: 5, score: 70 },
    { game_id: 3, user_id: 6, score: 95 },
    { game_id: 3, user_id: 7, score: 100 },
    { game_id: 3, user_id: 8, score: 80 },
    { game_id: 3, user_id: 9, score: 90 },
    { game_id: 3, user_id: 10, score: 130 },
    { game_id: 3, user_id: 11, score: 145 },
    { game_id: 3, user_id: 12, score: 60 },
    { game_id: 3, user_id: 13, score: 75 },
    { game_id: 3, user_id: 14, score: 80 },
    { game_id: 3, user_id: 15, score: 85 },
    { game_id: 3, user_id: 16, score: 50 },
    { game_id: 3, user_id: 17, score: 60 },
    { game_id: 3, user_id: 18, score: 70 },
  ];

  const leaderboard4 = [
    { game_id: 4, user_id: 1, score: 90 },
    { game_id: 4, user_id: 2, score: 85 },
    { game_id: 4, user_id: 3, score: 80 },
    { game_id: 4, user_id: 4, score: 75 },
    { game_id: 4, user_id: 5, score: 65 },
    { game_id: 4, user_id: 6, score: 60 },
    { game_id: 4, user_id: 7, score: 55 },
    { game_id: 4, user_id: 8, score: 105 },
    { game_id: 4, user_id: 9, score: 110 },
    { game_id: 4, user_id: 10, score: 95 },
    { game_id: 4, user_id: 11, score: 135 },
    { game_id: 4, user_id: 12, score: 60 },
    { game_id: 4, user_id: 13, score: 70 },
    { game_id: 4, user_id: 14, score: 75 },
    { game_id: 4, user_id: 15, score: 80 },
    { game_id: 4, user_id: 16, score: 85 },
    { game_id: 4, user_id: 17, score: 90 },
    { game_id: 4, user_id: 18, score: 100 },
  ];

  // Inserting the adjusted leaderboard data into the database
  await knex("leaderboards").insert([
    ...leaderboard1,
    ...leaderboard2,
    ...leaderboard3,
    ...leaderboard4,
  ]);
}
