const { createProlog } = require("../functions");

module.exports = {
  name: "help",
  aliases: ["h", "cmds", "commands"],
  description: "Displays all of the commands",
  usage: "<command>",
  category: "info",

  run: (client, message, [command = ""]) => {
    const commands = [...client.commands.values()];

    const trigger = commands.find((cmd) =>
      [...(cmd.aliases ?? []), cmd.name].includes(command.toLowerCase())
    );

    if (!trigger) {
      return client.sendMessage(
        message.channelID,
        createProlog(
          commands.map((cmd) => ({
            name: `??${cmd.name}`,
            value: cmd.description,
          })),
          `Here are the commands available`
        )
      );
    }

    return client.sendMessage(
      message.channelID,
      createProlog(
        Object.entries(trigger).filter(([k]) => k !== "run").map(([k, v]) => ({
          name: k.replace(/(\b\w)/gi, (str) => str.toUpperCase()),
          value: Array.isArray(v) ? v.join(", ") : v ?? "Unknown data"
        })), `Command info on ${trigger.name}`
      )
    );
  },
};
