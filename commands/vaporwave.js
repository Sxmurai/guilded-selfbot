module.exports = {
  name: "vaporwave",
  aliases: ["vapor"],
  description: "Turns your text into a vibe",
  usage: "[text]",

  run: (client, message, args) => {
    args = args.join(" ");

    if (!args.length) {
      return client.sendMessage(message.channelID, "pls args");
    }

    client.sendMessage(
      message.channelID,
      args
        .split("")
        .map((char) => {
          const text = char.charCodeAt(0);
          return text >= 33 && text <= 126
            ? String.fromCharCode(text - 33 + 65281)
            : char;
        })
        .join("")
    );
  },
};
