const { execSync } = require("child_process");

module.exports = {
  name: "spotify",
  description: "Displays your current spotify status",

  run: (client, message) => {
    if (!execSync(`playerctl -l | grep spotify`)) {
      return client.sendMessage(
        message.channelID,
        "Nothing is currently playing."
      );
    }

    let data = execSync(
      `playerctl metadata --format 'Title: {{title}}\nArtist: {{artist}}\nAlbum: {{album}}\nURL: {{url}}'`
    ).toString();

    return client.sendMessage(message.channelID, `\`\`\`${data}\`\`\``)
  },
};
