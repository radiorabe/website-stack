export async function up(knex) {
  let posts = await knex.from("post").select("date", "id");
  for (let post of posts) {
    await knex("post").where({ id: post.id }).update({
      date_published: post.date,
    });
  }
  // do the droping through directus sync
  // await knex.schema.table("post", (table) => {
  //   table.dropColumn("date");
  // });
}

export async function down(knex) {
  // create table column again ??
  // await knex.schema.table("post", (table) => {
  //   table.timestamp("date");
  // });
  let posts = await knex.from("post").select("date_published", "id");
  for (let post of posts) {
    await knex("post").where({ id: post.id }).update({
      date: post.date_published,
    });
  }
  // do the droping through directus sync
  // await knex.schema.table("post", (table) => {
  //   table.dropColumn("date_published");
  // });
}
