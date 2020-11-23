module.exports = {
  createProlog: (lines, heading) => {
    const padding = () => {
      let padding = 0;

      for (const line of lines) {
        if (line.name.length > padding) padding = line.name.length;
      }

      return padding;
    };

    let str = "```";

    if (heading) str += `${heading}\n\n`;

    for (const line of lines) {
      if (line.name.length && line.value.length)
        str += `${line.name.padStart(padding(), " ")} :: ${line.value}\n`;
    }

    return (str += "```");
  },

  isPromise: (val) => {
    return (
      val instanceof Promise &&
      typeof val.then === "function" &&
      typeof val.catch === "function"
    );
  },

  sleep: async (time) => new Promise((res) => setTimeout(res, time))
};
