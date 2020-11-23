module.exports = {
  name: "messageCreate",
  run: (client, message) => {
    const prefix = "??";

    if (
      !message.content[0].startsWith(prefix) ||
      client.user.id !== message.creator
    ) {
      return;
    }

    const [cmd, ...args] = message.content[0]
      .slice(prefix.length)
      .trim()
      .split(/ +/g);

    const command = [...client.commands.values()].find((c) =>
      [...(c.aliases ?? []), c.name].includes(cmd.toLowerCase())
    );

    if (command) {
      command.run(client, message, args);
      client.deleteMessage(message.channelID, message.id);

      console.log(`(Bot) :: Command ${command.name} was ran.`);
    }
  },
};
