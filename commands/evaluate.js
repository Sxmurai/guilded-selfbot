const { isPromise } = require("../functions");
const { inspect } = require("util");

module.exports = {
  name: "eval",
  aliases: ["evaluate"],
  description: "Evaluates code",
  usage: "[code]",

  run: async (client, message, args) => {
    args = args.join(" ");

    if (!args.length) {
      return client.sendMessage(
        message.channelID,
        `Please provide something to evaluate`
      );
    }

    try {
      const hrtime = process.hrtime();
      let evaluated = eval(args);
      let hr = process.hrtime(hrtime);

      if (isPromise(evaluated)) {
        evaluated = await evaluated;
        hr = process.hrtime(hrtime);
      }

      evaluated = inspect(evaluated, false, 0)
        .substring(0, 1950)
        .replace(new RegExp(`${client.email}|${client.password}`, "gi"), "lol");

      client.sendMessage(
        message.channelID,
        `*execution time ${hr[0] > 0 ? `${hr[0]}s ` : ""}${
          hr[1] / 1000000
        }ms*\n\`\`\`javascript\n${evaluated}\`\`\``
      );
    } catch (error) {
      client.sendMessage(
        message.channelID,
        `Error:\`\`\`javascript\n${error.stack.toString().substring(0, 1950)}\`\`\``
      );
    }
  },
};
