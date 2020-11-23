const { execSync } = require("child_process");

module.exports = {
  name: "pause",
  aliases: ["p"],
  description: "Pauses the music",

  run: (client, message) => {
    if (!execSync(`playerctl -l | grep spotify`)) {
      return client.sendMessage(
        message.channelID,
        "Nothing is currently playing."
      );
    }

    execSync(`playerctl play-pause`);
  },
};
