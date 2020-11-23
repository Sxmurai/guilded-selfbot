const { Client } = require("guilded.gg.js");
const { join } = require("path");

const { execSync } = require("child_process");

const client = new Client({
  email: "email",
  password: "password",
});

client.commands = new Map();

["events", "commands"].map((h) =>
  require(`./handlers/${h}`)(join(__dirname, h), client)
);

let spotify;

client.login(); // connect to the guilded gateway

setInterval(() => {
  let song = execSync(`playerctl metadata --format '{{artist}} - {{title}}'`)
    .toString()
    .trim();

  if (spotify !== song && !song.includes("Advertisement")) {
    spotify = song;

    console.log(`(Spotify) :: Displaying in status, ${spotify}`);

    client.user.setStatus(`Listening to spotify, ${spotify}`, 90001894);
  }
}, 5000);