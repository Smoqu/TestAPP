const Discord = require("discord.js");
const playTicTacToe = require("./games/tic");
const login = require("./SECRET/login");
const client = new Discord.Client();

client.login(login);

client.on("ready", () => {
  console.log("Ready Freddie");
});

client.on("message", (msg) => {
  const userMentionedKey = Array.from(msg.mentions.users.keys())[0];
  const id = msg.mentions.users.get(userMentionedKey).id;

  if (msg.content === `!play-tic <@!${id}>`) {
    msg.channel.send(
      `:right_facing_fist: Match: <@!${msg.author.id}> vs <@!${id}> :left_facing_fist: `
    );
    playTicTacToe(msg, userMentionedKey, id);
  }
  //   if(msg.content)
  //   if (msg.content == `!play-tic @${msg.mentions.users}`) playTicTacToe(msg);
});
