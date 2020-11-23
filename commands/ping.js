module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "Displays the clients latency",
  category: "util",

  run: (client, message) => {
    return client.sendMessage(message.channelID, `🏓 Pong! \`${client.ws.latency}ms\``)
  }
}