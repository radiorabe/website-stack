import https from "https";

https.get("https://www.data.rabe.ch/server/health", res => {  
    console.log(`STATUS: ${res.statusCode}`);
    return process.exit(
    res.statusCode === 200 ? 0 : 1
)}
).on("error", (err) => {
    console.log('ERROR: ', err);
    process.exit(1)
}
);