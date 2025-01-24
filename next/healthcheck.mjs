import https from "https";

https.get("https://www.rabe.ch/api/healthcheck", res => {  
    console.log(`STATUS: ${res.statusCode}`);
    return process.exit(
    res.statusCode === 200 ? 0 : 1
)}
).on("error", (err) => {
    console.log('ERROR: ', err);
    process.exit(1)
}
);