const Discord = require('discord.js');

let bot = new Client({
  fetchAllMembers: true, 

  presence: {
    status: 'online',
    activity: {
      name: `you getting rickrolled`,
      type: 'WATCHING'
    }
  }
});

bot.on('ready', () => {
  console.info(`Nigga why you ran this bot`);
});

bot.on('message', msg => {
    if (msg.content === 'say') {
    msg.reply('goodbye');
    }
});

bot.login('You know the rule and so do I?');
