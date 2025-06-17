import fs from "fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);
console.log(__filename);

export async function up(knex) {
  console.log("migrationExternalIDs");

  try {
    var emails = [];
    var uuids = [];
    let pa = path.resolve(__dirname, "./user_rabe.csv");
    let data = await fs.readFile(pa);
    console.log("readFile", data);

    //Convert and store csv information into a buffer.
    let bufferString = data.toString();

    //Store information for each individual person in an array index. Split it by every newline in the csv file.
    let arr = bufferString.split("\n");
    console.log("arr", arr);

    for (var i = 0; i < arr.length; i++) {
      let uuid = arr[i].split(",")[0].trim();
      if (arr[i].includes('"')) {
        let moreEmails = arr[i].split('"')[1].split(",");
        console.log("moreEmails", moreEmails);
        for (var j = 0; j < moreEmails.length; j++) {
          emails.push(moreEmails[j].trim());
          uuids.push(uuid);
        }
      } else {
        emails.push(arr[i].split(",")[1].trim());
        uuids.push(uuid);
      }
    }
    console.log("emails", emails);
    console.log("uuids", uuids);
    let users = await knex
      .from("directus_users")
      .select("email", "external_identifier");
    for (let user of users) {
      // console.log("user", user);

      if (emails.indexOf(user.external_identifier) > -1) {
        // console.log("indexOf");
        await knex("directus_users")
          .where({ external_identifier: user.external_identifier })
          .update({
            external_identifier: uuids[emails.indexOf(user.external_identifier)],
          });
      }else{
        console.log("email not found: ", user.external_identifier);
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
}

export async function down(knex) {
  // let posts = await knex.from("post").select("date_published", "id");
  // for (let post of posts) {
  //   await knex("post").where({ id: post.id }).update({
  //     date: post.date_published,
  //   });
  // }
}

