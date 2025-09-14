import bcrypt from "bcrypt";

export async function up(knex) {
  const ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || "12", 10);
  const users = await knex("users")
    .select("id", "password")
    .whereRaw("password NOT LIKE '$2%'");

  for (const u of users) {
    const hash = await bcrypt.hash(u.password, ROUNDS);
    await knex("users").update({ password: hash }).where({ id: u.id });
  }
}

export async function down() {}
