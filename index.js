const Discord = require('discord.js');
require('dotenv').config();

const bot = new Discord.Client();

const prefix = process.env.PREFIX;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity(`Open Source Projects`, { type: 'STREAMING', url: 'https://twitch.tv/discord' });
});

bot.on('message', message => {

  if (message.author.bot) return;
  if (message.content.indexOf(prefix.length) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.reply('Pong!');
  }
});

bot.login(process.env.TOKEN);