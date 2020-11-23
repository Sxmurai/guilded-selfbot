module.exports = {
  name: "shrug",
  aliases: ["s"],
  description: "Appends a shrug to the end of your message",
  usage: "<text>",

  run: (client, message, args) => {
    client.sendMessage(
      message.channelID,
      `${args.join(" ")}${args.length ? " " : ""}¯\\_(ツ)_/¯`
    );
  }
}