module.exports = {
  name: "reverse",
  aliases: ["rev"],
  description: "Reverses whatever text you input",
  usage: "[text]",

  run: (client, message, args) => {
    args = args.join(" ");

    if (!args.length) {
      return client.sendMessage(message.channelID, "pls args");
    }

    return client.sendMessage(
      message.channelID,
      args.split(/(?:)/u).reverse().join("")
    );
  },
};
