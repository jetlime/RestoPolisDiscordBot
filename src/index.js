const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });
const dotenv = require("dotenv")
dotenv.config()
// Token is saved as an environment model in the linux server machine
const token = process.env.DISCORD_TOKEN ;
client.login(token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply("Pong!")
        msg.react('😄');
    }
    
});