const { readdirSync } = require("fs");
const { join } = require("path");

module.exports = (dir, client) => {
  for (const file of readdirSync(dir)) {
    const command = require(join(dir, file));

    client.commands.set(command.name, command);
  }
}