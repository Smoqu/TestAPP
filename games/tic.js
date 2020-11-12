const Discord = require("discord.js");

module.exports = function playTicTacToe(msg, key, id) {
  const players = {
    Player1: [msg.author.username, msg.author.id],
    Player2: [msg.mentions.users.get(key).username, id],
  };
  // const username = msg.mentions.users.get(key).username;
};
