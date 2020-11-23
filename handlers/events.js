const { readdirSync } = require("fs");
const { join } = require("path")

module.exports = (dir, client) => {
  for (const file of readdirSync(dir)) {
    const event = require(join(dir, file));

    client.on(event.name, (...args) => event.run(client, ...args));
  }
}