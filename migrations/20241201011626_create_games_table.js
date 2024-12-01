/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export async function up(knex) {
  try {
    return knex.schema.createTable("games", (table) => {
      table.increments("id").primary();
      table.string("game_name").notNullable();
      table.string("project_name").notNullable();
      table.text("description").notNullable();
      table.text("instruction").notNullable();
      table.string("category").notNullable();
      table.string("build_path").notNullable();
      table.string("image_path").notNullable();
      table.string("video_path").notNullable();
      table.integer("like_count").notNullable().defaultTo(0);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
  } catch (error) {
    console.error("Error during migration:", error);
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable("games");
}
