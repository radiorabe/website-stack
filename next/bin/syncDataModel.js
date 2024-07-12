require("dotenv").config({ path: "../.env" });
const fetch = require("cross-fetch");

const DEV_DIRECTUS_URL = process.env.PUBLIC_URL;
const DEV_ACCESS_TOKEN = process.env.DEV_ACCESS_TOKEN;

const PROD_DIRECTUS_URL = process.env.PROD_URL;
const PROD_ACCESS_TOKEN = process.env.PROD_ACCESS_TOKEN;

async function main() {
  const snapshot = await getSnapshot();
  //   console.log("snapshot");
  console.log(snapshot);

  const diff = await getDiff(snapshot);
  //   console.log("diff");
  console.log(diff);

  await applyDiff(diff);
}

main();

async function getSnapshot() {
  const URL = `${DEV_DIRECTUS_URL}/schema/snapshot?access_token=${DEV_ACCESS_TOKEN}`;
  const { data } = await fetch(URL).then((r) => r.json());
  return data;
}

async function getDiff(snapshot) {
  const URL = `${PROD_DIRECTUS_URL}/schema/diff?access_token=${PROD_ACCESS_TOKEN}`;

  const { data } = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(snapshot),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => r.json());

  return data;
}

async function applyDiff(diff) {
  // const URL = `${PROD_DIRECTUS_URL}/schema/apply?access_token=${PROD_ACCESS_TOKEN}?force=true`;
  const URL = `${PROD_DIRECTUS_URL}/schema/apply?access_token=${PROD_ACCESS_TOKEN}`;

  await fetch(URL, {
    method: "POST",
    body: JSON.stringify(diff),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
