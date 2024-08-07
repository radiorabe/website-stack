require("dotenv").config({ path: "../.env" });
const fetch = require("cross-fetch");

const fs = require("fs");
const path = require("path");

const prompt = require("prompt-sync")({ sigint: true });

function writeSnapshot(data) {
  console.log("Start writeSnapshot...");

  const outJsonFile = path.join("./bin/", `snapshot.json`);

  fs.writeFile(outJsonFile, JSON.stringify(data), (err3) => {
    if (err3) {
      console.log("write error", err3);
    }
    console.log("write success");
  });
}

async function readSnapshot(data) {
  console.log("Start readSnapshot...");

  const jsonFile = path.join("./bin/", `snapshot.json`);
  try {
    const data = await fs.readFile(jsonFile);
    return JSON.parse(Buffer.from(data));
  } catch (e) {
    console.log("error2", e);
  }
}

const DEV_DIRECTUS_URL = process.env.PUBLIC_URL;
const DEV_ACCESS_TOKEN = process.env.DEV_ACCESS_TOKEN;

const PROD_DIRECTUS_URL = process.env.PROD_URL;
const PROD_ACCESS_TOKEN = process.env.PROD_ACCESS_TOKEN;

async function main() {
  const snapshot = await getSnapshot();
  // console.log("snapshot");
  writeSnapshot(snapshot);

  // const newData = await readSnapshot();

  const diff = await getDiff(snapshot);
  if (diff) {
    const apply = prompt("Wonna apply diff to Production? y/n");
    if (apply.toLowerCase() === "y") {
      await applyDiff(diff);
      console.log("Applied to production 🎉🚀");
    } else {
      console.log("Not applied to production");
    }
  } else {
    console.log("Probably something wrong with your Acces token.");
  }
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
