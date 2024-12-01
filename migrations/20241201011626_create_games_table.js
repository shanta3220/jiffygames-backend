/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable("games", (table) => {
    table.increments("id").primary();
    table.string("game_name").notNullable();
    table.string("project_name").notNullable();
    table.string("description").notNullable();
    table.string("instruction").notNullable();
    table.string("category").notNullable();
    table.string("build_path").notNullable();
    table.string("image_path").notNullable();
    table.string("video_path").notNullable();
    table.integer("like_count").notNullable().defaultTo(0);
    table
      .integer("leaderboard_id")
      .unsigned()
      .nullable()
      .references("id")
      .inTable("leaderboards")
      .onDelete("SET NULL");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("games");
}
